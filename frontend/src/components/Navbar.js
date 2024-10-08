import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo5.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';  
import CartContext from '../context/CartContext';
// import Tooltip from '../components/Tooltip'; 
import HoverBox from './HoverBox';
import '../App.css';

const Navbar = () => {
  const location = useLocation();

  const [activeLink, setActiveLink] = useState(location.pathname);
  const { cart } = useContext(CartContext);
  // const [showTooltip, setShowTooltip] = useState(false); 
  const [hovering, setHovering] = useState(false);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  // const handleClick = () => {
  //   navigate('/addtocartpage');
  // };

  // const handleMouseEnter = () => {
  //   setShowTooltip(true);
  // };

  // const handleMouseLeave = () => {
  //   setShowTooltip(false);
  // };
  const sampleProducts = [
    { id: 1, img1: '1.jpg', name: 'Leather Bag' },
    { id: 2, img2: '2.jpg', name: 'Pent Coat' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </a>
      </div>
      <div className="navbar-links">
        <Link
          to="/"
          className={activeLink === '/' ? 'active' : ''}
          onClick={() => handleLinkClick('/')}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={activeLink === '/about' ? 'active' : ''}
          onClick={() => handleLinkClick('/about')}
        >
          About
        </Link>
        <Link
          to="/services"
          className={activeLink === '/services' ? 'active' : ''}
          onClick={() => handleLinkClick('/services')}
        >
          Services
        </Link>
        <Link
          to="/publiccategory"
          className={activeLink === '/publiccategory' ? 'active' : ''}
          onClick={() => handleLinkClick('/publiccategory')}
        >
          Categories
        </Link>

        <div
          className="navbar-check"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          style={{ position: 'relative' }}>
          <Link
            to="/new_arrival"
            className={activeLink === '/new_arrival' ? 'active' : ''}
            onClick={() => handleLinkClick('/new_arrival')}>
            New In
          </Link>
          
          {hovering && <HoverBox products={sampleProducts} />} 
        </div>

        <Link
          to="/allpublicproducts"
          className={activeLink === '/allpublicproducts' ? 'active' : ''}
          onClick={() => handleLinkClick('/allpublicproducts')}
        >
          Products
        </Link>
        {/* <Link
          to="/product_vertical_slider"
          className={activeLink === '/product_vertical_slider' ? 'active' : ''}
          onClick={() => handleLinkClick('/product_vertical_slider')}
        >
          prod_vert_slider
        </Link> */}
        <Link
          to="/contact"
          className={activeLink === '/contact' ? 'active' : ''}
          onClick={() => handleLinkClick('/contact')}
        >
          Contact
        </Link>
        

        <div className="navbar-cart">
        <Link to="/addtocartpage"  className={activeLink === '/addtocartpage' ? 'active' : ''}
                onClick={() => handleLinkClick('/addtocartpage')}>
            <FontAwesomeIcon icon={faShoppingCart} size="2x" />
        </Link>
            <span className="cart-count">{cart.length}</span> {/* Show number of items in the cart */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;










// import React, { useState, useContext } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import logo from '../images/logo5.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import CartContext from '../context/CartContext'; // Import CartContext
// import '../App.css';

// const Navbar = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [activeLink, setActiveLink] = useState(location.pathname);
//   const { cart } = useContext(CartContext); // Use useContext to access cart

//   const handleLinkClick = (path) => {
//     setActiveLink(path);
//   };

//   const handleClick = () => {
//     navigate('/addtocartpage');
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">
//         <a className="navbar-brand" href="/">
//           <img src={logo} alt="Logo" className="navbar-logo" />
//         </a>
//       </div>
//       <div className="navbar-links">
//         <Link
//           to="/"
//           className={activeLink === '/' ? 'active' : ''}
//           onClick={() => handleLinkClick('/')}
//         >
//           Home
//         </Link>
//         <Link
//           to="/about"
//           className={activeLink === '/about' ? 'active' : ''}
//           onClick={() => handleLinkClick('/about')}
//         >
//           About
//         </Link>
//         <Link
//           to="/services"
//           className={activeLink === '/services' ? 'active' : ''}
//           onClick={() => handleLinkClick('/services')}
//         >
//           Services
//         </Link>
//         <Link
//           to="/publiccategory"
//           className={activeLink === '/publiccategory' ? 'active' : ''}
//           onClick={() => handleLinkClick('/publiccategory')}
//         >
//           Categories
//         </Link>
//         <Link
//           to="/allpublicproducts"
//           className={activeLink === '/allpublicproducts' ? 'active' : ''}
//           onClick={() => handleLinkClick('/allpublicproducts')}
//         >
//           Products
//         </Link>
//         {/* <Link
//           to="/category_slider"
//           className={activeLink === '/category_slider' ? 'active' : ''}
//           onClick={() => handleLinkClick('/category_slider')}
//         >
//           Category_slider
//         </Link> */}
//         <Link
//           to="/product_vertical_slider"
//           className={activeLink === '/product_vertical_slider' ? 'active' : ''}
//           onClick={() => handleLinkClick('/product_vertical_slider')}
//         >
//           prod_vert_slider
//         </Link>
//         <Link
//           to="/contact"
//           className={activeLink === '/contact' ? 'active' : ''}
//           onClick={() => handleLinkClick('/contact')}
//         >
//           Contact
//         </Link>
//         <div className="navbar-cart">
//         <Link to="/addtocartpage"  className={activeLink === '/addtocartpage' ? 'active' : ''}
//                 onClick={() => handleLinkClick('/addtocartpage')}>
//             <FontAwesomeIcon icon={faShoppingCart} size="2x" />
//         </Link>
//             <span className="cart-count">{cart.length}</span> {/* Show number of items in the cart */}
//         </div>
//       </div>
//     </nav>
//   );
// };
// export default Navbar;



