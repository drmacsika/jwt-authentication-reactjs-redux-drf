# JWT-Authentication-with-ReactJS-Redux-and-Django-DRF

# Introduction

Production Ready JWT Authentication using React JS, Redux, and Django Rest Framework.

# Notable Tech, Framework and Packages

- Django
- DRF
- React
- Redux
- Npm

# Features

- Google Auth
- Facebook Auth
- User signup, email activation, password reset, login
- JWT authentication

# Set Up

## Backend - DRF

- python -m venv venv
- source venv/bin/activate
- cd backend/src
- pip install -r requirements.txt
- python manage.py makemigrations
- python manage.py migrate
- python manage.py createsuperuser
- python manage.py runserver

## FrontEnd ReactJS

- npm install
- npm run dev

# Additional Info

## Get a client_id and client_secret from google developers console

SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = "[YOUR GOOGLE OAUTH2 API KEY]"
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = "[YOUR GOOGLE OAUTH2 API SECRET]"

## Get a client_id and client_secret from facebook developers console

SOCIAL_AUTH_FACEBOOK_KEY = "[YOUR FACEBOOK API KEY]"
SOCIAL_AUTH_FACEBOOK_SECRET = "[YOUR FACEBOOK API SECRET]"
