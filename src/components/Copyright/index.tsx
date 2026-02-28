import React from "react";

const Copyright = () => {
  return (
    <a
      href="https://github.com/shaiksayeed"
      target="_blank"
      rel="noreferrer"
      className="copyright-container"
    >
      <div className="copyright">
        <div>
          developed by <span className="developer">Shaik Sayeed</span>
        </div>
        <div>
          <img
            src="https://ui-avatars.com/api/?name=Shaik+Sayeed&background=4a90d9&color=fff"
            alt="Shaik Sayeed avatar"
            width={24}
            height={24}
          />
        </div>
      </div>
    </a>
  );
};

export default Copyright;
