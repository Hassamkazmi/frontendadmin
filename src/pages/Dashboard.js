import React,{useEffect} from 'react'

import '../Components/CSS/home.css'

import { fetchrace, STATUSES } from "../redux/getReducer/getRaceSlice";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {

  const dispatch = useDispatch();
  const { data: race, status } = useSelector((state) => state.race);
   
  useEffect(() => {
    dispatch(fetchrace());
  }, [dispatch]);
console.log(race)
  if (status === STATUSES.LOADING) {
    return (
      <h2
      className="loader"
      >
        
      </h2>
    );
  }

  if (status === STATUSES.ERROR) {
    return (
      <h2
        style={{
          margin: "100px",
        }}
      >
        Something went wrong!
      </h2>
    );
  }

  return (
    <>

    <div className='page'>
  
      <div className='rightsidedata'>
        <div className='dashboardheader'>
          <h2>Dashboard</h2>
        </div>
       <div className='DashboardCard'>
        <div className='OngoingRaces'>
          <p>Ongoing Races </p>
          <h3>{race.length}</h3>
        </div>
        <div className='ResultAwaited'>
        <p>Result Awaited</p>
        </div>
        <div className='CompetitionsRaces'>
        <p>Competitions</p>
        </div>
        <div className='TeamsRace'>
        <p>Teams</p>
        </div>
        <div className='GenerateReports'>
        <p>Generate Reports</p>
        </div>
       </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard
