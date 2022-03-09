from flask import Blueprint, jsonify, redirect, request
from flask_login import current_user, login_required
from sqlalchemy import delete
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
    likeData = request.get_json()
    print("LIKEDATA!!!!!!", likeData)
    like.user_id = likeData['user_id']
    like.image_id = likeData['image_id']

    db.session.add(like)
    db.session.commit()
    return like.to_dict()

@like_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_like(id):
    delete_like = Like.query.get(id)
    db.session.delete(delete_like)
    db.session.commit()
    return { 'message': "Success" }
