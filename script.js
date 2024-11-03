// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login
    if (username === "admin" && password === "admin") {
        document.getElementById('loginMessage').innerText = "Login successful!";
        showSection('patients');
    } else {
        document.getElementById('loginMessage').innerText = "Invalid credentials!";
    }
});

document.getElementById('patientForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('patientName').value;
    const age = document.getElementById('patientAge').value;
    const gender = document.getElementById('patientGender').value;

    // Simulate saving patient
    document.getElementById('patientMessage').innerText = `Patient ${name} added successfully!`;
    document.getElementById('patientForm').reset();
    showSection('appointments');
});

document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const patientId = document.getElementById('appointmentPatientId').value;
    const doctor = document.getElementById('appointmentDoctor').value;
    const date = document.getElementById('appointmentDate').value;
    
    // Simulate scheduling appointment
    document.getElementById('appointmentMessage').innerText = `Appointment scheduled for Patient ID ${patientId} with Dr. ${doctor} on ${date}.`;
    document.getElementById('appointmentForm').reset();
    showSection('billing');
});

document.getElementById('billingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const patientId = document.getElementById('billingPatientId').value;
    const amount = document.getElementById('billingAmount').value;

    // Simulate invoice generation
    document.getElementById('billingMessage').innerText = `Invoice generated for Patient ID ${patientId} for amount $${amount}.`;
    document.getElementById('billingForm').reset();
});

function showSection(sectionId) {
    const sections = ['login', 'patients', 'appointments', 'billing'];
    sections.forEach(section => {
        document.getElementById(section).style.display = section === sectionId ? 'block' : 'none';
    });
}