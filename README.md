# how to deploy ?

- `oc login` to a cluster  
- create / enter a `project`
- run `./deploy.sh` 
- follow the screenshots to create persistent storage 
    - (topology -> rightclick -> add storage -> create new claim -> mount path = `/items`)
- visit the public URL from your browser :)
    - (networking -> routes -> Name `todo` Location `url`)
# how to run locally?

(on bash shell execute  `start.sh`)

# this script will run the two folders /frontend and /backend
Terminal 1
```
cd backend
npm run start
```
Terminal 2
```
cd frontend
yarn start
```

*(If browser doesn't open automatically go to http://localhost:8080)*

# todo
A TODO app using React  
  
Todo app using react & typescript with the features:  
    Use React & typescript  
    Use Functional components  
    No need to persist data  
    Simple CRUD operations on tasks  
    Allow filtering of tasks(active, completed, all)  
    Show count  
    Clear all button  
    Deploy on OCP using images(Dockerfile)  
    Deploy from GitHub using S2i  
    Backend  
    Backend pod - POST endpoint  
    Any DB   
