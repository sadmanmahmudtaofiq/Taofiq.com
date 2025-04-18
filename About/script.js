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

function menu() {
  const menu = document.querySelector(".menu");

  const clickMenuItems = document.querySelector(".clickMenuItems");

  let saveH = localStorage.getItem("saveH") || "0px";

  clickMenuItems.style.maxHeight = saveH;

  menu.addEventListener("click", () => {
    saveH = saveH === "0px" ? "155px" : "0px";
    clickMenuItems.style.maxHeight = saveH;
    localStorage.setItem("saveH", saveH);
  });
}

function serviceCards() {
  const serviceCart = [
    {
      title: "Web development",
      icon: "fa-code",
      text: "Building responsive and high-performance websites tailored to your business needs. We focus on clean code and seamless user experiences.",
    },
    {
      title: "App development",
      icon: "fa-mobile",
      text: "Creating mobile apps that are fast, user-friendly, and tailored to your brand. From design to deployment, we ensure your app delivers exceptional performance.",
    },
    {
      title: "Automation",
      icon: "fa-reddit",
      text: "Streamlining business processes through custom automation solutions. We help you reduce manual efforts and increase productivity with smart, automated workflows.",
    },
    {
      title: "UI Design",
      icon: "fa-paint-brush",
      text: "Crafting visually appealing and user-friendly designs to enhance user experience. Elevate your brand with intuitive and modern design solutions that ensure user satisfaction.",
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
}

function recentCards() {
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
}

function articles() {
  const articlesCart = [
    {
      title: "Different design patterns",
      text: "Explore various design patterns that enhance code structure and maintainability. Learn how to implement scalable and efficient solutions in your projects. Design patterns are like blueprints for solving common problems in software development! Did you know some of the earliest design patterns were inspired by architecture and city planning?",
      image: "../photos/JavaScript-logo.png",
      date: "Dec 18th, 2020",
      code: "JavaScript",
    },
    {
      title: "Social network designs",
      text: "Dive into the world of social media UI/UX. Discover innovative design strategies and best practices to create engaging user experiences. Think about all your favorite social media apps – they all have carefully planned designs! It's amazing how small changes in design can make a huge difference in how people use an app.",
      image: "../photos/react-logo.png",
      code: "React",
      date: "Jan 2nd, 2021",
    },
    {
      title: "Creative coding tips",
      text: "Unlock powerful coding techniques to write cleaner, more efficient code. Improve your problem-solving skills with expert programming insights. Sometimes the most creative solutions come from clever coding tricks! Many programmers find that coding can be a very artistic and imaginative process.",
      code: "Python",
      date: "Jan 8th, 2021",
      image: "../photos/python-logo.svg",
    },
    {
      title: "Mastering algorithms",
      text: "Deep dive into algorithms and data structures. Learn optimization techniques to enhance performance and efficiency in your applications. Algorithms are like step-by-step instructions that help computers solve problems! Some algorithms are so clever they can solve really complex puzzles very quickly.",
      code: "C++",
      image: "../photos/c++-logo.png",
      date: "Feb 15th, 2021",
    },
    {
      title: "Building RESTful APIs",
      text: "Learn how to design and implement RESTful APIs that are scalable, secure, and easy to maintain. Ideal for backend development projects. APIs are like messengers that allow different software to talk to each other! Without APIs, many of the apps and websites we use every day wouldn't be able to share information.",
      code: "Node.js",
      image: "../photos/nodeJS-logo.png",
      date: "Mar 5th, 2021",
    },
    {
      title: "Responsive web design",
      text: "Understand the principles of responsive design and how to build websites that look great on any device, from phones to desktops. Responsive design makes sure websites adapt to fit your screen, no matter what you're using! It's like the website is smart enough to know how big your window is!",
      code: "HTML/CSS",
      image: "../photos/html-logo.png",
      date: "Mar 20th, 2021",
    },
  ];

  let saveArticles = "";

  articlesCart.forEach((index) => {
    let { title, text, date, image, code } = index;
    let html = `
      <div class="articlesItems">

          <div class="textSection">

            <div class="articlesTitle">
              ${title}
            </div>

            <div class="icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>

          </div>

          <div class="dsecreption">

            <div class="dsecreptionText">
              ${text}
            </div>

            <div class="codeText">
              <div class="code">
                <img src="${image}" alt="${code}">
              </div>
              <div class="date">
                ${date}
              </div>
            </div>

          </div>

      </div>
    `;
    saveArticles += html;
  });

  document.querySelector(".articlesContents").innerHTML = saveArticles;
}

function articlesFunction() {
  const textSection = document.querySelectorAll(".textSection");
  const dsecreption = document.querySelectorAll(".dsecreption");
  const icon = document.querySelectorAll(".icon");

  textSection.forEach((item, index) => {
    item.addEventListener("click", () => {
      dsecreption.forEach((text, i) => {
        if (index === i) {
          const isOpen = text.style.height === "155px";
          text.style.height = isOpen ? "0px" : "155px";
          icon[i].innerHTML = isOpen
            ? `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`
            : `<svg fill="#000000" viewBox="-6.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>hyphen</title> <path d="M13.875 12.906v2.281h-8.563v-2.281h8.563z"></path> </g></svg>`;
        } else {
          text.style.height = "0px";
          icon[
            i
          ].innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
        }
      });
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

scroll();
menu();
serviceCards();
recentCards();
articles();
showDate();
articlesFunction();
