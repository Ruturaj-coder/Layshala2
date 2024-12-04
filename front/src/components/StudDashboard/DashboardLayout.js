// // import React from "react";
// // import { Outlet, Link } from "react-router-dom";
// // import "./DashboardLayout.css";

// // const DashboardLayout = () => {
// //   return (
// //     <div className="dashboard-container">
// //       {/* Title Bar */}
// //       <header className="title-bar">
// //         <div className="title-left">
// //           <img
// //             src={process.env.PUBLIC_URL + "/assets/images/Layshala_Logo.png"}
// //             alt="Logo"
// //             className="logo"
// //           />
// //           <div className="foundation-name">
// //             <span className="layshala">Layshala</span>
// //             <span className="foundation">Lalit Kala Foundation</span>
// //           </div>
// //         </div>
// //         <div className="title-right">
// //           <span className="username">Username</span>
// //           <button className="logout-btn">Logout</button>
// //         </div>
// //       </header>

// //       {/* Main Layout */}
// //       <div className="main-layout">
// //         {/* Sidebar */}
// //         <nav className="sidebar">
// //           <ul>
// //             <li>
// //               <Link to="/login/admin/home" className="list-items">Home</Link>
// //             </li>
// //             <li>
// //               <Link to="/login/admin/login" className="list-items">Events</Link>
// //             </li>
// //             <li>
// //               <Link to="/login/admin/events" className="list-items">My Achievements</Link>
// //             </li>
// //             <li>
// //               <Link to="/login/admin/settings" className="list-items">Student's Corner</Link>
// //             </li>
// //             <li>
// //               <Link to="/login/admin/studcorner" className="list-items">Student's Corner</Link>
// //             </li>
// //             <li>
// //               <Link to="/login/admin/Tutsection" className="list-items">Tutorial's Section </Link>
// //             </li>
// //             <li>
// //               <Link to="/login/admin/Feedback" className="list-items">Feedback </Link>
// //             </li>
// //           </ul>
// //         </nav>

// //         {/* Content Area */}
// //         <main className="content">
// //           <Outlet />
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DashboardLayout;
// import React from "react";
// import { Outlet, Link } from "react-router-dom";
// import "./DashboardLayout.css";

// const DashboardLayout = () => {
//   return (
//     <div className="dashboard-container">
//       {/* Title Bar */}
//       <header className="title-bar">
//         <div className="title-left">
//           <img
//             src={process.env.PUBLIC_URL + "/assets/images/Layshala_Logo.png"}
//             alt="Logo"
//             className="logo"
//           />
//           <div className="foundation-name">
//             <span className="layshala">Layshala</span>
//             <span className="foundation">Lalit Kala Foundation</span>
//           </div>
//         </div>
//         <div className="title-right">
//           <span className="username">Username</span>
//           <button className="logout-btn">Logout</button>
//         </div>
//       </header>

//       {/* Main Layout */}
//       <div className="main-layout">
//         {/* Sidebar */}
//         <nav className="sidebar">
//           <ul>
//             <li>
//               <Link to="/login/admin/home" className="list-items">
//                 <img
//                   src={process.env.PUBLIC_URL + "/assets/images/home-logo.png"}
//                   alt="Home"
//                   className="sidebar-logo"
//                 />
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/login/admin/myprofile" className="list-items">
//                 <img
//                   src={process.env.PUBLIC_URL + "/assets/images/Profile-logo.png"}
//                   alt="My-Profile"
//                   className="sidebar-logo"
//                 />
//                 My Profile
//               </Link>
//             </li>
//             <li>
//               <Link to="/login/admin/events" className="list-items">
//                 <img
//                   src={process.env.PUBLIC_URL + "/assets/images/events-logo.png"}
//                   alt="Events"
//                   className="sidebar-logo"
//                 />
//                 Events
//               </Link>
//             </li>
//             <li>
//               <Link to="/login/admin/achievements" className="list-items">
//                 <img
//                   src={process.env.PUBLIC_URL + "/assets/images/achievements-logo.png"}
//                   alt="Achievements"
//                   className="sidebar-logo"
//                 />
//                 My Achievements
//               </Link>
//             </li>
//             <li>
//               <Link to="/login/admin/studcorner" className="list-items">
//                 <img
//                   src={process.env.PUBLIC_URL + "/assets/images/student-logo.png"}
//                   alt="Student's Corner"
//                   className="sidebar-logo"
//                 />
//                 Student's Corner
//               </Link>
//             </li>
            
//             <li>
//               <Link to="/login/admin/tutsection" className="list-items">
//                 <img
//                   src={process.env.PUBLIC_URL + "/assets/images/tutorial-logo.png"}
//                   alt="Tutorial's Section"
//                   className="sidebar-logo"
//                 />
//                 Tutorial's Section
//               </Link>
//             </li>
//             <li>
//               <Link to="/login/admin/feedback" className="list-items">
//                 <img
//                   src={process.env.PUBLIC_URL + "/assets/images/feedback-logo.png"}
//                   alt="Feedback"
//                   className="sidebar-logo"
//                 />
//                 Feedback
//               </Link>
//             </li>
//           </ul>
//         </nav>

//         {/* Content Area */}
//         <main className="content">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;


import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../pages/UserContext";
import "../../css/DashboardLayout.css";

const DashboardLayout = () => {
  const { user } = useContext(UserContext); // Access user context

  return (
    <div className="dashboard-container">
      {/* Title Bar */}
      <header className="title-bar">
        <div className="title-left">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/Layshala_Logo.png"}
            alt="Logo"
            className="logo"
          />
          <div className="foundation-name">
            <span className="layshala">Layshala</span>
            <span className="foundation">Lalit Kala Foundation</span>
          </div>
        </div>
        <div className="title-right">
          <span className="username">{user.firstName || "Username"}</span>
          <button className="logout-btn">Logout</button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="main-layout">
        {/* Sidebar */}
        <nav className="sidebar">
          <div className="user-info mb-3 text-center">
            <div
              className="rounded-circle border mx-auto"
              style={{
                width: "80px",
                height: "80px",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {user.photo ? (
                <img
                  src={user.photo}
                  alt="User"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <i className="bi bi-person-circle" style={{ fontSize: "2.5rem" }}></i>
              )}
            </div>
            <p className="mt-2">{user.firstName ? `${user.firstName} ${user.lastName}` : "Your Name"}</p>
          </div>
          <ul>
            <li>
              <Link to="/login/admin/home" className="list-items">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/home-logo.png"}
                  alt="Home"
                  className="sidebar-logo"
                />
                Home
              </Link>
            </li>
            <li>
              <Link to="/login/admin/myprofile" className="list-items">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/Profile-logo.png"}
                  alt="My Profile"
                  className="sidebar-logo"
                />
                My Profile
              </Link>
            </li>
            <li>
              <Link to="/login/admin/events" className="list-items">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/events-logo.png"}
                  alt="Events"
                  className="sidebar-logo"
                />
                Events
              </Link>
            </li>
            <li>
              <Link to="/login/admin/achievements" className="list-items">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/achievements-logo.png"}
                  alt="Achievements"
                  className="sidebar-logo"
                />
                My Achievements
              </Link>
            </li>
            <li>
              <Link to="/login/admin/studcorner" className="list-items">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/student-logo.png"}
                  alt="Student's Corner"
                  className="sidebar-logo"
                />
                Student's Corner
              </Link>
            </li>
            <li>
              <Link to="/login/admin/tutsection" className="list-items">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/tutorial-logo.png"}
                  alt="Tutorial's Section"
                  className="sidebar-logo"
                />
                Tutorial's Section
              </Link>
            </li>
            <li>
              <Link to="/login/admin/feedback" className="list-items">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/feedback-logo.png"}
                  alt="Feedback"
                  className="sidebar-logo"
                />
                Feedback
              </Link>
            </li>
          </ul>
        </nav>

        {/* Content Area */}
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
