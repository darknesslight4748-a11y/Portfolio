// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Profile photo upload -> live preview
// Click the frame to choose a picture from your computer.
// This only previews it in the browser; to make it permanent, replace
// images/profile-placeholder.svg with your own image file (same filename),
// or update the src in index.html to point at your new file.
const photoFrame = document.getElementById("photoFrame");
const photoInput = document.getElementById("photoInput");
const profileImg = document.getElementById("profileImg");

photoFrame.addEventListener("click", () => photoInput.click());

photoInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (evt) => {
    profileImg.src = evt.target.result;
  };
  reader.readAsDataURL(file);
});
