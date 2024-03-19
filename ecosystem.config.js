module.exports = {
  apps: [
    {
      name: "Movie Advisor backend",
      script: "./dist/src/server.js",
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
