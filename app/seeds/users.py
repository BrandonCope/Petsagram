from datetime import datetime
from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password' )
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password')
    vern = User(
        username='verncashchao', email='vern@aa.io', password='password')
    david = User(
        username='DPM', email='david@aa.io', password='password')
    brandon = User(
        username='WhatupB', email='brandon@aa.io', password='password')
    vu = User(
        username='vuisbetterthanreact', email='vu@aa.io', password='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(vern)
    db.session.add(david)
    db.session.add(brandon)
    db.session.add(vu)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
