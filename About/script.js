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
    saveH = saveH === "0px" ? "200px" : "0px";
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
      image: "/post1.jpg",
      title: "Different design patterns",
      text: "Explore various design patterns that enhance code structure and maintainability. Learn how to implement scalable and efficient solutions in your projects.",
      code: "JavaScript",
      date: "Dec 18th, 2020",
    },
    {
      image: "/post2.jpg",
      title: "Social network designs",
      text: "Dive into the world of social media UI/UX. Discover innovative design strategies and best practices to create engaging user experiences.",
      code: "React",
      date: "Jan 2nd, 2021",
    },
    {
      image: "/post3.jpg",
      title: "Creative coding tips",
      text: "Unlock powerful coding techniques to write cleaner, more efficient code. Improve your problem-solving skills with expert programming insights.",
      code: "Python",
      date: "Jan 8th, 2021",
    },
    {
      image: "/post4.jpg",
      title: "Mastering algorithms",
      text: "Deep dive into algorithms and data structures. Learn optimization techniques to enhance performance and efficiency in your applications.",
      code: "C++",
      date: "Feb 15th, 2021",
    },
  ];

  let saveArticles = "";

  articlesCart.forEach((index) => {
    let { image, title, text, date, code } = index;
    let html = `
      <div class="articlesItems">
        <div class="imageSection">
          <img src="../photos${image}" alt="image">
        </div>
        <div class="texts">
          <h3>${title}</h3>
          <p>
            ${text}
          </p>
          <section>
            <p class="code">${code}</p>
            <p>${date}</p>
          </section>
        </div>
    </div>
    `;
    saveArticles += html;
  });

  document.querySelector(".articlesContents").innerHTML = saveArticles;
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
