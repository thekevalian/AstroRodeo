from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route("/api/hello")
def hello():
    return jsonify(message="Hello from Flask!")

@app.route("/api/save-counter", methods=["POST"])
def save_counter():
    data = request.get_json()
    print("Counter value:", data["value"])
    return jsonify(success=True)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
