FROM node:14-alpine

# create destination directory
RUN mkdir -p /usr/src/kaizen-front
WORKDIR /usr/src/kaizen-front

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . ./
RUN yarn

# expose port 3000 on container
EXPOSE 3000

# app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# app port
ENV NUXT_PORT=3000

# build app
RUN yarn build

CMD [ "yarn", "start" ]
