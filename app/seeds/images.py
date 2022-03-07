from datetime import datetime
from app.models import db, Image


# Adds a demo user, you can add other users here if you want
def seed_images():
    # demo = User(
    #     username='Demo', email='demo@aa.io', password='password', created_at = datetime.now(),updated_at = datetime.now())
    # marnie = User(
    #     username='marnie', email='marnie@aa.io', password='password', created_at = datetime.now(),updated_at = datetime.now() )
    # bobbie = User(
    #     username='bobbie', email='bobbie@aa.io', password='password', created_at = datetime.now(),updated_at = datetime.now())

    image1 = Image(
        image = "https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg",
        summary = "Just here at Google, Its ya boy",
        user_id = 2 
        # created_at = datetime.now(),
        # updated_at = datetime.now()
    )
    
    db.session.add(image1)
    # db.session.add(marnie)
    # db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()