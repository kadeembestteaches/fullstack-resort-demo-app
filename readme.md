# Resort InClass Full Stack Application Exercise

## Summary 

This App is a Full-Stack Application build using the MERN (MongoDB, Express, React, Node.js) Stack.                       

## Production Links :


## Back-End 

The Back-End was completely decoupled from the Front-End, thus It was built as a REST API

### API End Points

#### GET /resorts

The above end point returns all resorts 

The above end point also allow you to filter users by passing the below query string parameters :

| Parameter | Description                                    |
| --------- | ---------------------------------------------- |
| featured  | true or false value                            |



#### POST /resorts

The above end point creates a resort. You must submit the user data in the body of the request (as JSON), specifically structured as the below  :

| Body Field(s)|
| ------------ |
| title        | 
| description  |
| imageSrc     |
| price        |
| bestSeller   |

#### GET /resorts/id

The above end point returns  a specific end, based on the id passed in the URL


### Rules to Set up Back-End (Locally)

1. Clone source code by running: **git clone GITHUP_PROJECT_URL .** Add clone project to a blank workspace area in your code editor
1. After Cloning, re-install ALL 3rd party dependencies by running **npm install**
1. Create a folder within the project called **config**  This config folder must be on the root.
1. Within the **config** folder, create a file called **keys.env**
1. Within the **keys.env** file, create the below environment variables :
   - **MONGO_DB_CONNECTION** - Assign your MongoDB Database Connection String to the variable.
      - **PORT** - Assign your PORT number. Ensure that it is not the same as the PORT Number that your Front-End Application is listening to. You can set 5000
1. Run application (locally) by running : **npm run dev**


## Front-End 

The Front-End was completely decoupled from the Back-End. Also, it was build as a SPA (Single Plage Application) using React


### Rules to Set up Front-End (Locally)

1. Clone this repo by running your **git clone project URL .**  Add clone project to a blank workspace area in your code editor
1. Reinstall all your dependencies by running the following command **npm i**
1. Start React project (locally) by running **npm start** Ensure that your Back-End is up and running before you start up your Front-End