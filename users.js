const express = require('express');
const controller = require('./controller.js')

const api = express.Router();


/**
 * @swagger
 * info:
 *  title: Edge example
 *  description: This document is an example of using REST API
 * components:
 *  schemas:
 *     User:
 *       type: object
 *       require:
 *           -name
 *           -type
 *       properties:
 *           id: 
 *            type: string
 *            descriptcion: Auto-generated ID of the User
 *           email: 
 *            type: string
 *            descriptcion: email of User
 *           first_name:
 *            type: string
 *            descriptcion: Name of the user
 *           last_name:
 *            type: string
 *            descriptcion: Last Name of the user
 *           avatar:
 *            type: string
 *            descriptcion: Photo or image selected by the user  
 *       example:
 *        id: 10
 *        first_name: Eder
 *        last_name: Ortiz
 *        email: Ortiz@mail.com
 *        avatar: "https://reqres.in/img/faces/2-image.jpg"
 *     UserUpdate:
 *       type: object
 *       properties:
 *        updateAt: date
 *        description: Date of updated
 *       example:
 *        updatedAt: "2022-09-26T01:46:41.991Z"
 */
/**
 * @swagger
 * tags:
 *   name: User
 *   description: 
 */

/**
* @swagger
* /users:
*   get:
*     summary: Return the list of all the users
*     tags: [User]
*     responses:
*       200:
*         description: List of the users
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/User'
*/

api.get("/", controller.getUsers);

/**
* @swagger
* /users:
*   post:
*     summary: Create new User
*     tags: [User]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/User'
*     responses:
*       200:
*         description: User created
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/User'
*       400:
*         description: User already exists 
*       500:
*         description: Server error
*/
api.post("/", controller.createUser);

/**
* @swagger
* /users/{id}:
*   put:
*     summary: Update User by ID
*     tags: [User]
*     parameters:
*       - in: path
*         id: id
*         schema:
*           type: string
*         require: true     
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/User'
*         description: User created
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/User'
*     responses:
*       200:
*         description: User updated
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/UserUpdate'
*       404:
*         description: The user was not found
*       500:
*         description: Error
*/
api.put("/:id", controller.updateUser);



module.exports = api;