# vue-waving-text

[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)
[![Latest Version on NPM](https://img.shields.io/npm/v/vue-waving-text.svg?style=flat-square)](https://npmjs.com/package/vue-waving-text)

> Component to display waving text for Vue.


## Demo

**[Go to demo](https://a2exfr.github.io/vue-waving-text/)**.


## Installation

### Bundler (Webpack, Rollup...)

```bash
yarn add vue-waving-text
```

Or

```bash
npm install --save vue-waving-text
```


#### Register

##### Global

```js
import WavingText from 'vue-waving-text';

Vue.component('WavingText', WavingText);
```

##### Local

```js
import WavingText from 'vue-waving-text';

Vue.extend({
  template: '...',
  components: {
    WavingText: WavingText
  }
});
```

### Browser

Download vue and vue-waving-text or use a CDN like unpkg.

```html
<script src="vue.js"></script>
<script src="vue-waving-text.umd.js"></script>
or
<script src="https://unpkg.com/vue-waving-text/dist/vue-waving-text.umd.js"></script>

```

## Usage

With all props.

```html
<WavingText
    text="Vue waving text!"
    duration="1.1"
    side="30"
    fontsize="56"
    textClass="myClass"
    fromcolor="white"
    tocolor="#95b0ad"
/>
```

## Setup

### Props

Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
text (*required*) |  `String` | - | Text that waves.
duration | `String` | `0.3` | Duration of animation in sec.
side | `String` | `90` | translateY axis pixel value.
fontsize | `String` | `50` | Fony size. 
fromcolor | `white` | `50` | Animation of text color, start value. Any vaild css color.
tocolor | `black` | `50` |  Animation of text color, end value.Any vaild css color.
textClass | `String` | - | Class that apply to font.


## License

[The MIT License](http://opensource.org/licenses/MIT)
