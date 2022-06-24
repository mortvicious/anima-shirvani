import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
  import ScrollWrapper from "./pages/ScrollWrapper/ScrollWrapper";
  
  const Routing = () => {
    return(
      <Router>
        <Routes>
          <Route exact path="/" element={<ScrollWrapper/>}/>
        </Routes>
      </Router>
    )
  }
  

export default Routing