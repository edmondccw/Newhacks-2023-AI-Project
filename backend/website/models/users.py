from .. import db
from flask_login import UserMixin
from datetime import datetime

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True)
    email = db.Column(db.String(120), unique=True)
    role = db.Column(db.String(10))
    password = db.Column(db.String(80))
    date_created = db.Column(db.DateTime, default = datetime.now())
    questions = db.relationship("Question", backref="user", passive_deletes=True)