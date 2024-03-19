module.exports = {
    apps: [
      {
        name: "MovieAdvisor backend",
        script: "./dist/src/server.js",
        env_production: {
          NODE_ENV: "production",
        },
      },
    ],
  };