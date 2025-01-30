# Stationery Shop

## Overview

Shonkho Shield blog is a web-based API Service Application. It Provides API for managing Blog App. This application used Node.js, Express, TypeScript, MongoDB and Mongoose. It offer easy-to-use features for creating, updating, and deleting blogs. It also helps to readers find, sorting, and filtering blogs.

## Features:

### Features for Users:

1. **Register User** : User can Register by providing Name, Email and Password.
2. **Login User** : User can Login using registerd Email and Password.
3. **Create Blog** : User can create Blog with title and content (user have to logged-in to create blog),
4. **Get Blogs** : User can get all the blogs with title, content and author details (any one can see blogs no need to login).
5. **Get Blogs By Query** : User can get Blog by query with Title or Content with full blog details.
6. **Seraching, Sorting and Filtering** : User can search , sort and filter blogs.
7. **Update Blog** : User can update their own blog (user have to logged-in to update blog).
8. **Delete Blog** : User can delete their own blog (user have to logged-in to delete blog).

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
DATABASE_URL=mongodb+srv://blog-project:iUtkEReDzSCNPxZP@cluster0.vsmf7bv.mongodb.net/shonkho-shield-blog?retryWrites=true&w=majority&appName=Cluster0
BCRYPT_SALT_ROUNDS=8
JWT_ACCESS_SECRET=473d601c7348ebc5ac129f5a47c2a64b8020db26dbf0f2e6e81841f3f8af4f409638ddd03969fbe791bfa1c3d44934821ab32cb56beb852b988a391c039a0e97
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
npm run prettier
```

## API Endpoints:

### For Authentication :

1. **Register User** :

```bash
/api/auth/register
Method: POST
```

2. **Login User** :

```bash
/api/auth/login
Method: POST
```

### For User Actions :

1. **Create a Blog**:

```bash
/api/blogs
Method: POST
Request-Header: Authorization: Bearer <token>
```

2. **Update Blog**:

```bash
/api/blogs/:id
Method: PATCH
Request-Header: Authorization: Bearer <token>
```

3. **Delete Blog**:

```bash
/api/blogs/:id
Method: DELETE
Request-Header: Authorization: Bearer <token>
```

4. **Get All Blogs**:

```bash
/api/blogs
Method: GET
```

5. **Query Blog**:

```bash
/api/blogs?search=technology&sortBy=createdAt&sortOrder=desc&filter=60b8f42f9c2a3c9b7cbd4f18
Method: GET
```

### For Admin Actions :

1. **Block User**:

```bash
/api/admin/users/:userId/block
Method: PATCH
Request-Header: Authorization: Bearer <token>
```

2. **Delete Blog**:

```bash
/api/admin/blogs/:id
Method: DELETE
Request-Header: Authorization: Bearer <token>
```

## Admin login crediential:

```bash
Email : admin@gmail.com,
Password : 123456
```

## Necessary Links:



1. **Live Links**: https://shonkho-shield-blog.vercel.app/
2. **Github Link**: https://github.com/mirzanahid/shonkho-shield-blog
