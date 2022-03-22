import "../css/avgGradePerAssigment.css";


const AssigmentsBadge = ({assigment}) => {
  return (
    <div className="avg-grade-per-assigment-center">
    <div className="avg-grade-per-assigment">{assigment.grade && assigment.grade}</div>
    {assigment.name && assigment.name}
  </div>
  );
}
const AvgGradePerAssigment = ({ avgGradePerAssigment }) => {
  return (
    <div className="avg-grade-per-assigment-wrraper">
      {avgGradePerAssigment.map((assigment, index) => {
        return (
          <AssigmentsBadge assigment={assigment} key={index} />
        );
      })}
    </div>
  );
};


export default AvgGradePerAssigment;
export {AssigmentsBadge}
