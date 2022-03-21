import "../css/avgGradePerAssigment.css";

const AvgGradePerAssigment = ({ avgGradePerAssigment }) => {
  return (
    <div className="avg-grade-per-assigment-wrraper">
      {avgGradePerAssigment.map((assigment, index) => {
        return (
          <div className="avg-grade-per-assigment-center" key={index}>
            <div className="avg-grade-per-assigment">{assigment.grade}</div>
            {assigment.name}
          </div>
        );
      })}
    </div>
  );
};

export default AvgGradePerAssigment;
