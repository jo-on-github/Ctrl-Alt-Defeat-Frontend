import React from "react";
import "./styles.css";



export default function Overview({chosenCity}) {
  // const [overviewData, setOverviewData] = React.useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getGuideData(id); 
  //     setOverviewData(data);
  //     console.log(overviewData);
  //   };
  //   fetchData();
  // }, [getGuideData, id, setOverviewData, overviewData ]);

  //   console.log(guideData.overview)
  return (
    <div className="subInfo">
      <div className="subInfo__title">Overview</div>
      {chosenCity &&<div className="subInfo__description">
       {chosenCity.overview}
      </div>}

export default function Overview() {
  
    </div>
  );
}
