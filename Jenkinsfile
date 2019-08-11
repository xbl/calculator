pipeline {
    agent any
    tools {nodejs "node"}
    environment {
        CI = 'true' 
    }
    stages {
        stage ('Checkout Code') {
            steps {
                git credentialsId: 'a566aaec-549c-442d-8df1-9313dceb2ca2', url: 'http://gitlab.example.com/root/calculator.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Unit Test') {
            steps {
                sh 'npm run test:unit'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                sh 'npm run deploy'
            }
        }

        stage('Tag') {
            steps {
                sh "npm version v1.0.${env.BUILD_NUMBER} -git-tag-version false"
            }
        }

        stage('Dist') {
            steps {
                sh 'npm pack' 
                archiveArtifacts artifacts: '*.tgz', fingerprint: true
                cleanWs()
            }
        }
    }
}