from crypt import methods
from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Comment
from app.forms import CommentForm


comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/')
def get_comments():
    comments = Comment.query.all()
    return jsonify(
        [comment.to_dict() for comment in comments]
    )

@comment_routes.route('/', methods=['POST'])
@login_required
def post_comments():
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_comment = Comment()

        form.populate_obj(new_comment)

        db.session.add(new_comment)
        db.session.commit()

        return new_comment.to_dict()
    else:
        return "Errors"

@comment_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_comment(id):
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        edit_comment = Comment.query.get(id)

        form.populate_obj(edit_comment)
        db.session.commit()

        return edit_comment.to_dict()
    else:
        return "Errors"

@comment_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_comment(id):
    delete_comment = Comment.query.get(id)
    db.session.delete(delete_comment)
    db.session.commit()
    return { 'message': "Success" }

