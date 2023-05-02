import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashBoardPage from "./pages/DashboardPage";
import CalendarPage from "./pages/CalendarPage";
import ReminderPage from "./pages/ReminderPage";
import Setting from "./pages/Setting";
import "./App.css";
import ProfilePage from "./pages/ProfilePage";
import LocationPage from "./pages/LocationPage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exect path="/" element={<HomePage />} />
        <Route path="/Dashboard" element={<DashBoardPage />}/>
        <Route path="/Calendar" element={<CalendarPage />} />
        <Route path="/Location" element={<LocationPage />} />
        <Route path="/Reminder" element={<ReminderPage />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/Profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
