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
        return redirect("/api/images/")
    else:
        return "Errors"