 
1. **Docker command**
 - `docker build -t react-webpack5:dev .`
 
 - `docker run -it --rm -v 'D:\2. Code\1.learn code\7.template\react-webpack5-boilerplate':/app -p 8080:3000 -e CHOKIDAR_USEPOLLING=true react-webpack5:dev`

 - if using docker-compose
  - `docker-compose up`
  - Up dev `docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d`
  - Up prod `docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d`
  - Remove prod `docker-compose -f docker-compose.prod.yml down -v --rmi local` 
  - `docker image tag react-webpack5-boilerplate_frontend-react-docker-prod hieptqsocial/react-docker-boiderplate`
  - `docker-compose -f docker-compose.yml -f docker-compose.prod.yml build`
  - `docker-compose -f docker-compose.yml -f docker-compose.prod.yml push`
  - remove other nginx app
  - `docker stack deploy -c docker-compose.yml -c docker-compose.prod.yml react-boilerplate-app`
  - when updating code, using build and push
  - in ssh using `docker pull hieptqsocial/react-docker-boiderplate:latest`
  - using `docker stack deploy...` again

[pr] Fix mapping port in React webpack 5
  [x] EXPOSE 4000 in Dockerfile
  [x] inside webpack, devServer -> port = port from EXPOSE
  [x] inside devServer -> `host: "0.0.0.0"`
  [x] when run `docker run` need to have 8080:4000 -> second equals to EXPOSE 4000

[pr] node-sass cannot install in npm 
  because we refer to node_modules from local to docker -> different system -> need to rebuild
  `npm run postinstall`. We can put it inside `npm start`


docker stack deploy -c docker-compose.yml -c docker-compose.prod.yml react-boilderplate-app

access bash
  `docker exec -it react-webpack5-boilerplate_nginx_1 //bin/sh`

**RUNNING**
dev: http://localhost:80
prod: http://localhost:3001

**COMMANDS**
kill port
  `netstat -ano | findstr :3000` -> can get PID
  `taskkill /PID <PID> /F`

