import ZuriLogo from "../assets/Zuri.svg";
import I4G from "../assets/I4G.svg";

const Footer = () => {
  return (
    <footer className="md:flex justify-between border-t-2 mx-8">
      <a className="m-4" href="https://internship.zuri.team/hngi9">
        <img src={ZuriLogo} alt="Zuri Internship logo" />
      </a>
      <p className="text-left my-4">HNG Internship 9 Frontend Task</p>
      <a className="m-4" href="https://internship.zuri.team/hngi9">
        <img src={I4G} alt="Ingressive for Good logo" />
      </a>
    </footer>
  );
};

export default Footer;
