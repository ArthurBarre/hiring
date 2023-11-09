# Requirements
To run this project you will need a computer with Node, Typescript and Cucumber installed.

# Install
To install the project, you just have to run `yarn install -g` to get all the dependencies

# Create the database
`docker-compose up -d`

# Build the project
`npx tsc` or `tsc` if you have typescript installed locally

# Init the database
`npm run init-db`

# CLI
Create an user
`user create firstname lastname email password`

Create a fleet
`fleet create userId`

Register a vehicle in the previous fleet
`fleet register-vehicle fleetId vehiclePlateNumber`

Localize the vehicle
`fleet localize-vehicle vehiclePlateNumber lat lng`

# Running the tests
After installing the dependencies you can run the tests with this command `yarn test`.
