from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField
from wtforms.validators import DataRequired, ValidationError



class EditImageForm(FlaskForm):
    summary = StringField("Summary",validators=[DataRequired()])