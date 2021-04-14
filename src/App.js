import './App.css';
import Footer from'./Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <section>
                <header>
                    <a href="www.google.com" className="logo">Jiovanni</a>
                    <div className="toggle" onclick="toggleMenu()"></div>
                    <ul className="nav">
                        <li><a href="www.google.com">Home</a></li>
                        <li><a href="www.google.com">About</a></li>
                    </ul>
                </header>
                <div className="content">
                    <div className="contentBox">
                        <h2> Hello World </h2>
                        <p> i am a web developer </p>
                        <a href="Jiovanni">Contact</a>
                    </div>
                </div>
                <div className="sci">
                    <li><a href="www.google.com"><i classname="fab fa fa-facebook"></i></a></li>
                </div>
            </section>
      </header>
      <Footer />
    </div>
  );
}

export default App;
