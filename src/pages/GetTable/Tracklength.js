
import React, { useEffect ,Fragment } from "react";
import { fetchTrackLength,STATUSES } from "../../redux/getReducer/getTracklength";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { remove } from "../../redux/postReducer/PostJockey";
import { Link } from "react-router-dom";

import swal from 'sweetalert';
import ScrollContainer from "react-indiana-drag-scroll";



const Tracklength = () => {
    
const dispatch =useDispatch() 
const { data: trackLength, status } = useSelector((state) => state.trackLength);
useEffect(() => {
  dispatch(fetchTrackLength());
}, [dispatch]);
const handleRemove = (Id) => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Poof! Your imaginary file has been deleted!", {
        icon: "success",
      });
      dispatch(remove(Id));
      
    } else {
      swal("Your imaginary file is safe!");
    }
  });
  dispatch(remove(Id));
 
};


if (status === STATUSES.LOADING) {
  return (
      <h2
      className="loader"
      >
        <div class="inner">
  </div>
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
    <Fragment>

    <div className="page">
            <div className="rightsidedata">
              <div
                style={{
                  marginTop: "30px",
                }}
              >
                <div className="Header ">
                  <h4>Race Type Listings</h4>
    
                  <div>
                    <h6
                      style={{
                        marginRight: "100px",
                        alignItems: "center",
                        color: "rgba(0, 0, 0, 0.6)",
                      }}
                    >
                      Toggle to Arabic
                    </h6>
    
                    <Link to="/racetypeform">
                      <button>Add Track Length</button>
                    </Link>
                  </div>
                </div>
                <>
                  <div className="div_maintb">
                    <ScrollContainer >
                    <table>
                      <thead>
                        <tr>
                          <th>Track Length</th>
                          <th>Race Course </th>
                        
                          <th>RaceCourse Image</th>
                 
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {trackLength.map((item, index) => {
                          return (
                            <>
                              <tr className="tr_table_class">
                                <td>{item.TrackLength}</td>
                                <td>{item.NameAr}</td>
    
                                <td>{item.shortCode} </td>
  
    
    
                          
    
                              
                                <td className="table_delete_btn1">
                           {/* <Link to={`/editjockey/${item._id}`}> <BiEdit /></Link>  */}
                                  <MdDelete
                                    
                                    onClick={() => handleRemove(item._id)}
                                  />
                             
                                </td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
    
                    </table>
                    </ScrollContainer>
                  </div>
                </>
              </div>
              <span className="plusIconStyle"></span>
            </div>
          </div>
    
    
    
    
    
    
    
    
    
     </Fragment>
  )
}

export default Tracklength