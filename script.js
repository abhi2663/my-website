const fileInput = document.getElementById('fileInput');
const gallery = document.querySelector('.gallery');

fileInput.addEventListener('change', (e) => {
  const files = e.target.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();

    reader.onload = () => {
      const img = document.createElement('img');
      img.src = reader.result;
      gallery.appendChild(img);
    }

    reader.readAsDataURL(file);
  }
});