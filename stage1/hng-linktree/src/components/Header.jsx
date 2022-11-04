import Profile from "../assets/profile__img.svg";
import Share from "../assets/share.svg";

const Header = () => {
  return (
    <div className="mx-auto item-center">
      <div>
        <div>
          <img
            id="profile_img"
            className="mx-auto"
            src={Profile}
            alt="profile"
          />
        </div>
        <button className="absolute top-0 md:right-72 right-12">
          <img src={Share} alt="share" id="share" />
        </button>
        <p className="font-bold text-center">Olatunbosun Treasure-Praise</p>
        <h1 className="hidden" id="slack">
          @Treasure
        </h1>
      </div>
    </div>
  );
};

export default Header;
