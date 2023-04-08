import React from 'react'

import { Button } from 'ozlemezgubuton'
import 'ozlemezgubuton/dist/index.css'

const App = () => {
  return (
    <>
      <Button type='secondary' text='Click Me' /> 
      <br />
      <br />
      <Button type='primary' text='Click Me' /> 
      <br />
      <br />
      <Button type='dotted' text='Click Me' /> 
      <br />
      <br />
      <Button type='link' text='Click Me' />
    </>
  ) 
}

export default App
