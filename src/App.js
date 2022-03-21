import './App.css';
import 'antd/dist/antd.css';
import FirstScreen from './screens/js/firstScreen';


function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:"right",margin : "50px",fontSize:"60px", color: "#7A55B5",textShadow:"0 0 8px #9B80C8"}}>Singit</h1>
      <FirstScreen></FirstScreen>
    </div>
  );
}

export default App;
