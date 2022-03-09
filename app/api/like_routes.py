from flask import Blueprint, jsonify, redirect, request
from flask_login import current_user, login_required
from app.models import db, Like

like_routes = Blueprint('likes', __name__)

@like_routes.route('/')
def get_likes():
    likes = Like.query.all()
    return jsonify(
        [like.to_dict() for like in likes]
    )

@like_routes.route('/', methods=['POST'])
@login_required
def post_like():
    like = Like()
