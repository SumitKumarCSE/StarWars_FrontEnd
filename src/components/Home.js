import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import SideBar from './SideBar/SideBar';

function Home() {
    const data = null;
    const navigate = useNavigate();
    return (
        <div className='combine'>
            <div className="sidecontent">
                <SideBar name="Home" data={data} />                   {/* Shows the sidebar contents by which we can route to different web pages easily */}
            </div>
            {/* <div className="Home"> */}
            <div className='rescontainer'>
                <div className="resnav">
                    <button onClick={() => navigate('/film')}>Film</button>
                    <button onClick={() => navigate('/people')}>Peoples</button>
                    <button onClick={() => navigate('/palnet')}>Planets</button>
                    <button onClick={() => navigate('/species')}>Species</button>
                    <button onClick={() => navigate('/starship')}>Starships</button>
                    <button onClick={() => navigate('/vehicle')}>Vehicles</button>
                </div>
                <div className="emp"></div>
                <div className='homecontainer'>
                    <div className="homecontent">
                        <div className='homeframe'>
                            <div className='homephotoframe'>
                                <div className='homephotoframe1'></div>
                                <h1>Welcome to Star Wars Dashboard </h1>
                            </div>
                            <p>Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
}

export default Home;