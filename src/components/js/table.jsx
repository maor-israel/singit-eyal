import { useEffect, useState } from "react";
import "../css/table.css";


const LeadersTable = ({ data }) => {
  const [dataInfo, setDataInfo] = useState([]);

  useEffect(() => {
    setDataInfo(data);
  }, [data]);

  const onFinish = (text) => {
    const filteredData = dataInfo.filter((item) =>
      item.school.includes(text.target.value)
    );
    if (text.target.value !== "") {
      setDataInfo(filteredData);
    } else {
      setDataInfo(data);
    }
  };

  return (
    <div className="table-component-wrraper">
      <div id="search-wrapper">
        <input
          onBlur={onFinish}
          id="search-input"
          placeholder="חיפוש לפי בית ספר או עיר"
          type={"text"}
        />
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
        <h3 className="participating-classes-table-header">
          :כל בתי הספר המשתתפים
        </h3>
      </div>


      <table id="table">
        <thead id="table-head">
            <tr>
              <td>ציון ממוצע למטלה</td>
              <td>ציון ממוצע סופי</td>
              <td>תלמידים</td>
              <td>כיתה</td>
              <td>בית ספר</td>
              <td>מקום</td>
            </tr>
        </thead>
        <tbody>
          {dataInfo.map((row, index) => {
            return (
              <tr key={index}>
                <td>{row.avgGradePerAssignment}</td>
                <td>{row.overallAvgGrade}</td>
                <td>{row.howManyStudents}</td>
                <td>{row.grade}</td>
                <td>{row.school}</td>
                <td>{index}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LeadersTable;
