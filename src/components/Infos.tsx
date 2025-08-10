import profilImg from "../assets/images/profil.png";
import emailLogo from "../assets/images/Mail.svg"
import linkedinLogo from "../assets/images/linkedin.svg"
//TODO: ajouter un effect ou animation pour les anchors eleement

export default function Infos() {
  return (
    <header>
      <img src={profilImg} alt="profil photo" />
      <h1>Laura Smith</h1>
      <p>Frontend Developer</p>
      <span>laurasmith.website</span>
        <a 
          className="btn-left"
          href="mailto:contact@kevinpaulidor.de" 
          target="_blank" 
          rel="noopener noreferrer"
          >
          <img src={emailLogo} alt="email logo" />
          <span>Email</span>
        </a>
        <a 
          className="btn-right"
          href="mailto:contact@kevinpaulidor.de" 
          target="_blank" 
          rel="noopener noreferrer"
          >
          <img src={linkedinLogo} alt="linkedin logo" />
          <span>LinkedIn</span>
        </a>
    </header>
  );
}
