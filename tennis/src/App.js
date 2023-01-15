import react,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';



function App() {
  useEffect(()=>{
    axios.get('https://openapi.gg.go.kr/PublicTennis?KEY=6218b81ea45140b9b6c531cd21b52257&Type=json')
    .then(res=> console.log(res.data)).catch(err => console.log(err))
  },[])
  
 
}

export default App;





 //  axios.get('https://openapi.gg.go.kr/PublicTennis?KEY=6218b81ea45140b9b6c531cd21b52257&Type=json', {
     
  //  }).then(function(response){
  //    console.log(response.data);
  //  });
  // return (
    
  //   <div className="App">
      
      
  //   </div>
  // );