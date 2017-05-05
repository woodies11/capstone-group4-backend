import KaideeDB as db
import random
import logging as lg

logger = lg.getLogger('rcmd: - ')
# lg.basicConfig(level=lg.DEBUG)

get_product_for_cid_with_rating_condition = '''
SELECT * FROM
	(SELECT i.iid, i.name, i.description, 
	    i.price, c.cid, c.name as cname, a.address, 
	    a.city, a.province, u.first_name, u.last_name, 
	    u.uid as seller_uid, u.phone, i.since, IFNULL(f.rating, 0) as rating
	FROM item_listing i 
	LEFT JOIN categories c ON i.cid=c.cid 
	LEFT JOIN addresses a ON i.seller_uid=a.uid 
	LEFT JOIN users u ON i.seller_uid=u.uid
	LEFT JOIN (
		/* 
			Join the feedback table with the filtered list of seller_uid
			so we are left with the rating data of those that has enough rating
			to calculate a meaningful average.
		*/
		SELECT fb.seller_uid, AVG(fb.rating) as rating FROM feedbacks fb INNER JOIN 
			-- get only those with rating_count greater than 5
			(SELECT * FROM 
				-- count the total number of feedbacks a user has received
				(SELECT seller_uid, COUNT(seller_uid) as count FROM feedbacks GROUP BY seller_uid) as sc 
				WHERE count > 5
			) as fc -- end subquery to select only count > 5
			ON fb.seller_uid = fc.seller_uid -- end subquery to JOIN with feedbacks
			GROUP BY fb.seller_uid
		) as f ON i.seller_uid = f.seller_uid -- end subquery to JOIN with the rest of product info
	WHERE c.cid = {0}
	) as ptwr -- Products Table with Rating
WHERE ptwr.rating {1}
'''

def print_choice(choice):
	logger.debug('-'*40)
	if choice is not None:
		print_product(choice)
	else:
		logger.debug('Choice is null')
	logger.debug('-'*40)
	logger.debug('\n\r')

def print_product(product):
	logger.debug('Product ID: {} Name: {} | Cid: {} | Rating: {}'.format(product['iid'], product['name'], product['cid'], product['rating']))

def print_products(products):
	logger.debug('='*40)
	for p in products:
		print_product(p)
	logger.debug('='*40)
	logger.debug('\n\r')

def get_recommendation(uid):

	'''
		random from a 'pool' of object what is not already in 'control'
		return None if cannot find one
	'''
	def get_unique_random(control, pool):
		# loop until 
		while True:
			# if exhausted of choices, return None
			if len(pool) <= 0:
				return None

			# re-random
			choice = random.choice(pool)

			# remove the choice from pool
			try:
				pool.remove(choice)
			except ValueError:
				pass # or scream: thing not in some_list!
			except AttributeError:
				pass # call security, some_list not quacking like a list!

			# return the choice if unique, otherwise keep looping
			if (choice not in control):
				return choice




	recommendations = []

	# --------------------------------------------
	#  From User Top 5
	# --------------------------------------------
	# choose more from higher view count category
	weight = 4;
	top5 = db.get_top_five_categories(uid)
	logger.debug('*'* 120)
	logger.debug('Selecting from User Preferences')
	logger.debug('*'*120)
	logger.debug('\n\r')
	for cat in top5:
		logger.debug('x'* 100)
		logger.debug('for categories '+cat['cid'])
		logger.debug('x'*100)
		logger.debug('\n\r')

		logger.debug('Selecting from user with rating = 0')
		logger.debug('|'*60)

		# this ensure we have at least one user with 0 rating for each category
		products = db.queryDB2(get_product_for_cid_with_rating_condition.format(cat['cid'], '= 0'))
		db.resolveProducts(products)
		choice = get_unique_random(recommendations, products)

		logger.debug('Choice:')
		print_choice(choice)

		if choice is not None:
			recommendations.append(choice)

		logger.debug('Recommendations:')
		print_products(recommendations)

		logger.debug('Selecting from user with rating > 0')
		logger.debug('|'*50)

		products = db.queryDB2(get_product_for_cid_with_rating_condition.format(cat['cid'], '> 0'))
		db.resolveProducts(products)

		logger.debug('Products:')
		print_products(products)

		for x in range(0,weight):
			if len(products) <= 0:
				break
			choice = random.choice(products)
			recommendations.append(choice)
			# remove the choosen item so the item
			# cannot appear twice in the same list
			products.remove(choice)

		logger.debug('Recommendations:')
		print_products(recommendations)

		weight -= 1

	# --------------------------------------------
	#  Fill with Global Top 5
	# --------------------------------------------
	# choose more from higher view count category
	if len(recommendations) < 10:
		weight = 5;
		global_top5 = db.get_global_top_five()
		for cat in global_top5:
			products = db.get_product_category(cat['cid'])
			for x in range(0,weight):
				choice = get_unique_random(recommendations, products)
				if choice is None:
					break
				recommendations.append(choice)
			weight -= 1

	# --------------------------------------------
	#  Fill with Random
	# --------------------------------------------
	# fill remaining space with random products
	# note that 'if' were used instead of 'while'
	# to prevent possible infinite loop from
	# exhaustion of chioce in the entire system
	if len(recommendations) < 10:
		products = db.get_random_product()
		for x in range(0,len(recommendations)):
			choice = get_unique_random(recommendations, products)
			if choice is None:
				break
			recommendations.append(choice)
		
	return recommendations;