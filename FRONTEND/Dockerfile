FROM node:20.10.0 as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm ci

RUN npm run build


FROM nginx:1.24.0

COPY --from=build /usr/local/app/dist/frontend /usr/share/nginx/html

EXPOSE 80
