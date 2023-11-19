import { BsGithub, BsLinkedin } from "react-icons/bs";

function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/uzair-peerzada-8392b4241/"
          target="_main"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/Uzair0712" target="_main">
          <BsGithub />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
