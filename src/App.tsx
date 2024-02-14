// App.js
import { Routes, Route} from "react-router-dom";

//imported components
import Home from "./pages/Home";

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name_arg" element={<Home />} />
        </Routes>
      </>
  );
}

export default App