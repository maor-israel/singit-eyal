const FinallAvgGrade = ({ grade, isForTable = false }) => {


  const tableStylesWrraper = { display: "flex", justifyContent: "center" };

  const regularStylesWrraper = {
    position: "absolute",
    display: "flex",
    justifyContent : "center",
    width : "100%",
    transform : "translateX(-7%)"
  };

  const regularStylesMainDiv = {
    borderRadius: "90px",
    color: "#7A55B5",
    background: "white",
    width: "60px",
    height : "60px",
    boxShadow: "0 0 3px #DED5ED",
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
    fontSize : "25px"
  };

  const tableStylesMainDiv = {
    borderRadius: "90px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    background: "#7A55B5",
    width: "50px",
    height : "50px",
    padding: "10px",
    boxShadow: "0 0 4px black",
    margin : "3px 0"
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
