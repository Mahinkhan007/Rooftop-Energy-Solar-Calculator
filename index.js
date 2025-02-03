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

document
  .getElementById("solarCalculatorForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const monthlyBill = parseFloat(
      document.getElementById("monthlyBill").value
    );
    const location = document.getElementById("location").value;

    if (isNaN(monthlyBill) || monthlyBill <= 0) {
      alert("Please enter a valid monthly bill amount.");
      return;
    }

    const TNB_TARIFF = 0.509;
    const SOLAR_PANEL_COST = 3000;
    const PEAK_SUN_HOURS = 3;
    const SYSTEM_EFFICIENCY = 0.8;
    const INTEREST_RATE = 0.05;
    const TARGET_SAVINGS = 0.7; // 30% savings is calculated here
    //following formulas from assessment questions
    const monthlyEnergy = monthlyBill / TNB_TARIFF;
    const dailyEnergy = monthlyEnergy / 30;
    const systemSize = dailyEnergy / (PEAK_SUN_HOURS * SYSTEM_EFFICIENCY);
    const totalSystemCost = systemSize * SOLAR_PANEL_COST;
    const targetMonthlyPayment = monthlyBill * TARGET_SAVINGS;

    document.getElementById("solarCalculatorForm").style.display = "none";
    document.getElementById("result").style.display = "block";

    document.getElementById("systemSize").textContent = systemSize.toFixed(2);
    document.getElementById("totalCost").textContent =
      totalSystemCost.toFixed(2);
    document.getElementById("targetPayment").textContent =
      targetMonthlyPayment.toFixed(2);

    document.getElementById("recalculateButton").style.display = "block";
  });

document
  .getElementById("recalculateButton")
  .addEventListener("click", function () {
    document.getElementById("solarCalculatorForm").style.display = "block";
    document.getElementById("result").style.display = "none";
    document.getElementById("recalculateButton").style.display = "none";

    document.getElementById("monthlyBill").value = "";
    document.getElementById("location").value = "";
  });

function printQuote() {
  const printContent = document.getElementById("result");
  const buttons = printContent.querySelector(".button-container");

  // Hide buttons before printing
  if (buttons) buttons.style.display = "none";

  // Use jsPDF to print that i imported using npm
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.text("Solar Calculator Results", 10, 10);
  doc.text(
    `System Size: ${document.getElementById("systemSize").textContent} kWp`,
    10,
    20
  );
  doc.text(
    `Total System Cost: RM ${document.getElementById("totalCost").textContent}`,
    10,
    30
  );
  doc.text(
    `Target Monthly Payment (Loan): RM ${
      document.getElementById("targetPayment").textContent
    }`,
    10,
    40
  );

  doc.save("solar_calculator_results.pdf");

  // Show buttons again after printing
  if (buttons) buttons.style.display = "flex";
}
