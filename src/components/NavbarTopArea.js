import Logo from "../images/logo.png";
const NavbarTopArea = () => {
  return (
    <div className="logo___area">
      <img src={Logo} alt="" className="main___logo" />
      <div className="logo___tittle">
        <p>রবীন্দ্র বিশ্ববিদ্যালয়</p>
        <p>Rabindra University of Bangladesh</p>
      </div>
    </div>
  );
};

export default NavbarTopArea;
