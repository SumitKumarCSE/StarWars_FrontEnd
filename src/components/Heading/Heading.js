import React,{useState} from "react";
import './Heading.css';
import {useNavigate} from 'react-router-dom';
import GridSvg from '../Svg/GridSvg';
import ListSvg from '../Svg/ListSvg';
import DataInGridFormat from "../DataInGridFormat/DataInGridFormat";
import DataInListFormat from "../DataInListFormat/DataInListFormat";

function Heading({name, data, source}) {
    const navigate = useNavigate();
    const [isGrid, setGrid] = useState(true);
    const handleClick = () => {
        setGrid(!isGrid);
    }
    return (
        <div className="headcombine">
        {/* Visible when sidebar become invisible at 1024px screen size */}
        <div className="resnav">
            <button onClick={() => navigate('/film')}>Film</button>
            <button onClick={() => navigate('/people')}>Peoples</button>
            <button onClick={() => navigate('/palnet')}>Planets</button>
            <button onClick={() => navigate('/species')}>Species</button>
            <button onClick={() => navigate('/starship')}>Starships</button>
            <button onClick={() => navigate('/vehicle')}>Vehicles</button>
        </div>

        {/* down part contain heading of the page according to route and grid and list view icon where we can switch to grid and list view */}
        <div className="Heading1">
            <div>
                <div className='contentHeading'>
                    <h1 className="head">{name}</h1>
                    <div className="rightbox">

                        {/* When click on this isGrid value changes and switch to list and grid view */}
                        <button className={isGrid ? 'Grid':'Grid1'} onClick={handleClick}>
                            <GridSvg classN={'gsvg'} isGrid={isGrid} />

                            {/* only visible when isGrid is true */}
                            {isGrid && <p className={isGrid ? 'gp':'gp1'}>Grid</p>}
                        </button>
                        <button className={isGrid ? 'List1':'List'} onClick={handleClick}>
                            <ListSvg classN={'lsvg'} isGrid={isGrid} />
                            
                            {/* only visible when isGrid is false */}
                            {!isGrid && <p className={isGrid ? 'lp1':'lp'}>List</p>}
                        </button>
                    </div>
                </div>
            </div>

            {/* Switching to components according to isGrid value */}
            {isGrid && 
                <DataInGridFormat data={data} name={name} source={source} />
            }
            {!isGrid &&
                <DataInListFormat data={data} name={name} source={source} />
            }
        </div>
        </div>
    );
}

export default Heading;