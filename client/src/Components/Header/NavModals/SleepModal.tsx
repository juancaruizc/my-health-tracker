import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavModals() {
  const [sleepModal, setSleepModal] = useState(true);

  return (
    <div>
      {sleepModal && (
        <div className="navModal">
          <Link
            style={{
              textDecoration: "none",
              color: "#1B212C",
              fontSize: "14px",
            }}
            to=""
          >
            Sleep Dashboard
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "#1B212C",
              fontSize: "14px",
            }}
            to=""
          >
            Oura Dashboard
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavModals;
