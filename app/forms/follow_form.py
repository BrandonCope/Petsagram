from flask_wtf import FlaskForm
from wtforms import IntegerField

class FollowForm(FlaskForm):
    target_id = IntegerField("Following")
    user_id = IntegerField("Follower")
