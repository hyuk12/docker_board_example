import {Route, Routes} from "react-router-dom";
import React from "react";
import PostPage from "./pages/PostPage";

function App() {
  return (
      <>
         <Routes>
             <Route path={"/post"} element={<PostPage />}/>
         </Routes>
      </>

  );
}

export default App;
