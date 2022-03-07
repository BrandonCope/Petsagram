from flask import Blueprint, jsonify
from app.models import Image

image_routes = Blueprint("images", __name__)

@image_routes.route('/')
def get_images():
    images = Image.query.all()
    return jsonify(
        image.to_dict() for image in images
    )
