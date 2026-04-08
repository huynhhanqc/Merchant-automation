pipeline {
  agent {
    // Dùng Docker image Playwright chính thức — có sẵn browsers + dependencies
    docker {
      image 'mcr.microsoft.com/playwright:v1.49.0-jammy'
      args '--ipc=host'
    }
  }

  options {
    timeout(time: 60, unit: 'MINUTES')
    buildDiscarder(logRotator(numToKeepStr: '20'))
    disableConcurrentBuilds()
  }

  parameters {
    string(
      name: 'TEST_GREP',
      defaultValue: '',
      description: 'Filter tests by name (e.g. @smoke). Leave empty to run all.'
    )
    choice(
      name: 'TEST_SUITE',
      choices: ['all', 'quotation', 'pgpb', 'auth'],
      description: 'Which test suite to run'
    )
  }

  environment {
    BASE_URL         = credentials('MERCHANT_BASE_URL')
    LOGIN_USER_ADMIN = credentials('MERCHANT_LOGIN_USER_ADMIN')
    LOGIN_PASS_ADMIN = credentials('MERCHANT_LOGIN_PASS_ADMIN')
    CI               = 'true'
  }

  stages {
    stage('Install') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Test') {
      steps {
        script {
          def suitePath = params.TEST_SUITE == 'all' ? '' : "tests/${params.TEST_SUITE}/"
          def grepFlag  = params.TEST_GREP ? "--grep \"${params.TEST_GREP}\"" : ''
          sh "npx playwright test ${suitePath} ${grepFlag}"
        }
      }
    }
  }

  post {
    always {
      // Publish HTML report (requires HTML Publisher plugin)
      publishHTML(target: [
        allowMissing:          false,
        alwaysLinkToLastBuild: true,
        keepAll:               true,
        reportDir:             'playwright-report',
        reportFiles:           'index.html',
        reportName:            'Playwright HTML Report'
      ])

      // Publish JUnit results (native Jenkins test results)
      junit(
        testResults:          'test-results/junit.xml',
        allowEmptyResults:    true
      )

      // Archive trace & screenshots on failure
      archiveArtifacts(
        artifacts:     'test-results/**/*',
        allowEmptyArchive: true
      )
    }

    failure {
      emailext(
        to:      '${DEFAULT_RECIPIENTS}',
        subject: "FAILED: ${env.JOB_NAME} [${env.BUILD_NUMBER}]",
        body:    """
          Build failed: ${env.BUILD_URL}
          Branch: ${env.GIT_BRANCH}
          See Playwright report for details.
        """
      )
    }
  }
}
