# Rooftop-Energy-Solar-Calculator

This is a repo containing the code developed for the Intern technical assessment at Rooftop energy

Overview --------------------------------
This project is a landing page for Rooftop Energy, designed to help homeowners calculate the cost of installing solar panels based on their electricity consumption. The application allows users to enter their monthly electricity bill, estimate the required solar system size, and view pricing quotations. Additionally, users can submit their details for a callback to get in touch with the client.

Features ----------------------------------
Solar Cost Estimation- Calculates system size, total cost, and target monthly payment based on user input.
Dynamic Pricing Quotation- Updates the quotation when the user enters new data.
User Contact Form- Collects user information for callbacks and stores it securely in Firebase Firestore.
Print Functionality- Allows users to print their pricing quotation.
Recalculate Functionality- Provides users with an option to recalculate based on new inputs.
Security Measures- Sensitive data such as Firebase credentials are secured and hidden.
Responsive UI- Designed with Bootstrap to ensure a seamless experience across devices.
Modal Popup- Displays a confirmation message when the user submits their contact details successfully.

Technologies Used --------------------------------

Frontend- HTML, CSS, Bootstrap, JavaScript
Backend- Node.js, Express.js
Database- Firebase Firestore

Project Implementation Checklist --------------------------------

☑️ Theme implemented
☑️ Design implemented
☑️ Header and Footer implemented
☑️ Cards with forms implemented
☑️ Firebase Firestore Database implemented with Node.js
☑️ Sensitive data secured and hidden
☑️ Security updates
☑️ Modal implemented for successfully submitting user data for a callback
☑️ Pricing quotation calculation implemented
☑️ Print function enabled
☑️ Recalculate functionality implemented

Installation & Setup ------------------------

Clone the Repository-

git clone https://github.com/Mahinkhan007/Rooftop-Energy-Solar-Calculator.git
cd Rooftop-Energy-Solar-Calculator

Install Dependencies-

npm install

Set Up Firebase-

Create a Firebase project.
Generate a Firestore database.
Set up Firebase Admin SDK and download the service account JSON file.
Store credentials in a .env file to keep them secure.

Run the Server-

node server.js

Open the Project in Browser-
press go live from visual studio code

Security Best Practices-

Ensure that Firebase credentials are stored securely using environment variables.
Do not expose firebase-service-account.json in public repositories.

Future Enhancements -------------------------

Implement authentication for admin access.
Add a user dashboard to track previous calculations.
Making UI more attractive and fun to interact.
The downloadable pdf should be more attravtive containing all company information.
Live chat option with bot for queries. (need to train AI)
Code redundancy should be avoided. (implement DRY)
Header should contain for functionalities or company related information.
Automated email or sms sent immediately to client regarding answering queries.

Developed by - Abdulla Al Mahin Khan
