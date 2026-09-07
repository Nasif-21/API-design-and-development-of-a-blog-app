# <div align ="center">API design and development 
## Project overview:
A RESTful backend service for a multi-role blogging platform, built with Node.js, Express, and Sequelize (MySQL). The system supports three tiers of access — Admin, User, and Guest with role-based authorization enforced across all protected routes.

## Core features:
### Authentication and Authorization:
Token-based authentication secures all protected endpoints. Passwords are hashed before storage and never returned in any API response. Role-based access control distinguishes between admin-only actions (user management, moderating any blog) and standard user actions (managing one's own content).

### User Management:
Users can register and log in, with account status (active/inactive) enforced at login. Each user can view and update their own profile and password, with role and account-status fields locked from self-modification. Admins have full visibility into the user base — listing all users, retrieving individual accounts, and activating or deactivating accounts as needed.

### Blog Management:
Authenticated users can create, update, and delete their own blogs, with the author identity always derived from the authenticated session rather than client input. Admins can moderate any blog on the platform, including content owned by other users, enabling platform-wide content governance.

### Public access:
Unauthenticated visitors can browse the full blog catalog, view individual posts, and search or filter results by title (partial match) and category — independently or combined — without needing an account. Author details are included with each post while all sensitive user data is excluded.

### Validation and error handling:
Input validation guards every write operation — required fields, email format/uniqueness, and password strength are enforced at the API boundary. The service responds with precise HTTP status codes (200, 201, 400, 401, 403, 404, 409, 500) and descriptive error messages, giving API consumers clear, predictable feedback across success and failure states.

## Running project in your local machine:
* Go to the folder of your local machine where you want to clone the project
* Open terminal using ```cmd``` 
* Clone repository using ```git clone https://github.com/Nasif-21/API-design-and-Development.git/```
* Copy .env.config file, then create a .env file based on inside your project and set all database username, password, port according to your DBeaver database configaration
*  After setting this up, go to your vscode terminal and command ```npm run dev``` to activate development server using nodemon
*  In your browser, type this url ```http://localhost:5000``` or ```http://localhost:5001```. Make sure when you run the nodemon, the response will show which port is running on your local machine
*  Make sure to hit proper api endpoints to get proper responses

## Technology and used tools:
*  **<i>Core Language:</i>** Javascript
* **<i>Runtime environment:</i>** Express JS
*  **<i>Database:</i>** MySQL
*  **<i>ORM:</i>** Sequelize
*  **<i>API testing and response check :</i>** Postman

## Postman collection link: 
https://documenter.getpostman.com/view/26591347/2sBYAxPUrB

