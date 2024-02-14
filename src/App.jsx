import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Error, Homepage, Itinerary } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/yes" element={<Itinerary />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
