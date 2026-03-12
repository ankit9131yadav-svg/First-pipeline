pipeline {
    agent any

    stages {

        stage('Clone Repo') {
            steps {
                git 'https://github.com/username/devops-demo-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker stop devops-container || true'
                sh 'docker rm devops-container || true'
                sh 'docker run -d -p 5000:5000 --name devops-container devops-app'
            }
        }

    }
}
