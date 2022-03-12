from app.models import db, Comment


def undo_comments():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()