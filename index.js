document
  .getElementById("submitBtn")
  .addEventListener("click", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const data = { name, email, phone };

    try {
      const response = await fetch("http://localhost:5001/submit-callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.message) {
        // Show the pop up with the message thanks
        const myModal = new bootstrap.Modal(
          document.getElementById("thankYouModal")
        );
        myModal.show();

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit request");
    }
  });

// document
//   .getElementById("solarCalculatorForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

//     const TNB_TARIFF = 0.509;
//     const SOLAR_PANEL_COST = 3000;
//     const PEAK_SUN_HOURS = 3;
//     const SYSTEM_EFFICIENCY = 0.8;
//     const INTEREST_RATE = 0.05;
//     const TARGET_SAVINGS = 0.3;

//     let monthlyBill = parseFloat(document.getElementById("monthlyBill").value);

//     if (isNaN(monthlyBill) || monthlyBill <= 0) {
//       alert("Please enter a valid monthly bill amount.");
//       return;
//     }

//     // System Sizing Calculation
//     let monthlyEnergy = monthlyBill / TNB_TARIFF;
//     let dailyEnergy = monthlyEnergy / 30;
//     let systemSize = dailyEnergy / (PEAK_SUN_HOURS * SYSTEM_EFFICIENCY);

//     // Cost Calculation
//     let totalSystemCost = systemSize * SOLAR_PANEL_COST;

//     // Loan Calculation (Target Monthly Payment)
//     let targetMonthlyPayment = monthlyBill * (1 - TARGET_SAVINGS);

//     // Display Results
//     let cardBody = document.querySelector(".card1 .card-body");
//     cardBody.innerHTML = `
//         <h5>Your Quote:</h5>
//         <p><strong>System Size:</strong> ${systemSize.toFixed(2)} kWp</p>
//         <p><strong>Total System Cost:</strong> RM ${totalSystemCost.toFixed(
//           2
//         )}</p>
//         <p><strong>Target Monthly Payment:</strong> RM ${targetMonthlyPayment.toFixed(
//           2
//         )}</p>
//         <button id="recalculateButton" class="btn btn-dark mt-3">Recalculate</button>
//     `;

//     // Recalculate button event listener
//     document
//       .getElementById("recalculateButton")
//       .addEventListener("click", function () {
//         location.reload();
//       });
//   });
