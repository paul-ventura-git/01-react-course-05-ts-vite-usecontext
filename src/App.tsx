import './App.css'
import { ThemeSwitch } from './ThemeSwitch'
import { ThemeProvider } from './context'

function App() {

  return (
    <>
      <ThemeProvider>
        <ThemeSwitch></ThemeSwitch>
      </ThemeProvider>      
    </>
  )
}

export default App
