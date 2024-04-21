import './App.css';
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <main className='container'>
        <Aside></Aside>
        <div className='routeHolder'>Home</div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
