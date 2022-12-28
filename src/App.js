import "./App.css";
import logo from "./assets/baby-carriage-solid.svg";
function App() {
 

  return (
    <>
    <header data-testid='header'>
      <img className='logo' src={logo} alt="baby-carriage-solid" />
      <h3 data-testid='company-name'>Our Future...</h3>
    </header>
    </>
  );
}

export default App;
  