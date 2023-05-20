import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashBoardPage from "./pages/DashboardPage";
import CalendarPage from "./pages/CalendarPage";
import ReminderPage from "./pages/ReminderPage";
import Setting from "./pages/Setting";
import ProfilePage from "./pages/ProfilePage";
import LocationPage from "./pages/LocationPage";
import ThemePage from "./pages/ThemePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreateNotePage from "./pages/CreateNotePage";
import ShowNote from "./pages/ShowNote";
import { useEffect, useState } from "react";
import Axios from "./AxiosInstance";
import SignoutPage from "./pages/SignoutPage";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);


  const handleLogin = async () => {
    setIsLogin(true);
    navigate("/"); 
  };

  const fetchData = async () => {
    Axios.get("/check")
      .then((res) => {
        console.log(res);
        setIsLogin(res.data.success);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(error);
      });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      {isLogin ? (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Dashboard" element={<DashBoardPage />} />
          <Route path="/Calendar" element={<CalendarPage />} />
          <Route path="/Location" element={<LocationPage />} />
          <Route path="/Reminder" element={<ReminderPage />} />
          <Route path="/Setting" element={<Setting />} />
          <Route path="/Profile" element={<ProfilePage />} />
          <Route path="/Setting/Theme" element={<ThemePage />} />
          <Route path="/Create" element={<CreateNotePage />} />
          <Route path="/note/:noteid" element={<ShowNote />} />
          <Route path="/Signout" element={<SignoutPage />} />
          <Route exect path="/Login" element={<Navigate to={"/"} replace />} />
          <Route path="/Register" element={<Navigate to={"/"} replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route exect path="/Login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/*" element={<Navigate to={"/Login"} replace />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
