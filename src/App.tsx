import reactLogo from './assets/react.svg'
import './App.scss'

function App() {
  const microAppConfig = {
    name:'app1',
    url:'',// set your micro app url
    baseroute:'/'
  };
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <micro-app {...microAppConfig} />
      </div>
    </div>
  )
}

export default App
