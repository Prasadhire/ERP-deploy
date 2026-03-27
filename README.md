# 🚀 ERP Deployment using DevOps (Docker + Jenkins)

This project demonstrates a complete end-to-end DevOps workflow for deploying a full-stack ERP system using Docker and Jenkins. It includes containerization, CI/CD pipeline setup, and role-based authentication.

---

## 📌 Tech Stack

* **Frontend:** React (Vite)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **CI/CD:** Jenkins
* **Containerization:** Docker & Docker Compose
* **Security Scanning:** Trivy
* **Version Control:** Git & GitHub

---

## ⚙️ Key Features

* Full-stack ERP system (Frontend + Backend + Database)
* Role-based authentication (Admin, Manager, Developer)
* Dockerized multi-container architecture
* CI/CD pipeline using Jenkins (Pipeline as Code)
* Automated Docker image build and push
* Deployment using Docker Compose
* Persistent MongoDB storage using Docker volumes
* Security scanning using Trivy

---

## 📁 Project Structure

```
ERP-Deploy/
│── Backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── server.js
│   └── package.json
│
│── Frontend/
│   ├── src/
│   └── package.json
│
│── docker-compose.yml
│── Jenkinsfile
│── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```
git clone https://github.com/Prasadhire/ERP-deploy.git
cd ERP-deploy
```

---

### 2️⃣ Start the Application

```
docker compose up -d
```

---

### 3️⃣ Access the Application

* Frontend → http://localhost:3000
* Backend → http://localhost:5000

---

## 🔐 Test Credentials

| Role      | Email                                                 | Password |
| --------- | ----------------------------------------------------- | -------- |
| Admin     | [admin@example.com](mailto:admin@example.com)         | admin123 |
| Manager   | [manager@example.com](mailto:manager@example.com)     | admin123 |
| Developer | [developer@example.com](mailto:developer@example.com) | admin123 |

---

## ⚙️ Docker Setup

### Multi-Container Services:

* MongoDB (Database)
* Backend (Node.js API)
* Frontend (React App)

### Run Containers:

```
docker compose up -d
```

### Stop Containers:

```
docker compose down
```

### Notes:

* MongoDB data is persisted using Docker volumes
* Data will not be lost unless volumes are removed manually

---

## 🔄 CI/CD Pipeline (Jenkins)

This project uses Jenkins Pipeline as Code (Jenkinsfile) for automation.

---

### 📌 Jenkins Setup Steps

1. Open Jenkins Dashboard
2. Create a new **Pipeline Job**
3. Select:

```
Pipeline script from SCM
```

4. Choose SCM:

```
Git
```

5. Add Repository URL:

```
https://github.com/Prasadhire/ERP-deploy.git
```

6. Set Script Path:

```
Jenkinsfile
```

7. Click **Build Now**

---

## 🔁 Pipeline Stages

The Jenkins pipeline includes the following stages:

1. **Code Checkout** – Pulls code from GitHub
2. **Build Stage** – Builds Docker images for frontend and backend
3. **Trivy Scan** – Scans images for vulnerabilities
4. **Docker Push** – Pushes images to DockerHub
5. **Deploy Stage** – Deploys containers using Docker Compose

---

## 🔐 Authentication System

* Passwords are securely hashed using bcrypt
* JWT (JSON Web Token) is used for authentication
* Role-based access control implemented

---

## 🧠 Key Learnings

* Docker containerization and multi-container architecture
* CI/CD pipeline implementation using Jenkins
* Debugging container networking issues
* Managing persistent data using Docker volumes
* Secure authentication using bcrypt and JWT
* Handling real-world deployment issues

---

## 🚧 Challenges Faced

* MongoDB connection issues inside Docker containers
* Password hashing mismatch during authentication
* Docker image caching issues
* Jenkins pipeline configuration errors

---

## 📈 Future Improvements

* Add GitHub Webhook for full CI/CD automation
* Deploy application on AWS EC2
* Implement Kubernetes for orchestration
* Add monitoring (Prometheus + Grafana)

---

## 👨‍💻 Author

**Prasad Hire**

---

## ⭐ Conclusion

This project demonstrates practical DevOps skills including containerization, CI/CD automation, and deployment strategies, making it a strong real-world project for learning and interviews.

