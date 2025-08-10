import twitterIcon from "../assets/images/TwitterIcon.svg";
import facebookIcon from "../assets/images/FacebookIcon.svg";
import instaIcon from "../assets/images/InstagramIcon.svg";
import githubIcon from "../assets/images/GitHubIcon.svg";

export default function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <a 
          href="https://x.com/"
          target="_blank"
          rel="noopener noreferrer"
          >
          <img src={twitterIcon} alt="twitter Icon" />
        </a>
        <a 
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          >
          <img src={facebookIcon} alt="facebookIcon" />
        </a>
        <a 
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          >
          <img src={instaIcon} alt="instaIcon" />
        </a>
        <a 
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          >
          <img src={githubIcon} alt="github Icon" />
        </a>
      </div>
    </footer>
  );
}

<a 
  href="https://www.example.com" 
  target="_blank" 
  rel="noopener noreferrer"
  >
    Lien vers Example
</a>
