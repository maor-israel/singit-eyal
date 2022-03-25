import LeadingClasses from "../../components/js/leadingClasses";
import { LeadersTable } from "../../components/js/newTable";
import useWindowDimensions from "../../helpers/screenDimentions";
import "../css/firstScreen.css";

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
        isMobile={width > 1125 ? false : true}
        rows={tableDummyData}
      ></LeadersTable>

      <br></br>
      <br></br>
    </>
  );
};

export default FirstScreen;
