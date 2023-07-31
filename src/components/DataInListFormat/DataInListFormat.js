import React, { useState, useMemo } from 'react';
import './DataInListFormat.css';
import FilmsSvg from '../Svg/FilmsSvg';
import PeopleSvg from '../Svg/PeopleSvg';
import PlanetSvg from '../Svg/PlanetSvg';
import SpeciesSvg from '../Svg/SpeciesSvg';
import StarshipSvg from '../Svg/StarshipSvg';
import VehicleSvg from '../Svg/VehicleSvg';
import MenuSvg from "../Svg/MenuSvg";
import ViewSvg from "../Svg/ViewSvg";
import DeleteSvg from "../Svg/Delete";
import DownloadSvg from "../Svg/DownloadSvg";
import RenameSvg from "../Svg/RenameSvg";
import ShareLink from "../Svg/ShareLink";
import MoveSvg from "../Svg/Move";
import MarkPrivate from "../Svg/MarkPrivate";
import CloseSvg from "../Svg/CloseSvg";
import AlertSvg from "../Svg/AlertSvg";
import "bootstrap/dist/css/bootstrap.min.css";

function DataInListFormat({ data, name, source }) {
    const [detail, setDetail] = useState({ detail1: '', detail2: '', detail3: '', detail4: '', detail5: '', detail6: '' });
    const [isDetail, setViewDetail] = useState(null);
    const [isDelete, setDelete] = useState(null);
    const handleViewClick = index => {
        setViewDetail(index < 11 ? index : null);
    }
    const handleDeleteClick = index => {
        setDelete(index < 11 ? index : null);
    }
    const renderSvgByType = useMemo(() => {
        switch (name) {
            case 'Films':
                setDetail({ detail1: 'Title', detail2: 'Director', detail3: 'Release Date', detail4: 'Movie Details', detail5: 'Opening Crawl', detail6: 'Episode Id' });
                return <FilmsSvg />;
            case 'Peoples':
                setDetail({ detail1: 'Name', detail2: 'Birth Date', detail3: 'Species', detail4: 'Person Details', detail5: 'Height', detail6: 'Eye Color' });
                return <PeopleSvg />;
            case 'Planets':
                setDetail({ detail1: 'Name', detail2: 'Climate', detail3: 'Gravity', detail4: 'Planet Details', detail5: 'Terrain', detail6: 'Diameter' });
                return <PlanetSvg />;
            case 'Species':
                setDetail({ detail1: 'Name', detail2: 'HomeWorld', detail3: 'Average Life Span', detail4: 'Species Details', detail5: 'Designation', detail6: 'Language' });
                return <SpeciesSvg />;
            case 'Starships':
                setDetail({ detail1: 'Name', detail2: 'Model', detail3: 'Hyperdrive Rating', detail4: 'Starship Details', detail5: 'Manufacturer', detail6: 'Max Atmosphering Speed' });
                return <StarshipSvg />;
            case 'Vehicles':
                setDetail({ detail1: 'Name', detail2: 'Model', detail3: 'Top Speed', detail4: 'Vehicle Details', detail5: 'Length', detail6: 'Cargo Capacity' });
                return <VehicleSvg />;
            default:
                return null;
        }
    }, [name]);
    return (
        <div className='ListFormat' >
            <table>
                <thead className='header'>
                    <tr>
                        <th className='first'>{detail.detail1}</th>
                        <th className='second'>{detail.detail2}</th>
                        <th className='third'>{detail.detail3}</th>
                        <th className='fourth'></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr className="listcarddetail" key={index}>
                            <td className='first'>{renderSvgByType}
                                {item[name === 'Films' ? 'title' : 'name']}</td>
                            <td className='second'>
                                {item[name === 'Films' ? 'director' : '']}
                                {item[name === 'Peoples' ? 'birth_year' : '']}
                                {item[name === 'Planets' ? 'climate' : '']}
                                {item[name === 'Species' ? 'homeworld' : '']}
                                {item[name === 'Starships' ? 'model' : '']}
                                {item[name === 'Vehicles' ? 'model' : '']}
                            </td>
                            <td className='third'>
                                {item[name === 'Films' ? 'release_date' : '']}
                                {item[name === 'Peoples' ? 'species' : '']}
                                {item[name === 'Planets' ? 'gravity' : '']}
                                {item[name === 'Species' ? 'average_lifespan' : '']}
                                {item[name === 'Starships' ? 'hyperdrive_rating' : '']}
                                {item[name === 'Vehicles' ? 'max_atmosphering_speed' : '']}
                            </td>
                            <td className='menusvg'>
                                <button className="btn drpbtn" type="button" data-toggle="dropdown" data-target={`#listdropdownContent-${index}`}><MenuSvg /></button>
                                <div className='listdropdowncontent' id={`listdropdownContent-${index}`}>
                                    <button className="listdropdownitem" onClick={() => handleViewClick(index)}>
                                        <ViewSvg />
                                        <p>View</p>
                                    </button>
                                    <button className="listdropdownitem">
                                        <DownloadSvg />
                                        <p>Download</p>
                                    </button>
                                    <button className="listdropdownitem">
                                        <RenameSvg />
                                        <p>Rename</p>
                                    </button>
                                    <button className="listdropdownitem">
                                        <ShareLink />
                                        <p>Share Link</p>
                                    </button>
                                    <button className="listdropdownitem">
                                        <MoveSvg />
                                        <p>Move</p>
                                    </button>
                                    <button className="listdropdownitem">
                                        <MarkPrivate />
                                        <p>MarkPrivate</p>
                                    </button>
                                    <button className="listdropdownitem"  onClick={() => handleDeleteClick(index)}>
                                        <DeleteSvg />
                                        <p>Delete</p>
                                    </button>
                                </div>
                                {isDetail === index &&
                                    <div className="listviewdropdown">
                                        <header>{detail.detail4}<button onClick={() => handleViewClick(12)}><CloseSvg /></button></header>
                                        <main>
                                            <p>Image</p>
                                            <img src={source[index]} alt="details image2" />
                                            <p >{detail.detail1}</p>
                                            <p className="viewtitle">{item[name === 'Films' ? 'title' : 'name']}</p>
                                            <p>{detail.detail5}</p>
                                            <p className="viewtitle hgt">{item[name === 'Films' ? 'opening_crawl' : '']}
                                                {item[name === 'Peoples' ? 'height' : '']}
                                                {item[name === 'Planets' ? 'terrain' : '']}
                                                {item[name === 'Species' ? 'designation' : '']}
                                                {item[name === 'Starships' ? 'manufacturer' : '']}
                                                {item[name === 'Vehicles' ? 'length' : '']}
                                            </p>
                                            <p>{detail.detail6}</p>
                                            <p className="viewtitle">
                                            {item[name === 'Films' ? 'episode_id' : '']}
                                                {item[name === 'Peoples' ? 'eye_color' : '']}
                                                {item[name === 'Planets' ? 'diameter' : '']}
                                                {item[name === 'Species' ? 'language' : '']}
                                                {item[name === 'Starships' ? 'max_atmosphering_speed' : '']}
                                                {item[name === 'Vehicles' ? 'cargo_capacity' : '']}
                                            </p>
                                        </main>
                                        <button onClick={() => handleViewClick(12)} className='closebtn'>Close</button>
                                    </div>
                                }
                            </td>
                            {isDelete === index && 
                                <div className="deletepopup">
                                    <div className='deleteupper'>
                                        <div className='alertsvg'><AlertSvg /></div>
                                        <h1>Caution!</h1>
                                        <p>Are you sure you want to delete <span>{item[name === 'Films' ? 'title' : 'name']}</span></p>
                                    </div>
                                    <div className='deletelower'>
                                        <button onClick={() => handleDeleteClick(12)}>Cancel</button>
                                        <button className='yes' onClick={() => handleDeleteClick(12)}>Yes</button>
                                    </div>
                                </div>
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataInListFormat;