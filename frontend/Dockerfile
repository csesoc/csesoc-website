# Use Node version 18
FROM node:18

# Copy all files to /app
WORKDIR /app
COPY . .

# Install dependencies and build the project
RUN npm install
RUN npm run build

# Run on port 3000
EXPOSE 3000

# Start the server
CMD [ "npm", "start" ]