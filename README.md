# Memories Aplication

Share Memories with the world, Create Account, Login and Share Memories with the world!

## Backend

You are to create the following API routes that do the following:

- Users can create an account and login with only email and password
- Logged in users to upload images of max size of 1MB

- API routes
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

All routes except for `signup` and `signin` are protected

## Frontend

- Users can signup and signin using Emails, and Password
- Authorized users can upload images
- Authorized users can view the images they uploaded

## Technologies

- Python
- JavaScript
- Django Rest Framework
- ReactJS
- Cloudinary
- PostgreSQL

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
