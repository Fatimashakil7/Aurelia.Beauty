// For Shop Drop-down
document.getElementById('shop-menu').addEventListener('change',function() {
  if(this.value){
    window.location.href=this.value;
  }
})


// for search box

const categories = {
  "best sellers": "bestsellers.html",
  "essentials": "essentials.html",
  "skincare sets": "skincaresets.html",
  "new collection": "newcollection.html",
};

const searchInput = document.getElementById('search');
const suggestionsContainer = document.getElementById('suggestions');
const searchButton = document.getElementById('search-btn');

// Show suggestions as user types
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  suggestionsContainer.innerHTML = '';

  if(query === '') return;

  const matches = Object.keys(categories).filter(cat => cat.includes(query));

  matches.forEach(match => {
    const div = document.createElement('div');
    div.classList.add('suggestion-item');
    div.textContent = match.charAt(0).toUpperCase() + match.slice(1);
    div.addEventListener('click', () => {
      window.location.href = categories[match];
    });
    suggestionsContainer.appendChild(div);
  });
});

// Redirect when search button is clicked
searchButton.addEventListener('click', () => {
  const query = searchInput.value.toLowerCase();
  if(categories[query]) {
    window.location.href = categories[query];
  } else {
    alert("Category not found!");
  }
});

// Hide suggestions when clicking outside
document.addEventListener('click', (e) => {
  if(!e.target.closest('.search-container')) {
    suggestionsContainer.innerHTML = '';
  }
});




// For Skin Quiz

// For Next button
function nextStep(stepNumber){
  let inputName;
  if(stepNumber === 1) inputName = "skinType";
  else if(stepNumber === 2) inputName = "concern";
  else if(stepNumber === 3) inputName = "sensitivity";

  const currentStep = document.getElementById(`step${stepNumber}`);
  const selected = document.querySelector(`input[name="${inputName}"]:checked`);

  if(!selected){
    alert("Please select an option to continue.");
    return;
  }

  currentStep.classList.remove("active");
  document.getElementById(`step${stepNumber + 1}`).classList.add("active");
}

// For Back button
function previousStep(stepNumber){
  document.getElementById(`step${stepNumber + 1}`).classList.remove("active");
  document.getElementById(`step${stepNumber}`).classList.add("active");
}


// To show result
function showResult(){
  const skinType = document.querySelector(`input[name="skinType"]:checked`).value;
  const concern = document.querySelector(`input[name="concern"]:checked`).value;
  const sensitivity = document.querySelector(`input[name="sensitivity"]:checked`).value;

  let product = "";
if (skinType === "oily" && concern === "acne" && sensitivity === "high" ){
  product = "Aurelia Clear & Calm Duo";
} else if (skinType === "oily" && concern === "acne" && sensitivity !== "high") {
  product = "Aurelia Clear Skin Set";
} else if (skinType === "oily" && concern === "darkspots" && sensitivity === "high"){
  product = "Aurelia Brighten & Soothe Serum";
} else if (skinType === "oily" && concern === "darkspots" && sensitivity !== "high"){
  product = "Aurelia Glow Brightener Serum";
} else if (skinType === "oily" && concern === "dryness" && sensitivity === "high"){
  product = "Aurelia Calm Hydrate Moisturizer";
} else if (skinType === "oily" && concern === "dryness" && sensitivity !== "high"){
  product = "Aurelia Calm Hydrate Moisturizer";
}

if (skinType === "dry" && concern === "acne" && sensitivity === "high" ){
  product = "Aurelia Sensitive Spot Calmer";
} else if (skinType === "dry" && concern === "acne" && sensitivity !== "high") {
  product = "Aurelia Nourish Cream Cleanser";
} else if (skinType === "dry" && concern === "darkspots" && sensitivity === "high"){
  product = "Aurelia Brighten & Soothe Serum";
} else if (skinType === "dry" && concern === "darkspots" && sensitivity !== "high"){
  product = "Aurelia Glow Brightener Serum";
} else if (skinType === "dry" && concern === "dryness" && sensitivity === "high"){
  product = "Aurelia Hydrate & Repair Set";
} else if (skinType === "dry" && concern === "dryness" && sensitivity !== "high"){
  product = "Aurelia Calm Hydrate Moisturizer";
}

if (skinType === "combination" && concern === "acne" && sensitivity === "high" ){
  product = "Aurelia Clear & Calm Duo";
} else if (skinType === "combination" && concern === "acne" && sensitivity !== "high") {
  product = "Aurelia Clear Skin Set";
} else if (skinType === "combination" && concern === "darkspots" && sensitivity === "high"){
  product = "Aurelia Brighten & Soothe Serum";
} else if (skinType === "combination" && concern === "darkspots" && sensitivity !== "high"){
  product = "Aurelia Glow Brightener Serum";
} else if (skinType === "combination" && concern === "dryness" && sensitivity === "high"){
  product = "Aurelia Calm Hydrate Moisturizer";
} else if (skinType === "combination" && concern === "dryness" && sensitivity !== "high"){
  product = "Aurelia Calm Hydrate Moisturizer";
}

if (skinType === "normal" && concern === "acne" && sensitivity === "high" ){
  product = "Aurelia Sensitive Spot Calmer";
} else if (skinType === "normal" && concern === "acne" && sensitivity !== "high") {
  product = "Aurelia Purify Gel Cleanser";
} else if (skinType === "normal" && concern === "darkspots" && sensitivity === "high"){
  product = "Aurelia Brighten & Soothe Serum";
} else if (skinType === "normal" && concern === "darkspots" && sensitivity !== "high"){
  product = "Aurelia Glow Up Bundle";
} else if (skinType === "normal" && concern === "dryness" && sensitivity === "high"){
  product = "Aurelia Gentle Sooth Cleanser";
} else if (skinType === "normal" && concern === "dryness" && sensitivity !== "high"){
  product = "Aurelia Clear & Calm Duo";
}

document.getElementById("resultText").textContent = product;
  document.getElementById("step3").classList.remove("active");
  document.getElementById("result").classList.add("active");
}

// Restart quiz
function restartQuiz(){
  document.getElementById("result").classList.remove("active");
  document.getElementById("step1").classList.add("active");
  document.querySelectorAll("input[type=radio]").forEach(r => r.checked = false);
}

document.getElementById("newsletterForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stop page reload



  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Create object
  const subscriber = {
    name: name,
    email: email
  };
  

  // Get existing subscribers or empty array
  let subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];

  // Add new subscriber
  subscribers.push(subscriber);

  // Save back to localStorage
  localStorage.setItem("subscribers", JSON.stringify(subscribers));

  // Show message
  document.getElementById("successMessage").style.display = "block";

  // Clear form
  document.getElementById("newsletterForm").reset();
});
