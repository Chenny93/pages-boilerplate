const args = process.argv.slice(2)
let data = null
if(args.includes('--production')){
  data = require('./_prod')
}else{
  data = require('./_dev')
}

module.exports = {
  data,
  devServe:{
    host:'localhost',
    port:3000,
    https:true,
  },
  build: {
    src: 'src',
    dist: 'dist',
    tmp: '.tmp',
    static: 'public',
    paths: {
      styles: 'assets/styles/*.scss',
      scripts: 'assets/scripts/*.js',
      htmls: '*.html',
      images: 'assets/images/**',
      fonts: 'assets/fonts/**'
    }
  }
}
