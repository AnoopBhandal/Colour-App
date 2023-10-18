import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Colour() {
    const {name} = useParams()
    const navigate = useNavigate()
const [item, setItem] = useState([]);

  useEffect(() => {
    const colours = {
      items: [
        {
          id: 1,
          name: "red",
        },
        {
          id: 2,
          name: "blue",
        },
        {
          id: 3,
          name: "green",
        },
        {
          id: 4,
          name: "orange",
        },
        {
          id: 5,
          name: "purple",
        },
      ],
    };
    const selectedColor = colours.items.find(color => color.name === name);
    if (!selectedColor){
        navigate('/Colours')
    }
    setItem(selectedColor);
  }, [name]); 

  return (
    
    <div style={{ backgroundColor: item.name }}>
        <button onClick={() => navigate('/Colours')}>Back to Colours</button>
        <h1>{item.name}</h1>
    </div>
  )
}

export default Colour 
