import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../../redux/postReducer/PostHorse";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Select from "react-select";
import { STATUSES } from "../../redux/getReducer/getHorseSlice";

const LocalItem = () => {

  const list = localStorage.getItem("lists");
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const Verdict = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { data: horse, status } = useSelector((state) => state.horse);

  // useEffect(() => {
  //   dispatch(fetchHorse());
  // }, [dispatch]);

  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [InputData, SetinputData] = useState("");
  const [items, setitems] = useState(LocalItem());

  let horseoptions = horse.map(function (item) {
    return {
      id: item._id,
      value: item.NameEn,
      label: item.NameEn,
      jockeyvalue: item.JockeyData.map((item) => item.Name),
    };
  });

  const handlesubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("RaceKind", "Flat");
    formData.append("raceName", "Testing");
    formData.append("Description", "Description");
    formData.append("DayNTime", "DayNTime");
    formData.append("Weather", "Weather");
    formData.append("RaceStatus", "RaceStatus");
    formData.append("RaceCourse", "6348007b244c9900161902ec");
    formData.append("Horses", selectedOption1.id);
    formData.append("Horses", selectedOption2.id);
    formData.append("Horses", selectedOption3.id);

    dispatch(add(formData));
  };

  const addItem = () => {
    
    if (InputData) {
    } else {
      setitems([...items, InputData]);
    SetinputData("");
    console.log(items, "data is");
    }
  };

  if (status === STATUSES.LOADING) {
    return (
      <h2
        style={{
          margin: "100px",
        }}
      >
        Loading....
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

  return (
    <Fragment>
      <div className="page">
        <div className="rightsidedata">
          <div
            className="Header"
            style={{ marginTop: "2px", marginLeft: "12px" }}
          >
            <h4>Verdict Selection</h4>
            <button onClick={addItem}>Add Verdict</button>
          </div>

          <Tabs defaultActiveKey="0" id="justify-tab-example" className="mb-3">

           {
            items.map((data,index) => {
              return(
                <Tab eventKey={index} title={`Verdict # ${index + 1 }`} className="Verdicttab">
                <div className="myselecthorse">
                  <div className="myselecthorsedata">
                    <span>Rank #</span>
                    <span>Verdict Name</span>
                    <span>Horse Name</span>
                    <span>Jockey Name</span>
                  </div>
                </div>
                <div className="myselectdata">
                  <div className="myselectiondata">
                    <span>#1</span>
                    <span>
                    <div className="col-sm">
                    <input type='text' placeholder='Verdict Name' className="textverdict" />

                   </div>
                    </span>
                    <span>
                      <Select
                        defaultValue={selectedOption1}
                        onChange={setSelectedOption1}
                        options={horseoptions}
                        isClearable={true}
                        isSearchable={true}
                      />
                    </span>
                    <span>
                      <Select
                        defaultValue={selectedOption1}
                        onChange={setSelectedOption1}
                        options={horseoptions}
                        isClearable={true}
                        isSearchable={true}
                      />
                    </span>
                  </div>
                  <div className="myselectiondata">
                    <span>#2</span>
                    <span>
                    <div className="col-sm">
                    <input type='text' placeholder='Verdict Name' className="textverdict" />

                   </div>
                    </span>
                    <span>
                      <Select
                        defaultValue={selectedOption1}
                        onChange={setSelectedOption1}
                        options={horseoptions}
                        isClearable={true}
                        isSearchable={true}
                      />
                    </span>
                    <span>
                      <Select
                        defaultValue={selectedOption1}
                        onChange={setSelectedOption1}
                        options={horseoptions}
                        isClearable={true}
                        isSearchable={true}
                      />
                    </span>
                  </div>
                  <div className="myselectiondata">
                    <span>#3</span>
                    <span>
                    <div className="col-sm">
                     <input type='text' placeholder='Verdict Name' className="textverdict" />
                   </div>
                    </span>
                    <span>
                      <Select
                        defaultValue={selectedOption1}
                        onChange={setSelectedOption1}
                        options={horseoptions}
                        isClearable={true}
                        isSearchable={true}
                      />
                    </span>
                    <span>
                      <Select
                        defaultValue={selectedOption1}
                        onChange={setSelectedOption1}
                        options={horseoptions}
                        isClearable={true}
                        isSearchable={true}
                      />
                    </span>
                  </div>
                  <div className="sbmtbtn">
                    <button onClick={handlesubmit}>Save & Publish </button>
                  </div>
                </div>
                </Tab> 
              )
            })
           }

          </Tabs>
        </div>
      </div>
    </Fragment>
  );
};

export default Verdict;
