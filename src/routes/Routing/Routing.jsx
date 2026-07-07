import { Routes, Route } from "react-router-dom";
import Review from "../../pages/CarePlanning/Review";

const Routing = () => {
  return (
    <Routes>
      <Route path="/Review" element={<Review />} />
    </Routes>
  );
};

export default Routing;