import { Routes, Route } from "react-router-dom";
import ErrorPage from "./ErrorPage/ErrorPage";
import Dashboard from "./Dashboard/Dashboard";
import HomePage from "./HomePage/HomePage";
import Activity from "./Dashboard/Pages/Activity/Activity";
import Course from "./Dashboard/Pages/Course_page/Course";
import Event from "./Dashboard/Pages/Event_page/Event";
import Inbox from "./Dashboard/Pages/Inbox_page/Inbox";
import Resources from "./Dashboard/Pages/Resource_page/Resources";
import Profile from "./Dashboard/Pages/Profile_page/Profile";
import Help from "./Dashboard/Pages/Help/Help";
import ProtectedRoute from "./Auth/ProtectedRoute";
import { UserAuthContextProvider } from './Auth/UserAuthContext'
import './App.css';

function App() {
  return (<div className="App">
    <UserAuthContextProvider>
      <Routes>
        <Route path="" element={<HomePage />} />

        
          <Route path="dashboard" element={<ProtectedRoute><Dashboard authorised={true} /></ProtectedRoute>}>
            <Route path="courses" element={<ProtectedRoute><Course /></ProtectedRoute>} />
            <Route path="event" element={<ProtectedRoute><Event /></ProtectedRoute>} />
            <Route path="inbox" element={<ProtectedRoute><Inbox /></ProtectedRoute>} />
            <Route path="resources" element={<ProtectedRoute><Resources /></ProtectedRoute>} />
            <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="help" element={<ProtectedRoute><Help /></ProtectedRoute>} />
          </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </UserAuthContextProvider>
    </div>
  );
}

export default App;
