import './App.css';
import logo from './images/logo.svg';
import hero from './images/hero-mobile.jpg';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <div className='logo'>
          <img src={logo} alt='logo' className='logo__img'/>
        </div>
      </header>
      <article className='content'>
        <h1 className='content__h1'>We're coming soon</h1>
        <p className='content__p'>
          Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
        </p>
        <Form />
      </article>
      <aside className='hero'>
        <img src={hero} alt='hero' className='hero__img'/>
      </aside>
      <footer className="footer">
        <div className="footer__attribution">
          <p className="footer__p">
            Challenge by
            <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer" className="footer__a">Frontend Mentor</a>. 
            Coded by 
            <a href="https://github.com/JairoAtoche" target="_blank" rel="noopener noreferrer" className="footer__a">Jairo Atoche</a>.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
