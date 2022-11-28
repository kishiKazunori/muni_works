FROM node:18-alpine

WORKDIR /app


ENV LANG=C.UTF-8 \
    TZ=Asia/Tokyo

COPY ./vuetify-project/package.json ./vuetify-project/yarn.lock ./vuetify-project/

RUN yarn install
# EXPOSE 5173




