const CONFIGURATION = {
  'development': {
    'dialect': 'postgres',
    'username': process.env.NODE_ENV.POSTGRES_USERNAME,
    'password': process.env.NODE_ENV.POSTGRES_PASSWORD,
    'database': 'chatAssist_development',
    'jwtSecret': 'chatAssist_development_MySuperDuperSecret',
    'jwtExpiration': 30 // seconds
  }
};

const env = process.env.NODE_ENV || 'development';

module.exports = CONFIGURATION[env];
