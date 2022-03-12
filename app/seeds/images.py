from datetime import datetime
from app.models import db, Image


def seed_images():


    image1 = Image(
        image = "https://theuniversityanimalclinic.com/wp-content/uploads/2020/12/black-sable-ferret-e1609797786824.jpg",
        summary = "My baby is now 2 years old, I'm so happy to have this little guy in my life.",
        user_id = 1 
    )
    image2 = Image(
        image = "https://blogs.cdc.gov/wp-content/uploads/sites/6/2020/05/golden_retiver_cat_cropped.jpg",
        summary = "Fluffy wont let us know he really loves her so this picture is a rare occasion",
        user_id = 1 
    )
    image3 = Image(
        image = "https://lafeber.com/pet-birds/wp-content/uploads/2020/04/gamaliel-troubleson-u9PsLITXMCQ-unsplash-e1587001975887.jpg",
        summary = "Here at the save a bird foundation, there are parrots up for adoption!",
        user_id = 1 
    )
    image4 = Image(
        image = "https://imageserver.petsbest.com/website/home_new/pets-best-pet-insurance.jpg",
        summary = "He is cute, I guess maybe she is too",
        user_id = 2 
    )
    image5 = Image(
        image = "https://www.heart.org/-/media/Healthy-Living-Images/Healthy-Lifestyle/Pets/puppy-kitten-heart.jpg",
        summary = "Both when they were 5 months old 😭",
        user_id = 2 
    )
    image6 = Image(
        image = "https://cdn.vox-cdn.com/thumbor/vi2i-zDzp5NXcdC_ryLPOdjCUHs=/0x0:960x766/1200x800/filters:focal(364x241:516x393)/cdn.vox-cdn.com/uploads/chorus_image/image/62205839/28168164_2070666143217709_4198638787596128369_n.0.jpg",
        summary = "I have a serious problem",
        user_id = 2 
    )
    image7 = Image(
        image = "https://www.gannett-cdn.com/presto/2021/09/21/PDTF/b4c8ca68-f024-43fa-a084-3ef29eada728-PetResorts_091621_04_MW.jpg?crop=2399,1350,x0,y86&width=2399&height=1350&format=pjpg&auto=webp",
        summary = "😂",
        user_id = 3 
    )
    image8 = Image(
        image = "https://s3-us-west-2.amazonaws.com/s3-wagtail.biolgicaldiversity.org/images/RSBog_turtle_Glyptemys_muhlenbergii_by_Natha.max-800x800.jpg",
        summary = "I like tuuuurtles",
        user_id = 3 
    )
    image9 = Image(
        image = "https://upload.wikimedia.org/wikipedia/commons/4/4d/12_-_The_Mystical_King_Cobra_and_Coffee_Forests.jpg",
        summary = "Why is he loooking at me this way?",
        user_id = 3 
    )
    
    db.session.add(image1)
    db.session.add(image2)
    db.session.add(image3)
    db.session.add(image4)
    db.session.add(image5)
    db.session.add(image6)
    db.session.add(image7)
    db.session.add(image8)
    db.session.add(image9)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()