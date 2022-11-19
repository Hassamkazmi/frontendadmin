import React,{useEffect ,useState} from 'react'
import { Link } from 'react-router-dom';
import  {fetchOwner}  from '../../redux/getReducer/getOwnerSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import  {STATUSES}  from '../../redux/getReducer/getOwnerSlice';
import OwnerPopup from '../../Components/Popup/OwnerPopup';
import { Modal } from 'react-bootstrap';
import {MdDelete} from "react-icons/md"
import ScrollContainer from 'react-indiana-drag-scroll';
import Moment from "react-moment";
import {BiEdit} from 'react-icons/bi'

const Owner = () => {

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [modaldata, setmodaldata] = useState()
  const handleClose = () => setShow(false);
  const handleShow = async (data) => {
      setmodaldata(data)
      await setShow(true)
  };
    const dispatch = useDispatch();
  const [pagenumber,setPageNumber] = useState(1)  

  const previousPageHandler = () => {
    setPageNumber((pagenumber) => pagenumber - 1);
  };
  const nextPageHandler = () => {
    setPageNumber((pagenumber) => pagenumber + 1);
  };
  const { data: owner, status } = useSelector((state) => state.owner);
 
 
  useEffect(() => {
    dispatch(fetchOwner({pagenumber}));
  },[dispatch]);
 
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


console.log(owner)

  return (
    <>
  
    <div className="page">
    
       <div className="rightsidedata">
         <div
           style={{
             marginTop: "30px",
           }}
         >
            <div className="Header ">
               <h4>Owner Listings</h4>
 
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
 
                 <Link to="/ownerform">
                   <button>Add Owner</button>
                 </Link>
               </div>
             </div>
           <>
           <div className="div_maintb">    
           <ScrollContainer className="scroll-container">
                   <table >
               <thead>
                 <tr>
                 <th>Owner Name</th>
                  <th>NameAr</th>
                <th>Title</th>
                <th>Title Arabic</th>
                <th>Short Name</th>
                <th>Short Name Arabic</th>
                   <th>Registeration</th>
                   <th>Nationality</th>
                   <th>Silk Color</th>
                   <th>Image</th>
                   <th style={{textAlign: 'center'}}>Action</th>
                 </tr>
               </thead>
               <tbody>
                 {owner.map((item, index) => {
                   return (
                     <>
                       <tr className="tr_table_class">
                       <td>{item.NameEn}</td>
                        <td>{item.NameAr}</td>
                        <td>{item.TitleEn}</td>
                        <td>{item.TitleAr ===  '' ? <>N/A</>:item.TitleAr} </td>
                        <td>{item.ShortEn}</td>
                        <td>{item.ShortAr ===  '' ? <>N/A</>:item.ShortAr} </td>
                      <td>   <Moment format="YYYY/MM/DD">
                      {item.RegistrationDate}
                             </Moment></td>
                    
                      <td>{item.OwnerDataNationalityData.NameEn}</td> 
                         <td>{item.SilkColorData === null ? <>N/A</> :<>{item.SilkColorData.NameEn}</> }</td>
                         <td>
                           <img src={item.image} alt="" />
                         </td>
                        <td style={{textAlign: 'center'}}><MdDelete/>
                        
                       
                         <BiEdit onClick={() => navigate('/editowner',{
                                state:{
                                  ownerid:item._id
                                }
                              })}/>
                        
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
      
       </div>
     </div>
    </>
  )
}

export default Owner