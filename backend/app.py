from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

@app.route("/api/example", methods=["GET"])
def example():
    return jsonify({"message": "CORS is enabled!"})

@app.route('/api/predict', methods=['POST'])
def predict():
    # Check if the request contains audio data
    if 'audio' not in request.files:
        return jsonify({"error": "No audio file provided"}), 400
    
    audio_file = request.files['audio']
    
    # TODO: Replace with actual audio processing and model inference
    # For now, return a mock prediction
    return jsonify({
        "purchase_likelihood": 0.73,
        "confidence": 0.85,
        "explanations": ["Voice pitch suggests interest", "Keyword 'buy' detected"]
    })

if __name__ == '__main__':
    app.run(debug=True, port=5001) 