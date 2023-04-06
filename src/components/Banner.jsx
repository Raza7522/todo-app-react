import React from "react";

function Banner(props) {
  return (
    <div>
      <picture className="banner-img">
        <source
          media={"(min-width:376px)"}
          srcSet={
            props.isDark
              ? "/images/bg-desktop-dark.jpg"
              : "/images/bg-desktop-light.jpg"
          }
        />
        <img
          src={
            props.isDark
              ? "/images/bg-mobile-dark.jpg"
              : "/images/bg-mobile-light.jpg"
          }
        />
      </picture>
    </div>
  );
}

export default Banner;
