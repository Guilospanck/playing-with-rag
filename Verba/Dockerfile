FROM python:3.11
WORKDIR /Verba
COPY . /Verba
# Install Node.js (Debian-based image)
RUN apt-get update && apt-get install -y nodejs npm \
    && cd frontend && npm install && npm run build \
    && cd .. \
    && apt-get purge -y --auto-remove npm \
    && rm -rf /var/lib/apt/lists/*
RUN pip install '.'
EXPOSE 8000
CMD ["ragit", "start","--port","8000","--host","0.0.0.0"]
