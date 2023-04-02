import Main from 'container/Main/Main'
import './App.scss'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'

type Props = {}

const App = (props: Props) => {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Main />
    </StyledEngineProvider>
  )
}

export default App
