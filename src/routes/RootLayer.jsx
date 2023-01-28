import MainHeader from "../component/MainHeader";
import { Outlet } from "react-router-dom";

function RootLayer(params) {
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