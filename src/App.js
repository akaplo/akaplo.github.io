import './App.css';
import Button from "@material-ui/core/Button";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import resume from './aaron_kaplowitz_resume_02_2021.pdf';

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});
const App = () => {
  return (
    <ThemeProvider theme={ theme }>
      <div className="App">
        <header className="App-header">
          <p className="Aaron-title">
            Aaron Kaplowitz
          </p>
        </header>
        <div className={ 'Prompt-and-Buttons' }>
          <h3>What brings you by?</h3>
          <Button variant={ 'outlined' }>Learn about Aaron</Button>
          <Button href={ resume } target={ '_blank' } variant={ 'outlined' }>Just a résumé</Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
