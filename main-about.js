import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="index.html" target="">
      <img src="/vite.svg" class="logo" alt="ZippyTraffic" />
    </a>
    
    <h1>ZippyTraffic!</h1>
    
    <div class="card">
    <h2>Traffic Exchange 1 for 1</h2>
    
    
    <!--
    
    <a href="https://bit.ly/zippytraffic" target="_blank">

    <button id="counter" type="button"></button>
    
    -->
  </a>
     
    </div>
    <p class="read-the-docs">
      Click on the logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
