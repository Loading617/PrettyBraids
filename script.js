if (!name || !email || !phone || !service || !date || !time) {
  showNotification("Please fill in all required fields.", "error");
  return;
}
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!email.match(emailPattern)) {
  showNotification("Please enter a valid email address.", "error");
  return;
}

const phonePattern = /^[\d\s\-\(\)]+$/;
if (!phone.match(phonePattern)) {
  showNotification("Please enter a valid phone number.", "error");
  return;
}
const subject = `Booking ${service}`;
const notes = document.getElementById('notes').value;

let body = `Name: ${name}\n`;
body += `Email: ${email}\n`;
body += `Phone: ${phone}\n`;
body += `Service: ${service}\n`;
body += `Date: ${date}\n`;
body += `Time: ${time}\n`;

if (notes) {
  body += `Notes: ${notes}\n`;
}

const mailtoLink = `mailto:$Jessicalolitathebrand@gmail.com?subject={encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

window.location.href = mailtoLink;

showNotification("Thank you for booking with Pretty Braids! We will confirm your appointment shortly.", "success");

function showNotification(message, type = "info") {
  const existingNotifications = document.querySelectorAll(".notification");
  existingNotifications.forEach((notification) => notification.remove());
}

const notification = document.createElement("div");
notification.className = `notification notification--${type}`;
notification.innerHTML = `<div class="notification-content">
   <span class="notification-message">${message}</span>
   <button class="notification-close">&times;</button>
</div>
`;

Object.assign(notification.style, {
  position: "fixed",
  top: "20px",
  right: "20px",
  background: 
   type === "error"
    ? "linear-gradient(45deg, #ff6b6b, #ff8e8e)"
    : "linear-gradient(45deg, #4ecdc4, #45b7d1)",
  color: "white",
  padding: "16px 20px",
  borderRadius: "12px",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
  backdropFilter: "blur(10px)",
  zIndex: "100000",
  transform: "translateX(400px)",
  transition: "transform 0.3s ease",
  maxWidth: "300px",
  fontSize: "14px",
  fontWeight: "500",
});

document.body.appendChild(notification);

setTimeout(() => {
 notification.style.transform = "translateX(0)";
}, 100);

const closeBtn = notification.querySelector(".notification-close");
closeBtn.addEventListener("click", () => {
 notification.style.transform = "translateX(400px)";
 setTimeout(() => notification.remove(), 300);
});

setTimeout(() => {
 if (notification.parentNode) {
   notification.style.transform = "translateX(400px)";
   setTimeout(() => notification.remove(), 300);
  }
 }, 5000);

document.addEventListener('DOMContentLoaded', function() {
  const dateInput = document.getElementById('booking_date');
  const timeInput = document.getElementById('booking_time');
  
  dateInput.addEventListener('blur', function() {
    if (this.value === '') {
      this.type = 'text';
    }
  });
  
  timeInput.addEventListener('blur', function() {
    if (this.value === '') {
      this.type = 'text';
    }
  });
  
  timeInput.addEventListener('click', function(e) {
    if (this.type !== 'time' && e.offsetX > this.offsetWidth - 40) {
      this.type = 'time';
      this.focus();
    }
  });
  
  document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    alert('Thank you for booking with Pretty Braids! We will confirm your appointment shortly.');
    
    this.reset();
    
    dateInput.type = 'text';
    timeInput.type = 'text';
  });
});
