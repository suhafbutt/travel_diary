import '../stylesheets/diary_entry.css'
import japanThumbnail from '../assets/japan.png';
import locationImage from '../assets/location.png';


export function DiaryEntry() {
  return (
    <section>
      <div className="location-detail-wraper">
        <img src={japanThumbnail} className="city-image" alt="globe icon"/>
        <div className="location-wrapper">
          <img src={locationImage} className="location-image" alt="globe icon"/>
          <span className="city-name">JAPAN</span>
          <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu" className="google-location" target="_blank">View on Google Maps</a>
          
        </div>
          
        <h2 className="location-name">Mount Fuji</h2>
        <div className="visit-date">12 Jan, 2023 - 24 Jan, 2023</div>
        <span className="location-description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</span>
      </div>
      <hr className="line-breaker"/>
    </section>
  )
}

