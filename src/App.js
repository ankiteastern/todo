import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Todo from './pages/Todo';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <div className='parent'>
        <Header />
        <div className='main'>
          <Sidebar />
          <Todo />
        </div> 
        <Footer />
      </div>
    </>
  );
}

export default App;
