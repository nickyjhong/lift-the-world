import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavIconLink = ({ className, to, src, altSrc }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === to && imgSrc !== altSrc) {
      setImgSrc(altSrc);
    } else if (location.pathname !== to && imgSrc !== src) {
      setImgSrc(src);
    }
  }, [location]);

  return (
    <Link to={to}>
      <img className={className} src={imgSrc} />
    </Link>
  );
};

export default NavIconLink;
