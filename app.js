const moonPath =
  "M21 27.5C21 42.6878 27.5 56.5 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 21 12.3122 21 27.5Z";

const sunPath =
  "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

const darkMode = document.querySelector("#darkMode");

let toggle = false;

// WE NEED TO CLICK ON THE SUN

darkMode.addEventListener("click", () => {
  //We need to use anime.js
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo"
  });
  //ADD DIFFERENT ANIMATIONS TO THE TIMELINE
  timeline
    .add({
      targets: ".sun",
      d: [{ value: toggle ? sunPath : moonPath }]
    })
    .add(
      {
        targets: "#darkMode",
        rotate: 320
      },
      "-= 350"
    )
    .add(
      {
        targets: "section",
        backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(22,22,22)",
        color: toggle ? "rgb(22,22,22)" : "rgb(255,255,255)"
      },
      "-= 700"
    );
    //Everytime we click on the sun I want that toggle to switch
    if(!toggle){
        toggle = true;
    }else{
        toggle = false;
    }
});
