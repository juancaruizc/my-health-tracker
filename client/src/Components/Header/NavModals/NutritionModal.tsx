import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavModals() {
  const [nutritionModal, setNutritionModal] = useState(true);

  return (
    <div>
      {nutritionModal && (
        <div className="navModal">
          <Link
            style={{
              textDecoration: "none",
              color: "#1B212C",
              fontSize: "14px",
            }}
            to=""
          >
            Nutrition Dashboard
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavModals;
