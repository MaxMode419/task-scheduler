import Signin from "./pages/sign-in";
import Register from "./pages/register";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Newtask from "./pages/add-task";
import Forgotten from "./pages/forget-password";
import Reset from "./pages/reset-password";
import { Toaster } from "sonner";
import Protected from "./components/protected";
import Modal from "./components/modal";

function App() {
  return (
    <>
      <Toaster richColors position="top-right" />
      <Routes>
        {/* protected routes */}
        <Route element={<Protected />}>
          <Route index element={<Dashboard />} />
          <Route path="/add-task" element={<Newtask />} />
        </Route>

        {/* public-routes */}
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<Forgotten />} />
        <Route path="/reset-password" element={<Reset />} />
        <Route
          path="*"
          element={
            <div>
              not found <Link to="/">Go to home</Link>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
