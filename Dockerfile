FROM node:14

WORKDIR /app

COPY *.json /app/
COPY *.lock /app/

RUN yarn install --frozen-lockfile
COPY . /app/
RUN npx next telemetry disable

RUN yarn build

EXPOSE 3000


CMD ["yarn", "start"]
