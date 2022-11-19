import React, { useState, useEffect } from "react";
import "../../Components/CSS/forms.css";
import axios from "axios";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../../redux/postReducer/PostNewsSlice";

import swal from "sweetalert";

const NewsForm = () => {
  // const dispatch = useDispatch();
  const history = useNavigate();
  const [TitleEn, setTitleEn] = useState("");
  const [TitleAr, setTitleAr] = useState("");
  const [SecondTitleEn, setSecondTitleEn] = useState("");
  const [SecondTitleAr, setSecondTitleAr] = useState("");
  const [DescriptionAr, setDescriptionAr] = useState("");
  const [DescriptionEn, setDescriptionEn] = useState("");
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();

  const submit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("TitleEn", TitleEn);
      formData.append("TitleAr", TitleAr);
      formData.append("SecondTitleEn", SecondTitleEn);
      formData.append("SecondTitleAr", SecondTitleAr);
      formData.append("DescriptionAr", DescriptionAr);
      formData.append("DescriptionEn", DescriptionEn);
      const response = await axios.post(
        `${window.env.API_URL}/uploadnews?keyword=&page=`,
        formData
      );
      swal({
        title: "success!",
        text: "Data Submitted !",
        icon: "success",
        button: "OK",
      });
      history("/news");
    } catch (error) {
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
  const isSubmitData =
    TitleAr === "" ||
    TitleEn === "" ||
    SecondTitleEn === "" ||
    SecondTitleAr === "" ||
    DescriptionAr === "" ||
    DescriptionEn === "" ||
    image === null ||
    image === undefined;

  return (
    <>
      <div className="page">
        <div className="rightsidedata">
          <div
            style={{
              marginTop: "30px",
            }}
          >
            <div className="Headers">Add News</div>
            <div className="form">
              <form onSubmit={submit}>
                <div className="row  mainrow">
                  <div className="col-sm">
                    <input
                      placeholder=" TitleEn"
                      onChange={(e) => setTitleEn(e.target.value)}
                      name="TitleEn"
                      value={TitleEn}
                      required
                    ></input>
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="اسم "
                      onChange={(e) => setTitleAr(e.target.value)}
                      name="TitleAr"
                      value={TitleAr}
                    ></input>
                  </div>
                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="SecondTitleEn"
                      onChange={(e) => setSecondTitleEn(e.target.value)}
                      name="SecondTitleEn"
                      value={SecondTitleEn}
                      required
                      type="text"
                    ></input>
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      type="text"
                      placeholder="اسم المسار"
                      onChange={(e) => setSecondTitleAr(e.target.value)}
                      name="SecondTitleAr"
                      value={SecondTitleAr}
                    ></input>
                  </div>
                </div>
                <div className="row mainrow">
                  <div className="col-sm">
                    <input
                      placeholder="Detail"
                      name="DescriptionEn"
                      onChange={(e) => setDescriptionEn(e.target.value)}
                      value={DescriptionEn}
                    ></input>
                    <span className="spanForm"> |</span>
                  </div>

                  <div className="col-sm">
                    <input
                      placeholder="التفاصيل"
                      style={{ direction: "rtl" }}
                      name="DescriptionAr"
                      onChange={(e) => setDescriptionAr(e.target.value)}
                      value={DescriptionAr}
                    ></input>
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
                      <img src={preview} alt="" className="PreviewImage" />
                    )}
                  </div>

                  <button type="submit" className="SubmitButton">
                    Ad  News
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsForm;
