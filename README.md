## Steps of the students-info submission

- First of all need to run both applications, `frontend` and `backend`
- Frontend application runs on http://localhost:4200/
- While redirecting to the above link, an angular project will load from the frontend/src/index.html path
- For frontend index.html is the main entry point which will load other components, in this case it loads app component
- User inputs informations in the fields and submit the form
- There is a service class which holds the methods using backend url to create, get and delete students info
- In the backend directory index.js is the main entry point which imports and defines routes
- Route file defines the path, methods(post, get, delete) and use the function from controller
- Controller has the functions which helps to create, get and delete students info
- Based on the user actions, data got created or loaded or deleted from the DB and changes got visible on the frontend
