import React,{useState,useEffect }from "react";
import "./BeerCard.css";
import axios from 'axios';
// import {Button, Card} from 'react-bootstrap';
function  BeerCard() {
 const[beers, setBeers]=useState([]);
  useEffect(()=>{
      const url='https://api.punkapi.com/v2/beers';
      axios.get(url)
      .then(res=>
        {
          console.log(res)
          setBeers(res.data)

        })
})
  return (
    <div  className='card-bear'>
    <ul   id='cardUl'>
   
  {beers.map((beer)=>(

    <li key={beer.id}>
    
    <img src={beer.image_url} alt='beer-img' className='bear-img'></img>
    <h5 className='card-title'>{beer.name}</h5>
    <br></br>

    {beer.description}
    </li>

  ))}
     </ul>
    </div>
  );
}
export default BeerCard;