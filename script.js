// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const error = document.getElementById('formError');

  const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

  if (!name || !email || !message) {
    error.textContent = "All fields are required.";
    return;
  }

  if (!emailRegex.test(email)) {
    error.textContent = "Please enter a valid email address.";
    return;
  }

  error.textContent = "";
  alert("Form submitted successfully!");
  this.reset();
});

// To-Do List Functionality
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  const task = taskInput.value.trim();
  if (!task) return;

  const li = document.createElement('li');
  li.innerHTML = `${task} <span class="remove" onclick="this.parentElement.remove()">❌</span>`;
  taskList.appendChild(li);

  taskInput.value = '';
}
