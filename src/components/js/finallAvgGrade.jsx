const FinallAvgGrade = ({ grade, isForTable = false }) => {


  const tableStylesWrraper = { display: "flex", justifyContent: "center" };

  const regularStylesWrraper = {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    right: "50%",
    transform: "translateX(50%)",
  };

  const regularStylesMainDiv = {
    borderRadius: "50px",
    color: "#7A55B5",
    background: "white",
    width: "fit-content",
    padding: "15px",
    boxShadow: "0 0 3px #DED5ED",
  };

  const tableStylesMainDiv = {
    borderRadius: "90px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    background: "#7A55B5",
    width: "40px",
    padding: "10px",
    boxShadow: "0 0 4px black",
    height: "40px",
    transform: "translateY(-25%)",
  };


  return (
    <div style={isForTable ? tableStylesWrraper : regularStylesWrraper}>
      <div style={isForTable ? tableStylesMainDiv : regularStylesMainDiv}>
        {grade}
      </div>
    </div>
  );
};

export default FinallAvgGrade;
