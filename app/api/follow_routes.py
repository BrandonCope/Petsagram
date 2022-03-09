from crypt import methods
from sys import builtin_module_names
from flask import Blueprint, jsonify, redirect, request
from flask_login import current_user, login_required
from itsdangerous import json
from app.models import db, User, follows
from app.forms import FollowForm

follow_routes = Blueprint("follows", __name__)

@follow_routes.route('/')
def get_all_follows():
    follows = User.query.all()
    return jsonify(
        [follow.to_dict_follow() for follow in follows]
    )

@follow_routes.route('/<int:id>')
def get_follows(id):
    follows = User.query.get(id)
    return follows.to_dict_follow()

@follow_routes.route('/', methods=['POST'])
def post_follows():
    form = FollowForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():

        user = User.query.get(form.data['user_id'])
        target = User.query.get(form.data['target_id'])
        print("user target ===================  = = = = == = = == =",target)

        user.followings.append(target)

        db.session.add(target)
        db.session.commit()

        return user.to_dict_follow()

@follow_routes.route('/', methods=['DELETE'])
def delete_follows():
    form = FollowForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():

        delete_follow = User.query.get(form.data['target_id'])
        user = User.query.get(form.data['user_id'])

        user.followings.remove(delete_follow)

        db.session.commit()

        return user.to_dict_follow()
