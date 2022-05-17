exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  createPage({
    path: '/',
    component: require.resolve('./src/pages/index.js'),
    context: {},
    defer: true,
  });
};
