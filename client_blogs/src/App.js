import { Route, Routes } from "react-router-dom";

// Page
import HomePage from "./components/homePage/homePage";
import BlogsPage from "./components/blogsPage/blogsPage";
import Login from "./components/homePage/components/navbar/components/systemUser/login/login";
import Register from "./components/homePage/components/navbar/components/systemUser/register/register";
import ContainerIntro from "./components/homePage/components/containerIntro/containerIntro";


import GlobalStyle from "./GlobalStyle/GlobalStyle";

function App() {
  return (
    <GlobalStyle>
        <Routes>
        <Route path={"/register"} element={<Register />} />
          <Route path={"/login"} element={<Login />} />
          <Route path="/blogsPage" element={<BlogsPage />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path={"/"} element={<ContainerIntro />}/>
        </Routes>
    </GlobalStyle>
  );
}

export default App;
