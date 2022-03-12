from app.models import db, User

def seed_follows():
    user1 = User.query.get(1)
    user2 = User.query.get(2)
    user3 = User.query.get(3)
    user4 = User.query.get(4)
    user5 = User.query.get(5)
    user6 = User.query.get(6)
    user7 = User.query.get(7)


    user1.followings.append(user2)
    user1.followings.append(user3)
    user1.followings.append(user4)
    user1.followings.append(user5)
    user1.followings.append(user6)
    user1.followings.append(user7)


    user4.followings.append(user5)
    user4.followings.append(user6)
    user4.followings.append(user7)
    user5.followings.append(user4)
    user5.followings.append(user6)
    user5.followings.append(user7)
    user6.followings.append(user4)
    user6.followings.append(user5)
    user6.followings.append(user7)
    user7.followings.append(user4)
    user7.followings.append(user5)
    user7.followings.append(user6)
    db.session.commit()

def undo_follows():
    db.session.execute('TRUNCATE follows RESTART IDENTITY CASCADE;')
    db.session.commit()