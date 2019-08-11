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