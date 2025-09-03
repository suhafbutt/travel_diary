import '../stylesheets/header.css'
import globelogo from '../assets/Globe.png';

export function Header() {
  return (
    <header className="diary-header">
      <img src={globelogo} className="header-image" alt="globe icon"/>
      <span className="header-text">My travel journal.</span>
    </header>
  )
}
