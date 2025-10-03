import '../stylesheets/diary_entry.css'
import locationImage from '../assets/images/location.png';


export function DiaryEntry(props) {
  return (
    <section>
      <div className="location-detail-wraper">
        <img src={props.location_image.src} className="city-image" alt={props.location_image.alt}/>
        <div className="location-wrapper">
          <img src={locationImage} className="location-image" alt="globe icon"/>
          <span className="city-name">{props.country_name}</span>
          <a href={props.location_address} className="google-location" target="_blank">View on Google Maps</a>
          
        </div>
          
        <h2 className="location-name">{props.location_name}</h2>
        <div className="visit-date">{props.visit_date}</div>
        <span className="location-description">{props.description}</span>
      </div>
      <hr className="line-breaker"/>
    </section>
  )
}

