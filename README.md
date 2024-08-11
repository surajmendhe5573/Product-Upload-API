# Product Upload API

## Overview

This project is a RESTful API built with Express.js and MongoDB that facilitates the management of product information, including image uploads. It uses Multer for handling file uploads and ensures that necessary directories are created if they don't exist.

## Features

- **Image Uploads**: Upload multiple images (up to 10) for each product.
- **Product Management**: Create and manage product details including name, category, code, description, size, wood type, finish type, and price.
- **Retrieve Products**: Fetch a list of all products.


# API Documentation

## Create a Product
### Product 
- **URL:** `http://localhost:3000/api/products`
- **Method:** `POST`


### Form Data
The request must be sent as `multipart/form-data` and include the following fields:

- **productName** (string, required): The name of the product.
- **productCategory** (string, required): The category of the product.
- **productCode** (string, required): A unique code for the product.
- **smallDescription** (string, required): A brief description of the product.
- **detailedDescription** (string, required): A detailed description of the product.
- **productSize** (string, required): The size of the product.
- **productWoodType** (string, required): The type of wood used for the product.
- **finishType** (string, required): The type of finish applied to the product.
- **productPrice** (number, required): The price of the product.
- **images** (file, multiple, up to 10 files): Upload one or more image files of the product.


## Retrieve All Products

### Description
Retrieves a list of all products from the database.
##  Retrieve All Products
### Product 
- **URL:** `http://localhost:3000/api/products`
- **Method:** `GET`


## Set Up Environment Variables

Create a `.env` file in the root directory of your project and add your environment variables. Below is an example `.env` file:

**Example `.env` file:**
```env
MONGO_URI= mongodb://localhost:27017/defaultdb
PORT= 3000
