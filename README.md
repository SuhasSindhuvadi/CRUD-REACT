# Employee CRUD Application

This project is a simple Employee Management CRUD application built with React, Vite, Axios, and React Router DOM. The app allows you to add, edit, delete, and view employee details.

## Getting Started

Follow these steps to set up and run the application locally:

### 1. Create a New Vite Project

```sh
# Create a new Vite project
npm create vite@latest employee-crud-app -- --template react

# Navigate to the project directory
cd employee-crud-app

# Install dependencies
npm install

npm install axios react-router-dom bootstrap

#Run JSON Server 
json-server --watch db.json --port 3001

#Start the Application 
npm run dev
