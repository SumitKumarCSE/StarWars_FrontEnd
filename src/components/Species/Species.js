import React, { useState, useEffect } from 'react';
import Heading from '../Heading/Heading';
import SideBar from '../SideBar/SideBar';
import Species1 from '../../img/Species/species1.jpg';
import Species2 from '../../img/Species/species2.jpg';
import Species3 from '../../img/Species/species3.jpg';
import Species4 from '../../img/Species/species4.jpg';
import Species5 from '../../img/Species/species5.jpg';
import Species6 from '../../img/Species/species6.jpg';
import Species7 from '../../img/Species/species7.jpg';
import Species8 from '../../img/Species/species8.jpg';
import Species9 from '../../img/Species/species9.jpg';
import Species10 from '../../img/Species/species10.jpg';

function Species() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const source = [Species1, Species2, Species3, Species4, Species5, Species6, Species7, Species8, Species9, Species10];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/species');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();

        const fetchHomeworldData = async (url) => {
          const homeworldResponse = await fetch(url);
          if (!homeworldResponse.ok) {
            throw new Error('Error fetching species data');
          }
          const homeworldData = await homeworldResponse.json();
          return homeworldData.name;
        };
        const newData = await Promise.all(jsonData.results.map(async (element) => {
          if (element.homeworld === null || element.homeworld === undefined) {
            element.homeworld = 'N/A';
          } else {
            const homeworldName = await fetchHomeworldData(element.homeworld);
            element.homeworld = homeworldName;
          }
          return element;
        }));
        setData(newData);
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
            <SideBar name="Species" data={data} />
          </div>
          <Heading name="Species" data={data} source={source} />
        </>
      )}
    </div>
  );
}

export default Species;