import './styles.scss'
import { useLocation } from "react-router-dom";

function Banner() {
  const path = useLocation().pathname;
  const location = path.split("/")[1];
 
  return (
    <div className="banner">
      <div className={`background-banner ${location === '' ? 'home' : location}`} >
        <h1 className="title-banner">Beach Project, Vroom, Vroom</h1>
      </div>
    </div>
  )
}
export default Banner;