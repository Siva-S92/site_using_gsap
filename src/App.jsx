import gsap from 'gsap'
import {ScrollTrigger, SplitText} from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, SplitText)
import React from 'react'

function App() {
  return (
    <div className='text-red-500 flex-center'>App</div>
  )
}

export default App