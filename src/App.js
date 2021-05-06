import { Layout, Menu } from 'antd'
import Navbar from "./components/Navbar";
import Home from './pages/Home'

const { Content } = Layout

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Content>
    <Home/>
      </Content>
    </div>
  );
}

export default App;
