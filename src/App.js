import './App.css';
import SignIn from "./SignIn"
import SignUp from './SignUp';
import StartingPage from './StartingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const defaultTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#F74F4D',
      },
      secondary: {
        main: '#fed766',
      },
      background: {
        default: '#fed766',
      }
    },
  });

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<StartingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
    </ThemeProvider>
  );
}


export default App;
