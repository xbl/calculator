pipeline {
    agent any
    tools {nodejs "node"}
    environment {
        CI = 'true' 
        TRAVIS_SURGE_TOKEN = '6e7b9c223edf69e0711f04efa0d3b67c'
    }

    triggers{
        pollSCM('*/1 * * * *')
    }

    stages {
        stage('Install Dependencies') {
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

        stage('Tag') {
            steps {
                sh "npm version v1.0.${env.BUILD_NUMBER} -git-tag-version false"
                sh 'npm pack' 
                archiveArtifacts artifacts: '*.tgz', fingerprint: true
            }
        }

        stage('Deploy') {
            steps {
                sh 'npm run deploy'
                cleanWs()
            }
        }
    }
}