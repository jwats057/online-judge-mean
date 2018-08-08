//mongodb_url: "mongodb://stage_dev:abc123@ds163781.mlab.com/onlinejudge_dev",
//mongodb_url: "mongodb://stage_user:abc123@ds121248.mlab.com:21248/onlinejudge_stage",

const env = process.env.NODE_ENV; // 'local', 'dev', 'stage'
const app = {
  secret: "jwt-secret-key-johnny-abc123",
  port: parseInt(process.env.PORT) || 5000,
  request_delay: 0, // unit: seconds, 0: no delay
  temp_directory: "compiler/temp/uploads",
  cors_client_url: "http://localhost:12080"
};
const local = {
  app: app,
  db: {
    host: process.env.LOCAL_DB_HOST || "testuser:abc123@localhost",
    port: parseInt(process.env.LOCAL_DB_PORT) || 27017,
    name: process.env.LOCAL_DB_NAME || "onlinejudge"
  }
};
const dev = {
  app: app,
  db: {
    host: process.env.DEV_DB_HOST || "dev_user:abc123@ds163781.mlab.com",
    port: parseInt(process.env.DEV_DB_PORT) || 63781,
    name: process.env.DEV_DB_NAME || "onlinejudge_dev"
  }
};
const stage = {
  app: app,
  db: {
    host: process.env.STAGE_DB_HOST || "stage_user:abc123@ds121248.mlab.com",
    port: parseInt(process.env.STAGE_DB_PORT) || 21248,
    name: process.env.STAGE_DB_NAME || "onlinejudge_stage"
  }
};
const production = {
  app: app,
  db: {
    // WARNING: DO NOT MAINTAIN PRODUCTION DATABASE INFORMATION HERE
    host: process.env.PROD_DB_HOST,
    port: parseInt(process.env.PROD_DB_PORT),
    name: process.env.PROD_DB_NAME
  }
};

const config = {
  local,
  dev,
  stage,
  production
};

module.exports = config[env || "local"];
