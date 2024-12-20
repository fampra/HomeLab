from flask import Flask, request, jsonify
import os
from flask_cors import CORS
import logging



app = Flask(__name__)
CORS(app)
EMAILS_FILE = 'emails.txt'

# Ensure the emails file exists
if not os.path.exists(EMAILS_FILE):
    with open(EMAILS_FILE, 'w') as f:
        pass

@app.route('/save-email', methods=['POST'])
def save_email():
    data = request.json
    email = data.get('email')

    if not email:
        app.logger.error("Email is required")
        return jsonify({"error": "Email is required"}), 400

    try:
        with open(EMAILS_FILE, 'a') as file:
            file.write(f"{email}\n")
        app.logger.info(f"Email saved: {email}")
        return jsonify({"message": "Email saved successfully"}), 200
    except Exception as e:
        app.logger.error(f"Error saving email: {e}")
        return jsonify({"error": "Failed to save your subscription"}), 500
        
if __name__ == '__main__':
    app.run(port=5000, debug=True)
