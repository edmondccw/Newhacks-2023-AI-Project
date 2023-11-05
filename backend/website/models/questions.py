from .. import db
from datetime import datetime


class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question_title = db.Column(db.String(255))
    question_prompt = db.Column(db.String(255))
    question_code = db.Column(db.Text)
    answer_code = db.Column(db.Text)
    answer_explanation = db.Column(db.Text)
    date_created = db.Column(db.DateTime, default=datetime.now())
    user_id = db.Column(db.Integer, db.ForeignKey(
        "user.id", ondelete="CASCADE"), nullable=False)
