import MainHeader from "../component/MainHeader";

import { Outlet } from "react-router-dom";
import { useState } from "react";

function RootLayer(params) {
  const [modalIsVisible, SetModalIsVisible] = useState(false);

  function showModalVisibility(_) {
    SetModalIsVisible(true);
  }

  function hideModalVisibility(_) {
    SetModalIsVisible(false);
  }

  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default RootLayer;

// I used 'useState' and 'useEffect' during the tutorial.
// You can check that out in archived folder