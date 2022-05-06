const toggle1 = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
toggle1.addEventListener("click", () => {
  toggle1.classList.toggle("active");
  navigation.classList.toggle("active");
});
