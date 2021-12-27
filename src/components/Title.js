import { Lightning } from '@lightningjs/sdk'

class Title extends Lightning.Component {
  static _template() {
    return {
      x: 0,
      y: 100,
      zIndex: 2,
      w: 1920, // How could this match the width of the entire canvas?
      text: {
        text: this.textData,
        textAlign: 'center',
        fontSize: 72,
      },
    }
  }

  _init() {
    console.log('Title initiated')
  }
}

export default Title
