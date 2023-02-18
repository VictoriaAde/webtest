import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import { AuthProvider } from "./auth";

// import { useQuery, gql } from "@apollo/client";

// const COMPANY_QUERY = gql`
//   {
//     launchesPast(limit: 10) {
//       id
//       mission_name
//     }
//   }
// `;

function App() {
  // const { data, loading, error } = useQuery(COMPANY_QUERY);
  // if (loading) return "Loading...";
  // if (error) return <pre>{error.message}</pre>;

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
