# ozlemezgubuton

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/ozlemezgubuton.svg)](https://www.npmjs.com/package/ozlemezgubuton) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save ozlemezgubuton
```

## Usage

```tsx
import React, { Component } from 'react'

import { Button } from 'ozlemezgubuton'
import 'ozlemezgubuton/dist/index.css'

class Example extends Component {
  render() {
    return (<>
     <Button type='secondary' text='Click Me' /> 
      <Button type='primary' text='Click Me' /> 
      <Button type='dotted' text='Click Me' /> 
      <Button type='link' text='Click Me' />
    </>)
  }
}
```


## Ekran Görüntüsü

![Uygulama ekran görüntüsü](./img/resim.png)


## License

MIT © [ozlemezgi](https://github.com/ozlemezgi)
