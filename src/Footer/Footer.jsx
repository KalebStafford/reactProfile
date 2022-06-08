import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://www.facebook.com/profile.php?id=100078867349823">
        <img src="/FacebookIcon.png" alt="" className="facebook" />
      </a>
      <a href="https://instagram.com/kalebstafford0?igshid=NmZiMzY2Mjc=">
        <img src="/InstagramIcon.png" alt="" className="instagram" />
      </a>
      <a href="https://twitter.com/kalebstafford0?s=21&t=Qs7OGRfeqg27t8bzeRGEIw">
        <img src="/TwitterIcon.png" alt="" className="twitter" />
      </a>
      <a href="https://www.linkedin.com/in/kaleb-stafford-ba6803221">
        <img src="/LinkedinIcon.png" alt="" className="linkedin" />
      </a>
      <div className="gmailContainer">
        <img src="/GmailIcon.png" alt="" className="gmail" />
        <span>kalebstafford0@gmail.com</span>
      </div>
    </div>
  );
}
