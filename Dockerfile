FROM node:20-alpine

WORKDIR /app
COPY . .
RUN npm install .
RUN npx next telemetry disable
RUN npm run build

CMD ["npm", "run", "start"]
