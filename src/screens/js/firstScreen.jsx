import LeadingClasses from "../../components/js/leadingClasses";
import LeadersTable from "../../components/js/table";
import useWindowDimensions from "../../helpers/screenDimentions";

import "../css/firstScreen.css";
// const isMobile = true;

//dummy data
const tableDummyData = [
  {
    key: 1,
    schoolName: "John Brown",
    name: "ו-2",
    studentsCount: 23,
    average: 78,
    lessons: [
      { classAverage: 80 },
      { classAverage: 80 },
      { classAverage: 80 },
      { classAverage: 80 },
      { classAverage: 80 },
    ],
  },
];

const dummyColumnsMobile = [
  "מטלות",
  "ציון סופי",
  "תלמידים",
  "כיתה",
  "בית ספר",
  "מקום",
];

const dummyColumns = [
  "ציון ממוצע סופי",
  "ציון ממוצע למטלה",
  "תלמידים",
  "כיתה",
  "בית ספר",
  "מקום",
];

const cardsDummyData = [
  {
    average: 80,
    lessons: [
      {
        classAverage: 74,
        finished: 1,
        score: 7400,
      },
      {
        classAverage: 74,
        finished: 1,
        score: 7400,
      },
      {
        classAverage: 74,
        finished: 1,
        score: 7400,
      },
      {
        classAverage: 74,
        finished: 1,
        score: 7400,
      },
      {
        classAverage: 74,
        finished: 1,
        score: 7400,
      },
    ],
    studentsCount: 24,
    name: `כיתה ו 1 קרית גת`,
    schoolName: "בית הספר אגמים",
  },
  {
    average: 80,
    lessons: [
      {
        classAverage: 74,
        finished: 1,
        score: 7400,
      },
      {
        classAverage: 74,
        finished: 1,
        score: 7400,
      },
      {
        classAverage: 74,
        finished: 1,
        score: 7400,
      },
      {
        classAverage: 74,
        finished: 1,
        score: 7400,
      },
      {
        classAverage: 74,
        finished: 1,
        score: 7400,
      },
    ],
    studentsCount: 24,
    name: "כיתה ו 1 קרית גת",
    schoolName: "בית הספר אגמים",
  },
  {
    average: 80,
    lessons: [
      {
        classAverage: 74,
        finished: 1,
        score: 7400,
      },
      {
        classAverage: 74,
        finished: 1,
        score: 7400,
      },
      {
        classAverage: 74,
        finished: 1,
        score: 7400,
      },
      {
        classAverage: 74,
        finished: 1,
        score: 7400,
      },
      {
        classAverage: 74,
        finished: 1,
        score: 7400,
      },
    ],
    studentsCount: 24,
    name: "כיתה ו 1 קרית גת",
    schoolName: "בית הספר אגמים",
  },
];

const FirstScreen = () => {
  const { width } = useWindowDimensions();

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
      <LeadersTable
        colums={width < 900 ? dummyColumnsMobile : dummyColumns}
        data={tableDummyData}
      ></LeadersTable>
      <br></br>
      <br></br>
    </>
  );
};

export default FirstScreen;
