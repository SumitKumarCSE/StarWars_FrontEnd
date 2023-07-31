import React, { useState, useEffect } from 'react';
import Heading from '../Heading/Heading';
import SideBar from '../SideBar/SideBar';
import Planet1 from '../../img/Planet/planet1.jpg';
import Planet2 from '../../img/Planet/planet2.jpg';
import Planet3 from '../../img/Planet/planet3.jpg';
import Planet4 from '../../img/Planet/planet4.jpg';
import Planet5 from '../../img/Planet/planet5.jpg';
import Planet6 from '../../img/Planet/planet6.jpg';
import Planet7 from '../../img/Planet/planet7.jpg';
import Planet8 from '../../img/Planet/planet8.jpg';
import Planet9 from '../../img/Planet/planet9.jpg';
import Planet10 from '../../img/Planet/planet10.jpg';

function Planet() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const source = [Planet1, Planet2, Planet3, Planet4, Planet5, Planet6, Planet7, Planet8, Planet9, Planet10];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/planets');
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
            <SideBar name="Planets" data={data} />
          </div>
          <Heading name="Planets" data={data} source={source} />
        </>
      )}
    </div>
  );
}

export default Planet;