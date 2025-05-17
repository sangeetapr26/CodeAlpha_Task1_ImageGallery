const imageUrls = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1020/600/400",
  "https://picsum.photos/id/1024/600/400",
  "https://picsum.photos/id/1025/600/400",
  "https://picsum.photos/id/1035/600/400"
];

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("closeBtn");
imageUrls.forEach((url, index) => {
  const img = document.createElement("img");
  img.src = url;
  img.style.animationDelay = `${index * 100}ms`;
  img.alt = "Gallery Photo";
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = url;
  });
  gallery.appendChild(img);
});
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});
lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg && e.target !== closeBtn) {
    lightbox.style.display = "none";
  }
});
