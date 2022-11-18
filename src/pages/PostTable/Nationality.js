import React, { useState ,useEffect} from 'react'
import swal from 'sweetalert';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Nationality = () => {
  const [NameEn, setNameEn] = useState("");
  const [NameAr, setNameAr] = useState("");
  const [shortCode, setshortCode] = useState("");
  const [Abbrev, setAbbrev] = useState("");
  const [AltName, setAltName] = useState("");
  const [Label, setLabel] = useState("");
const [Offset,setOffset] = useState("");
const [Value , setValue] =useState("");
const [image, setImage] = useState();
const [preview,setPreview] = useState()

const history = useNavigate()
  const submit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("NameEn", NameEn);
      formData.append("NameAr", NameAr)
      formData.append("shortCode", shortCode);
      formData.append("Abbrev", Abbrev);
      formData.append("AltName", AltName);
      formData.append("Label", Label);
      formData.append("Offset",Offset);
      formData.append("Value" ,Value);
      formData.append("image" ,image);
      await axios.post(`${window.env.API_URL}/uploadNationality`,formData);
    history("/nationalitylist")
      swal({
        title: "Success!",
        text: "Data has been added successfully ",
        icon: "success",
        button: "OK",
      });


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
  useEffect(() => {
    if (!image) {
      setPreview(undefined)
      return
  }
    

    const objectUrl = URL.createObjectURL(image)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
}, [image])

const onSelectFile = e => {

  
    setImage(e.target.files[0])
  console.log(image,'image')

  }
  return (
    <div className="page">

      <div className="rightsidedata">
        <div
          style={{
            marginTop: "30px",
          }}
        >
          <div className="Headers">Add Nationality</div>
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
                    placeholder="رمز قصير" style={{ direction: "rtl" }}
                    name="Detail"


                  ></input>
                </div>
              </div>

              <div className="row mainrow">
                <div className="col-sm">
                  <input
                    placeholder="Write Abbreviation"

                    onChange={(e) => setAbbrev(e.target.value)}
                    value={Abbrev}
                    type="text"
                  ></input><span className="spanForm"> |</span>
                </div>

                <div className="col-sm">
                  <input
                    type="text"
                    placeholder="معدل" style={{ direction: "rtl" }}
                    name="Detail"


                  ></input>
                </div>
              </div>

              <div className="row mainrow">
                <div className="col-sm">
                  <input
                    placeholder="Write Alternative Name"

                    onChange={(e) => setAltName(e.target.value)}
                    value={AltName}
                    type="text"
                  ></input><span className="spanForm"> |</span>
                </div>

                <div className="col-sm">
                  <input
                    type="text"
                    placeholder="معدل" style={{ direction: "rtl" }}
                    name="Detail"


                  ></input>
                </div>
              </div>



              <div className="row mainrow">
                <div className="col-sm">
                  <input
                    placeholder="Label"

                    onChange={(e) => setLabel(e.target.value)}
                    value={Label}
                    type="text"
                  ></input><span className="spanForm"> |</span>
                </div>

                <div className="col-sm">
                  <input
                    type="text"
                    placeholder="معدل" style={{ direction: "rtl" }}
                    name="Detail"


                  ></input>
                </div>
              </div>


              <div className="row mainrow">
                <div className="col-sm">
                  <input
                    placeholder="OffSet  "

                    onChange={(e) => setOffset(e.target.value)}
                    value={Offset}
                    type="number"
                  ></input><span className="spanForm"> |</span>
                </div>

                <div className="col-sm">
                  <input
                    type="number"
                    placeholder="معدل" style={{ direction: "rtl" }}
                    name="Detail"


                  ></input>
                </div>
              </div>


              <div className="row mainrow">
                <div className="col-sm">
                  <input
                    placeholder="Value"

                    onChange={(e) => setValue(e.target.value)}
                    value={Value}
                    type="text"
                  ></input><span className="spanForm"> |</span>
                </div>

                <div className="col-sm">
                  <input
                    type="text"
                    placeholder="معدل" style={{ direction: "rtl" }}
                    name="Detail"


                  ></input>
                </div>
              </div>

            

              <div className='ButtonSection'>
<div>
              <input type='file' onChange={onSelectFile} className="formInput"/>
            {image &&  <img src={preview}  className="PreviewImage" alt=""/> }
        </div>
                <button type='submit' className='SubmitButton'>Add Nationality</button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nationality;