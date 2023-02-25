import logo from './logo.svg';
import './App.css';

let name="Ashvin1"
function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">TextUtils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
   
    </>

  );
}

    // <>
    // <nav>
    //   <li>Home</li>
    //    <li>About</li>
    //    <li>Contact</li>
    //  </nav>
    //  <div classNameName="container">
    //  <h1>HEllo {name}</h1>
    //    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis quis placeat enim vitae sit pariatur temporibus provident natus exercitationem! Delectus optio possimus dolores sit, nihil eos eaque, voluptatem iste veritatis minima in, omnis repellendus quo nesciunt animi. Incidunt autem est consequuntur sequi assumenda ab ipsa, libero aliquam culpa iste enim hic ipsam, dignissimos vel natus!</p>
    //  </div>
    // </>

   
    //   <>// chap 3
    //   <h1>This is me</h1>
    // <div classNameName="App">
    //   <header classNameName="App-header">
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with Ashvin practice
    //     </a>
    //   </header>
    // </div>
    // </>

export default App;
