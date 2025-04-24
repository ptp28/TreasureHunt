# Use Node.js for client
FROM node:22 AS client
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ .
RUN npm run build

# Use Python for Django server
FROM python:3.12 AS server
WORKDIR /app

# Copy client build
COPY --from=client /app/client/dist /app/client/dist

# Install Python dependencies
COPY server/requirements.txt .
RUN pip install -r requirements.txt

# Copy server code
COPY server/ /app/server/

# Set working directory to server folder
WORKDIR /app/server

# Expose port for Django
EXPOSE 8000

# Run migrations and create superuser
RUN python manage.py makemigrations && \
    python manage.py migrate

# Run Django server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]