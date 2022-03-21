import AvgGradePerAssigment from "./avgGradePerAssigment";
import "../css/LeadingClassesCards.css";
import FinallAvgGrade from "./finallAvgGrade";
import medal from "../../assets/meal.jpeg";


const LeadingClassesCards = ({
  schoolName,
  gift,
  nameOfClass,
  numberOfStudents,
  finallGrade,
  gradesPerAssigment,
}) => {
  return (
    <div className="card-wrrapper">


      <h3 className="gifts">{gift && gift}</h3>

      <div className="cards-main-div">
        <img className="medalion" src={medal} alt="exmp"></img>
        <h3>{schoolName ?? schoolName}</h3>


        <div className="school-data-div">
          <h5>{nameOfClass ?? nameOfClass}</h5>
          <h5>{numberOfStudents ?? numberOfStudents} תלמידים</h5>
        </div>


        <h4 className="grades-header">ציון ממוצע למטלה</h4>
        <AvgGradePerAssigment
          avgGradePerAssigment={gradesPerAssigment ?? gradesPerAssigment}
        ></AvgGradePerAssigment>
        <h5 className="grades-header">ציון סופי ממוצע</h5>
        <FinallAvgGrade grade={finallGrade ?? finallGrade}></FinallAvgGrade>
      </div>
    </div>
  );
};




const LeadingClasses = ({ classes }) => {
  return (
    <div className="leading-classes-wrrapper">
      {classes.map((item,index) => {
        return (
          <LeadingClassesCards
            key={index}
            finallGrade={item.finallGrade}
            gradesPerAssigment={item.gradesPerAssigment}
            numberOfStudents={item.numberOfStudents}
            nameOfClass={item.nameOfClass}
            schoolName={item.schoolName}
            gift={item.gift}
          ></LeadingClassesCards>
        );
      })}
    </div>
  );
};

export default LeadingClasses;
