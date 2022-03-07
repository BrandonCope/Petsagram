from app.models.db import db
from sqlalchemy import ForeignKey

class Image(db.Model):
    __tablename__='images'

    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String, nullable=False)
    summary = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, nullable=False, server_default=db.func.now(), server_onupdate=db.func.now())

    user = db.relationship("User", back_populates="images")
    comments = db.relationship('Comment', back_populates='image')
    likes = db.relationship('Like', back_populates='image')

    def to_dict(self):
        return {
            'id': self.id,
            'image': self.image,
            'summary': self.summary,
            'user_id': self.user_id,
            'username': self.user.username
        }