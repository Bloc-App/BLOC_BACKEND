module.exports = {
  apps: [{
    name: 'LASRERAMS',
    instances: 'max',
    exec_mode: 'cluster',
    script: '/apps/laseara/backend/bin/www',
    env: {
      NODE_ENV: 'development'
    },
    env_staging: {
      NODE_ENV: 'staging'
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 5008
    }
  }]
}
