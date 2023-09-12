# TODO-API

TODO-API is a simple task management application API built using MongoDB, Express, React, and Node.js (MERN stack). It features endpoints for basic CRUD (Create, Read, Update, Delete) operations.

## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

* NodeJS
* MongoDB

### Installation

Clone the repository into your local machine:

```bash
$ git clone https://github.com/username/mern-todo-api.git
```

Move into the cloned directory:

```bash
$ cd mern-todo-api
```

Install dependencies:
```bash
$ npm install
```

### Configuration

Create a `.env` file at the root of your project and add the following:

```bash
DB_HOST=        // Database Host
DB_PORT=        // Database Port
DB_NAME=        // Database Name
DB_USER=        // Database Username (only needed when using Cosmos DB)
DB_PASSWORD=    // Database Password (only needed when using Cosmos DB)
USE_COSMOS=     // Set to "true" if using Microsoft's Cosmos DB
```

Replace the placeholder comments with your MongoDB details.

## Usage

You can start the server using:
If you haven't globally installed nodemon, use:
```bash
$ npm start
```

The server will start running on port 3001.

### API Routes

* `GET /todos` - Fetches all task entries.
* `POST /todo/new` - Creates a new task entry.
* `DELETE /todo/delete/:id` - Deletes an existing task entry.
* `GET /todo/complete/:id` - Toggles task completed status.

Each request should include a `application/json` Content-Type.

### Testing

The server can also be started on port 3002 for testing purposes.


## Setting Up Cosmos DB in Azure

Follow the steps below to setup a Cosmos DB instance in Azure.

### Prerequisites

Make sure you have a Microsoft Azure account. If not, you can create one [here](https://portal.azure.com).

### Setup Steps

1. Log in to the [Azure portal](https://portal.azure.com).

2. Click the "Create a resource" button (green plus sign at the top left corner).

3. In the "New" window, search for "Azure Cosmos DB".

4. In the search results, select "Azure Cosmos DB" and click "Create".

5. Fill in the required fields:

   * **Subscription**: Select your Azure subscription.
   * **Resource Group**: Create or select an existing group where your Cosmos DB will reside.
   * **Account Name**: Create a unique name that identifies your Azure Cosmos DB account.
   * **API**: Select "MongoDB".
   * **Location**: Choose the region closest to your app users to host your Cosmos DB account.
   * **Capacity mode**: Select "Provisioned throughput" or "Serverless", depending on your workload.
   * **Account Type**: Choose "Production" or "Non-Production", depending on your purpose.

6. Click "Review + create".

7. Review your account settings, and then click "Create". It might take a few minutes to create the account.

8. Once the deployment is complete, go to the Azure portal and select "Go to resource" to view your new Azure Cosmos DB account.

9. From the left-hand menu, under "Security", select "Connection String". Copy the connection string details, which contain your database username, password, and connection string. You will need these details for your `.env` file.

Replace the placeholders in `.env` to connect to your CosmosDB instance:

```bash
DB_HOST=        // Database Host from connection string
DB_PORT=        // Database Port
DB_NAME=        // Database Name
DB_USER=        // Database Username from connection string
DB_PASSWORD=    // Database Password from connection string
USE_COSMOS=true // Set this to "true"
```

This completes the setup for Cosmos DB in Azure.

