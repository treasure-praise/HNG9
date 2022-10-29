import Profile from "../assets/profile__img.svg";

const Header = () => {
  return (
    <div className="mx-auto item-center">
      <div>
        <div>
          <img className="mx-auto" src={Profile} alt="" srcset="" />
        </div>

        <p className="font-bold">Olatunbosun Treasure-Praise</p>
      </div>
    </div>
  );
};

export default Header;
