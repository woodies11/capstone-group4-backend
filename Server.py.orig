from flask import Flask, current_app
from flask_cors import CORS, cross_origin
import KaideeDB as db

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
  return current_app.send_static_file('index.html')

@app.route('/Product/<iid>', methods=['GET'])
def get_Product(iid):
  return db.get_Product(iid)

@app.route("/sql")
def select():
  return jsonify(db.selectAll())

if __name__ == "__main__":
  app.run(debug=True)
