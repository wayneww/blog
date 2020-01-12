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
        git credentialsId: '1f6920be-426a-4ddb-a3d5-be8733fea79e', url: 'https://github.com/cjm0/blog.git'
      }
    }
    stage('配置环境') {
      steps {
        sh 'yarn --version'
        sh "yarn config set registry 'https://registry.npm.taobao.org'"
        sh 'yarn install'
      }
    }
    stage('打包给生产使用') {
      steps {
        sh 'yarn build'
      }
    }
    stage('重新打包并推送到 github pages') {
      steps {
        sh './github.sh'
      }
    }
  }
}
