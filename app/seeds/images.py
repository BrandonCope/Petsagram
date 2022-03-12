from datetime import datetime
from app.models import db, Image


def seed_images():


    image1 = Image(
        image = "https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg",
        summary = "Just here at Google, Its ya boy",
        user_id = 1 
    )
    image2 = Image(
        image = "https://blogs.cdc.gov/wp-content/uploads/sites/6/2020/05/golden_retiver_cat_cropped.jpg",
        summary = "Just here at Google, Its ya boy",
        user_id = 1 
    )
    image3 = Image(
        image = "data:image/jpeg;base64,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",
        summary = "Just here at Google, Its ya boy",
        user_id = 1 
    )
    image4 = Image(
        image = "https://imageserver.petsbest.com/website/home_new/pets-best-pet-insurance.jpg",
        summary = "Just here at Google, Its ya boy",
        user_id = 2 
    )
    image5 = Image(
        image = "https://www.heart.org/-/media/Healthy-Living-Images/Healthy-Lifestyle/Pets/puppy-kitten-heart.jpg",
        summary = "Just here at Google, Its ya boy",
        user_id = 2 
    )
    image6 = Image(
        image = "https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg",
        summary = "Just here at Google, Its ya boy",
        user_id = 2 
    )
    image7 = Image(
        image = "https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg",
        summary = "Just here at Google, Its ya boy",
        user_id = 3 
    )
    image8 = Image(
        image = "https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg",
        summary = "Just here at Google, Its ya boy",
        user_id = 3 
    )
    image9 = Image(
        image = "https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg",
        summary = "Just here at Google, Its ya boy",
        user_id = 3 
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