const form = document.getElementById('businessForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Here you can process the form data, e.g., send it to a server
  const formData = new FormData(form);
  console.log(formData);

  // You can also add validation logic here
});