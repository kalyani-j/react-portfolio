import './App.css';
import Header from './components/header';
import About from './components/about';
import Skills from './components/skills';
import ProjectList from './components/projectList';
import Contact from './components/contact';

function App() {
  return (
    <>
      <Header></Header>
      <main className={"container d-flex flex-column"}>
        <About></About>
        <Skills></Skills>
        <ProjectList></ProjectList>
      </main>
      <Contact></Contact>
    </>
  );
}

export default App;
