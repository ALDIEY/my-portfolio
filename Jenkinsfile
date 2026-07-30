pipeline {
    agent any

    environment {
        IMAGE_REPO = 'portfolio'
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials')
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Lint') {
            steps {
                // Jenkins talks to the *host* Docker daemon (via the mounted
                // socket), so a literal $WORKSPACE bind-mount path means
                // nothing to it - $WORKSPACE only exists inside the jenkins
                // container's own mount namespace. --volumes-from reuses the
                // jenkins container's actual volume instead of a host path.
                sh 'docker run --rm --volumes-from jenkins -w "$WORKSPACE" node:20-alpine sh -c "npm ci && npm run lint"'
            }
        }

        stage('Build image') {
            steps {
                sh "docker build -t ${DOCKERHUB_CREDENTIALS_USR}/${IMAGE_REPO}:${BUILD_NUMBER} -t ${DOCKERHUB_CREDENTIALS_USR}/${IMAGE_REPO}:latest ."
            }
        }

        stage('Push image') {
            steps {
                sh "echo \$DOCKERHUB_CREDENTIALS_PSW | docker login -u \$DOCKERHUB_CREDENTIALS_USR --password-stdin"
                sh "docker push ${DOCKERHUB_CREDENTIALS_USR}/${IMAGE_REPO}:${BUILD_NUMBER}"
                sh "docker push ${DOCKERHUB_CREDENTIALS_USR}/${IMAGE_REPO}:latest"
            }
        }

        // stage('Deploy') {
        //     steps {
        //         // Runs once a target server is available: SSH in, pull the new
        //         // image, and restart the container. Requires an 'sshagent'
        //         // credential (SSH private key) configured in Jenkins.
        //         sshagent(credentials: ['deploy-server-ssh']) {
        //             sh """
        //                 ssh -o StrictHostKeyChecking=no <user>@<host> '
        //                     docker pull ${DOCKERHUB_CREDENTIALS_USR}/${IMAGE_REPO}:latest &&
        //                     docker stop portfolio || true &&
        //                     docker rm portfolio || true &&
        //                     docker run -d --name portfolio -p 80:80 ${DOCKERHUB_CREDENTIALS_USR}/${IMAGE_REPO}:latest
        //                 '
        //             """
        //         }
        //     }
        // }
    }

    post {
        always {
            sh 'docker logout || true'
        }
    }
}
