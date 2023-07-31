import React, { useState, useEffect } from 'react';
import Heading from '../Heading/Heading';
import SideBar from '../SideBar/SideBar';
import Film1 from '../../img/Film/film1.jpg';
import Film2 from '../../img/Film/film2.jpg';
import Film3 from '../../img/Film/film3.jpg';
import Film4 from '../../img/Film/film4.jpg';
import Film5 from '../../img/Film/film5.jpg';
import Film6 from '../../img/Film/film6.jpg';

function Film() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const source = [Film1, Film2, Film3, Film4, Film5, Film6];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/films');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData.results);
        setIsLoading(false); // Set isLoading to false once data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false); // In case of an error, set isLoading to false
      }
    };
    fetchData();
  }, []);

  return (
    <div className='combine'>
      {/* Conditionally render the "Fetching data..." message */}
      {isLoading ? (
        <div className="fetching-data-message">We are fetching data...</div>
      ) : (
        // Data has been fetched, render the components
        <>
          <div className="sidecontent">
            <SideBar name="Films" data={data} />
          </div>
          <Heading name="Films" data={data} source={source} />
        </>
      )}
    </div>
  );
}

export default Film;