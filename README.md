# Kalrav

### _A tweet App_

# Problem
## Twitter isnt the same anymore!

When Twitter started its humble beginnings, it was just a simple app to compose tweets of 140 characters. But as days went by, several new features ( or distractions ) were added to Twitter. With the increasing number of distractions such as Images, Links, Advertisemnts, etc. The vanilla Twitter experience faded. Gone were the witty, sharp and funny tweets.

Kalrav is an attempt to restore Twitter back to it's glory days!

# Note

This app is currently in development and only the frontend is usable. Contributions are welcome.


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

## Login

## About

## Feed

These are components used within the main components:

## Features

This component is used for the features section of the Homepage.

## Navbar

Navbar component is used to display the navbar wherever necessary. It accepts user as a prop to validate whether a user is logged in and then shows links accordingly

## Footer

## TweetBtn

## TweetFeed

## Tweet



---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


