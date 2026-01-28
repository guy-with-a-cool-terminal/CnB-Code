import logoImage from "../assets/cnblogo.svg";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <img
        src={logoImage}
        alt="CnB Code"
        className="h-14 w-14 object-contain group-hover:scale-105 transition-transform"
      />
    </Link>
  );
};