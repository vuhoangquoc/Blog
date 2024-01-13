import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/sign-up" element={<SignUpPage />}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
