import logoImage from "../assets/cnblogo.svg";

export const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <img 
        src={logoImage} 
        alt="CnB Code" 
        className="h-14 w-14 object-contain"
      />
    </div>
  );
};