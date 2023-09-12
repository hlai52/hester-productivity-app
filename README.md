# MERN TODO Application

MERN TODO Application is a task management application built using MongoDB, Express, React, and Node.js, commonly known as the MERN stack. This project encompasses both a backend API that provides CRUD-based endpoints and a tablet & desktop responsive client-side app, integrating features such as a to-do list, work corner with a timer, and a music section for break time.

Note that the client app is deployed in demo mode (without a backend) here: https://hlai52.github.io/hester-productivity-app

## Prerequisites

- Node.js
- MongoDB

## Setup

Our application consists of two main directories `/api` and `/client`. You need to set up both to run the entire application.

### API setup

Refer to the detailed [API setup guide](/api/README.md) in the `/api` directory.

### Client setup

Follow the [Client setup guide](/client/README.md) in the `/client` directory.

## Quick Start (Local development)

If you have all the prerequisites installed and have followed the setup guides for both `/api` and `/client`, you can start the application using these steps:

Open two terminal instances.

In terminal 1, navigate to `/api` directory and start the server.

```bash
$ cd api
$ npm start
```

This will start the API server at port 3001.

In terminal 2, navigate to `/client` directory and start the client application.

```bash
$ cd client
$ npm start
```

This will start the client and it will be accessible via [http://localhost:3000](http://localhost:3000).

Ensure API server is running. The client application will consume the API endpoints to perform the application's functions.

## Features

- To-do List: A CRUD feature that lets you create, read, update, and delete tasks.
- Work Corner: A dedicated space for work with a timer and clues on the last task completed.
- Music Section: Help users relax or work along with a collection of soothing music tracks.

## Stack

- JavaScript
- React
- NodeJS
- MongoDB (Locally / via Azure Cosmos DB)

## Further Information

For more detailed information about the frontend and the backend, please refer to the `README.md` files inside the `/client` and `/api` directories respectively.

## Contribution & Support

Feel free to fork the project, open issues, or send pull requests. For major changes, please open an issue first to discuss your intended changes.
