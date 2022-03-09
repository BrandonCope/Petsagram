from app.models.db import db

follows = db.Table(
    'follows',
    db.Column('target_id', db.Integer, db.ForeignKey('users.id')),
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'))
)

