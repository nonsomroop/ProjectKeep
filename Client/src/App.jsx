import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashBoardPage from "./pages/DashboardPage";
import CalendarPage from "./pages/CalendarPage";
import ReminderPage from "./pages/ReminderPage";
import Setting from "./pages/Setting";
import "./App.css";
import ProfilePage from "./pages/ProfilePage";
import LocationPage from "./pages/LocationPage";
import ThemePage from "./pages/ThemePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import EditNodePage from "./pages/EditNodePage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exect path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/Dashboard" element={<DashBoardPage />}/>
        <Route path="/Calendar" element={<CalendarPage />} />
        <Route path="/Location" element={<LocationPage />} />
        <Route path="/Reminder" element={<ReminderPage />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/Setting/Theme" element={<ThemePage />} />
        <Route path="/Edit" element={<EditNodePage />} />
      </Routes>
    </div>
  );
}

export default App;
