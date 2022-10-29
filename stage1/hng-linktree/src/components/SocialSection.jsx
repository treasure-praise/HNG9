import Github from "../assets/Github.svg";
import Slack from "../assets/slack.svg";

const SocialSection = () => {
  return (
    <div className="flex justify-center my-8">
      <a className="m-4" href="https://internship.zuri.team/hngi9">
        <img src={Slack} alt="" srcset="" />
      </a>
      <a className="m-4" href="https://github.com/treasure-praise">
        <img src={Github} alt="" srcset="" />
      </a>
    </div>
  );
};

export default SocialSection;
