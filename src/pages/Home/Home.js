import './Home.css';
import logo from './logo.svg';
import { useTheme } from '@mui/material/styles';

function Home() {
  const theme = useTheme()
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p style={{ color: theme.palette.text.primary }}>
          Edit <code>src/Home.js</code> and save to reload.
        </p>
        <a
          className="Home-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: theme.palette.text.link }}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
