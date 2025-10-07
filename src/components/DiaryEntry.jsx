import '../stylesheets/diary_entry.css'
import locationImage from '../assets/images/location.png';


export function DiaryEntry(props) {
  const entry = props.entry;
  return (
    <section>
      <div className="location-detail-wraper">
        <img src={entry.location_image.src} className="city-image" alt={entry.location_image.alt}/>
        <div className="location-wrapper">
          <img src={locationImage} className="location-image" alt="globe icon"/>
          <span className="city-name">{entry.country_name}</span>
          <a href={entry.location_address} className="google-location" target="_blank">View on Google Maps</a>
          
        </div>
          
        <h2 className="location-name">{entry.location_name}</h2>
        <div className="visit-date">{entry.visit_date}</div>
        <span className="location-description">{entry.description}</span>
      </div>
      <hr className="line-breaker"/>
    </section>
  )
}

