FROM node:0.12.7

RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/web
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm install --production
RUN cnpm install --global gulp
WORKDIR /usr/src/app
# COPY ./web/bower.json /usr/src/app/web/bower.json
# RUN npm install bower -g
# RUN bower install --allow-root
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN gulp
EXPOSE 5000
CMD [ "npm", "run", "start:prod" ]