import logo from './logo.svg';
import './App.css';
import axios from 'axios';



function App() {
  axios.get('https://openapi.gg.go.kr/PublicTennis?KEY=6218b81ea45140b9b6c531cd21b52257&Type=json', {
    headers: {
      "Content-Type" : "application/json"
    }
  }).then(function(response){
    console.log(response.data);
  });
  return (
    
    <div className="App">
      
      
    </div>
  );
}

export default App;
