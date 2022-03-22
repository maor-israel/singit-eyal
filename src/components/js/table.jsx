import { useEffect, useState } from "react";
import useWindowDimensions from "../../helpers/screenDimentions";
import "../css/table.css";

const LeadersTable = ({ data, colums }) => {
  const [dataInfo, setDataInfo] = useState([]);
  const { width } = useWindowDimensions();

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
        {width > 900 ? (
          <h3 className="participating-classes-table-header">
            :כל בתי הספר המשתתפים
          </h3>
        ) : (
          ""
        )}
        <input
          onBlur={onFinish}
          id="search-input"
          placeholder="חיפוש לפי בית ספר או עיר"
          type={"text"}
        />
        {width > 900 ? (
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
      </div>

      <table id="table">
        <thead id="table-head">
          <tr>
            {colums.map((column, index) => (
              <td key={index}>{column}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataInfo.map((row, index) => {
            return (
              <tr key={index}>
                {width > 900 ? (
                  <td>{row.avgGradePerAssignment}</td>
                ) : (
                  <td>
                    <button>צפייה במטלות</button>
                  </td>
                )}
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
