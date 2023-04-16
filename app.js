img = document.querySelector(".image");
img.onclick = () => {
    document.querySelector(".popup").style.display = "block";
};
cross = document.querySelector(".contain .popup span");
cross.onclick = () => {
    document.querySelector(".popup").style.display = "none";
};
