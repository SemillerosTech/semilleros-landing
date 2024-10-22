# Use nginx as base image
FROM nginx:alpine

# Copy static files from build directory to nginx directory
COPY build/ /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf  # <= This line solved my issue
COPY nginx.conf /etc/nginx/conf.d

# Expose port 80 to the outside world
EXPOSE 80

# Run nginx
CMD ["nginx", "-g", "daemon off;"]