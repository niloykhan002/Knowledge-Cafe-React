import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="container mx-auto flex justify-between items-center py-5 border-b-2">
      <h1 className="font-bold text-4xl">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
