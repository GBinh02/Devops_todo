# Stage 1: Build
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
# Xóa lock file để npm tự resolve lại đúng platform (linux-musl)
RUN rm -f package-lock.json && npm install

COPY . .

ARG VITE_API_URL=http://localhost:3001
ENV VITE_API_URL=$VITE_API_URL

RUN npm run build

# Stage 2: Serve
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]