# Use Python slim image
FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Copy app and requirements
COPY ./app /app
COPY requirements.txt /app/requirements.txt

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port Flask runs on
EXPOSE 5000

# Run the Flask app
CMD ["python", "app.py"]
