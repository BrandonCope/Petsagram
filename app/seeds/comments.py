from app.models import db, Comment


def seed_comments():
    comment1 = Comment(
        content= " I like turrtles too",user_id = 1, image_id = 8
    )

    db.session.add(comment1)
    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()