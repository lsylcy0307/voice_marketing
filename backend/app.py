from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    # TODO: Replace with actual audio processing and model inference
    # For now, return a mock prediction
    response = jsonify({
        "purchase_likelihood": 0.73,
        "confidence": 0.85,
        "explanations": ["Voice pitch suggests interest", "Keyword 'buy' detected"]
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == '__main__':
    app.run(debug=True) 