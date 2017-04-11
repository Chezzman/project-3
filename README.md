
#Sparta Global Project 3 - WhereTweet

In this project we where tasked to create an app with the following things
- angular
- firebase
- mvc structure
- connect with an external api

I used twitters and googles api to create a basic mvp for geolocating tweets. in this app you can search
twitters api and with the tweet response if they have a geo tag on them the coordinates will be posted to google maps
where a marker will be create.

A working version of what I have so far is deployed to heroku. Were you can play around with the current system.
I advices you to put a polygon coordinates finder in as the twitter api uses 4 coordinates to pin point a tweet.
[heroku](https://sg-project-3.herokuapp.com/#!/login)

To use this app, git clone the repository and then use the following code

```
npm install
```

As I only used npm for this project all dependancies are in the package.JSON

##Firebase

 fire base is in here to test the functionality of authorised access on a page, but can be used to give each user more control down the line.
 Currently it is just used to give the user to access the main features of the app, but a users hall of fame page is something I will implement,  
 were users can favourite tweets and locations.

 ### Author

 [Charles van Oeffelen](https://github.com/Chezzman)
