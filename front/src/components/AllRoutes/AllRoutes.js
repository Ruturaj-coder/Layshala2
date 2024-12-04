import React from "react";
import { Routes, Route } from "react-router-dom";
import PublicLayout from "../StudDashboard/PublicLayout";
import DashboardLayout from "../StudDashboard/DashboardLayout";
import Home from "../Home/Home";
import Login from "../Login/Login";
import StudentLogin from "../Login/StudentLogin/StudentLogin";
import AdminLogin from "../Login/AdminLogin/AdminLogin";
import Register from "../Register/Register";
import Contact from "../Contact/Contact";
import NoPage from "../NoPage";
import Home1 from "../../pages/Home1";
import MyProfile from "../../pages/MyProfile";
import Events from "../../pages/Events";
import AchievementForm from "../../pages/AchievementForm";
import Feedback from "../../pages/Feedback";

const AllRoutes = () => {
  console.log("Rendering AllRoutes Component");

  return (
    <Routes>
      {/* Public routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login/student" element={<StudentLogin />} />
        <Route path="/login/admin" element={<AdminLogin />} />
      </Route>

      {/* dashboard */}
      <Route element={<DashboardLayout />}>
        <Route path="/login/admin/home" element={<Home1 />} />
        <Route path="/login/admin/myprofile" element={<MyProfile />} />
        <Route path="/login/admin/events" element={<Events />} />
        <Route path="/login/admin/achievements" element={<AchievementForm />} />
        <Route path="/login/admin/feedback" element={<Feedback />} />
      </Route>

      {/* Catch-all route */}
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default AllRoutes;
