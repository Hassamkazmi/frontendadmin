import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../../redux/postReducer/PostOwner";
import axios from "axios";
import swal from "sweetalert";
import DatePicker from "react-date-picker";
import { fetchcolor } from "../../redux/getReducer/getColor";
import { fetchnationality } from "../../redux/getReducer/getNationality";
import Select from "react-select";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip'

const OwnerForm = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const {data: color} = useSelector((state) => state.color);
  const {data: nationality} = useSelector((state) => state.nationality);

  let AllColor = color === undefined ? <></> : color.map(function (item) {
    return {
      id: item._id,
      value: item.NameEn,
      label: item.NameEn,
    };
  });
  let AllNationality = nationality === undefined ? <></> : nationality.map(function (item) {
    return {
      id: item._id,
      value: item.NameEn,
      label: item.NameEn,
    };
  });


  

  const [NameEn, setNameEn] = useState("");
  const [NameAr, setNameAr] = useState();
  const [TitleEn, setTitleEn] = useState("");
  const [TitleAr, setTitleAr] = useState("");
  const [ShortEn, setShortEn] = useState("");
  const [SilkColor, setSilkColor] = useState("");
  const [ShortAr, setShortAr] = useState("");
  const [NationalityID, setNationalityID] = useState("");
  const [RegistrationDate, setRegistrationDate] = useState("");
  const [image, setImage] = useState();
  const [OwnerImage, setOwnerImage] = useState();
  const [preview, setPreview] = useState();


  useEffect(() => {
    dispatch(fetchcolor());
    dispatch(fetchnationality());
  }, [dispatch]);

  const submit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("NameEn", NameEn);
      formData.append("NameAr", NameAr);
      formData.append("TitleEn", TitleEn);
      formData.append("TitleAr", TitleAr);
      formData.append("ShortEn", ShortEn);
      formData.append("ShortAr", ShortAr);
      formData.append("SilkColor", SilkColor.id);
      formData.append("NationalityID", NationalityID.id);
      formData.append("RegistrationDate", RegistrationDate);
      await axios.post(`${window.env.API_URL}/createowner`, formData);
      swal({
        title: "success!",
        text: "Data Submitted !",
        icon: "success",
        button: "OK",
      });
      history("/owner");
    } catch (error) {
      console.log(error.response.data.message, "error");
      const err = error.response.data.message;
      swal({
        title: "Error!",
        text: err,
        icon: "error",
        button: "OK",
      });
    }
  };

  const isSubmitData = NameEn === "" || image === null || image === undefined;
  useEffect(() => {
    if (!image) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(image);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [image]);

  const onSelectFile = (e) => {
    setImage(e.target.files[0]);
    console.log(image, "image");
  };


  return (
    <>
      <div className="page">
        <div className="rightsidedata">
          <div
            style={{
              marginTop: "30px",
            }}
          >
            <div className="Headers">Add Owner</div>
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
                    ></input>
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      onChange={(e) => setNameAr(e.target.value)}
                      value={NameAr}
                      placeholder="اسم "
                    ></input>
                  </div>
                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder=" Title"
                      onChange={(e) => setTitleEn(e.target.value)}
                      name="Name"
                      value={TitleEn}
                      required
                    ></input>
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      onChange={(e) => setTitleAr(e.target.value)}
                      value={NameAr}
                      placeholder="اسم "
                    ></input>
                  </div>
                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder=" Short"
                      onChange={(e) => setShortEn(e.target.value)}
                      name="Name"
                      value={ShortEn}
                      required
                    ></input>
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      onChange={(e) => setShortAr(e.target.value)}
                      value={ShortAr}
                      placeholder="اسم "
                    ></input>
                  </div>
                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <DatePicker
                      onChange={setRegistrationDate}
                      value={RegistrationDate}
                      dayPlaceholder=""
                      monthPlaceholder="Registration Date"
                      yearPlaceholder=""
                    />
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="اسم "
                    ></input>
                  </div>
                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <Select
                    
                      placeholder={<div>Select Color</div>}
                      defaultValue={SilkColor}
                      onChange={setSilkColor}
                      options={AllColor}
                      isClearable={true}
                      isSearchable={true}
                    /><span className="spanForm">
                      
                      <OverlayTrigger
          
         
          overlay={
            <Tooltip id={`tooltip-top`}>
              Add more
            </Tooltip>
          }
        >
          <button className="addmore" onClick={()=> history('/color')}>+</button>
        </OverlayTrigger> 
                      
                       |</span>
                  </div>
                  <div className="col-sm">
                    <Select
                      required
                      placeholder={<div>حدد نوع الجنس</div>}
                      className='selectdir'
                      defaultValue={SilkColor}
                      onChange={setSilkColor}
                      options={AllColor}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Type to search Nationality</div>}
                      defaultValue={NationalityID}
                      onChange={setNationalityID}
                      options={AllNationality}
                      isClearable={true}
                      isSearchable={true}
                    /><span className="spanForm"> 
                    
                    <OverlayTrigger
          
         
          overlay={
            <Tooltip id={`tooltip-top`}>
              Add more
            </Tooltip>
          }
        >
          <button className="addmore" onClick={()=> history('/nationality')}>+</button>
        </OverlayTrigger> 
                    |</span>
                  </div>

                  <div className="col-sm">
                    <Select         className='selectdir'
                      placeholder={
                        <div style={{ direction: "rtl" }}>
                          اكتب للبحث عن الجنسية
                        </div>
                      }
                      defaultValue={NationalityID}
                      onChange={setNationalityID}
                      options={AllNationality}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div> 
                {/* <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder=" Rating"
                      onChange={(e) => setNameEn(e.target.value)}
                      name="Name"
                      value={NameEn}
                      required
                    ></input>
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      onChange={(e) => setNameAr(e.target.value)}
                      value={NameAr}
                      placeholder="اسم "
                    ></input>
                  </div>
                </div> */}
                <div className="ButtonSection">
                  <div>
                    <input
                      type="file"
                      onChange={onSelectFile}
                      className="formInput"
                    />
                    {image && (
                      <img src={preview} alt="" className="PreviewImage" />
                    )}
                  </div>

                  <button
                    type="submit"
                    className="SubmitButton"
                    disabled={isSubmitData}
                  >
                    Add Owner
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default OwnerForm;
