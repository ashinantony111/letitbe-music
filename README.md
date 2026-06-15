# LET IT BE - Music Streaming Platform

## Project Overview

LET IT BE is a music streaming web application built using HTML, CSS, and JavaScript. This project demonstrates a complete DevOps workflow including source code management, CI/CD automation, containerization, image management and application deployment using industry standard tools.

---

## Architecture

GitHub
↓
Jenkins
↓
Docker Build
↓
Docker Hub
↓
Docker Compose
↓
Apache Container
↓
LET IT BE Music Platform

---

## Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### DevOps Tools

* GitHub
* Jenkins
* Docker
* Docker Hub
* Docker Compose
* Apache HTTP Server

---

## Features

* Modern Spotify-inspired UI
* Music player interface
* Genre-based filtering
* Dynamic song loading using JSON
* Responsive design
* Multi-page navigation
* Dockerized deployment
* Automated CI/CD pipeline with Jenkins

---

## CI/CD Workflow

1. Developer pushes code to GitHub
2. Jenkins automatically pulls the latest source code
3. Docker image is built
4. Docker image is pushed to Docker Hub
5. Docker Compose deploys the latest container
6. Apache serves the application

---

## Docker Build

Build Docker Image

```bash
docker build -t letitbe:v1 .
```

Run Container

```bash
docker run -d -p 8080:80 letitbe:v1
```

---

## Docker Hub

Push image to Docker Hub

```bash
docker tag letitbe:v1 <dockerhub-username>/letitbe:v1

docker push <dockerhub-username>/letitbe:v1
```

---

## Docker Compose

Deploy application

```bash
docker compose up -d
```

Verify running containers

```bash
docker ps
```

---

## Jenkins Pipeline Stages

* Git Checkout
* Docker Build
* Docker Image Tagging
* Docker Hub Push
* Deployment Verification

---

## Screenshots

### GitHub Repository

* Source code
* Dockerfile
* docker-compose.yml
* README.md

### Jenkins Pipeline

* Successful build
* Docker image build stage
* Docker Hub push stage

### Docker Hub Repository

* Published image
* Image version tags

### Running Container

* docker ps output

### LET IT BE Application

* Homepage
* Music Player Interface
* Responsive UI

---

## Future Improvements

* SSL Integration
* Kubernetes Deployment
* Monitoring and Logging
* Multi-Container Architecture
* Automated Production Deployment
