import profilImg from "../assets/images/profil.png";
import emailLogo from "../assets/images/Mail.svg"
import linkedinLogo from "../assets/images/linkedin.svg"


export default function Infos() {
  return (
    <header>
      <img src={profilImg} alt="profil photo" />
      <h1>Laura Smith</h1>
      <p>Frontend Developer</p>
      <span>laurasmith.website</span>
      <button type="button" className="btn-left">
        <img src={emailLogo} alt="email logo" />
        <span>Email</span>
      </button>
      <button type="button" className="btn-right">
        <img src={linkedinLogo} alt="linkedin logo" />
        <span>LinkedIn</span>
        </button>
    </header>
  );
}
