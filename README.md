# 🎵 LET IT BE - Music Streaming Platform

A music streaming web application demonstrating an end-to-end DevOps CI/CD workflow using GitHub, Jenkins, Docker, Docker Hub, Docker Compose, Apache HTTP Server, and AWS EC2.

---

# 📖 Project Overview

LET IT BE is a lightweight music streaming web application developed using HTML, CSS, and JavaScript.

The primary goal of this project is to demonstrate practical DevOps concepts by automating the build, containerization, image management, and deployment process using industry-standard tools.

The application is deployed inside a Docker container running Apache HTTP Server on an AWS EC2 Free Tier instance, providing a cost effective cloud environment for implementing and demonstrating DevOps practices while minimizing infrastructure costs.
---

# 🎯 Project Objectives

- Develop a responsive music streaming web application.
- Implement version control using Git and GitHub.
- Automate the build process using Jenkins.
- Containerize the application with Docker.
- Store Docker images in Docker Hub.
- Deploy the application using Docker Compose.
- Host the application on an AWS EC2 instance.
- Demonstrate a complete CI/CD workflow from code commit to deployment.

---

# 🏗 Architecture

```
                GitHub Repository
                       │
                       ▼
             Jenkins CI/CD Pipeline
                       │
                       ▼
              Docker Image Build
                       │
                       ▼
             Push Image to Docker Hub
                       │
                       ▼
         Docker Compose Deployment
                       │
                       ▼
      Apache HTTP Server Container
                       │
                       ▼
      LET IT BE Music Streaming App
```

---

# 🛠 Technology Stack

## Frontend

- HTML5
- CSS3
- JavaScript

## DevOps & Cloud

- Git
- GitHub
- Jenkins
- Docker
- Docker Hub
- Docker Compose
- Apache HTTP Server
- AWS EC2 (Ubuntu)

---

# ✨ Features

- Modern Spotify inspired user interface
- Music player interface
- Genre-based filtering
- Dynamic song loading using JSON
- Responsive web design
- Dockerized application deployment
- Automated CI/CD pipeline
- Containerized Apache web server
- Cloud deployment on AWS EC2

---

# 🔄 CI/CD Workflow

1. Developer pushes source code to GitHub.
2. Jenkins automatically pulls the latest source code.
3. Jenkins builds a Docker image.
4. Docker image is tagged and pushed to Docker Hub.
5. Docker Compose pulls the latest image.
6. Apache HTTP Server serves the application from the Docker container.
7. Users access the deployed application hosted on AWS EC2.

---

# ⚙ Jenkins Pipeline Stages

- Git Checkout
- Docker Image Build
- Docker Image Tagging
- Docker Hub Push
- Docker Compose Deployment
- Deployment Verification

---

# 📁 Project Structure

```
letitbe-music/

├── Dockerfile
├── docker-compose.yml
├── index.html
├── drakystyle.css
├── drakyscript.js
├── songs.json
├── README.md
└── LICENSE
```

---


## Clone Repository

```bash
git clone https://github.com/your-username/letitbe-music.git

cd letitbe-music
```

---

# 🐳 Docker

## Build Docker Image

```bash
docker build -t letitbe:v1 .
```

## Run Container

```bash
docker run -d -p 8080:80 letitbe:v1
```

---

# 📦 Docker Hub

Tag Image

```bash
docker tag letitbe:v1 <dockerhub-username>/letitbe:v1
```

Push Image

```bash
docker push <dockerhub-username>/letitbe:v1
```

---

# 🐋 Docker Compose

Deploy

```bash
docker compose up -d
```

Verify

```bash
docker ps
```

---

# ☁ AWS Deployment

The application is deployed on an Ubuntu-based AWS EC2 Free Tier instance.

Deployment includes:

- Jenkins Pipeline
- Docker Engine
- Docker Compose
- Apache HTTP Server Container
- Public EC2 Instance Hosting

---

# 💡 Skills Demonstrated

- Git & GitHub
- Jenkins CI/CD
- Docker & Docker Compose
- Docker Hub
- Linux Administration
- Apache HTTP Server
- AWS EC2
- DevOps Automation

---

# Future Improvements

- HTTPS with Let's Encrypt
- Kubernetes Deployment
- Monitoring with Prometheus & Grafana
- Infrastructure as Code with Terraform

---

# 👨‍💻 Author

**Ashin Antony**

Aspiring DevOps Engineer

- GitHub: https://github.com/ashinantony111
- LinkedIn: https://www.linkedin.com/in/ashin-antony-7186b3389?utm_source=share_via&utm_content=profile&utm_medium=member_android
