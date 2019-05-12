# Kalrav

### _A tweet App_

# Problem
## Twitter isnt the same anymore!

When Twitter started its humble beginnings, it was just a simple app to compose tweets of 140 characters. But as days went by, several new features ( or distractions ) were added to Twitter. With the increasing number of distractions such as Images, Links, Advertisemnts, etc. The vanilla Twitter experience faded. Gone were the witty, sharp and funny tweets.

Kalrav is an attempt to restore Twitter back to it's glory days!

# Note

- This app is currently in development and only the frontend is usable. Contributions are welcome.

- We are using https://jsonplaceholder.typicode.com/ for temporary data and **no** authentication or requests are made to twitter as of now. Please do not fill your orignal twitter  username or passwords at login. Use anything as of now.

- New Tweets are processed and added but dissapear on refresh. Replies are not processed as of yet.

# Run Locally

```
$ git clone https://github.com/xypnox/kalrav.git
$ cd kalrav
$ yarn install
$ yarn start
```

The website will be available at the address `http://localhost:3000/` Unless you don't have another react app running, in which case visit the URL provided by the output of `yarn start`.


# Features

Currently the frontend has the following pages:

## Home

The landing page of the app. This explains the user what our app is (a tweet app) and how to get started. (by pressing the get started button)

## Login

Users can login to our app through this page.
Currently there is no database so there is no authentication. However the login state of the user is stored during that session unless the user reloads the page.

## Feed

The main dashboard/app is the Feed. Users can either tweet from this page or just view the timeline of tweets.

## About

An about us page explaining about, you guessed it, us.

# Components

The Components in this React App are:

These are the main components and are rendered through routing:

## Home

The home page component.

It uses _Features_ and _Footer_ Components.

## Login

The Login page component. It has a form and accepts username and password as inputs and logs in users. After login they see the feed.

It uses _Navbar_ and _Footer_ Components.

## About

The About page component.

It uses _Navbar_ and _Footer_ Components.

## Feed

The Feed!

There are two ways a user can interact with the feed. Use the _TweetBtn_ Component to compose and Tweet the tweet or Browser the tweets through the _TweetFeed_ Component.

---

These are components used within the main components:

## Features

This component is used for the features section of the Homepage.

## Navbar

Navbar component is used to display the navbar wherever necessary. It accepts user as a prop to validate whether a user is logged in and then shows links accordingly.

## Footer

Footer Component displays the company name and useful links at the bottom.

## TweetBtn

This is component consists of a form that you can use to compose new tweets. A new tweet is currently displayed whenever composed from the top TweetBtn of Feed. However the replies to individual tweets are not displayed yet.

## TweetFeed

This component shows the tweets. The Tweets are currently using mock data from https://jsonplaceholder.typicode.com/posts and no authentication is done to twitter yet.

It uses _Tweet_ component to display tweets.

## Tweet

The Tweet component. The building block and the primary element of the site!

The tweet component displays author and tweet's content as well as buttons to like, retweet and reply. Both like and retweet have states that display different color when the state changes on pressing them.

Currently we display a _TweetBtn_ component when the user replies to a tweet but we do not process that reply so it is not shown and is lost.


---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


