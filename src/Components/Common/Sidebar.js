import React from 'react'
import { Link } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion';
import '../CSS/sidebar.css'
import { useLocation } from 'react-router-dom';



const Sidebar = () => {
  let {pathname} = useLocation();
  return (
<>
{
  pathname !== '/' ?  <div className='sidebar'>
  <Link to='/dashboard' className='mylink'>Dashboard</Link>
  <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Races</Accordion.Header>
    <Accordion.Body className='AccordionBody' style={{height:"157px"}}>
    <div><Link to='/races' className='mylink'>View Listings</Link></div>
   <div> <Link to='/raceform' className='mylink'>Add New</Link></div>
   <div><Link to='/racename' className='mylink'>Race Name Listing</Link> </div>
   <div><Link to='/racenameform' className='mylink'>Add Race Name</Link></div>
   <div><Link to='/racetype' className='mylink'>Race Type Listing</Link> </div>
   <div><Link to='/racetypeform' className='mylink'>Add Race Type</Link>  </div>
   <div> <Link to='/result' className='mylink'>Add Results</Link></div>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Racecourse</Accordion.Header>
    <Accordion.Body className='AccordionBody'>
    <div>  <Link to='/racecourse' className='mylink'>View Listing</Link></div>
   <div>   <Link to='/racecourseform' className='mylink'>Add New</Link></div>
    
   <div><Link to='/tracklength' className='mylink'>Track Length Listing</Link> </div>
   <div><Link to='/tracklengthform' className='mylink'>Add Track Length</Link>  </div>


    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Horses</Accordion.Header>
    <Accordion.Body className='AccordionBody'>
    <div><Link to='/horse' className='mylink'>View Listing</Link></div>
   <div> <Link to='/horseform' className='mylink'>Add New</Link></div>
   <div> <Link to='/horsekind' className='mylink'>Horse Kind Listing</Link></div>
   <div><Link to='/horsekindform' className='mylink'>Add Horse Kind  </Link>  </div>

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Jockey</Accordion.Header>
    <Accordion.Body className='AccordionBody'>
    <div><Link to='/jockey' className='mylink'>View Listing</Link></div>
   <div> <Link to='/jockeyform' className='mylink'>Add New</Link></div>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>Trainer</Accordion.Header>
    <Accordion.Body className='AccordionBody'>
    <div><Link to='/trainer' className='mylink'>View Listing</Link></div>
   <div> <Link to='/trainerform' className='mylink'>Add New</Link></div>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="5">
    <Accordion.Header>Owner</Accordion.Header>
    <Accordion.Body className='AccordionBody'>
    <div><Link to='/owner' className='mylink'>View Listing</Link></div>
   <div> <Link to='/ownerform' className='mylink'>Add New</Link></div>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="6">
    <Accordion.Header>Competition</Accordion.Header>
    <Accordion.Body className='AccordionBody'>
    <div><Link to='/competition' className='mylink'>View Listing</Link></div>
   <div> <Link to='/competition' className='mylink'>Add New</Link></div>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="7">
    <Accordion.Header>Statistics</Accordion.Header>
    <Accordion.Body className='AccordionBody'>
    <div><Link to='/statistics' className='mylink'>View Listing</Link></div>
   <div> <Link to='/statistics' className='mylink'>Add New</Link></div>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="8">
    <Accordion.Header>News</Accordion.Header>
    <Accordion.Body className='AccordionBody'>
    <div><Link to='/news' className='mylink'>View Listing</Link></div>
   <div> <Link to='/newsform' className='mylink'>Add New</Link></div>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="9">
    <Accordion.Header>Ads</Accordion.Header>
    <Accordion.Body className='AccordionBody'>
    <div><Link to='/ads' className='mylink'>View Listing</Link></div>
   <div> <Link to='/adsform' className='mylink'>Add New</Link></div>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="10">
    <Accordion.Header>Sponsor</Accordion.Header>
    <Accordion.Body className='AccordionBody'>
    <div><Link to='/sponsor' className='mylink'>View Listing</Link></div>
   <div> <Link to='/sponsorform' className='mylink'>Add New</Link></div>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="11">
    <Accordion.Header>Slider</Accordion.Header>
    <Accordion.Body className='AccordionBody'>
    <div><Link to='/slider' className='mylink'>View Listing</Link></div>
   <div> <Link to='/sliderform' className='mylink'>Add New</Link></div>
    </Accordion.Body>
    
    
  </Accordion.Item >
<Accordion.Item eventKey="12">
  <Accordion.Header>Create Features </Accordion.Header>
    <Accordion.Body className='AccordionBody'>
    <div><Link to='/meeting' className='mylink'>Add Meeting Type</Link>  </div>
    <div><Link to='/color' className='mylink'>Add Color</Link></div>
   <div> <Link to='/currency' className='mylink'>Add Currency</Link></div>
   <div> <Link to='/breeder' className='mylink'>Add Breeder</Link></div>
   <div> <Link to='/nationality' className='mylink'>Add Nationality</Link></div>
   <div> <Link to='/gender' className='mylink'>Add Gender</Link></div>
 

    </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="13">
  <Accordion.Header>Features Listing</Accordion.Header>
    <Accordion.Body className='AccordionBody'>
    <div><Link to='/getmeeting' className='mylink'>Meeting Type</Link> </div>
    <div><Link to='/colorlist' className='mylink'>Color </Link></div>
   <div> <Link to='/currencylist' className='mylink'>Currency </Link></div>
   <div> <Link to='/breederlist' className='mylink'>Breeder </Link></div>
   <div> <Link to='/nationalitylist' className='mylink'>Nationality </Link></div>
   <div> <Link to='/genderlist' className='mylink'>Gender </Link></div>
  


    </Accordion.Body>
    </Accordion.Item>


 
</Accordion>

<div className='SettingSec' ><Link to='/setting' className='mylink'>Setting</Link></div>
  </div> : null
}
</>
    
  )
}

export default Sidebar