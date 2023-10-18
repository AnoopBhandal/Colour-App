import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Colours() {
  const [items, setItems] = useState([]);

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

    setItems(colours.items);
  }, []); 

  return (
    <div>
      <h1>Colours Page</h1>
      <div>
        {items.map((el) => (
          <p key={el.id} style={{color:el.name}} >
            <Link to={`/Colours/${el.name}`}>{el.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
}

export default Colours;
