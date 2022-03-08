from flask import Blueprint, jsonify, redirect, request
from flask_login import current_user, login_required
from app.models import db,Image
from app.forms import ImageForm,EditImageForm
from app.aws_config import (
    upload_file_to_s3, allowed_file, get_unique_filename)

image_routes = Blueprint("images", __name__)

@image_routes.route('/')
def get_images():
    images = Image.query.all()
    return jsonify(
        [image.to_dict() for image in images]
    )

@image_routes.route('/', methods=["POST"])
@login_required
def post_images():
    # print(request.files["image"])
    if "image" not in request.files:
        print("Hit First Error")
        return {"errors": "image required"}, 400

    image = request.files["image"]

    if not allowed_file(image.filename):
        print("hit second error")
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)


    if "url" not in upload:
        print("hit third error")
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]
    # flask_login allows us to get the current user from the request

    form = ImageForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_image = Image(
            # image = form.data["image"],
            # summary = form.data["summary"],
            # user_id = form.data["user_id"]
        )
        form.populate_obj(new_image)
        new_image.image=url

        db.session.add(new_image)
        db.session.commit()
        return new_image.to_dict()
    else:
        return "Errors"

@image_routes.route('/<int:id>', methods=['PUT'])
def edit_image(id):
    form = EditImageForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        edit_image = Image.query.get(id)
        form.populate_obj(edit_image)

        db.session.commit()
        print('......', edit_image.to_dict())
        return edit_image.to_dict()
    else:
        return "Errors"

@image_routes.route('/<int:id>', methods=['DELETE'])
def delete_image(id):
    delete_image = Image.query.get(id)
    db.session.delete(delete_image)
    db.session.commit()
    return { 'message': "Success" }
