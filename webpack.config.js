module.exports = {
  devServer: {
    client: {
      overlay: {
        runtimeErrors: false,
      },
    },
  },
  resolve: {
    fallback: {
      fs: false,
      vm: false,
    },
  },
};
