import React, { useState, useEffect } from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const GOOGLE_MAPS_API_KEY = "AIzaSyD8w_-IJrAZJvIJ9gD-cykqWeC2NmbGNmk"; // Replace with your actual Google Maps API key

export default function Reviews({ chosenCity }) {
  const { id } = useParams();
  const selectedItem = chosenCity.find((item) => item._id === id);

  console.log("chosenCity:", chosenCity);
  console.log("selectedItem:", selectedItem);

  const [marker, setMarker] = useState(null);

  useEffect(() => {
    const geocodeEndpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(selectedItem.location)}&key=AIzaSyD8w_-IJrAZJvIJ9gD-cykqWeC2NmbGNmk`;
    fetch(geocodeEndpoint)
      .then(response => response.json())
      .then(data => {
        if (data.status === "OK") {
          const location = data.results[0].geometry.location;
          console.log("location:", location);
          setMarker(location);
        } else {
          console.log("Geocode was not successful for the following reason: " + data.status);
        }
      })
      .catch(error => console.error(error));
  }, [selectedItem.location]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  console.log("isLoaded:", isLoaded);
  console.log("loadError:", loadError);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading maps...</div>;

  console.log("marker:", marker);
  return <Map marker={marker} location={selectedItem.location} />;
}

function Map({ marker, location }){
  console.log("marker prop:", marker);
  return( 
    <GoogleMap zoom={10} center={marker} mapContainerClassName="mapContainer">
      {marker && <Marker position={marker} />}
      <div className="mapLocation">{location}</div>
    </GoogleMap>
  )
}
//   return (
//     <div className="subInfo">
//       <div className="subInfo__title">Location</div>
//       <div className="subInfo__description"></div>
       
//     </div>

//   );
// }