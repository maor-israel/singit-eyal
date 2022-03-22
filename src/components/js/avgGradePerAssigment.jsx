import "../css/avgGradePerAssigment.css";

const AssigmentsBadge = ({ assigment, index }) => {
  return (
    <div className="avg-grade-per-assigment-center">
      <div className="avg-grade-per-assigment">
        {assigment.classAverage && assigment.classAverage}
      </div>
      <h4 style={{margin:"auto"}}># {index && index}</h4>
    </div>
  );
};
const AvgGradePerAssigment = ({ lessons }) => {
  return (
    <div className="avg-grade-per-assigment-wrraper">
      {lessons.map((assigment, index) => {
        return (
          <AssigmentsBadge assigment={assigment} index={index} key={index} />
        );
      })}
    </div>
  );
};

export default AvgGradePerAssigment;
export { AssigmentsBadge };
