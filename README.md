
# Eth Testing Project

An authentication system with typescript,Express,Mongodb,Redis,Web3js,etc


## usage




## Installation

Install eth-test by cloning the project at: [Here](https://github.com/chainerprince/eth-testing.git) 
Follow the below instructions to get it running locally
```bash  
  cd eth-testing
  yarn install
  docker-compose up -d
  yarn start
```
    
## Running Tests

To run tests, run the following command

```bash
  yarn run test
```


## Features

- Login
http://localhost:8000/api/auth/login
- Register
http://localhost:8000/api/auth/register
- Get currently logged in user
http://localhost:8000/api/auth/me
- Get user transaction
http://localhost:8000/api/eth

## Author

- [@chainerprince](https://www.github.com/chainerprince)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NODE_ENV`

`MONGODB_USERNAME`

`MONGODB_PASSWORD`

`MONGODB_DATABASE_NAME`

`ACCESS_TOKEN_SECRET_KEY`



