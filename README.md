# Picture upload

Login into the application and upload your favorite pictures

## Introduction

This is a simple application that allows users to upload their favorite pictures.\
The application allows users to create accounts, login into their account and upload \
images.

## Challenge1 (Backend)

You are to create the following API routes that do the following:

- allows users to create account and login to the application with only email and password
- allow a logged in user to upload images of max size of 1MB

The following route is to be created on the back-end of the application

- API routes for users to create accounts and login to the application
  - `POST: /api/v1/user/signup`
    - email and password only
  - `POST: /api/v1/user/signin`
    - email and password only
  - `GET: /api/v1/currentUser`
    - get the current user who logged in to the application
  - `POST: /api/v1/images`
    - upload an image of max size of 1MB
  - `GET: /api/v1/images`
    - get all the images that you uploaded

Note that all routes except for `signup` and `signin` are protected

## Challenge2 (Frontend)

You are to create mini React application to consume the routes created at the backend;

- create forms that allow users to signup and signin into the application
- authorised users can upload images
- authorized users can view the images they uploaded

## Guidelines

The following guidelines should be strictly adhered to;

1. Set up the backend(server-side) of the application with `Django Rest Framework`
2. Use `Postgres` or `MongoBD` as your database
3. Use `create-react-app` to bootstrap your frontend application
4. Deploy your server-side application on `Heroku`
5. Deploy your client-side application on `Vercel` or `Netlify`
6. You are to `fork` this repository and all features created by you should be \
   associated to your repository.
7. All backend code should go into the `api` folder and frontend code should go into `client`
8. Remember to remove `git.keep` in the folders
9. You have a total of 1 week to complete this task and submit the link of your application via email

## Extra point offering

Extra points will be given to applicants that follows this `GIT` workflow:

- For every feature built, branch out of `main` and create a Pull Request to `main` when
  you are done working on the feature.
- Commit messages should be simple and detailed.
