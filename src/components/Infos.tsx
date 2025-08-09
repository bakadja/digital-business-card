import profilImg from "../assets/images/profil.png"
export default function Infos() {
  return (
    <header>
      <img src={profilImg} alt="profil photo" />
      <h1>Laura Smith</h1>
      <p>Frontend Developer</p>
      <span>laurasmith.website</span>
      <div >
        <button type="button">Email</button>
        <button type="button">LinkedIn</button>
      </div>
    </header>
  )
}
