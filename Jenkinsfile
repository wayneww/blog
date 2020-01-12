#!/usr/bin/env groovy

pipeline {
  agent {
    docker {
      image 'node:12-alpine3.10'
      args '-p 6001:6001'
    }
  }
  environment {
    CI = 'true'
  }
  stages {
    stage('拉取代码') {
      steps {
        git '/home/1.我的资料/13.前端工程化/jenkins/vue-jenkins'
      }
    }
    stage('配置环境') {
      steps {
        sh 'yarn --version'
        sh "yarn config set registry 'https://registry.npm.taobao.org'"
        sh 'yarn install'
      }
    }
    stage('打包') {
      steps {
        sh 'yarn build'
      }
    }
    stage('推送到 github pages') {
      steps {
        sh './jenkins/scripts/deliver.sh'
        input message: 'Finished using the web site? (Click "Proceed" to continue)'
        sh './jenkins/scripts/kill.sh'
      }
    }
  }
}
