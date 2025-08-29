// -----------------
// Index Page (Menu)
// -----------------
const filterButtons = document.querySelectorAll(".filter-btn");
const menuItems = document.querySelectorAll(".menu-item");

// Filtering functionality (index.html only)
if (filterButtons.length > 0) {
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");

      menuItems.forEach(item => {
        if (category === "all" || item.getAttribute("data-category") === category) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
}

// Handle Order Now buttons (index.html only)
const orderButtons = document.querySelectorAll(".btn-success");
if (orderButtons.length > 0) {
  orderButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Redirect to payment page
      window.location.href = "payment.html";
    });
  });
}

// -----------------
// Payment Page
// -----------------
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const paymentForm = document.getElementById("payment-form");

// Step switching
if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    step1.classList.remove("active");
    step2.classList.add("active");
  });
}

if (backBtn) {
  backBtn.addEventListener("click", () => {
    step2.classList.remove("active");
    step1.classList.add("active");
  });
}

// Payment form submission
if (paymentForm) {
  paymentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Simulate payment success
    alert("Payment Successful ✅ Thank you for ordering!");

    // Redirect to confirmed page
    window.location.href = "confirm.html";
  });
}
