import './App.css';
import Header from './components/header';
import About from './components/about';

function App() {
  return (
    <div>
      <Header></Header>
      <main className={"container mb-2"}>
        <About></About>
      </main>
    </div>
  );
}

export default App;
