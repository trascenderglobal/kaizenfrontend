FROM node:14-alpine AS development

# create destination directory
RUN mkdir -p /usr/src/kaizen-front
WORKDIR /usr/src/kaizen-front

# update
RUN apk update && apk upgrade

# copy package information
COPY package.json ./
COPY yarn.lock ./

# install all dependencies
RUN yarn

# copy project
COPY . ./

# build app
RUN yarn build

FROM node:14-alpine AS production

ENV NODE_ENV=production

# create destination directory
RUN mkdir -p /usr/src/kaizen-front
WORKDIR /usr/src/kaizen-front

# update
RUN apk update && apk upgrade

# copy package information
COPY package.json ./
COPY yarn.lock ./

# install only dependencies needed for production
RUN yarn --prod

# copy build
COPY config ./config
COPY nuxt.config.js ./nuxt.config.js
COPY --from=development /usr/src/kaizen-front/.nuxt ./.nuxt

# expose port 3000 on container
EXPOSE 3000
# app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# app port
ENV NUXT_PORT=3000

CMD [ "yarn", "start" ]
