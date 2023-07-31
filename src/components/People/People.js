import React, { useState, useEffect } from 'react';
import Heading from '../Heading/Heading';
import SideBar from '../SideBar/SideBar';
import People1 from "../../img/People/people1.jpg";
import People2 from "../../img/People/people2.jpg";
import People3 from "../../img/People/people3.jpg";
import People4 from "../../img/People/people4.jpg";
import People5 from "../../img/People/people5.jpg";
import People6 from "../../img/People/people6.jpg";
import People7 from "../../img/People/people7.jpg";
import People8 from "../../img/People/people8.jpg";
import People9 from "../../img/People/people9.jpg";
import People10 from "../../img/People/people10.jpg";

function People() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const source = [People1, People2, People3, People4, People5, People6, People7, People8, People9, People10];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/people');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();

        // Fetch species data for each character
        const fetchSpeciesData = async (url) => {
          const speciesResponse = await fetch(url);
          if (!speciesResponse.ok) {
            throw new Error('Error fetching species data');
          }
          const speciesData = await speciesResponse.json();
          return speciesData.name;
        };
        const newData = await Promise.all(jsonData.results.map(async (element) => {
          if (element.species.length > 0) {
            const speciesName = await fetchSpeciesData(element.species[0]);
            element.species = speciesName;
          } else {
            element.species = 'N/A';
          }
          return element;
        }));
        setData(newData);
        setIsLoading(false);
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
            <SideBar name="Peoples" data={data} />
          </div>
          <Heading name="Peoples" data={data} source={source} />
        </>
      )}
    </div>
  );
}

export default People;