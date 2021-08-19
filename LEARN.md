 
1. Docker command
 - `docker build -t react-webpack5:dev .`
 
 - `docker run -it --rm -v 'D:\2. Code\1.learn code\7.template\react-webpack5-boilerplate':/app -p 8080:3000 -e CHOKIDAR_USEPOLLING=true react-webpack5:dev`

 - if using docker-compose
  - `docker-compose up`

[pr] Fix mapping port in React webpack 5
  [x] EXPOSE 4000 in Dockerfile
  [x] inside webpack, devServer -> port = port from EXPOSE
  [x] inside devServer -> `host: "0.0.0.0"`
  [x] when run `docker run` need to have 8080:4000 -> second equals to EXPOSE 4000

[pr] node-sass cannot install in npm 
  because we refer to node_modules from local to docker -> different system -> need to rebuild
  `npm run postinstall`. We can put it inside `npm start`

