Running Your Application
Build and start the containers: 
Run 
    npm install
    docker-compose up --build 
    
in the terminal. This command builds the image from the Dockerfile and starts the two instances as defined in docker-compose.yml.

Access the Application: Open a web browser and go to 
    http://localhost:3001 
or 
    http://localhost:3002 
to load your application from either of the two Node.js instances.