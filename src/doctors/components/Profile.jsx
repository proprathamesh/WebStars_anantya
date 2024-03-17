import React from 'react'
import './profile.css'

export default function Profile() {
  return (
    <div class="container">
        <div class="bg-white rounded-lg shadow-md p-8 mt-8 flex flex-col md:flex-row">
            <div class="w-full md:w-1/4 nav-option">
                <div class="text-center flex flex-col justify-center items-center">
                    <img src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" alt="Profile Picture rounded-full" class="profile-pic" />
                    <h2 class="text-3xl font-semibold mt-4">John Doe</h2>
                </div>
            </div>

            <div class="w-full md:w-3/4">
                <div class="p-4">
                    <div id="personalInfo" class="content">
                        <h2 class="text-2xl font-semibold mb-4">Personal Information</h2>
                        <p><strong>Name:</strong> John Doe</p>
                        <p><strong>Age:</strong> 35</p>
                        <p><strong>Gender:</strong> Male</p>
                        <p><strong>Contact:</strong> john.doe@example.com</p>
                        <p><strong>Address:</strong> 123 Main St, New York, USA</p>
                    </div>

                    <div id="medicalHistory" class="content hidden">
                        <h2 class="text-2xl font-semibold mb-4">Medical History</h2>
                        <p><strong>Blood Type:</strong> A+</p>
                        <p><strong>Allergies:</strong> None</p>
                        <p><strong>Medical Conditions:</strong> Hypertension</p>
                    </div>

                    <div id="prescriptions" class="content hidden">
                        <h2 class="text-2xl font-semibold mb-4">Prescriptions</h2>
                        <p><strong>Medication:</strong> Aspirin</p>
                        <p><strong>Dosage:</strong> 100mg</p>
                        <p><strong>Schedule:</strong> Twice daily</p>
                    </div>

                    <div id="appointments" class="content hidden">
                        <h2 class="text-2xl font-semibold mb-4">Appointments</h2>
                        <p><strong>Last Appointment:</strong> 2024-03-15</p>
                        <p><strong>Next Appointment:</strong> 2024-04-15</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
