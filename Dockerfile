# pull official base image
FROM node:16.6.2 as build-stage
# set working directory, for RUN, CMD, ENTRYPOINT, COPY...
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
# can use = or not, it's alternative
ENV PATH=/app/node_modules/.bin:$PATH

# COPY package json file to inside /app
COPY package.json ./
COPY package-lock.json ./

# ARG NODE_ENV="development"
# RUN if [ "$NODE_ENV" = "development" ]; \
#   then npm install; \
#   else npm install --only=prod --ignore-scripts; \
#   fi
RUN npm install

# [learn] just using /bin/bash and to run command line
RUN /bin/bash -c 'echo $PATH'
# [learn] can use `COPY ./ /app/` -> `. = ./` AND `./ = /app/`
COPY . ./ 
RUN npm run build 
# COPY --from=build-stage /app/dist /usr/share/nginx/html
# RUN cd dist && ls
ENV PORT 3000
EXPOSE $PORT
# start app
CMD ["npm", "start"] 
