/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2020 Metrological
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Lightning, Utils } from '@lightningjs/sdk'

import Title from './components/Title'

export default class App extends Lightning.Component {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  static _template() {
    return {
      Background: {
        w: 1920,
        h: 1080,
        color: 0xfffbb03b,
        src: Utils.asset('images/background.png'),
      },
      Logo: {
        mountX: 0.5,
        mountY: 1,
        x: 960,
        y: 600,
        src: Utils.asset('images/logo.png'),
      },
      Text: {
        mount: 0.5,
        x: 960,
        y: 720,
        text: {
          text: 'Test HMR!',
          fontFace: 'Regular',
          fontSize: 64,
          textColor: 0xbbffffff,
        },
      },
      Rectangle: {
        x: 100,
        y: 100,
        w: 200,
        h: 200,
        rect: true,
        colorTop: 0xff4188ba,
        colorBottom: 0xff254d6a,
      },
      Alius: {
        x: 300,
        y: 300,
        alpha: 0.01,
        src: Utils.asset('images/alius.png'),
      },
      Tagline: {
        type: Title,
      },
      RoundedRect: {
        zIndex: 1,
        y: 100,
        texture: Lightning.Tools.getRoundRect(1916, 120, 5, 2, 0xffff00ff, true, 0xff00ffff),
      },
    }
  }

  _init() {
    this.tag('Alius').on('txLoaded', () => {
      this.tag('Alius').setSmooth('alpha', 1, { duration: 1, timingFunction: 'ease-in-out' })
    })
    this.tag('Background')
      .animation({
        duration: 15,
        repeat: -1,
        actions: [
          {
            t: '',
            p: 'color',
            v: {
              0: { v: 0xfffbb03b },
              0.5: { v: 0xfff46730 },
              0.8: { v: 0xfffbb03b },
            },
          },
        ],
      })
      .start()
  }
}
