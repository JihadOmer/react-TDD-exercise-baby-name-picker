import './App.css';
import logo from './assets/baby-carriage-solid.svg';
import babyNamesData from './babyNamesData.json';
import BabyName from './components/BabyName';
function App() {
  const BabyNameList = babyNamesData.map((baby) => {
    return (
      <BabyName key={baby.id} name={baby.name} id={baby.id} sex={baby.sex} />
    );
  });

  return (
    <>
      <header data-testid='header'>
        <img className='logo' src={logo} alt='baby-carriage-solid' />
        <h3 data-testid='company-name'>Our Future...</h3>
      </header>
      <main className='App'>
        <ul className='babyCardContainer'>{BabyNameList}</ul>
      </main>
    </>
  );
}

export default App;
