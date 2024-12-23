// Function to calculate BMI
function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  // Check if the inputs are valid
  if (!weight || !height) {
    alert("Please enter valid weight and height.");
    return;
  }

  // Convert height from cm to meters
  const heightInMeters = height / 100;

  // Calculate BMI
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  // Display the result
  document.getElementById("bmiValue").textContent = bmi;

  // Determine BMI category
  let category = "";
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
  } else {
    category = "Obesity";
  }

  document.getElementById("bmiCategory").textContent = `Category: ${category}`;
}

// Add event listener to the button
document.getElementById("calculateBtn").addEventListener("click", calculateBMI);
