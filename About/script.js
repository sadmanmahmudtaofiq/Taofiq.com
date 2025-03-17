let madeForSetBgColor = document.querySelector(".madeForSetBgColor");
let scrollArrow = document.querySelector(".scrollArrow");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    madeForSetBgColor.style.backgroundColor = "#f7f7f7";
    madeForSetBgColor.style.boxShadow = "1px 1px 10px rgba(0, 0, 0, 0.24)";
    scrollArrow.style.display = "flex";
  } else {
    madeForSetBgColor.style.backgroundColor = "";
    madeForSetBgColor.style.boxShadow = "none";
    scrollArrow.style.display = "none";
  }
});

scrollArrow.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
  });
});

const menu = document.querySelector(".menu");

const clickMenuItems = document.querySelector(".clickMenuItems");

clickMenuItems.style.maxHeight = "0px";

menu.addEventListener("click", () => {
  if (clickMenuItems.style.maxHeight === "0px") {
    clickMenuItems.style.maxHeight = "200px";
  } else {
    clickMenuItems.style.maxHeight = "0px";
  }
});

const servicesItems = document.querySelector(".servicesItems");

const serviceCart = [
  {
    title: "Web development",
    icon: "fa-code",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime expedita necessitatibus voluptates aut nam commodi, provident atque blanditiis sunt animi?",
  },
  {
    title: "App development",
    icon: "fa-mobile",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime expedita necessitatibus voluptates aut nam commodi, provident atque blanditiis sunt animi?",
  },
  {
    title: "Automation",
    icon: "fa-reddit",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime expedita necessitatibus voluptates aut nam commodi, provident atque blanditiis sunt animi?",
  },
];

let sreviceSaveHTML = "";

serviceCart.forEach((index) => {
  let { title, icon, text } = index;
  let html = `
        <div class="servicesItems">

        <i class="fa ${icon}"></i>
        <h3>
          ${title}
        </h3>
        <p>
          ${text}
        </p>
        
      </div>
  `;
  sreviceSaveHTML += html;
});
document.querySelector(".servicesContents").innerHTML = sreviceSaveHTML;

const recentCart = [
  {
    image: "tech-breeze1.png",
    firstHoverText: "Tech Breeze",
    lastHoverText: "HTML, CSS React",
  },
  {
    image: "event-logger2.png",
    firstHoverText: "Event Logger",
    lastHoverText: "HTML, CSS React",
  },
  {
    image: "typing-game3.png",
    firstHoverText: "Typing game",
    lastHoverText: "HTML, CSS React",
  },
  {
    image: "analog-clock4.png",
    firstHoverText: "Analog Clock",
    lastHoverText: "HTML, CSS React",
  },
];

let recentSaveHTML = "";

recentCart.forEach((index) => {
  let { image, firstHoverText, lastHoverText } = index;
  let html = `
      <div class="recentItems">
      <img src="../photos/${image}" alt="image">
      <div class="recentHover">
        <div>
          <h3>
            ${firstHoverText}
          </h3>
          <p>
            ${lastHoverText}
          </p>
        </div>
      </div>
    </div>
  `;
  recentSaveHTML += html;
});

document.querySelector(".recentContents").innerHTML = recentSaveHTML;

(() => {
  let rightsReservedDate = document.querySelector(".rightsReserved span");
  const yearText = new Date().getFullYear();
  if (rightsReservedDate) {
    rightsReservedDate.innerHTML = yearText;
  }
})();
