import Homepage from "./patients/pages/Homepage"
import HomepageD from "./doctors/pages/Homepage"
import Message from "./patients/pages/Message"
import MessageD from "./doctors/pages/Message"
import Consultations from "./patients/pages/Consultations"
import ConsultationsD from "./doctors/pages/Consultations"
import ProfilePage from "./patients/pages/ProfilePage"
import ProfilePageD from "./doctors/pages/ProfilePage"
import MedicalRecordsForm from "./patients/pages/MedicalRecordsForm"
import MedicalRecordsFormD from "./doctors/pages/MedicalRecordsForm"
import MedicalRecords from "./patients/pages/MedicalRecords"
import MedicalRecordsD from "./doctors/pages/MedicalRecords"
import Authentication from "./Auth/Authentication"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

function App() {

  const [userRole, setUserRole] = useState('patient');

  useEffect(() => {
    const url = 'http://localhost:3000/api/users/';
    const headers = {
        'Content-Type': 'application/json',
    };
    // Make the POST request with Axios
    axios.get(url, {
        headers: headers,
    })
        .then(response => {
            // Handle the response data
            console.log('Response:', response.data);
            const userWithEmail = response.data.find(user => user._id === localStorage.getItem('userId'));
            if (!userWithEmail) {
                return;
            }
            setUserRole(userWithEmail.role)
        })
        .catch(error => {
            console.error('Error found as:', error);
            let errorMessage =  error.response?.data?.username === undefined ? error.response?.data?.non_field_errors[0] : error.response?.data?.username[0];
            setErrorLog(errorMessage)
        });
  }, [])

  return (
    <>
    <Router>
        <Routes>
          <Route path="/auth" element={<Authentication />} />
          {userRole === 'patient' &&
            <>
              <Route path="/" element={<Homepage />} />
              <Route path="/message" element={<Message />} />
              <Route path="/consultation" element={<Consultations />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/records" element={<MedicalRecords />} />
              <Route path="/recordfill" element={<MedicalRecordsForm />} />
            </>
          }
          {userRole === 'doctor' &&
            <>
              <Route path="/" element={<HomepageD />} />
              <Route path="/message" element={<MessageD />} />
              <Route path="/consultation" element={<ConsultationsD />} />
              <Route path="/profile" element={<ProfilePageD />} />
              <Route path="/records" element={<MedicalRecordsD />} />
              <Route path="/recordfill" element={<MedicalRecordsFormD />} />
            </>
          }
        </Routes>
      </Router>
    </>
  )
}

export default App
