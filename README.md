# how to deploy ?

- `oc login` to a cluster  
- create / enter a `project`
- run `./deploy.sh` 
- follow the screenshots to create persistent storage 
    - (topology -> rightclick -> add storage -> create new claim -> mount path = `/items`)
- visit the public URL from your browser :)
    - (networking -> routes -> Name `todo` Location `url`)

Screenshots for steps on storage & finding routes tab:  

![Screenshot from 2021-08-19 12-20-27](https://user-images.githubusercontent.com/20089340/130025727-8a100779-b2a5-4aba-85b8-87cc41f1dbe3.png)

![Screenshot from 2021-08-19 12-20-39](https://user-images.githubusercontent.com/20089340/130025769-ba01993f-23e1-41d5-a6cc-fe9bebeaff90.png)

![Screenshot from 2021-08-19 12-21-42](https://user-images.githubusercontent.com/20089340/130025785-da1e0fec-af76-4b4c-9349-4b209d04432c.png)

![Screenshot from 2021-08-19 12-24-53](https://user-images.githubusercontent.com/20089340/130025846-6118caea-ec6a-4f10-95ca-c5b1f9411220.png)

- Route is here:

![Screenshot from 2021-08-19 12-26-52](https://user-images.githubusercontent.com/20089340/130025950-b00a203e-985d-477f-ba7c-8567028d8b10.png)

![Screenshot from 2021-08-19 12-27-14](https://user-images.githubusercontent.com/20089340/130025959-bdbd7d3e-cb6c-49de-9536-7fd87e52d1f5.png)

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
