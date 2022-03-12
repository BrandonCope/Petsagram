# Petsagram

Petsagram is a clone of Instagram but made for sharing and interacting with people's pictures of pets! It was built with **Flask and React.js**.

Share your pets now on [Petsagram](https://petsagram-app.herokuapp.com/)!

## Screenshots

Welcome:

Home:

User's Profile:


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

**Technologies Used**

 - React.js
 - Python
 - Flask
 - Heroku
 - Docker
 - PostgreSQL
