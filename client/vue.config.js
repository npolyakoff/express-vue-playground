module.exports = {
    css: {
      loaderOptions: {
        scss: {
          prependData: `@import "~@/assets/scss/abstracts/_colors.scss";
                        @import "~@/assets/scss/abstracts/_variables.scss";`
        }
      }
    }
  }