## Table of contents
* [General info](#general-info)
* [Technologies](#Technologies)
* [Projects](#Projects)
* [Setup](#setup)

# General info
Test
This app is a portfolio website to showcase my projects and give a small introduction to myself. For simplicity the app has been divided into backend and frontend directories. Frontend src folder contains the code for the general website and projects. Specific project frontend code can be found in frontend/src/project_demos folder. Backend folder contains all the server side code including project_demo code.

# Technologies

Project is created with:
* React 16.13.1
* Express 4.17.1
* Redux 7.2.2
* Nodemailer 6.4.11

# Projects

## Todo App

Simple ToDo app that uses hooks and functional components. Animation done using framer-
motion library


## Mockup E-commerce clothing shop

An mock-up e-commerce clothing shop implemented with Redux and PostrgreSQL database.
The purpose of this demo is to showcase my skills working with Redux and PostgreSQL.
The mock-up is lacking an user account implementation that would link the shopping 
cart state and items to each individual user account. I decided to omit user accounts as it
would make the demo too cumbersome (would require account creation and login).

## Java Random Maze Game

A Java game that generates a random maze each game. Currently no browser
demo available. However you can run the code and play the game by running command 
java -jar maze_game.jar in the root directory.


# Setup

To run the frontend code locally without the backend, go to the frontend root folder locally using npm: 

```
$ cd ../frontend
$ npm install
$ npm start
```

In order to run the backend locally you must have PostgreSQL installed and a server running. On your local server create a database and use the PG_DUMP tool to import the backend/clothes_store_pg_dump PG_DUMP file. Below is the command to use in the folder that pg dump file is located locally: 

```
$ PGUSER={username} PGPASSWORD={password} psql {database name} < clothes_store_pg_dump
```
More info at: https://www.postgresql.org/docs/9.4/backup-dump.html

Additionally to get the backend running you must configure an .env file in the backend folder with you email, email password, database name, database username and database password. Below is an template:

```
EMAIL={your email}
PASSWORD ={password}
PORT=3001
DATABASE_USER={database username}
DATABASE_NAME={database name}
DATABASE_PW={database username password}
```

After the database and .env file have been setup go to /frontend and create a build file by running the following command

```
npm run build
```
Move the build folder to the frontend folder and run the following commands in backend folder

```
$ npm install
$ npm start
```