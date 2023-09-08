// if (document.location.href.includes("profile-cv")) {
//   document.querySelectorAll(".cv").forEach((item) => {
//     item.style.display = "flex";
//   });
// }

if (document.location.href.includes("profile-cv")) {
  document.querySelector(".profile-cv").style.display = "grid";
  document.title=`Profile cv`;
} else {
  if (document.location.href.includes("pet-project")) {
    document.querySelector(".pet-project").style.display = "grid";
    document.title=`Pet`;
  } else {
    if (document.location.href.includes("news-web")) {
      document.querySelector(".news-web").style.display = "grid";
      document.title=`News`;
    }
  }
}
