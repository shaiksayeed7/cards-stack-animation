import React from "react";

const Copyright = () => {
  return (
    <a
      href="https://github.com/shaiksayeed7"
      target="_blank"
      rel="noreferrer"
      className="copyright-container"
    >
      <div className="footer-badge">
        <div>
          developed by <span className="author">Shaik Sayeed</span>
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
