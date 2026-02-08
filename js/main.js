document.addEventListener("DOMContentLoaded", () => {
  console.log("TPM loaded. Hidup masih berjalan.");
});

document.getElementById("regForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let wa = document.getElementById("wa").value;

  if (!/^[0-9]+$/.test(wa)) {
    alert("Numbers only!");
    return;
  }

  if (wa.length < 10 || wa.length > 12) {
    alert("WA must be 10-12 digits");
    return;
  }

  document.getElementById("successMsg").innerText = "Registration Successful!";
});

document.getElementById("wa").addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, "");
});

document.querySelectorAll(".fileInput").forEach((input) => {
  input.addEventListener("change", function () {
    this.nextElementSibling.innerText = "Uploaded: " + this.files[0].name;
  });
});

function contactSubmit() {
  alert("Message sent!");
}
