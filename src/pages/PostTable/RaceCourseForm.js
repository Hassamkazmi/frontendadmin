import React, { Fragment, useState, useEffect } from "react";
import "../../Components/CSS/forms.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { add } from "../../redux/postReducer/PostRaceCourse";
// import { Country_Name } from "../../Data/Country";
// import { Country_NameAr } from "../../Data/Country";
import axios from "axios";
import swal from "sweetalert";
import Select from "react-select";
import { fetchnationality } from "../../redux/getReducer/getNationality";
import { fetchcolor } from "../../redux/getReducer/getColor";
import { fetchTrackLength } from "../../redux/getReducer/getTracklength";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


const RaceCourseForm = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { data: nationality } = useSelector((state) => state.nationality);
  const { data: color } = useSelector((state) => state.color);
  const { data: trackLength } = useSelector((state) => state.trackLength);

  let AllNationality =
    nationality === undefined ? (
      <></>
    ) : (
      nationality.map(function (item) {
        return {
          id: item._id,
          value: item.NameEn,
          label: item.NameEn,
        };
      })
    );

    let AllColor=
    color === undefined ? (
      <></>
    ) : (
      color.map(function (item) {
        return {
          id: item._id,
          value: item.NameEn,
          label: item.NameEn,
        };
      })
    );

    let AllTrack=
    trackLength === undefined ? (
      <></>
    ) : (
      trackLength.map(function (item) {
        return {
          id: item._id,
          value: item.TrackNameEn,
          label: item.TrackNameEn,
        };
      })
    );


  // const [TrackLength, setTrackLength] = useState("");
  // const [WeatherType, setWeatherType] = useState("");
  // const [WeatherDegree, setWeatherDegree] = useState("");
  // const [WeatherIcon, setWeatherIcon] = useState("");

  // const [Country, setCountry] = useState("");
  const [GroundTypeEn, setGroundTypeEn] = useState("");
  const [GroundTypeAr, setGroundTypeAr] = useState("");
  const [TrackNameEn, setTrackNameEn] = useState("");
  const [TrackNameAr, setTrackNameAr] = useState("");
  const [shortCode, setshortCode] = useState("");
  const [NationalityId, setNationalityId] = useState("");
  const [ColorCode, setColorCode] = useState("");
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();

  const submit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("TrackNameEn", TrackNameEn);
      formData.append("TrackNameAr", TrackNameAr);
      // formData.append("TrackLength", TrackLength);
      // formData.append("WeatherType", WeatherType);
      // formData.append("WeatherDegree", WeatherDegree);
      // formData.append("WeatherIcon", WeatherIcon);
      formData.append("GroundTypeEn", GroundTypeEn);
      formData.append("GroundTypeAr", setGroundTypeAr);
      formData.append("ColorCode", ColorCode.id);

      formData.append("NationalityId", NationalityId.id);
      // formData.append("Country", Country.value);
      formData.append("shortCode", shortCode);
      const response = await axios.post(
        `${window.env.API_URL}/createcourse?keyword=&page=`,
        formData
      );
      swal({
        title: "success!",
        text: "Data Submitted !",
        icon: "success",
        button: "OK",
      });
      history("/racecourse");
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

  useEffect(() => {
    dispatch(fetchnationality());
    dispatch(fetchcolor());
    dispatch(fetchTrackLength());
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
    <Fragment>
      <div className="page">
        <div className="rightsidedata">
          <div
            style={{
              marginTop: "30px",
            }}
          >
            <div className="Headers">New Race Course</div>
            <div className="form">
              <form onSubmit={submit}>
              <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Track Name"
                      onChange={(e) => setTrackNameEn(e.target.value)}
                      value={TrackNameEn}
                      required
                    ></input>
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      onChange={(e) => setTrackNameAr(e.target.value)}
                      value={TrackNameAr}
                      style={{ direction: "rtl" }}
                      placeholder="نوع الأرض"
                    ></input>
                  </div>
                </div>
            
                {/* <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Track Name"
                      onChange={(e) => setTrackNameEn(e.target.value)}
                      value={TrackNameEn}
                      required
                    ></input>
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      onChange={(e) => setTrackNameAr(e.target.value)}
                      value={TrackNameAr}
                      style={{ direction: "rtl" }}
                      placeholder="اسم المسار"
                    ></input>
                  </div>
                </div> */}
                {/* <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Track Length"
                      onChange={(e) => setTrackLength(e.target.value)}
                      value={TrackLength}
                      required
                    ></input>
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="طول المسار"
                    ></input>
                  </div>
                </div> */}

                {/* <div className="row mainrow">
                    <div className="col-sm">
                    <Select
                    placeholder={<div>Weather</div>}
                    defaultValue={setWeatherType}
                    onChange={setWeatherType}
                    options={Weathers}
                    isClearable={true}
                    isSearchable={true}
                  />  <span className="spanForm"> |</span>
                    </div>

                    <div className="col-sm">
                    <Select
                    
                    placeholder={<div>طقس</div>}
                  
                    className='selectdir'
                    options={Weathers}
                    isClearable={true}
                    isSearchable={true}
                  />
                    </div>
                  </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Weather Degree"
                      onChange={(e) => setWeatherDegree(e.target.value)}
                      value={WeatherDegree}
                      required
                      type='number'
                    ></input>
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="اسم المسار"
                    ></input>
                  </div>
                </div> */}
                <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Ground Type"
                      onChange={(e) => setGroundTypeEn(e.target.value)}
                      value={GroundTypeEn}
                      required
                    ></input>
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      onChange={(e) => setGroundTypeAr(e.target.value)}
                      value={GroundTypeAr}
                      style={{ direction: "rtl" }}
                      placeholder="نوع الأرض"
                    ></input>
                  </div>
                </div>
                {/* <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Weather Icon"
                      onChange={(e) => setWeatherIcon(e.target.value)}
                      value={WeatherIcon}
                      required
                    ></input>
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="اسم المسار"
                    ></input>
                  </div>
                </div> */}

                <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Short Code"
                      onChange={(e) => setshortCode(e.target.value)}
                      value={shortCode}
                      required
                    ></input>
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder=" رمز قصير"
                    ></input>
                  </div>
                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Select Color</div>}
                      defaultValue={ColorCode}
                      value={ColorCode}
                      onChange={setColorCode}
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
                      placeholder="تقييم الحصان"
                      className='selectdir'
                      defaultValue={ColorCode}
                      value={ColorCode}
                      onChange={setColorCode}
                      options={AllColor}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div> 
                
                {/* <div className="row mainrow">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Type to search Country</div>}
                      defaultValue={Country}
                      onChange={setCountry}
                      options={CountryEn}
                      isClearable={true}
                      isSearchable={true}
                    />
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <Select
                      placeholder={<div>اكتب للبحث عن الدولة</div>}
                      options={CountryAr}
                      isClearable={true}
                      isSearchable={true}
                      className="selectdir"
                    />
                  </div>
                </div> */}
                <div className="row mainrow">
                  <div className="col-sm">
                    <Select
                      placeholder={<div>Type to search Nationality</div>}
                      defaultValue={NationalityId}
                      onChange={setNationalityId}
                      options={AllNationality}
                      isClearable={true}
                      isSearchable={true}
                    />
                    <span className="spanForm">
                      
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
                    <Select
                      className="selectdir"
                      placeholder={
                        <div style={{ direction: "rtl" }}>
                          اكتب للبحث عن الجنسية
                        </div>
                      }
                      defaultValue={NationalityId}
                      onChange={setNationalityId}
                      options={AllNationality}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                </div>
                <div className="ButtonSection">
                  <div>
                    <input
                      type="file"
                      onChange={onSelectFile}
                      className="formInput"
                    />
                    {image && (
                      <img src={preview} className="PreviewImage" alt="" />
                    )}
                  </div>

                  <button type="submit" className="SubmitButton">
                    Add Race Course
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RaceCourseForm;
