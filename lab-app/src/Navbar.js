import "./Navbar.css";

const logo = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png";
const menuImg = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png";

const Navbar = () => {
  return (
    <div className='custom-navbar'>
      <img src={logo} alt='logo' className='custom-logo' />
      <img src={menuImg} alt='menu-top' className='custom-image' />
    </div>
  );
};

export default Navbar;
