# RESET Application

A tablet and desktop responsive application that is designed for you to stay mindfully organized in the present moment.

- Created by Hester Lai

## Steps to Run Program

1. Install node.JS
   Version v18.12.1
   https://nodejs.org/en/download/

2. Open the file
   Run command LS to see that there is client and api folder available.

3. CD into API folder
   Run CD into the API folder.
   Run command npm i to install all necessary modules.

4. CD into client folder
   Run CD into Client folder.
   Run command npm i to install everything.

5. Open a new terminal
   Run command CD into API folder.
   When inside API folder, run command npm start server.

You should see "Server is running on port#.." and "Connected to MongoDB"

6. Open a new terminal
   Run command CD into Client folder.
   When inside client folder, run command npm start.

7. If you wish to use local storage simply change the current ".env" file to ".env.database and take the .env.local file and change it to ".env" and it should let you store the todo list function locally.

## Stack Used

Javascript
React
NodeJS
MongoD DB(data storage)
Azure Cosmos DB or locally(change .env file in steps to run)

## Deeper Explanation of App

This is a tablet & desktop responsive tool aimed to be used daily. It is not mobile responsive as the tools being used would not be ideal for a mobile as it aims to have the user sit for a certain period of time and conduct work at their workstation, not on the go as it requires screen space also. It would not be possible to show it on a mobile and be working.

## Inspiration

In a instant culture culture and time for instaneous is everything, how come we don’t apply it to our personal lives of daily tasks? I want to bring awareness on the present moment and remove the emotion of feeling overwhelmed and end the cycle of non-productiveness in a casual way.
I was inspired by my classmates and their pomodoro study sessions. I found the fast pace speed of the bootcamp to be overwhelming for some of us and I wanted to solve that pain point. By offering the to do list to be stored locally or in a database for the user's customization. The work corner is stored in local session and will be erased as it promotes and motivates those to start and complete their task in the work corner.
