import React,{useState} from 'react'
import swal from 'sweetalert';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Currency = () => {
  const [NameEn, setNameEn] = useState("");
  const [NameAr, setNameAr] = useState("");
const [shortCode,setshortCode]= useState("");
const [Rate,setRate]= useState("");

const history = useNavigate()

  const submit = async (event) => {

    event.preventDefault();
    try {
      const formData = new FormData();
     
      formData.append("NameEn", NameEn);
      formData.append("NameAr" , NameAr)
      formData.append("shortCode",shortCode);
      formData.append("Rate",Rate)
      await axios.post(`${window.env.API_URL}/CreateCurrency`,formData);
history('/currencylist')
      swal({
        title: "Success!",
        text: "Data has been added successfully ",
        icon: "success",
        button: "OK",
      });

    
    } catch (error) {
      alert(error.message);
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
        <div className="Headers">Add Currency</div>
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
                 placeholder="رمز قصير"  style={{ direction: "rtl" }} 
                  name="Detail"
         
            
                ></input>
              </div>
            </div>

            <div className="row mainrow">
              <div className="col-sm">
                <input
                  placeholder="Rate"
               
                  onChange={(e) => setRate(e.target.value)}
                  value={Rate}
                  type="number"
                ></input><span className="spanForm"> |</span>
              </div>

              <div className="col-sm">
                <input
                 type="number"
                 placeholder="معدل"  style={{ direction: "rtl" }} 
                  name="Detail"
         
            
                ></input>
              </div>
            </div>


            <div className='ButtonSection' style={{justifyContent:"end"}}>
     

              <button type='submit' className='SubmitButton'>Add Currency</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Currency