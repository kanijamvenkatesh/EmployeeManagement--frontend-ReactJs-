# Employee Management System (Full-Stack)

A consolidated repository containing both the React frontend and Spring Boot backend for the Employee Management System.

## Project Structure

*   **/backend**: Spring Boot Java REST API, using JPA / Hibernate and MySQL database.
*   **/frontend**: React.js client application styled with Bootstrap.

---

## Getting Started

### 1. Running the Backend
1. Ensure you have a MySQL server running and create a database named `employee_management_system` (or update [backend/src/main/resources/application.properties](file:///d:/EmployeeManagement/backend/src/main/resources/application.properties) with your database configurations).
2. Open a terminal in the `/backend` folder.
3. Run the Spring Boot application using Maven:
   ```bash
   ./mvnw spring-boot:run
   ```

### 2. Running the Frontend
1. Open a terminal in the `/frontend` folder.
2. Install npm dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm start
   ```
4. Access the portal at `http://localhost:3000`.
