import './App.css'
import { ThemeSwitch } from './ThemeSwitch'
import { UserSwitch } from './UserSwitch'
import { LoginProvider } from './context/LoginContext'
import { ThemeProvider } from './context/ThemeContext'

function App() {

  return (
    <>
      <ThemeProvider>
        <ThemeSwitch></ThemeSwitch>
      </ThemeProvider>      
      <LoginProvider>
        <UserSwitch></UserSwitch>
      </LoginProvider>
    </>
  )
}

export default App
