module.exports = {
  apps: [
    {
      name: "NextAppName",
      script: "npm",
      args: "start",
      watch: ".",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
