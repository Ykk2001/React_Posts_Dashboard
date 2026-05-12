import { Route, Routes } from "react-router-dom";
import ContextProvider from "./component/ContextProvider";
import Home from "./component/Home";
import Post from "./component/Post";

export default function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/:id" element={<Post/>}></Route>
        </Routes>
      </ContextProvider>
    </div>
  )
}
