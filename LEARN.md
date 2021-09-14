 
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
  - in the code package `docker stack deploy -c docker-compose.yml -c docker-compose.prod.yml react-boilerplate-app`
  - when updating code, using build and push
  - in ssh using `docker pull hieptqsocial/react-docker-boiderplate:latest`
  - using `docker stack deploy...` again
  * Few commands 
    - Stack `docker stack ls` -> see 2 services for local and prod because we use `docker stack deploy...` for 2 files docker-compose.yml and docker-compose.prod
    - see services inside stack `docker stack services react-boilerplate-app`
    - see ps of docker stack `docker stack ps react-boilerplate-app`

2. TDD and testing
Why unit test
  - CONFIDENCE when add new feature, when add new feature, old feature are not getting errors -> Reduce time and increate quality because developers think ready to SHIP IT
  - REDUCE REGRESSION TEST when add new features
  - NEW ERRORS COMING COVERED BY TEST, to make sure not happen again
  - FOR REACT
    + with different props -> is output expected? 
    + Click button -> event handler works and state change? 
    + Edge cases for null props, errors -> what is behaviour?
    + Integration between components -> when one is mounted, what happend with others
  - TDD is good approach to write unit tests first, then devs will think more of design -> better code
    





[pr] issue in not having `image: hieptqsocial/react-docker-boiderplate` inside docker-compose.prod.yml`
  [sol] should update docker.compose.prod file, then git commit and push, in ssh, we need to pull it and using `docker stack deploy...` again. `docker ...build` and `docker...push` cannot solve this issue because its related to docker-compose files. When we use `docker stack deploy -f...`, its related to these files
  -> if we don't change anything in docker, no need to use git commit and git pull inside SSH


[pr] Fix mapping port in React webpack 5
  [x] EXPOSE 4000 in Dockerfile
  [x] inside webpack, devServer -> port = port from EXPOSE
  [x] inside devServer -> `host: "0.0.0.0"`
  [x] when run `docker run` need to have 8080:4000 -> second equals to EXPOSE 4000

[pr] node-sass cannot install in npm 
  because we refer to node_modules from local to docker -> different system -> need to rebuild
  `npm run postinstall`. We can put it inside `npm start`

Jest
  [pr] need to install `@type/jest` to know describe, it... keywords for unit test
  [pr] have `"types": ["jest"]` inside tsconfig.json to recognise describe, it...
**RUNNING**
dev: http://localhost:80
prod: http://localhost:3001

**COMMANDS**
kill port
  `netstat -ano | findstr :3000` -> can get PID
  `taskkill /PID <PID> /F`

access bash in Windoes
  `docker exec -it react-webpack5-boilerplate_nginx_1 //bin/sh`