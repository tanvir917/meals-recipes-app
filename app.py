from flask import Flask
from redis import Redis, RedisError
import os
import socket

# Connect to Redis
redis = Redis(host="redis", db=0, socket_connect_timeout=2, socket_timeout=2)

app = Flask(__name__)

@app.route('/tanvir/<int:number>/<int:number1>')
def default(number,number1):
   try:
	result = number/number1
	return 'Hello Tanvir: %d' % result
   except ZeroDivisionError:
     return 'Division By Zero Error. Denominator can not be zero.'


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)
