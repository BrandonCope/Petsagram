from app.models import db, Comment


def seed_comments():
    comment1 = Comment(
        content= "I like turrtles too",user_id = 1, image_id = 8
    )
    comment2 = Comment(
        content= "Awww He is sooooooo cute",user_id = 2, image_id = 1
    )
    comment3 = Comment(
        content= "The humans must never know",user_id = 3, image_id = 2
    )
    comment4 = Comment(
        content= "Now they are so big 😢",user_id = 1, image_id = 5
    )
    comment5 = Comment(
        content= "Yea you better run 😣",user_id = 2, image_id = 9
    )
    comment6 = Comment(
        content= "Next thing you'll know, theres 30 of them",user_id = 3, image_id = 6
    )
    comment7 = Comment(
        content= "sho cuuuteee",user_id = 1, image_id = 7
    )
    comment8 = Comment(
        content= "You are a lucky man!",user_id = 2, image_id = 4
    )
    comment9 = Comment(
        content= "Im visiting them tmr!",user_id = 3, image_id =3
    )

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.add(comment5)
    db.session.add(comment6)
    db.session.add(comment7)
    db.session.add(comment8)
    db.session.add(comment9)

    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()