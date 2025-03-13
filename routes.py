from flask import Blueprint, request, jsonify
from models import db, User, Score
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()
routes = Blueprint("routes", __name__)

@routes.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    username = data["username"]
    password = bcrypt.generate_password_hash(data["password"]).decode("utf-8")

    if User.query.filter_by(username=username).first():
        return jsonify({"error": "User already exists"}), 400

    user = User(username=username, password=password)
    db.session.add(user)
    db.session.commit()

    return jsonify({"message": "User registered successfully"}), 201

@routes.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    user = User.query.filter_by(username=data["username"]).first()

    if user and bcrypt.check_password_hash(user.password, data["password"]):
        return jsonify({"message": "Login successful"}), 200
    return jsonify({"error": "Invalid credentials"}), 401

@routes.route("/submit-score", methods=["POST"])
def submit_score():
    data = request.get_json()
    user = User.query.filter_by(username=data["username"]).first()

    if not user:
        return jsonify({"error": "User not found"}), 404

    new_score = Score(user_id=user.id, moves=data["moves"], time=data["time"])
    db.session.add(new_score)
    db.session.commit()

    return jsonify({"message": "Score saved successfully"}), 201
