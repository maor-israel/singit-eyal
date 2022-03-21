import AvgGradePerAssigment from "../../components/js/avgGradePerAssigment";
import FinallAvgGrade from "../../components/js/finallAvgGrade";
import LeadingClasses from "../../components/js/leadingClasses";
import LeadersTable from "../../components/js/table";
import "../css/firstScreen.css";
// const isMobile = true;

//dummy data
const tableDummyData = [
  {
    key: 1,
    place: 1,
    school: "John Brown",
    grade: "ו-2",
    city: "בת ים",
    howManyStudents: 23,
    avgGradePerAssignment: (
      <AvgGradePerAssigment
        avgGradePerAssigment={[
          { grade: 80, name: "maor" },
          { grade: 80, name: "maor" },
          { grade: 80, name: "maor" },
          { grade: 80, name: "maor" },
          { grade: 80, name: "maor" },
        ]}
      ></AvgGradePerAssigment>
    ),
    overallAvgGrade: <FinallAvgGrade isForTable grade={78}></FinallAvgGrade>,
  },
  {
    key: 2,
    place: 2,
    school: "John Brown",
    grade: "ו-4",
    city: "חיפה",
    howManyStudents: 43,
    avgGradePerAssignment: (
      <AvgGradePerAssigment
        avgGradePerAssigment={[
          { grade: 80, name: "maor" },
          { grade: 80, name: "maor" },
          { grade: 80, name: "maor" },
          { grade: 80, name: "maor" },
          { grade: 80, name: "maor" },
        ]}
      ></AvgGradePerAssigment>
    ),
    overallAvgGrade: <FinallAvgGrade isForTable grade={90}></FinallAvgGrade>,
  },
  {
    key: 1,
    place: 1,
    school: "John Brown",
    grade: "ו-2",
    city: "בת ים",
    howManyStudents: 23,
    avgGradePerAssignment: (
      <AvgGradePerAssigment
        avgGradePerAssigment={[
          { grade: 80, name: "maor" },
          { grade: 80, name: "maor" },
          { grade: 80, name: "maor" },
          { grade: 80, name: "maor" },
          { grade: 80, name: "maor" },
        ]}
      ></AvgGradePerAssigment>
    ),
    overallAvgGrade: <FinallAvgGrade isForTable grade={78}></FinallAvgGrade>,
  },
  {
    key: 2,
    place: 2,
    school: "John Brown",
    grade: "ו-4",
    city: "חיפה",
    howManyStudents: 43,
    avgGradePerAssignment: (
      <AvgGradePerAssigment
        avgGradePerAssigment={[
          { grade: 80, name: "maor" },
          { grade: 80, name: "maor" },
          { grade: 80, name: "maor" },
          { grade: 80, name: "maor" },
          { grade: 80, name: "maor" },
        ]}
      ></AvgGradePerAssigment>
    ),
    overallAvgGrade: <FinallAvgGrade isForTable grade={90}></FinallAvgGrade>,
  },
  {
    key: 1,
    place: 1,
    school: "John Brown",
    grade: "ו-2",
    city: "בת ים",
    howManyStudents: 23,
    avgGradePerAssignment: (
      <AvgGradePerAssigment
        avgGradePerAssigment={[
          { grade: 80, name: "maor" },
          { grade: 80, name: "maor" },
          { grade: 80, name: "maor" },
          { grade: 80, name: "maor" },
          { grade: 80, name: "maor" },
        ]}
      ></AvgGradePerAssigment>
    ),
    overallAvgGrade: <FinallAvgGrade isForTable grade={78}></FinallAvgGrade>,
  },
  {
    key: 2,
    place: 2,
    school: "John Brown",
    grade: "ו-4",
    city: "חיפה",
    howManyStudents: 43,
    avgGradePerAssignment: (
      <AvgGradePerAssigment
        avgGradePerAssigment={[
          { grade: 80, name: "maor" },
          { grade: 80, name: "maor" },
          { grade: 80, name: "maor" },
          { grade: 80, name: "maor" },
          { grade: 80, name: "maor" },
        ]}
      ></AvgGradePerAssigment>
    ),
    overallAvgGrade: <FinallAvgGrade isForTable grade={90}></FinallAvgGrade>,
  },
  {
    key: 1,
    place: 1,
    school: "John Brown",
    grade: "ו-2",
    city: "בת ים",
    howManyStudents: 23,
    avgGradePerAssignment: (
      <AvgGradePerAssigment
        avgGradePerAssigment={[
          { grade: 80, name: "maor" },
          { grade: 80, name: "maor" },
          { grade: 80, name: "maor" },
          { grade: 80, name: "maor" },
          { grade: 80, name: "maor" },
        ]}
      ></AvgGradePerAssigment>
    ),
    overallAvgGrade: <FinallAvgGrade isForTable grade={78}></FinallAvgGrade>,
  },
  {
    key: 2,
    place: 2,
    school: "John Brown",
    grade: "ו-4",
    city: "חיפה",
    howManyStudents: 43,
    avgGradePerAssignment: (
      <AvgGradePerAssigment
        avgGradePerAssigment={[
          { grade: 80, name: "maor" },
          { grade: 80, name: "maor" },
          { grade: 80, name: "maor" },
          { grade: 80, name: "maor" },
          { grade: 80, name: "maor" },
        ]}
      ></AvgGradePerAssigment>
    ),
    overallAvgGrade: <FinallAvgGrade isForTable grade={90}></FinallAvgGrade>,
  },
];

const cardsDummyData = [
  {
    finallGrade: 80,
    gradesPerAssigment: [
      { grade: 80, name: "maor" },
      { grade: 80, name: "maor" },
      { grade: 80, name: "maor" },
      { grade: 80, name: "maor" },
      { grade: 80, name: "maor" },
    ],
    numberOfStudents: 28,
    nameOfClass: "כיתה ו 1 קרית גת",
    schoolName: "בית הספר אגמים",
    gift: "אוזניות לכל הכיתה ",
  },
  {
    finallGrade: 80,
    gradesPerAssigment: [
      { grade: 80, name: "maor" },
      { grade: 80, name: "maor" },
      { grade: 80, name: "maor" },
      { grade: 80, name: "maor" },
      { grade: 80, name: "maor" },
    ],
    numberOfStudents: 28,
    nameOfClass: "כיתה ו 1 קרית גת",
    schoolName: "בית הספר אגמים",
    gift: "אוזניות לכל הכיתה ",
  },
  {
    finallGrade: 80,
    gradesPerAssigment: [
      { grade: 80, name: "maor" },
      { grade: 80, name: "maor" },
      { grade: 80, name: "maor" },
      { grade: 80, name: "maor" },
      { grade: 80, name: "maor" },
    ],
    numberOfStudents: 28,
    nameOfClass: "כיתה ו 1 קרית גת",
    schoolName: "בית הספר אגמים",
    gift: "אוזניות לכל הכיתה ₪",
  },
];

const FirstScreen = () => {
  return (
    <>
      <br></br>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          className="all-schools-list-button"
          onClick={() => {
            window.location.href = "/#table";
          }}
        >
          :כל בתי הספר המשתתפים
        </button>
      </div>

      <LeadingClasses classes={cardsDummyData} />
      <br></br>
      <br></br>
        <LeadersTable data={tableDummyData}></LeadersTable>
      <br></br>
      <br></br>
    </>
  );
};

export default FirstScreen;
