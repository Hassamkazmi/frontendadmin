import React, { Fragment, useState } from "react";
import "../../Components/CSS/forms.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { edit } from "../../redux/postReducer/PostRaceCourse";
import { Country_Name } from "../../Data/Country";
import { Country_NameAr } from "../../Data/Country";
import swal from "sweetalert";
import Select from "react-select";
import { fetchsingleracecourse } from "../../redux/getReducer/getSingleRacecourse";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

let CountryEn = Country_Name.map(function (item) {
  return {
    id: item._id,
    value: item.country_name,
    label: item.country_name,
  };
});
let CountryAr = Country_NameAr.map(function (item) {
  return {
    id: item._id,
    value: item.name,
    label: item.name,
  };
});
const EditRacecourse = () => {
  const { data: singleracecourse } = useSelector(
    (state) => state.singleracecourse
  );

  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useNavigate();
  const [TrackName, setTrackName] = useState(singleracecourse.TrackName);
  const [TrackLength, setTrackLength] = useState(singleracecourse.TrackLength);
  const [Country, setCountry] = useState(singleracecourse.Country);

  const [image, setImage] = useState(singleracecourse.image);
  const fileSelected = (event) => {
    const image = event.target.files[0];
    setImage(image);
  };

  const submit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("TrackName", TrackName);
      formData.append("TrackLength", TrackLength);
      formData.append("Country", Country);

      dispatch(edit);
      history("/racecourse");
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
  useEffect(() => {
    dispatch(fetchsingleracecourse({ id }));
  });
  console.log(singleracecourse);

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
                      onChange={(e) => setTrackName(e.target.value)}
                      value={TrackName}
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
                </div>
                <div className="row mainrow">
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
                </div>
                <div className="row mainrow">
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
                </div>

                <div className="ButtonSection">
                  <input type="file" size="60" onChange={fileSelected} />
                  <button type="submit" className="SubmitButton">
                    Update
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

export default EditRacecourse;
