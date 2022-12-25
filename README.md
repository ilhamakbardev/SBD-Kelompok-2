# Project Sistem Basis Data Kelompok 2

## Anggota Kelompok dan Kontribusi

- Muhammad Ilham Akbar (Front End + Server)
- Daniel Chandra (Database + Server)
- Sultan Syahid Hidayatullah Gummay (User Manual)

## Teknologi

- React JS (Front End)
- Vite (Front End Tooling)
- Tailwind CSS (Styling)
- Node JS (Back End)
- Express JS (Back End - Server)
- MongoDB (Database)
- Vercel (Hosting)

## Business Process

### Rancangan awal :

![Business Process](./assets/1.business-process.jpg 'Business Process')

### Implementasi :

- tidak ada fitur login karena keterbatasan waktu pengerjaan dan kemampuan anggota kelompok

- tidak ada fitur register karena keterbatasan waktu pengerjaan dan kemampuan anggota kelompok

## API Documentation

### Database Schema (MongoDB)

#### User Model

| Attributes | Type     | Description                         |
| ---------- | -------- | ----------------------------------- |
| \_id       | ObjectId | unique, required, primary key       |
| name       | String   | required, name of user              |
| email      | String   | required, email of user             |
| password   | String   | required, password of user          |
| address    | String   | required, required, address of user |
| company    | String   | required, company of user           |

#### Product Model

| Attributes  | Type     | Description                      |
| ----------- | -------- | -------------------------------- |
| \_id        | ObjectId | unique, required, primary key    |
| title       | String   | required, name of product        |
| description | String   | required, description of product |
| left        | String   | required, price of product       |
| right       | String   | required, place of product       |
| image       | String   | required, image url of product   |

### Endpoint

#### /user

##### getAllUser (unused in app)

- method : GET
- endpoint : /user
- request example :
  - url : https://sbd-kelompok-2.vercel.app/user
- response :

```
{
  "msg": "success get all user data",
  "data": [
    {
      "_id": "639c8a8542314770f1f3e87f",
      "name": "ilham updated",
      "email": "ilhamganteng@gmail.com",
      "password": "ilhamgantengbgt",
      "address": "rumah",
      "company": "PT. Nuklindo",
      "__v": 0
    },
    {
      "_id": "63a6d61aa698fe645f1e2583",
      "name": "ilham",
      "email": "ilhamganteng@gmail.com",
      "password": "ilhamgantengbgt",
      "address": "rumah",
      "company": "PT. Nuklindo",
      "__v": 0
    }
  ]
}
```

##### getUserById (unused in app)

- method : GET
- endpoint : /user/:id
- request :
  - url : https://sbd-kelompok-2.vercel.app/user/639c8a8542314770f1f3e87f
- response :

```
{
  "msg": "success get user by id",
  "data": {
    "_id": "639c8a8542314770f1f3e87f",
    "name": "ilham updated",
    "email": "ilhamganteng@gmail.com",
    "password": "ilhamgantengbgt",
    "address": "rumah",
    "company": "PT. Nuklindo",
    "__v": 0
  }
}
```

##### addUser (unused in app)

- method : POST
- endpoint : /user
- request :
  - url : https://sbd-kelompok-2.vercel.app/user
  - header :
    - HTTP/1.1
    - Content-Type: application/json
  - body :
    ```
    {
        "name": "daniel",
        "email": "daniel@gmail.com",
        "password": "secretpasswordthatyoucantguess",
        "address": "rumah",
        "company": "PT. IndRadiance"
    }
    ```
- response :

```
{
  "msg": "user created",
  "data": {
    "name": "daniel",
    "email": "daniel@gmail.com",
    "password": "secretpasswordthatyoucantguess",
    "address": "rumah",
    "company": "PT. IndRadiance",
    "_id": "63a6d9891b99d03401eb5408"
  }
}
```

##### editUser (unused in app)

- method : PATCH
- endpoint : /user/:id
- request :
  - url : https://sbd-kelompok-2.vercel.app/user/63a6d9891b99d03401eb5408
  - header :
    - HTTP/1.1
    - Content-Type: application/json
  - body :
    ```
    {
        "name": "daniel updated",
        "email": "danielupdated@gmail.com",
        "password": "secretpasswordthatyoucantguess",
        "address": "rumah",
        "company": "PT. Nuklindo"
    }
    ```
- response :

```
{
  "msg": "edit user successfull"
}
```

##### deleteUserById (unused in app)

- method : DELETE
- endpoint : /user/:id
- request :
  - url : https://sbd-kelompok-2.vercel.app/user/63a6d61aa698fe645f1e2583
- response :

```
{
  "msg": "user by id has successfully removed"
}
```

#### /product

##### getAllProducts

- method : GET
- endpoint : /product
- request :
  - in API testing
    - url : https://sbd-kelompok-2.vercel.app/product
  - in web app
    - just waiting the Product page to fetching the database and rendered
- response :

  - in API testing :

  ```
  {
    "msg": "success get all Product",
    "data": [
      {
        "_id": "63a2af04c88ec0ff9b0a8349",
        "title": "test updated",
        "description": "test",
        "left": "test",
        "right": "test",
        "image": "https://www.researchgate.net/publication/265606788/figure/fig3/AS:202865986543622@1425378428499/Technetium-99m-pertechnetate-radioactive-material.png",
        "__v": 0
      },
      {
        "_id": "63a2cc49c88ec0ff9b0abb48",
        "title": "U-235 updated",
        "description": "U-235 is used for BWR and PWR nuclear reactor fuels",
        "left": "Rp. 7.000.000,-",
        "right": "Semarang",
        "image": "https://energyeducation.ca/wiki/images/3/3d/640px-Fuel_Pellet.jpg",
        "__v": 0
      },
      ...
      ...
      ...
      other 10 products
  }
  ```

  - in web app

  ![IndRadiance Product Page](./assets/2.web-app-product.jpg 'IndRadiance Product Page')

##### getProductById

- method : GET
- endpoint : /product/:id
- request :
  - in API testing
    - url : https://sbd-kelompok-2.vercel.app/product/:id
    - example url : https://sbd-kelompok-2.vercel.app/product/63a2af04c88ec0ff9b0a8349
  - in web app : not used
- response :

```
{
  "msg": "success get product by id",
  "data": {
    "_id": "63a2af04c88ec0ff9b0a8349",
    "title": "test updated",
    "description": "test",
    "left": "test",
    "right": "test",
    "image": "https://www.researchgate.net/publication/265606788/figure/fig3/AS:202865986543622@1425378428499/Technetium-99m-pertechnetate-radioactive-material.png",
    "__v": 0
  }
}
```

##### addProduct

- method : POST
- endpoint : /product
- request :

  - in API testing
    - url : https://sbd-kelompok-2.vercel.app/product
    - header
      - HTTP/1.1
      - Content-Type: application/json
    - body :
    ```
    {
        "title": "Ir-192",
        "description": "this product usually used for industrial NDT",
        "left": "Rp. 3.500.000,-",
        "right": "Jakarta",
        "image": "https://www.oserix.com/web/image/887/ir_attachment_2963.png"
    }
    ```
  - in web app :

    ![Add Product](./assets/3.web-add-product.jpg 'Add Product')

    - in Product page, click "Add Product" white button
    - fill this form
    - submit by clicking "Add Product" blue button

- response :

  - in API testing :

  ```
  {
    "msg": "success get product by id",
    "data": {
      "_id": "63a2af04c88ec0ff9b0a8349",
      "title": "test updated",
      "description": "test",
      "left": "test",
      "right": "test",
      "image": "https://www.researchgate.net/publication/265606788/figure/fig3/AS:202865986543622@1425378428499/Technetium-99m-pertechnetate-radioactive-material.png",
      "__v": 0
    }
  }
  ```

  - in web app

    ![Add Product Web App](./assets/4.new-product.jpg 'Add Product Web App')

##### deleteProductById

- method : DELETE
- endpoint : /product/:id
- request :
  - in API testing :
    - url : https://sbd-kelompok-2.vercel.app/product/:id
    - url example : https://sbd-kelompok-2.vercel.app/product/639c93d0aaaa0c994f6a8c99
  - in web app :
    ![Add Product Web App](./assets/4.new-product.jpg 'Add Product Web App')
    - click pink button in product want to delete
- response : return all product except the product that deleted

##### editProduct

- method : PATCH
- endpoint : /product/:id
- request :
  - in API testing
    - url : https://sbd-kelompok-2.vercel.app/product/:id
    - url example : https://sbd-kelompok-2.vercel.app/product/63a6fe6107e0672d57d36c97
    - header
      - HTTP/1.1
      - Content-Type: application/json
    - body
    ```
    {
        "title": "Ir-192 updated",
        "description": "this product usually used for industrial NDT",
        "left": "Rp. 2.500.000,-",
        "right": "Batam",
        "image": "https://www.oserix.com/web/image/887/ir_attachment_2963.png"
    }
    ```
  - in web app :
    - click edit button in product which want to edit
    - fill edit form and submit
- response : return a mesage and data, data contains all products and product after updated replace product which is updated

## User Manual (cara menggunakan aplikasi)

- go to web page in url https://belajar-db.vercel.app/
- click on 'Product' button in top navbar
- this page shows all product that stores in MongoDB database
- if we want to add product, click 'Add Product' white button, fill the form, and in image field, fill with the img url
- if we want search product, just type in search field
- we can alse delete the product by just clicking it
- we can edit the product by clicking edit yellow button, fillthe form, and submit by clicking 'Edit Product'bellow

## Lampiran

- Link Web : https://belajar-db.vercel.app/
- Link API : https://sbd-kelompok-2.vercel.app/
