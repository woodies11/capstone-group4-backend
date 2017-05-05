from flask import Flask, current_app, request
from flask_cors import CORS, cross_origin
import KaideeDB as db
import recommendator as rcm
from flask import jsonify
from flask_socketio import SocketIO, join_room, leave_room, send, emit
import json

app = Flask(__name__, static_url_path='')
app.config['SECRET_KEY'] = 'secret!'
CORS(app)
socketio = SocketIO(app)

@app.route("/")
def index():
  return app.send_static_file('index.html')

@app.route('/Product/<iid>', methods=['GET'])
def get_Product(iid):
  return db.get_Product(iid)

@app.route('/ProductForCategory/<cid>', methods=['GET'])
def get_product_category(cid):
  result = db.get_product_category(cid)
  return jsonify({'result' : result})

@app.route('/Categories', methods=['GET'])
def get_category_list():
	return db.get_category_list()

@app.route('/SubmitFeedback', methods=['POST'])
def post_submit_feedback():
	if request.json['rating'] <= 3:
		print('Notify Kaidee Stuff!')
	return db.post_submit_feedback(request.json)

@app.route('/Rating/<sid>', methods=['GET'])
def get_avg_rating(sid):
	return db.get_avg_rating(sid)

@app.route('/Track', methods=['POST'])
def post_track():
	return db.post_track_user_data(request.json)

@app.route('/GetRecommendation', methods=['POST'])
def get_recommended_items():
	result = rcm.get_recommendation(request.json['uid'])
	return jsonify({'result' : result})

@app.route('/ChatRooms/<uid>', methods=['get'])
def getChatRooms(uid):
	result = db.getChatRooms(uid)
	return jsonify({'result' : result})

@app.route('/CreateChatRoom', methods=['post'])
def post_create_chat_room():
	return db.post_create_chat_room(request.json)

@app.route('/ChatMessages', methods=['POST'])
def get_Messages():
	return db.get_Messages(request.json)

@app.route('/ProductCount/<cid>', methods=['get'])
def get_product_count(cid):
	return jsonify({'result':db.get_product_count(cid)})

@app.route('/CategoryInfo/<cid>', methods=['get'])
def get_category_info(cid):
	return jsonify({'result':db.get_category_info(cid)})

@app.route('/PostProduct', methods=['post'])
def post_product():
	return jsonify({'resut': db.post_product(request.json)})

# SOCKET down here
@socketio.on('message')
def handle_message(msg):
	roomid = extract_chat_id(msg)
	msg['from_buyer'] = (msg['buyer_uid'] == msg['sender'])
	db.storeMessage(msg);
	emit('msg_receive', msg, room=roomid)


@socketio.on('connected')
def handle_connection(uid):
	print('a user has connected [uid]: '+uid)
	chatrooms = db.getChatRooms(uid);
	for cr in chatrooms:
		roomid = extract_chat_id(cr)
		join_room(roomid)


def extract_chat_id(chat_room):
	return chat_room['buyer_uid']+chat_room['seller_uid']+chat_room['iid']





if __name__ == "__main__":
	socketio.run(app, debug=True, host='0.0.0.0')
