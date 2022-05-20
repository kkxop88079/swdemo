import { tw, setup } from 'twind'

const config = {
  theme: {
    extend: {
      colors: {
        bg: '#141414'
      }
    }
  }
}

setup(config)

export default {
  install: (app) => {
    app.config.globalProperties.tw = tw
  },
}