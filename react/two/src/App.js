import './App.css';
import Nav from './Nav';
import Header from './Header';
import Article from './Article';
import Footer from './Footer'; 

function App(props) {
  let {slogan, navigation, db} = props;
  const copy = "Hello 2025";
  
  return (
    <div className="App">
      <Header slogan={slogan}/>
      <Nav navigation={navigation} />
      <Article db={db}/>
      <Footer text={copy} />
    </div>
  );
}

export default App;