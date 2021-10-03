import './App.css';
import Header from './components/header';
import About from './components/about';
import Skills from './components/skills';

function App() {
  return (
    <div>
      <Header></Header>
      <main className={"container mb-2 d-flex flex-column"}>
        <About></About>
        <Skills></Skills>
      </main>
    </div>
  );
}

export default App;
