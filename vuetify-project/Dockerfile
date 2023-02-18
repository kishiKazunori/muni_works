FROM node:18-alpine

WORKDIR /app


ENV LANG=C.UTF-8 \
    TZ=Asia/Tokyo

# package.json と yarn.lock をコピー
COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile
RUN yarn add three
RUN yarn add @types/three --dev
RUN yarn install
# EXPOSE 5173




