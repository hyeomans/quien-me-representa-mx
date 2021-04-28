FROM node:14

WORKDIR /app

COPY *.json /app/
COPY *.lock /app/

RUN yarn install
COPY . /app/
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
