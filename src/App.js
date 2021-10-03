import './App.css';
import Header from './components/header';
import About from './components/about';
import Skills from './components/skills';
import ProjectList from './components/projectList';

function App() {
  return (
    <div>
      <Header></Header>
      <main className={"container mb-2 d-flex flex-column"}>
        <About></About>
        <Skills></Skills>
        <ProjectList></ProjectList>
      </main>
    </div>
  );
}

export default App;
