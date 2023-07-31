import React, { useState, useEffect } from 'react';
import Heading from '../Heading/Heading';
import SideBar from '../SideBar/SideBar';
import Vehicle1 from '../../img/Vehicle/vehicle1.jpg';
import Vehicle2 from '../../img/Vehicle/vehicle2.jpg';
import Vehicle3 from '../../img/Vehicle/vehicle3.jpg';
import Vehicle4 from '../../img/Vehicle/vehicle4.jpg';
import Vehicle5 from '../../img/Vehicle/vehicle5.jpg';
import Vehicle6 from '../../img/Vehicle/vehicle6.jpg';
import Vehicle7 from '../../img/Vehicle/vehicle7.jpg';
import Vehicle8 from '../../img/Vehicle/vehicle8.jpg';
import Vehicle9 from '../../img/Vehicle/vehicle9.jpg';
import Vehicle10 from '../../img/Vehicle/vehicle10.jpg';

function Vehicle() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const source = [Vehicle1, Vehicle2, Vehicle3, Vehicle4, Vehicle5, Vehicle6, Vehicle7, Vehicle8, Vehicle9, Vehicle10];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/vehicles');
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
        // Data has been fetched, render the components
        <>
          <div className="sidecontent">
            <SideBar name="Vehicles" data={data} />
          </div>
          <Heading name="Vehicles" data={data} source={source} />
        </>
      )}
    </div>
  );
}

export default Vehicle;