module.exports = {
  "use": ["postcss-import", "postcss-mixins", "postcss-nested", "autoprefixer"],
  "autoprefixer": {
    "browsers": "> 1%, last 5 versions"
  },
  "postcss-import": {
    "onImport": function(sources) {
      global.watchCSS(sources);
    }
  },
  "input": "./assets/css/main.css",
  "output": "./assets/css/styles.css"
}
