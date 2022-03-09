from app.models.db import db
from sqlalchemy import ForeignKey

class Like(db.Model):
    __tablename__= 'likes'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    image_id = db.Column(db.Integer, db.ForeignKey("images.id"), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, nullable=False, server_default=db.func.now(), server_onupdate=db.func.now())

    user = db.relationship("User", back_populates="likes")
    image = db.relationship("Image", back_populates="likes")

    def to_dict(self):
        return {
            'id': self.id,
            'image_id': self.image_id,
            'user_id': self.user_id,
            'username': self.user.username
        }
