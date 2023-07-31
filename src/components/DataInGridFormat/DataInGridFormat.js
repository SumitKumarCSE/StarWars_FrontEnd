// This is the default view when we click on any option in the sidebar

// Note: This page takes some time to load details

import React, { useMemo, useState } from 'react';
import './GridFormat.css';

// all the required svgs
import FilmsSvg from '../Svg/FilmsSvg';
import PeopleSvg from '../Svg/PeopleSvg';
import PlanetSvg from '../Svg/PlanetSvg';
import SpeciesSvg from '../Svg/SpeciesSvg';
import StarshipSvg from '../Svg/StarshipSvg';
import VehicleSvg from '../Svg/VehicleSvg';
import MenuSvg from "../Svg/MenuSvg";

// svgs use when we hover over menusvg
import ViewSvg from "../Svg/ViewSvg";
import DeleteSvg from "../Svg/Delete";
import DownloadSvg from "../Svg/DownloadSvg";
import RenameSvg from "../Svg/RenameSvg";
import ShareLink from "../Svg/ShareLink";
import MoveSvg from "../Svg/Move";
import MarkPrivate from "../Svg/MarkPrivate";
import CloseSvg from "../Svg/CloseSvg";

// svg use when we click on deletesvg in dropdown content
// it is visible when deletepopup occurs
import AlertSvg from "../Svg/AlertSvg";
import "bootstrap/dist/css/bootstrap.min.css";

function DataInGridFormat({ data, name, source }) {
  // take three props data contains detail which component sends after fetching details from api, name prop tells us which option we clicked in sidebar, and source contains all the images required in grid format.

  // use detail becuase we have to view different details according to different routing.
  const [detail, setDetail] = useState({ detail1: '', detail2: '', detail3: '', detail4: '', detail5: '', detail6: '' });

  // for handling view and deletepopup
  const [isDetail, setViewDetail] = useState(null);
  const [isDelete, setDelete] = useState(null);
  const handleViewClick = index => {
    setViewDetail(index < 11 ? index : null);
  }
  const handleDeleteClick = index => {
    setDelete(index < 11 ? index : null);
  }

  // assigning different details as given by different components
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
    <div className='GridFormat'>

      {/* use map and make a common segment which add details according to index */}
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <div key={index}  className="grandparent">
            <div className='parent'><img src={source[index]} className='cardphoto' alt="film phto" /></div>
            <div className="carddetail">
              {renderSvgByType}
              <h1 className='header'>{item[name === 'Films' ? 'title' : 'name']}</h1>
              <div className='griddropdownmenu'>
                <button className="btn dropbtn" type="button" data-toggle="dropdown" data-target={`#dropdownContent-${index}`}><MenuSvg classN="mensvg" /></button>

                {/* visible when user hover over menusvg present at bottom right of every photo */}
                <div className='dropdowncontent' id={`dropdownContent-${index}`}>

                  {/* when we click on this then one more div displayed having more details of the clicked card */}
                  <button className="dropdownitem" onClick={() => handleViewClick(index)}>
                    <ViewSvg />
                    <p>View</p>
                  </button>
                  <button className="dropdownitem">
                    <DownloadSvg />
                    <p>Download</p>
                  </button>
                  <button className="dropdownitem">
                    <RenameSvg />
                    <p>Rename</p>
                  </button>
                  <button className="dropdownitem">
                    <ShareLink />
                    <p>Share Link</p>
                  </button>
                  <button className="dropdownitem">
                    <MoveSvg />
                    <p>Move</p>
                  </button>
                  <button className="dropdownitem">
                    <MarkPrivate />
                    <p>MarkPrivate</p>
                  </button>
                  <button className="dropdownitem" onClick={() => handleDeleteClick(index)}>
                    <DeleteSvg />
                    <p style={{color:"#FC5A5A"}}>Delete</p>
                  </button>
                </div>
              </div>
            </div>

            {/* for showing more details. showing details according to index */}
            {isDetail === index &&
              <div className="listviewdropdown">
                <header>{detail.detail4}<button onClick={() => handleViewClick(12)}><CloseSvg /></button></header>
                <main>
                  <p>Image</p>
                  <img src={source[index]} alt="details image1" />
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


            {/* become visible when we click on delete option in dropdown list items */}
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
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default DataInGridFormat;