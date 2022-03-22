import AvgGradePerAssigment from "./avgGradePerAssigment";
import "../css/LeadingClassesCards.css";
import FinallAvgGrade from "./finallAvgGrade";
import medal from "../../assets/meal.png";


const LeadingClassesCards = ({
  schoolName,
  gift,
  name,
  studentsCount,
  finallGrade,
  lessons,
}) => {
  return (
    <div className="card-wrrapper">


      <h3 className="gifts">{gift && gift}</h3>

      <div className="cards-main-div">
        <img className="medalion" src={medal} alt="exmp"></img>
        <h3>{schoolName ?? schoolName}</h3>


        <div className="school-data-div">
          <h5>{name ?? name}</h5>
          <h5>{studentsCount ?? studentsCount} תלמידים</h5>
        </div>


        <h4 className="grades-header">ציון ממוצע למטלה</h4>
        <AvgGradePerAssigment
          lessons={lessons ?? lessons}
        ></AvgGradePerAssigment>
        <h4 className="grades-header">ציון ממוצע סופי</h4>
        <FinallAvgGrade grade={finallGrade ?? finallGrade}></FinallAvgGrade>
      </div>
    </div>
  );
};




const LeadingClasses = ({ classes }) => {

  return (
    <div className="leading-classes-wrrapper">
      {classes.slice(0, 3).map((item,index) => {
        return (
          <LeadingClassesCards
            key={index}
            finallGrade={item.average}
            lessons={item.lessons}
            studentsCount={item.studentsCount}
            name={item.name}
            schoolName={item.schoolName}
          ></LeadingClassesCards>
        );
      })}
    </div>
  );
};

export default LeadingClasses;
