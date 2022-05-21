# Shopify Backend Developer Challenge: Fall 2022

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This is a back-end for an application that manages inventory. It uses Express and Sequelize to interact with a MySQL Database to retrieve, create, update, or delete products and warehouses that the products are located in.


> Github Repository Link: [https://github.com/Bickolus/shopify-fall-2022-backend](https://github.com/Bickolus/shopify-fall-2022-backend)
>
> Replit Link:
> 

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Questions](#questions)

## Installation

Type "npm install" in the console to install the dependancies this application requires (Express, MySQL2, Dotenv, and Sequelize). You would also need a MySQL server running to be able to create the database and seed it with items. 

## Usage

In order to run this program, a couple things need to be done. Firstly, the user must create a database by logging into their mySQL server ("mySQL -u root -p" in a terminal), then typing "source ./db/schema.sql". Secondly, seed the database by typing "node ./seeds/index.js" in another terminal. Thirdly, type "npm start" to run the server. Your localhost:3001/api/ URL will now display objects. Use a program like Insomnia to check out GET, POST, PUT, DELETE http methods.

## License

This project is under the MIT license.

## Questions

My GitHub Page: [Bickolus](https://github.com/Bickolus)

If you have any additional questions, please contact me at smbraza97@gmail.com.
