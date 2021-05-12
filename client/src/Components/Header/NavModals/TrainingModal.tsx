import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavModals() {
  const [trainingModal, setTrainingModal] = useState(true);
  return (
    <div>
      {trainingModal && (
        <div className="navModal">
          <Link
            style={{
              textDecoration: "none",
              color: "#1B212C",
              fontSize: "14px",
            }}
            to=""
          >
            Training Dashboard
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavModals;
