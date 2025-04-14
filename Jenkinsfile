pipeline {
    agent any

    tools {
        nodejs 'nodejs' // Utilisation de Node.js configuré dans Jenkins
    }

    environment {
        NODE_ENV = 'test'
        SONARQUBE_SCANNER_HOME = tool 'sonar-scanner' // nom défini dans Jenkins
    }

    stages {

        stage('Test Sonar Connection') {
            steps {
                sh 'curl -v http://sonarqube:9000'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test -- --coverage' // nécessaire pour sonar si tu veux le coverage
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') { // nom du serveur défini dans Jenkins
                    sh """
                    ${env.SONARQUBE_SCANNER_HOME}/bin/sonar-scanner \
                        -Dsonar.projectKey=calculnode \
                        -Dsonar.projectName="Calcul Node" \
                        -Dsonar.sources=src \
                        -Dsonar.tests=tests \
                        -Dsonar.inclusions=src/**/*.js \
                        -Dsonar.test.inclusions=tests/**/*.test.js \
                        -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info
                    """
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Deploy') {
            steps {
                sh 'echo DEEPPPLLOOYY'
            }
        }
    }
}
