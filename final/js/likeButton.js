const likebutton = document.getElementById("likeButton");
const likedbutton = document.getElementById("likedButton");

const hidebutton = () => {
    likebutton.classList.add("hide");
	likebutton.classList.remove("show");
}

likebutton.onclick = hidebutton();

const showbutton = () => {
    likedbutton.classList.add("show");
	likedbutton.classList.remove("hide");
}

likedbutton.onclick = showbutton();