// Initialize emailjs once
emailjs.init("h7k5Fyvoy22ZZL0ap");

const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "Folioflix";
  const templateID = "template_65rnq9u";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      alert("Email Sent Successfully!");
    })
    .catch((err) => {
      console.error("Email send failed:", err);
      alert("Failed to send email. Please try again later.");
    });
});
