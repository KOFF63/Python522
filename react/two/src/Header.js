import logo from './logo.svg';

function Header({ slogan }) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <p>{slogan}</p>
    </header>
  );
}

export default Header;