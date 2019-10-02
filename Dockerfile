FROM mhart/alpine-node:11 AS builder
WORKDIR /app
COPY . .
RUN npm install --global parcel-bundler
RUN npm install
RUN npm run build

FROM mhart/alpine-node
RUN npm install serve --global
WORKDIR /app
EXPOSE 80
COPY --from=builder /app/dist .
CMD ["serve", "-p", "80", "-s", "."]