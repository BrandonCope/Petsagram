from flask import Blueprint, jsonify, redirect,request
from app.models import db,Image
from app.forms import ImageForm

image_routes = Blueprint("images", __name__)

@image_routes.route('/')
def get_images():
    images = Image.query.all()
    return jsonify(
        [image.to_dict() for image in images]
    )

@image_routes.route('/', methods=["POST"])
def post_images():
    form = ImageForm()
    print("--------------------",form.data)
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_image = Image(
            # image = form.data["image"],
            # summary = form.data["summary"],
            # user_id = form.data["user_id"]
        )
        form.populate_obj(new_image)

        db.session.add(new_image)
        db.session.commit()
        return new_image.to_dict()
    else:
        return "Errors"

@image_routes.route('/<int:id>', methods=['PUT'])
def edit_image(id):
    form = ImageForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        edit_image = Image.query.get(id)
        form.populate_obj(edit_image)

        db.session.commit()
        return edit_image.to_dict()
    else:
        return "Errors"

@image_routes.route('/<int:id>', methods=['DELETE'])
def delete_image(id):
    delete_image = Image.query.get(id)
    db.session.delete(delete_image)
    db.session.commit()
    return { 'message': "Success" }
