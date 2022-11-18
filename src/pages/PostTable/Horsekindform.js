import React,{useState} from 'react'
import swal from 'sweetalert';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Horsekindform = () => {

    const [NameEn, setNameEn] = useState("");
    const [NameAr, setNameAr] = useState("");
    const [shortCode,setshortCode]= useState("") 
  
  const history =useNavigate()
  
  
  
    const submit = async (event) => {
      event.preventDefault();
      try {
        const formData = new FormData();
        formData.append("NameEn", NameEn);
        formData.append("NameAr" , NameAr)
        formData.append("shortCode",shortCode);
  
        await axios.post(`${window.env.API_URL}/uploadSex`, formData)
        swal({
          title: "Success!",
          text: "Data has been added successfully ",
          icon: "success",
          button: "OK",
        });
        history('/genderlist')
      } catch (error) {
        const err = error.message;
        swal({
          title: "Error!",
          text: err,
          icon: "error",
          button: "OK",
        });
      }
    };

  return (
   <div className="page">
   
    <div className="rightsidedata">
      <div
        style={{
          marginTop: "30px",
        }}
      >
        <div className="Headers">Create Horse Kind</div>
        <div className="form">
          
          <form onSubmit={submit}>
            <div className="row mainrow">
              <div className="col-sm">
                <input
                  placeholder=" Name"
                  onChange={(e) => setNameEn(e.target.value)}
                  name="Name"
                  value={NameEn}
                  required
                ></input><span className="spanForm"> |</span>
              </div>

              <div className="col-sm">
                <input
                  style={{ direction: "rtl" }}
                  placeholder="اسم "
                  onChange={(e) => setNameAr(e.target.value)}
                  name="Name"
                  value={NameAr}
                ></input>
              </div>
            </div>

            <div className="row mainrow">
              <div className="col-sm">
                <input
                  placeholder="Short Code"
                  name="Detail"
                  onChange={(e) => setshortCode(e.target.value)}
                  value={shortCode}
                ></input><span className="spanForm"> |</span>
              </div>

              <div className="col-sm">
                <input
                 placeholder="التفاصيل"  style={{ direction: "rtl" }} 
                  name="Detail"
         
            
                ></input>
              </div>
            </div>


            <div className='ButtonSection ' style={{justifyContent:"end"}}>
     

              <button type='submit' className='SubmitButton'>Add Horse Kind</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Horsekindform;