module.exports = {

  publicPath: process.env.NODE_ENV === 'production'
  ? '/avwebapp/'
  : '/'
  ,

  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
