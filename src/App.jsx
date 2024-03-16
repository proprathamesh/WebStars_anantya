import Homepage from "./pages/Homepage"
import Message from "./pages/Message"
import Consultations from "./pages/Consultations"
import ProfilePage from "./pages/ProfilePage"
import MedicalRecordsForm from "./pages/MedicalRecordsForm"
import MedicalRecords from "./pages/MedicalRecords"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {

  const userRole = 'doctor';

  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/message" element={<Message />} />
          <Route path="/consultation" element={<Consultations />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/records" element={<MedicalRecords />} />
          <Route path="/recordfill" element={<MedicalRecordsForm />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
