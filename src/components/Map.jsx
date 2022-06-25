import { useSelector } from "react-redux";
import "./Map.css";

export const Map = () => {
    const { curr_location } = useSelector((store) => store.weather);
    return(
    <div style={{width:"100%", height:"440px", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <iframe title="gmap" name="gMap" className="gmap_iframe" src={`https://maps.google.com/maps?q=${curr_location}&t=&z=13&ie=UTF8&iwloc=&output=embed`}></iframe>
    </div>
    )
};
