# Stationery Shop

## Overview

Shonkho Shield blog is a web-based API Service Application. It Provides API for managing Blog App. This application used Node.js, Express, TypeScript, MongoDB and Mongoose. It offer easy-to-use features for creating, updating, and deleting blogs. It also helps to readers find, sorting, and filtering blogs.

## Features:

### Features for Users:

1. **Create Blog** : User can create Blog with title and content (user have to logged-in to create blog),
2. **Get Blogs** : User can get all the blogs with title, content and author details (any one can see blogs no need to login).
3. **Get Blogs By Query** : User can get Blog by query with Title or Content with full blog details.
4. **Seraching, Sorting and Filtering** : User can search , sort and filter blogs.
5. **Update Blog** : User can update their own blog (user have to logged-in to update blog). 
6. **Delete Blog** : User can delete their own blog (user have to logged-in to delete blog).


### Features for Admin:

1. **Block User** : Admin can block any user
2. **Delete Blogs** : Admin can delete any blog.

### Authentication & Authorization:

#### Admin and User roles are seperated. For creating, updating, deleting and blocking User and Admin have to logged-in.

### Error Handlings:

#### Proper error handling for invalid input, invalid email, missing data, duplicate user, and unauthorized request.

### Technology Used:

1. Node.js and express - As backend framework.
2. Mongodb with mongoose - For Database Management .
3. Typescript - As programming language.
4. Jwt - For secure authentication and authorization 
5. http_status - For http status code.
6. Zod - For validating and parsing data 

## Project installation Locally .

1. Clone the repository:

```bash
git clone https://github.com/mirzanahid/stationery-shop
```

2.  Go to the project directory and Install npm:

```bash
cd stationery-shop;
npm install;
```

3. To run this project you need Environment Variables. First create .env file in stationery-shop main directory and add these variables.

```env
NODE_ENV=development
PORT=5000
DATABASE_URL=mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.vsmf7bv.mongodb.net/stationery-shop?retryWrites=true&w=majority&appName=Cluster0
```

### Scripts for manage this application.

1. To run this application in development:

```bash
npm run start:dev
```

2. To build this application:

```bash
npm run build
```

3. To Use lint to find problem:

```bash
npm run lint
```

4. To Use lint fix to auto fix problem:

```bash
npm run lint:fix
```

5. To format codes:

```bash
npm run format
```

## API Endpoints:

# For Product Management:

1. **Create a Product**:

```bash
/api/products
Method: POST
```

2. **Get all Products**:

```bash
/api/products
Method: GET
```

3. **Get Product by Query Search**:

```bash
/api/products?searchTerm=category
Method: GET
```

\*SearchTerm can be name, brand, category

4. **Get specific Product by productId**:

```bash
/api/products/productId
Method: GET
```

5. **Update Product**:

```bash
/api/products/productId
Method: PUT
```

6. **Delete Product**:

```bash
/api/products/productId
Method: DELETE
```

# For Order Management:

1. **Create a Order**:

```bash
/api/orders
Method: POST
```

2. **Get Revenue from Orders**:

```bash
/api/orders/revenue
Method: GET
```

## Necessary Links:

1. **Github Link**: https://github.com/mirzanahid/stationery-shop
2. **Live Links**: https://stationery-shop-git-main-mirzanahids-projects.vercel.app/
