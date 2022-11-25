import React, { useEffect } from "react";
import Moment from "moment";
import "react-toastify/dist/ReactToastify.css";
import { fetchjockey } from "../../../redux/getReducer/getJockeySlice";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchHorse } from "../../../redux/getReducer/getHorseSlice";
import Select from "react-select";
import swal from "sweetalert";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
import { fetchequipment } from "../../../redux/getReducer/getEquipment";
const LocalItem = () => {
  const list = localStorage.getItem("lists");
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const RaceForm = () => {



  const [InputData, SetinputData] = useState("");
  const [InputData2, SetinputData2] = useState("");
  const [Gate , setGate] = useState(1)
  const [JockeyData, SetJockeyData] = useState("");
  const [EquipmentData, SetEquipmentData] = useState("");
  const [items, setitems] = useState(LocalItem());
  const { data: jockey } = useSelector((state) => state.jockey);
  const { data: horse } = useSelector((state) => state.horse);
  const { data: equipment } = useSelector((state) => state.equipment);


  const history = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { RaceId } = 'state';

  let horseoptions = horse.map(function (item) {
    return {
      id: item._id,
      value: item.NameEn,
      label: item.NameEn,
    };
  });
  let AllJockey = jockey.map(function (item) {
    return {
      id: item._id,
      value: item.NameEn,
      label: item.NameEn,
      weight: item.MaximumJockeyWeight,
    };
  });
  let AllEquipment = equipment.map(function (item) {
    return {
      id: item._id,
      value: item.NameEn,
      label: item.NameEn,
     
    };
  });


  useEffect(() => {
    dispatch(fetchHorse());
    dispatch(fetchjockey());
    dispatch(fetchequipment());
  }, [dispatch]);
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);
  const addItem = () => {
  // if(InputData.id !== undefined || JockeyData.id !== undefined || EquipmentData.id !== undefined){
  //   setitems([...items, HorseEntry]);
  // }
  // else{
  //   setitems([...items, HorseEntry]);
  // }
    setitems([...items, HorseEntry]);
    setGate(Gate+1)
  };
  const Remove = () => {
    setitems([]);
    setGate(1)
  };
  const HorseEntry = [
    `${Gate},${InputData.id},${JockeyData.id},${JockeyData.weight},${EquipmentData.id}`,
  ];
  


(Gate,'Gate 2')
  const submit = async (event) => {
    event.preventDefault();
    try {
      


( {HorseEntry:items} )
      // const response = await axios.post(`${window.env.API_URL}addracehorses/${RaceId}`, {HorseEntry:items});
      // const response1 = await axios.put(`${window.env.API_URL}/publishrace/${RaceId}`);
      // history("/fullpublishrace", {
      //   state: {
      //     RaceId: RaceId
      //   },
      // });
      setitems([]);
      setGate(1)
      // history("/races");
      swal({
        title: "Success",
        text: "Data has been added successfully ",
        icon: "success",
        button: "OK",
      });
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
              <h4>Add Horse</h4>
            </div>
            <div className="myselecthorse">
              <div className="myselecthorsedata">
                <span>Gate #</span>
                <span>Horse Name</span>
                <span>Jockey Name</span>
                <span>Jockey Weight</span>
                <span>Equipment</span>

              </div>
            </div>
            <div className="myselectdata">
              <div className="myselectiondata displaynew">
                <span>0</span>
                <span>
                  <Select
                    defaultValue={InputData[0]}
                    onChange={SetinputData2}
                    options={horseoptions}
                    isClearable={false}
                    isSearchable={true}
                  />
                </span>
                <span>
                  <Select
                    defaultValue={JockeyData[0]}
                    onChange={SetinputData2}
                    options={AllJockey}
                    isClearable={false}
                    isSearchable={true}
                  />
                </span>
                <span>
                  <Select
                    defaultValue={EquipmentData[0]}
                    onChange={SetinputData2}
                    options={AllJockey}
                    isClearable={false}
                    isSearchable={true}
                  />
                </span>
                <span>
                  {JockeyData.weight === undefined ? (
                    <></>
                  ) : (
                    <>{JockeyData.weight} KG</>
                  )}{" "}
                </span>
              </div>
              {items.map((e, i) => {
                return (
                  <div className="myselectiondata">
                    <span>{i + 1}</span>
                    <span>
                      <Select
                        defaultValue={InputData}
                        onChange={SetinputData}
                        options={horseoptions}
                        isClearable={false}
                        isSearchable={true}
                      />
                    </span>
                    <span>
                      <Select
                        defaultValue={JockeyData}
                        onChange={SetJockeyData}
                        options={AllJockey}
                        isClearable={false}
                        isSearchable={true}
                      />
                    </span>
                    <span>
                      {JockeyData.weight === undefined ? (
                        <></>
                      ) : (
                        <>{JockeyData.weight} KG</>
                      )}{" "}
                    </span>
                    <span>
                  <Select
                    defaultValue={EquipmentData}
                    onChange={SetEquipmentData}
                    options={AllEquipment}
                    isClearable={false}
                    isSearchable={true}
                  />
                </span>
                  </div>
                );
              })}
              <div className="addbtn">
                <button className="AddAnother" onClick={addItem}>
                  <AiOutlinePlus /> Add Another{" "}
                </button>
              </div>
              <div className="sbmtbtndiv">
                <div className="RaceButtonDiv">
                  <button className="updateButton" onClick={Remove}>
                    Remove All
                  </button>

                  <button
                    className="SubmitButton"
                    type="submit"
                    onClick={submit}
                  >
                    Save & Add Horses
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RaceForm;
