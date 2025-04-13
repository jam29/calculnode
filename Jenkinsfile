pipeline {
    agent any
     tools {
        nodejs 'node' // Utilisation de Node.js configuré dans Jenkins
    }
    
    environment {
        NODE_ENV = 'test'
    }
    
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                sh 'echo DEEPPPLLOOYY'
            }
        }
    }
}