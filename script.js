// Get form and modal elements
const form = document.getElementById('addressForm');
const modal = document.getElementById('addressModal');
const modalAddress = document.getElementById('modalAddress');
const closeModalBtn = document.getElementById('closeModalBtn');

// Handle form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting normally

  // Get values
  const street = document.getElementById('street').value.trim();
  const city = document.getElementById('city').value.trim();
  const province = document.getElementById('province').value.trim();

  // Prepare address text
  const fullAddress = `${street}, ${city}, ${province}`;

  // Set modal content
  modalAddress.textContent = fullAddress;

  // Show modal
  modal.style.display = 'block';
});

// Close modal when close button clicked
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when user clicks outside the modal content
window.addEventListener('click', (event) => {
  if(event.target === modal) {
    modal.style.display = 'none';
  }
});
