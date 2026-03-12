import { ApiCheck, AssertionBuilder } from 'checkly/constructs'

new ApiCheck('webstore-homepage-api', {
  name: 'Webstore Homepage',
  request: {
    url: 'https://demo.interintel.dev/',
    method: 'GET',
    followRedirects: true,
    skipSSL: false,
    assertions: [
      AssertionBuilder.statusCode().equals(200),
    ],
  },
  degradedResponseTime: 5000,
  maxResponseTime: 15000,
})

new ApiCheck('grafana-health-api', {
  name: 'Grafana Health',
  request: {
    url: 'https://demo.interintel.dev/grafana/api/health',
    method: 'GET',
    followRedirects: true,
    skipSSL: false,
    assertions: [
      AssertionBuilder.statusCode().equals(200),
    ],
  },
  degradedResponseTime: 5000,
  maxResponseTime: 15000,
})

new ApiCheck('jaeger-health-api', {
  name: 'Jaeger Health',
  request: {
    url: 'https://demo.interintel.dev/jaeger/api/services',
    method: 'GET',
    followRedirects: true,
    skipSSL: false,
    assertions: [
      AssertionBuilder.statusCode().equals(200),
    ],
  },
  degradedResponseTime: 5000,
  maxResponseTime: 15000,
})

new ApiCheck('feature-flags-api', {
  name: 'Feature Flags UI',
  request: {
    url: 'https://demo.interintel.dev/feature/',
    method: 'GET',
    followRedirects: true,
    skipSSL: false,
    assertions: [
      AssertionBuilder.statusCode().equals(200),
    ],
  },
  degradedResponseTime: 5000,
  maxResponseTime: 15000,
})
