# Petsagram

Petsagram is a clone of Instagram but made for sharing and interacting with people's pictures of pets! It was built with **Flask and React.js**.

Share your pets now on [Petsagram](https://petsagram-app.herokuapp.com/)!

## [Feature List](https://github.com/BrandonCope/Petsagram/wiki/MVP-Feature-List)

List of features needed for the Minimum Viable Product (MVP) and its CRUD features

## [User Stories](https://github.com/BrandonCope/Petsagram/wiki/User-Stories)

List of user stories for each MVP

## [Database Schema](https://github.com/BrandonCope/Petsagram/wiki/Database-Schema)

Schema of how our PostgreSQL database will be set up

## [API Documentation](https://github.com/BrandonCope/Petsagram/wiki/API-Documentation)

API routes that will be used by our backend server

## [Frontend Routes](https://github.com/BrandonCope/Petsagram/wiki/Frontend-Routes)

Frontend Routes that the client can access while interacting with Petsagram app

## [Redux State Shape](https://github.com/BrandonCope/Petsagram/wiki/Redux-State-Shape)

Petsagrams's redux state shape for our react frontend

## Screenshots

### Welcome:

![image](https://user-images.githubusercontent.com/91238232/158043040-69ab2095-ad5b-4b14-9419-18c3a7a4b31e.png)

### Home: 

![image](https://user-images.githubusercontent.com/91238232/158043071-b3c2b3e9-5e0e-4d1a-a4dd-e5f0ef244aa5.png)

### User's Profile: 

![image](https://user-images.githubusercontent.com/91238232/158043100-411260e6-407b-4ed3-a027-7e16ca804ee9.png)


## Technical Details
Petsagram users can follow other users to view that user's posts on their Following Feed. By clicking between Public Feed and Following Feed, the contents are filtered dynamically.

Following Feed is made possible by  

    @follow_routes.route('/', methods=['POST'])
    def  post_follows():
	    form  =  FollowForm()
	    form['csrf_token'].data =  request.cookies['csrf_token']
	    if  form.validate_on_submit():
	    
		    user  =  User.query.get(form.data['user_id'])
		    target  = User.query.get(form.data['target_id'])
		    
		    user.followings.append(target)
		    
		    db.session.commit()
		    
		    return  user.to_dict_follow()
With this many-to-many relationship, querying specific users into the Following Feed with a simple Follow button is seamless and will show up on their Following List on their User Profile.

**Features**

 - Create/ delete/ edit posts
 - Like/ Unlike posts
 - See list of users who liked the post
 - Add/ edit/ delete comments on posts
 - View posts on Following Feed
 - Follow users on Public Feed
 - Unfollow users
 - See lists of followers and followings on User Profile
 - Can search for a user of their username

**Possible Features**

 - #Hash-tags
 - Direct messaging with websockets

**Technologies Used**

 - React.js
 - Python
 - Flask
 - Heroku
 - Docker
 - PostgreSQL
