// function Navbar(){
//     return(
//         <nav className="navbar">
//             <a className="brand-name" href="#home">
//                 {brandName}
//             </a>
//             <div className="nav-links">
//                 <a href="#home">Home</a>
//                 <a href="#events">Events</a>
//                 <a href="#categories">Categories</a>
//                 <a href="#about">About</a>
//             </div>
//         </nav>
//     );
// }
// export default Navbar;

// 
import { NavLink, useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();

  function getNavLinkClass({ isActive }) {
    return isActive ? "nav-link active-link" : "nav-link";
  }
  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/Login");
  }

  return (
    <nav className="navbar">
      <NavLink className="brand-name" to="/">
        Campus Connect
      </NavLink>

      <div className="nav-links">
        <NavLink className={getNavLinkClass} to="/">
          Home
        </NavLink>

        <NavLink className={getNavLinkClass} to="/events">
          Events
        </NavLink>

        <NavLink className={getNavLinkClass} to="/about">
          About
        </NavLink>
<NavLink className="nav-link register-link" to="/register">
Register
</NavLink>



<NavLink
className={getNavLinkClass} to ="/Login">
Login

</NavLink>
<button type="button" onClick={handleLogout}>Logout</button>

      </div>
    </nav>
  );
}

export default Navbar;