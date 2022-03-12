from app.models import db,Like

def seed_likes():
    like1 = Like(
        user_id = 1, image_id = 8
    )
    like2 = Like(
        user_id = 2, image_id = 1
    )
    like3 = Like(
        user_id = 3, image_id = 2
    )
    like4 = Like(
        user_id = 1, image_id = 5
    )
    like5 = Like(
        user_id = 2, image_id = 9
    )
    like6 = Like(
        user_id = 3, image_id = 6
    )
    like7 = Like(
        user_id = 1, image_id = 7
    )
    like8 = Like(
        user_id = 2, image_id = 1
    )
    like9 = Like(
        user_id = 3, image_id = 3
    )

    db.session.add(like1)
    db.session.add(like2)
    db.session.add(like3)
    db.session.add(like4)
    db.session.add(like5)
    db.session.add(like6)
    db.session.add(like7)
    db.session.add(like8)
    db.session.add(like9)
    db.session.commit()


def undo_likes():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()