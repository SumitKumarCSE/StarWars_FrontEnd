import React, { useState, useEffect } from 'react';
import Heading from '../Heading/Heading';
import SideBar from '../SideBar/SideBar';
import Starship1 from '../../img/Starship/starship1.jpg';
import Starship2 from '../../img/Starship/starship2.jpg';
import Starship3 from '../../img/Starship/starship3.jpg';
import Starship4 from '../../img/Starship/starship4.jpg';
import Starship5 from '../../img/Starship/starship5.jpg';
import Starship6 from '../../img/Starship/starship6.jpg';
import Starship7 from '../../img/Starship/starship7.jpg';
import Starship8 from '../../img/Starship/starship8.jpg';
import Starship9 from '../../img/Starship/starship9.jpg';
import Starship10 from '../../img/Starship/starship10.jpg';

function Starship() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const source = [Starship1, Starship2, Starship3, Starship4, Starship5, Starship6, Starship7, Starship8, Starship9, Starship10];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/starships');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className='combine'>
      {isLoading ? (
        <div className="fetching-data-message">We are fetching data...</div>
      ) : (
        <>
          <div className="sidecontent">
            <SideBar name="Starships" data={data} />
          </div>
          <Heading name="Starships" data={data} source={source} />
        </>
      )}
    </div>
  );
}

export default Starship;