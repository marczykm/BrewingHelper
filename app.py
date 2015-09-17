from flask import Flask
from flask import render_template, url_for, jsonify
import random

app = Flask(__name__)

@app.route("/")
def index():
    style =  url_for('static', filename='style.css')
    javascript =  url_for('static', filename='script.js')
    return render_template('index.html', style=style, javascript=javascript)

@app.route("/api/temperature")
def getCurrentTemperature():
    return jsonify(currentTemperature="{0:.1f}".format(random.uniform(20.0, 30.0)))

@app.route("/api/temperature/<float:temperature>")
def addTemperature(temperature):
    return 'unimplemented'

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
