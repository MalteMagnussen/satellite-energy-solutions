import React from "react";

const Maps = () => {
  let mymap = L.map("mapid").setView([51.505, -0.09], 13);

  return (
    <>
      <div style={{ height: "180px" }} id="mapid"></div>
    </>
  );
};

export default Maps;
