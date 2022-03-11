from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField
from wtforms.validators import DataRequired, ValidationError

class CommentForm(FlaskForm):
    content = StringField("Comment", validators=[DataRequired()])
    user_id = IntegerField("user_id", validators=[DataRequired()])
    image_id = IntegerField("image_id", validators=[DataRequired()])
