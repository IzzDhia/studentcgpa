// 1. Define Multi-Dimensional Array studentData
let studentData = [
    ["Ali Bin Ahmad", 15, 3.75],
    ["Bala A/L Muthu", 12, 3.40],
    ["Siti Nurhaliza", 18, 4.00],
    ["Wong Mei Ling", 10, 3.50],
    ["David Lee", 15, 2.95]
];

// 2. Create function to measure dean list eligibility
function checkDeanList(gpa) {
    if (gpa >= 3.50) {
        return "Dean's List Eligible";
    } else {
        return "Not Dean's List Eligible";
    }
}

function formatGPA(gpa) {
    return parseFloat(gpa).toFixed(2);
}

// ===================================================================
// -- AI ASSISTED CODE START --
// Assistance with function logic
// ===================================================================


function checkEligibility() {
    const name = document.getElementById('studentName').value.trim();
    const creditHours = document.getElementById('creditHours').value;
    const gpa = document.getElementById('currentGPA').value;
    

    if (name && creditHours && gpa) {
        // Validate inputs
        if (gpa < 0 || gpa > 4.00) {
            alert("GPA must be between 0.00 and 4.00!");
            return;
        }

    // ===================================================================
    // -- AI ASSISTED CODE END --
    // ====================================================================
        const tempStudentData = [...studentData];
        tempStudentData.push([name, parseInt(creditHours), parseFloat(gpa)]);
        
        displayResults(tempStudentData);
        
        document.getElementById('studentName').value = '';
        document.getElementById('creditHours').value = '';
        document.getElementById('currentGPA').value = '';
    } else {
        
        displayResults(studentData);
    }
}

function displayResults(dataArray) {
    const container = document.getElementById('results-container');
    
    // Create the output box
    let outputHTML = "<div class='output-box'>";
    outputHTML += "<h2>Section 03 Result</h2>";
    
    // Check if there are students
    if (dataArray.length === 0) {
        outputHTML += "<p>No students to check. Add student information first.</p>";
    } else {
        // Create Looping (for loop) to print student data
        for (let i = 0; i < dataArray.length; i++) {
            const studentName = dataArray[i][0];
            const currentGPA = dataArray[i][2];
            
            const formattedGPA = formatGPA(currentGPA);
            
            const status = checkDeanList(currentGPA);
            const statusClass = (status === "Dean's List Eligible") ? "eligible" : "not-eligible";
        
            outputHTML += "<div class='student-result'>";
            outputHTML += "<div class='student-info'><strong>Name</strong>: " + studentName + "</div>";
            outputHTML += "<div class='student-info'><strong>Current GPA</strong>: " + formattedGPA + "</div>";
            outputHTML += "<div class='student-info'><strong>Status</strong>: <span class='" + statusClass + "'>" + status + "</span></div>";
            outputHTML += "</div>";
        }
    }
    
    outputHTML += "</div>";
    
    container.innerHTML = outputHTML;
}

window.onload = function() {
    displayResults(studentData);
};