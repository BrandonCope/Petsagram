from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError,EqualTo
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')




class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired(), username_exists])
    email = StringField('email', validators=[DataRequired(), Email("Email must be a valid email"), user_exists])
    password = StringField('password', validators=[DataRequired(),EqualTo('confirm_password',message ="Passwords must match")])
    confirm_password = StringField('password',validators=[DataRequired()])

    # def validate_passwords(self,password,confirm_password):
    #     if password != confirm_password:
    #         raise ValidationError('passwords must match')
