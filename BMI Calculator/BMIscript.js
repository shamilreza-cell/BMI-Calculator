
document.getElementById("BMI-Form").addEventListener("submit", function(e) {
    e.preventDefault();

    const weight = parseFloat(document.getElementById("weight").value);
    const heightCm = parseFloat(document.getElementById("height").value);

    if(isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        document.getElementById("result").textContent = "Invalid Number Try Again";
        return;
    }

    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);
    const roundedBmi = bmi.toFixed(1);

    let category = "";

    if (bmi < 16) category = "Severely Underweight";
    else if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal Weight";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obesity";

    document.getElementById("result").innerHTML = `Your BMI is <strong>${roundedBmi}</strong> (${category})`;


});