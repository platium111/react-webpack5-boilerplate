# pull official base image
FROM node:16.6.2
# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

ARG NODE_ENV="development"
RUN if [ "$NODE_ENV" = "development" ]; \
  then npm install; \
  else npm ci --only=production --ignore-scripts; \
  fi

# add app
COPY . ./
ENV PORT 3000
EXPOSE $PORT
# start app
CMD ["npm", "start"] 
