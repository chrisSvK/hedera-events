import "./Navigation.css";
import instagram from "../../assets/img/instagram.png";

function Navigation() {
  return (
    <nav>
      <div className="leftNavigation">
        <a href="#first-segment">O mne</a>
        <a href="#reference">Referencie</a>
        <a href="#email-form">Kontakt</a>
      </div>

      <div className="rightNavigation">
        <a href="https://www.github.com/chrisSvK" target="_blank">
          <img src={instagram} />
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
