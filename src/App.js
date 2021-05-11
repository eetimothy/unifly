import { Layout } from 'antd'
import Footer from './components/Footer/Footer';
import Navbar from "./components/Navbar/Navbar";
import Home from './pages/Home'

const { Content } = Layout

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Content>
        <Home/>
      </Content>
      <Footer/>
    </div>
  );
}

export default App;
