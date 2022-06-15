const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
    alias({
      '@icons': 'src/assets/icons',
      '@logos': 'src/assets/logos',
      '@components': 'src/components',
      '@containers': 'src/containers',
      '@pages': 'src/pages',
      '@routes': 'src/routes',
      '@styles': 'src/styles'
    })(config);
  
    return config;
  };