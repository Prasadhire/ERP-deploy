pipeline{
    agent any
    stages{
        stage("Code"){
            steps{
                git url:"https://github.com/Prasadhire/ERP-deploy.git",branch:"main"
            }
        }
        stage("Build"){
            steps{
                sh "docker build -t prasadhire/erp-backend ./Backend"
                sh "docker build -t prasadhire/erp-frontend ./Frontend"
            }
        }
        stage("Trivy scan t"){
            steps{
                sh "trivy image -f json -o back_report.json prasadhire/erp-backend"
                sh "trivy image -f json -o front_report.json prasadhire/erp-frontend"
            }
        }
        stage("Docker push"){
            steps{
                withCredentials([usernamePassword(
                    credentialsId:"Docker Hub access",
                    usernameVariable:"Docker_user",
                    passwordVariable:"Docker_pass"
                    )]){
                    sh "docker login -u $Docker_user -p $Docker_pass"
                    sh "docker push prasadhire/erp-backend"
                    sh "docker push prasadhire/erp-frontend"
                }
            }
        }
        stage("Deploy"){
            steps{
                sh "kubectl apply -f k8s/"
            }
        }
    }
}
