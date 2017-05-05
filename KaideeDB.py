from flask import jsonify
from flask import request
import mysql.connector
from mysql.connector import errorcode
import mysql_config
import pprint as pp

#app = Flask(__name__)

# [IMPORTANT!!!!!!!]
# FIXME: @Deprecated, need to safely remove
def queryDB(query):
  cnx = mysql.connector.connect(**mysql_config.config)
  cursor = cnx.cursor(dictionary=True)
  cursor.execute(query)
  result = dict()
  url = []
  #row = dict(zip(cursor.column_names, cursor.fetchone()))
  for row in cursor:
    result.update(row)
    url.append(row["url"])
  result.update({"url":url})
  cursor.close()
  cnx.close()
  return result

def queryDB2(query):
  cnx = mysql.connector.connect(**mysql_config.config)
  cursor = cnx.cursor(dictionary=True)
  cursor.execute(query)
  result = cursor.fetchall()
  cursor.close()
  cnx.close()
  return result

# FIXME: might be able to optimize this so no need to do another loop to extract the data
def resolveImg(result):
  for product in result:
    product['url'] = []
    r = queryDB2('SELECT DISTINCT url FROM product_images_relation pir NATURAL JOIN product_images pi WHERE pir.iid = "{}"'.format(product['iid']))
    for row in r:
      product['url'].append(row['url'])

def resolveRating(products):
  for product in products:
    r = queryDB2('''
      SELECT AVG(rating) as avg_rating, COUNT(rating) as count FROM feedbacks WHERE seller_uid = '{}'; 
      '''.format(product['seller_uid']))
    for row in r:
      # only start showing rating info once 5 
      # or more rating is collected
      if (row['count'] > 5):
        product['rating'] = row['avg_rating']
        product['rating_count'] = row['count']
      else:
        product['rating'] = 0
        product['rating_count'] = 0
        
def resolveProducts(products):
  resolveImg(products)
  resolveRating(products)

def insertDB(query):
  cnx = mysql.connector.connect(**mysql_config.config)
  cursor = cnx.cursor()
  cursor.execute(query)
  result = []
  cnx.commit() 
  cursor.close()
  cnx.close()
  return result

# example localhost:5000/ChatRooms/123
#@app.route('/ChatRooms', methods=['POST'])
def getChatRooms(uid):
  # those that we are the buyer
  query = ('''
      SELECT 
      cr.buyer_uid, 
      cr.seller_uid, 
      cr.iid, s.sid as service_id, 
      name as service_name, 
      CONCAT(u.first_name, ' ', u.last_name) as sender_name,
      u.profile_pic,
      (SELECT message FROM chat_messages cm WHERE 
        cr.seller_uid = cm.seller_uid 
        AND cr.buyer_uid = cm.buyer_uid 
        AND cr.iid = cm.iid 
        ORDER BY cm.timestamp DESC LIMIT 1) 
      as msg
      FROM chat_rooms cr
      LEFT JOIN service_offering so ON cr.seller_uid = so.seller_uid AND cr.buyer_uid = so.buyer_uid AND cr.iid = so.iid
      LEFT JOIN services s ON so.sid = s.sid
      LEFT JOIN users u ON u.uid = cr.seller_uid
      WHERE cr.buyer_uid = '{0}';
    '''.format(uid))
  result = queryDB2(query)

  # those that we are the seller
  query = ('''
      SELECT 
      cr.buyer_uid, 
      cr.seller_uid, 
      cr.iid, s.sid as service_id, 
      name as service_name, 
      CONCAT(u.first_name, ' ', u.last_name) as sender_name,
      u.profile_pic,
      (SELECT message FROM chat_messages cm WHERE 
        cr.seller_uid = cm.seller_uid 
        AND cr.buyer_uid = cm.buyer_uid 
        AND cr.iid = cm.iid 
        ORDER BY cm.timestamp DESC LIMIT 1) 
      as msg
      FROM chat_rooms cr
      LEFT JOIN service_offering so ON cr.seller_uid = so.seller_uid AND cr.buyer_uid = so.buyer_uid AND cr.iid = so.iid
      LEFT JOIN services s ON so.sid = s.sid
      LEFT JOIN users u ON u.uid = cr.buyer_uid
      WHERE cr.seller_uid = '{0}';
    '''.format(uid))

  result += queryDB2(query)

  return result

  
 
# example localhost:5000/Messages/123
#@app.route('/ChatMessages', methods=['POST'])
def get_Messages(json):
  query = ("SELECT * FROM chat_messages cm WHERE cm.buyer_uid = '{}' AND cm.seller_uid = '{}' AND cm.iid = '{}';".format(
    json['buyer_uid'],json['seller_uid'],json['iid']
    ))
  result = queryDB2(query)

  # set sender uid for frontend
  for msg in result:
    if msg['from_buyer']:
      msg['sender'] = msg['buyer_uid']
    else:
      msg['sender'] = msg['seller_uid']

  return jsonify({'result' : result})

# will finish 
# LOL
#@app.route('/Messages/', methods=['POST'])
def post_Messages():
  query = ("INSERT INTO ChatMessages")
  result = insertDB(query)
  return jsonify({'result' : result})  

# send uid return uid,first_name,last_name,phone,email,profile_pic
# example localhost:5000/Users/123
#@app.route('/Users/<uid>', methods=['GET'])
def get_Users(uid):
  query = ("SELECT * FROM Users WHERE uid =\'" + uid + "\'")
  result = queryDB(query)
  return jsonify({'result' : result})

# will need to change to POST will make it by the end of the week
# will fix later don't know how to autogen fid 
#@app.route('/Feedback/<buyer_uid>/<seller_uid>/<rating>/<comments>/<iid>', methods=['GET'])
# ALREADY DONE WAY AT THE BOTTOM!
def post_Feedback(buyer_uid,seller_uid,rating,comments):
  query = ("INSERT INTO Feedback")
  result = insertDB(query)
  return jsonify({'result' : result})

#need to get seller_uid and do another query for more seller information possible for frontend to call getUsers again
#will return  iid, name, description, price, cid, since, seller_uid, product_location
#might need another table to collect product location
#@app.route('/Product/<iid>', methods=['GET'])
def get_Product(iid):
  query = ('''
    SELECT i.iid, i.name, i.description, 
    i.price, c.cid, c.name as cname, a.address, 
    a.city, a.province, u.first_name, u.last_name, 
    u.uid as seller_uid, u.phone, i.since
    FROM item_listing i 
    LEFT JOIN categories c ON i.cid=c.cid 
    LEFT JOIN addresses a ON i.seller_uid=a.uid 
    LEFT JOIN users u ON i.seller_uid=u.uid
    WHERE i.iid="''' + iid +'"')
  result = queryDB2(query)
  resolveImg(result)
  resolveRating(result)
  if(len(result) > 0):
   return jsonify({'result': result[0], 'status': 200})

  return jsonify({'result': {}, 'status': 404})
  
#send iid return iid,img_id,url,name for all of images for that item
#@app.route('/Images/<iid>', methods=['GET'])
def get_Images(iid):
  query = ("SELECT * FROM ProductImages WHERE iid = \'"+ iid +"\'")
  result = queryDB(query)
  return jsonify({'result' : result})

#FIXME: shitty performance code... need to optimize
# @app.route('/ProductForCategory/<cid>', methods=['GET'])
# FIXME: missing images
def get_product_category(cid):
  query = ('''
    SELECT i.iid, i.name, i.description, 
    i.price, c.cid, c.name as cname, a.address, 
    a.city, a.province, u.first_name, u.last_name, 
    u.uid as seller_uid, u.phone, i.since
    FROM item_listing i 
    LEFT JOIN categories c ON i.cid=c.cid 
    LEFT JOIN addresses a ON i.seller_uid=a.uid 
    LEFT JOIN users u ON i.seller_uid=u.uid
    WHERE i.cid= "{}" ORDER BY i.since DESC'''.format(cid))
  result = queryDB2(query)
  resolveImg(result)
  resolveRating(result)
  return result

#need to discuss later
#@app.route('/RecommendedProducts/<uid>', methods=['GET'])
def get_Recommended(uid):
  query = ("")
  result = queryDB(query)
  return jsonify({'result' : result})

# @app.route('/Category', methods=['GET'])
def get_category_list():
  query = ('SELECT * FROM `categories`')
  result = queryDB2(query)
  return jsonify({'result' : result})

# @app.route('/SubmitFeedback', methods=['POST'])
def post_submit_feedback(feedback):
  query = '''
    INSERT INTO `feedbacks`(`fid`, `timestamp`, `rating`, `comment`, `buyer_uid`, `seller_uid`, `iid`) 
    VALUES (UUID(), SYSDATE(), {}, "{}", "{}", "{}", "{}")
  '''.format(feedback['rating'], feedback['comment'], feedback['buyer_uid'], feedback['seller_uid'], feedback['iid'])
  result = insertDB(query)
  return jsonify({'result': 'success'})


def get_avg_rating(sid):
  query = 'SELECT AVG(rating) as avg_rating, COUNT(rating) as count FROM feedbacks WHERE seller_uid = "{}";'.format(sid)
  result = queryDB2(query);
  if(len(result) > 0):
   return jsonify({'result': result[0], 'status': 200})

  return jsonify({'result': {}, 'status': 404})


def post_track_user_data(json):
  # Insert if not already exist, else update to increament count
  query = ('''
    INSERT INTO `views` (`cid`, `uid`, `count`)
    VALUE ('{0}', '{1}', 1) ON DUPLICATE KEY 
    UPDATE `views`.`count` = `views`.`count` + 1
    '''.format(json['cid'], json['uid']))
  insertDB(query)
  return jsonify({'result': 'success'})

def get_random_product():
  query = ('''
    SELECT i.iid, i.name, i.description, 
    i.price, c.cid, c.name as cname, a.address, 
    a.city, a.province, u.first_name, u.last_name, 
    u.uid as seller_uid, u.phone, i.since
    FROM item_listing i 
    LEFT JOIN categories c ON i.cid=c.cid 
    LEFT JOIN addresses a ON i.seller_uid=a.uid 
    LEFT JOIN users u ON i.seller_uid=u.uid
    ORDER BY RAND() LIMIT 10
    ''')
  result = queryDB2(query)
  resolveImg(result)
  resolveRating(result)
  return result

def post_create_chat_room(json):
  query = ('''
    INSERT IGNORE INTO `chat_rooms`(`buyer_uid`, `seller_uid`, `iid`) VALUES ('{}', '{}', '{}');
    '''.format(json['bid'], json['sid'], json['iid']))
  insertDB(query);
  return jsonify({'result' : 'success'}) 

def get_top_five_categories(uid):
  query = ('SELECT cid, count FROM views WHERE uid = "{}" ORDER BY count DESC LIMIT 5;'.format(uid))
  result = queryDB2(query)
  return result

def get_global_top_five():
  query = ('SELECT cid, SUM(count) as count FROM views GROUP BY cid ORDER BY count DESC LIMIT 5;')
  result = queryDB2(query)
  return result

def get_product_count(cid):
  query = ('SELECT COUNT(iid) as count FROM `item_listing` WHERE cid = "{}";'.format(cid))
  result = queryDB2(query)
  return result[0]

def get_category_info(cid):
  query = ('SELECT * FROM `categories` WHERE cid = "{}";'.format(cid))
  result = queryDB2(query)
  return result[0]

def storeMessage(msg):
  query = '''
    INSERT INTO `chat_messages`(`buyer_uid`, `seller_uid`, `iid`, `message`, `flag`, `timestamp`, `from_buyer`) 
    VALUES ('{}', '{}', '{}', '{}', {}, SYSDATE(), {})
  '''.format(msg['buyer_uid'],msg['seller_uid'],msg['iid'],msg['message'],msg['flag'],msg['from_buyer'])
  insertDB(query)

def gen_sql_uuid():
	query = 'SELECT UUID() as uuid'
	result = queryDB2(query)
	return result[0]['uuid']
  
def post_product(product):
	# gen uuid
	uuid = gen_sql_uuid();

	# insert the product
	query = '''
	INSERT INTO `item_listing`(`iid`, `name`, `description`, `price`, `cid`, `since`, `seller_uid`, `product_location`) VALUES
	('{}', '{}', '{}', '{}', '{}', SYSDATE(), '{}', '{}')
	'''.format(
		uuid,
		product['name'],
		product['description'],
		product['price'],
		product['category']['cid'],
		product['seller']['sid'],
		product['location']['province']
	)

	result = insertDB(query);

	# # insert images
	# for img_url in product['_img_urls']:
	# 	qquery = 'INSERT INTO `product_images`(`img_id`, `url`, `name`) VALUES (UUID(), "{}", "images")'.format(img_url)
	# 	insertDB(qquery)

	return result;
