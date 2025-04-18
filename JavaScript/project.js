function menu() {
  const menu = document.querySelector(".menu");

  const clickMenuItems = document.querySelector(".clickMenuItems");

  let saveH = "0px";

  clickMenuItems.style.maxHeight = saveH;

  menu.addEventListener("click", () => {
    saveH = saveH === "0px" ? "200px" : "0px";
    clickMenuItems.style.maxHeight = saveH;
  });
}

function scroll() {
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
}
function showDate() {
  let rightsReservedDate = document.querySelector(".rightsReserved span");
  const yearText = new Date().getFullYear();
  if (rightsReservedDate) {
    rightsReservedDate.innerHTML = yearText;
  }
}

function projects() {
    const projectsData = [
        {
          image: "../photos/typing-game3.png",
          title: "Typing Game",
          description:
            "A fast-paced typing game that helps improve your speed and accuracy with real-time feedback.",
        },
        {
          image: "../photos/analog-clock4.png",
          title: "Analog Clock",
          description:
            "A live analog clock built with JavaScript and CSS, mimicking the classic clock face.",
        },
        {
          image: "../photos/fireworks.png",
          title: "Canvas Fireworks",
          description:
            "An interactive fireworks display using HTML5 Canvas and JavaScript animations.",
        },
        {
          image: "../photos/logger.png",
          title: "Event Logger",
          description:
            "A tool to track and display user interactions like clicks and key presses in real time.",
        },
        {
          image: "../photos/tech-breeze1.png",
          title: "Tech Breeze",
          description:
            "A modern, responsive tech blog layout featuring articles, tags, and categories.",
        },
        {
          image: "../photos/calendar.png",
          title: "Calendar",
          description:
            "A dynamic and interactive calendar to manage events and view monthly schedules.",
        },
      ];
      
  let html = "";
  projectsData.forEach((items) => {
    let { image, title, description } = items;
    html += saveHTML = `
           <div class="projectItem">
                    <div class="imageSection">
                        <img src="${image}" alt="" loading="lazy">
                    </div>
                    <div class="textSection">
                        <h4>${title}</h4>
                        <p class="descrepment">
                            ${description}
                        </p>
                        <div class="demo_scurce">
                            <div>
                                <p>Demo</p>
                                <svg fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_1456_" d="M60,60.7V79c0,2.2-1.6,4-3.8,4H4c-2.2,0-4-1.8-4-4V13c0-2.2,1.8-4,4-4h52.2c2.2,0,3.8,1.8,3.8,4v18.3 c0,2.2-1.8,4-4,4s-4-1.8-4-4V17H8v58h44V60.7c0-2.2,1.8-4,4-4S60,58.5,60,60.7z M90.8,43L75.2,27.2c-1.6-1.6-4.1-1.6-5.7,0 c-1.6,1.6-1.6,4.1,0,5.7l8.9,9L29.9,42c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c0,0,0,0,0,0l48.5-0.1l-8.9,9c-1.6,1.6-1.5,4.1,0,5.7 c0.8,0.8,1.8,1.2,2.8,1.2c1,0,2.1-0.4,2.8-1.2l15.7-15.8C92.4,47.1,92.4,44.6,90.8,43z"></path> </g></svg>
                            </div>
                            <div>
                                <p>Source</p>
                                <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#ffffff]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#ffffff]"> </path> </g> </g> </g> </g></svg>
                            </div>
                        </div>
                    </div>
                </div>
        `;
    document.querySelector(".projects").innerHTML = html;
  });
}

menu();
scroll();
showDate();
projects();
