import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-2">
      <Link
        to="/projects"
        className="text-[6.5vw] leading-[5.5vw] border-4 border-white rounded-full px-10 pt-3 uppercase"
      >
        Projects
      </Link>

      <Link
        to="/agence"
        className="text-[6.5vw] leading-[5.5vw] border-4 border-white rounded-full px-10 pt-3 uppercase"
      >
        Agence
      </Link>
    </div>
  );
};

export default HomeBottomText;
