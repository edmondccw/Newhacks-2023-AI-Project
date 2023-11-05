from flask import Blueprint, redirect, url_for, request, jsonify
from flask_login import login_user, logout_user, login_required, current_user
from werkzeug.security import generate_password_hash, check_password_hash
from ..models.users import User
from .. import db

auth = Blueprint("auth", __name__)


# @auth.app_context_processor
# def inject_user():
#     return dict(user=current_user)


@auth.post("/login")
def login():
    data = request.get_json()
    username = data["username"]
    password = data["password"]

    user = User.query.filter_by(username=username).first()
    if user and check_password_hash(user.password, password):
        # If authentication is successful
        login_user(user, remember=True)
        print("Log in success!")
        return jsonify({'message': 'Login successful'})
    else:
        return jsonify({'error': 'Invalid username or password'}), 401


@auth.post("/sign-up")
def sign_up():
    data = request.get_json()

    username = data["username"]
    email = data["email"]
    password1 = data["password1"]
    password2 = data["password2"]

    email_exists = User.query.filter_by(email=email).first()
    username_exists = User.query.filter_by(username=username).first()
    if email_exists:
        return jsonify({'error': 'Email or Username is already in use'}), 400
    elif username_exists:
        return jsonify({'error': 'Email or Username is already in use'}), 400
    elif password1 != password2:
        return jsonify({'error': "Passwords don't match"}), 400
    elif len(username) < 3:
        return jsonify({'error': 'Username must be at least 3 characters long'}), 400
    elif len(password1) < 6:
        return jsonify({'error': 'Password must be at least 6 characters long'}), 400
    else:
        new_user = User(username=username, email=email, password=generate_password_hash(
            password1, method="scrypt"))
        db.session.add(new_user)
        db.session.commit()
        login_user(new_user, remember=True)
        print("Sign up success!")
        return jsonify({'message': 'Signup successful'}), 201


@login_required
@auth.route("/logout")
def logout():
    # logout_user to clear the user's session
    logout_user()
    print("Log out success!")
    return jsonify({'message': 'Logout successful'})


@auth.route('/is_authenticated', methods=['GET'])
def is_authenticated():
    if current_user.is_authenticated:
        user_data = {
            'username': current_user.username,
            'email': current_user.email
        }
        return jsonify(user_data)
    return jsonify({'error': 'User is not authenticated'}), 401