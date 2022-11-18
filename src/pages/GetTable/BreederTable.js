import React, { useEffect ,Fragment } from "react";
import { fetchbreeder ,STATUSES } from "../../redux/getReducer/getBreeder";

import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { remove } from "../../redux/postReducer/PostJockey";
import { Link, useNavigate } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import swal from 'sweetalert';
import ScrollContainer from "react-indiana-drag-scroll";


const BreederTable = () => {

    const dispatch = useDispatch();
    const history = useNavigate();
    const { data: breeder, status } = useSelector((state) => state.breeder);
    useEffect(() => {
      dispatch(fetchbreeder());
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
          history("/");
        } else {
          swal("Your imaginary file is safe!");
        }
      });
      dispatch(remove(Id));
      history("/fetchbreeder");
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

   console.log(breeder,'breederbreeder')
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
                  <h4>Breeder Listings</h4>
    
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
    
                    <Link to="/breeder">
                      <button>Add Breeder</button>
                    </Link>
                  </div>
                </div>
                <>
                  <div className="div_maintb">
                    <ScrollContainer >
                    <table>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Name Arabic </th>
                        
                          <th>Short Code</th>
                      <th>Description</th>
                      <th>Description Arabic</th>
                         <th>Image</th>
                         
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {breeder.map((item, index) => {
                          return (
                            <>
                              <tr className="tr_table_class">
                                <td>{item.NameEn}</td>
                                <td>{item.NameAr}</td>
    
    <td>{item.shortCode} </td>
    <td>{item.DescriptionEn} </td>
    <td>{item.DescriptionAr} </td>
    <td>
<img src={item.image} alt=""/>


    </td>
    
    
                          
    
                              
                                <td className="table_delete_btn1">
                           <Link to={`/editjockey/${item._id}`}> <BiEdit /></Link> 
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

export default BreederTable