import { useEffect, useState } from "react";
import useWindowDimensions from "../../helpers/screenDimentions";
import AvgGradePerAssigment from "./avgGradePerAssigment";
import FinallAvgGrade from "../js/finallAvgGrade";
import "../css/table.css";

const LeadersTable = ({ data, colums }) => {

  const [dataInfo, setDataInfo] = useState([]);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setDataInfo(data);
  }, [data]);

  const onFinish = (text) => {
    const filteredData = dataInfo.filter((item) =>
      item.schoolName.includes(text.target.value)
    );
    if (text.target.value !== "") {
      setDataInfo(filteredData);
    } else {
      setDataInfo(data);
    }
  };

  const handleWatchTasks = (e) => {
    e.target.parentElement.lastChild.style.display === "flex"
      ? (e.target.parentElement.lastChild.style.display = "none")
      : (e.target.parentElement.lastChild.style.display = "flex");
  };


  return (
    <div className="table-component-wrraper">
      <div id="search-wrapper">
        {width > 1125 ? (
          <h3 className="participating-classes-table-header">
            :כל בתי הספר המשתתפים
          </h3>
        ) : (
          ""
        )}
        <input
          onBlur={onFinish}
          id="search-input"
          placeholder={"חיפוש לפי בית ספר או עיר"}
          type={"text"}
        />
        {width > 1125 ? (
          <button
            className="search-button"
            onClick={() => {
              let id = document.getElementById("search-input");
              id.value = null;
              setDataInfo(data);
            }}
          >
            נקה חיפוש
          </button>
        ) : (
          ""
        )}
      </div>);
};

export default LeadersTable;
