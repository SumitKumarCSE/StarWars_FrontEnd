import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './SideBar.css';

// use this as dropdown button image
import right from "../../img/CaretRight.png";

// All the svgs used for sidebar
import FilmsSvg from '../Svg/FilmsSvg';
import FolderSvg from '../Svg/FolderSvg';
import PeopleSvg from '../Svg/PeopleSvg';
import PlanetSvg from '../Svg/PlanetSvg';
import SpeciesSvg from '../Svg/SpeciesSvg';
import StarshipSvg from '../Svg/StarshipSvg';
import VehicleSvg from '../Svg/VehicleSvg';

function SideBar({ name, data }) {
    const navigate = useNavigate(); // used for navigate to other pages on basis of click events

    const location = useLocation();
    // to make the dropdown content visible
    const [isFilm, setIsFilm] = useState(location.pathname === '/film');
    const [isPeople, setIsPeople] = useState(location.pathname === '/people');
    const [isPlanet, setIsPlanet] = useState(location.pathname === '/planet');
    const [isSpecies, setIsSpecies] = useState(location.pathname === '/species');
    const [isStarship, setIsStarship] = useState(location.pathname === '/starship');
    const [isVehicle, setIsVehicle] = useState(location.pathname === '/vehicle');
    useEffect(() => {
        document.documentElement.style.setProperty("--film-bg-color", isFilm ? "#cb1a80" : "transparent");
        document.documentElement.style.setProperty("--people-bg-color", isPeople ? "#cb1a80" : "transparent");
        document.documentElement.style.setProperty("--planet-bg-color", isPlanet ? "#cb1a80" : "transparent");
        document.documentElement.style.setProperty("--species-bg-color", isSpecies ? "#cb1a80" : "transparent");
        document.documentElement.style.setProperty("--starship-bg-color", isStarship ? "#cb1a80" : "transparent");
        document.documentElement.style.setProperty("--vehicle-bg-color", isVehicle ? "#cb1a80" : "transparent");
    }, [isFilm, isPeople, isPlanet, isSpecies, isStarship, isVehicle]);

    // to provide rotation to dropdown button
    const [filmIconRotation, setFilmIconRotation] = useState(isFilm ? -90 : 0);
    const [peopleIconRotation, setPeopleIconRotation] = useState(isPeople ? -90 : 0);
    const [planetIconRotation, setPlanetIconRotation] = useState(isPlanet ? -90 : 0);
    const [speciesIconRotation, setSpeciesIconRotation] = useState(isSpecies ? -90 : 0);
    const [starshipIconRotation, setStarshipIconRotation] = useState(isStarship ? -90 : 0);
    const [vehicleIconRotation, setVehicleIconRotation] = useState(isVehicle ? -90 : 0);

    // use handleClick for handling various click events and to route on the specified page
    const handleClick = state => {
        // initially set all to false;
        setIsFilm(false); setIsPeople(false); setIsPlanet(false); setIsSpecies(false); setIsStarship(false); setIsVehicle(false);
        setPeopleIconRotation(0); setFilmIconRotation(0); setPlanetIconRotation(0); setSpeciesIconRotation(0); setStarshipIconRotation(0); setVehicleIconRotation(0);
        if (state === 'film') {
            setIsFilm(!isFilm);
            setFilmIconRotation(filmIconRotation === 0 ? -90 : 0);    // make 90 anticlockwise rotation
            filmIconRotation === 0 ? navigate('/film') : navigate('/');  // when we click on icon it rotates and route the page to specified route
        } else if (state === 'people') {
            setIsPeople(!isPeople);
            setPeopleIconRotation(peopleIconRotation === 0 ? -90 : 0);
            peopleIconRotation === 0 ? navigate('/people') : navigate('/');
        } else if (state === 'planet') {
            setIsPlanet(!isPlanet);
            setPlanetIconRotation(planetIconRotation === 0 ? -90 : 0);
            planetIconRotation === 0 ? navigate('/planet') : navigate('/');
        } else if (state === 'species') {
            setIsSpecies(!isSpecies);
            setSpeciesIconRotation(speciesIconRotation === 0 ? -90 : 0);
            speciesIconRotation === 0 ? navigate('/species') : navigate('/');
        } else if (state === 'starship') {
            setIsStarship(!isStarship);
            setStarshipIconRotation(starshipIconRotation === 0 ? -90 : 0);
            starshipIconRotation === 0 ? navigate('/starship') : navigate('/');
        } else if (state === 'vehicle') {
            setIsVehicle(!isVehicle);
            setVehicleIconRotation(vehicleIconRotation === 0 ? -90 : 0);
            vehicleIconRotation === 0 ? navigate('/vehicle') : navigate('/');
        }
    };
    const renderSvgByType = useMemo(() => {
        switch (name) {
            case 'Films':
                return <FilmsSvg />;
            case 'Peoples':
                return <PeopleSvg />;
            case 'Planets':
                return <PlanetSvg />;
            case 'Species':
                return <SpeciesSvg />;
            case 'Starships':
                return <StarshipSvg />;
            case 'Vehicles':
                return <VehicleSvg />;
            default:
                return null;
        }
    }, [name]);

    return (
        <div className='combine'>
            <div className="SideBar">
                <ul className='menu' style={{ background: isFilm ? "#cb1a80" : "transparent" }}>
                    <li className="dropdown">
                        <FolderSvg />
                        <p>Film</p>
                        <img src={right} alt="right_icon" onClick={() => handleClick('film')} style={{ transform: `rotate(${filmIconRotation}deg)` }} />
                    </li>
                </ul>
                {isFilm && (
                    <div>
                        {data.map((item, index) => (
                            <React.Fragment key={index}>
                                <li className='innerdropdown'>
                                    {renderSvgByType}
                                    <p>{item[name === 'Films' ? 'title' : 'name']}</p>
                                    <img src={right} alt="right_icon" />
                                </li>
                            </React.Fragment>
                        ))}
                    </div>
                )
                };
                <ul className='menu' style={{ background: isPeople ? "#cb1a80" : "transparent" }}>
                    <li className="dropdown">
                        <FolderSvg />
                        <p>Peoples</p>
                        <img src={right} alt="right_icon" onClick={() => handleClick('people')} style={{ transform: `rotate(${peopleIconRotation}deg)` }} />
                    </li>
                </ul>
                {isPeople &&
                    (
                        <div>
                            {data.map((item, index) => (
                                <React.Fragment key={index}>
                                    <li className='innerdropdown'>
                                        {renderSvgByType}
                                        <p>{item[name === 'Films' ? 'title' : 'name']}</p>
                                        <img src={right} alt="right_icon" />
                                    </li>
                                </React.Fragment>
                            ))}
                        </div>
                    )
                };
                <ul className='menu' style={{ background: isPlanet ? "#cb1a80" : "transparent" }}>
                    <li className="dropdown">
                        <FolderSvg />
                        <p>Planets</p>
                        <img src={right} alt="right_icon" onClick={() => handleClick('planet')} style={{ transform: `rotate(${planetIconRotation}deg)` }} />
                    </li>
                </ul>
                {isPlanet && (
                    <div>
                        {data.map((item, index) => (
                            <React.Fragment key={index}>
                                <li className='innerdropdown'>
                                    {renderSvgByType}
                                    <p>{item[name === 'Films' ? 'title' : 'name']}</p>
                                    <img src={right} alt="right_icon" />
                                </li>
                            </React.Fragment>
                        ))}
                    </div>
                )};
                <ul className='menu' style={{ background: isSpecies ? "#cb1a80" : "transparent" }}>
                    <li className="dropdown">
                        <FolderSvg />
                        <p>Species</p>
                        <img src={right} alt="right_icon" onClick={() => handleClick('species')} style={{ transform: `rotate(${speciesIconRotation}deg)` }} />
                    </li>
                </ul>
                {isSpecies && (
                    <div>
                        {data.map((item, index) => (
                            <React.Fragment key={index}>
                                <li className='innerdropdown'>
                                    {renderSvgByType}
                                    <p>{item[name === 'Films' ? 'title' : 'name']}</p>
                                    <img src={right} alt="right_icon" />
                                </li>
                            </React.Fragment>
                        ))}
                    </div>
                )};
                <ul className='menu' style={{ background: isStarship ? "#cb1a80" : "transparent" }}>
                    <li className="dropdown">
                        <FolderSvg />
                        <p>Starships</p>
                        <img src={right} alt="right_icon" onClick={() => handleClick('starship')} style={{ transform: `rotate(${starshipIconRotation}deg)` }} />
                    </li>
                </ul>
                {isStarship && (
                    <div>
                        {data.map((item, index) => (
                            <React.Fragment key={index}>
                                <li className='innerdropdown'>
                                    {renderSvgByType}
                                    <p>{item[name === 'Films' ? 'title' : 'name']}</p>
                                    <img src={right} alt="right_icon" />
                                </li>
                            </React.Fragment>
                        ))}
                    </div>
                )};
                <ul className='menu' style={{ background: isVehicle ? "#cb1a80" : "transparent" }}>
                    <li className="dropdown">
                        <FolderSvg />
                        <p>Vehicles</p>
                        <img src={right} alt="right_icon" onClick={() => handleClick('vehicle')} style={{ transform: `rotate(${vehicleIconRotation}deg)` }} />
                    </li>
                </ul>
                {isVehicle && (
                    <div>
                        {data.map((item, index) => (
                            <React.Fragment key={index}>
                                <li className='innerdropdown'>
                                    {renderSvgByType}
                                    <p>{item[name === 'Films' ? 'title' : 'name']}</p>
                                    <img src={right} alt="right_icon" />
                                </li>
                            </React.Fragment>
                        ))}
                    </div>
                )};
            </div>
        </div>
    );
}

export default SideBar;