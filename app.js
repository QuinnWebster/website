const shrink_btn = document.querySelector(".shrink-btn");
const search = document.querySelector(".search");
const sidebar_links = document.querySelectorAll(".sidebar-links a");
const active_tab = document.querySelector(".active-tab");
const shortcuts = document.querySelector(".sidebar-links h4");
const tooltip_elements = document.querySelectorAll(".tooltip-element");

let activeIndex;
//This shrinks sidebar
shrink_btn.addEventListener("click", () => {
  document.body.classList.toggle("shrink");
  setTimeout(moveActiveTab, 400);

  shrink_btn.classList.add("hovered");

  setTimeout(() => {
    shrink_btn.classList.remove("hovered");
  }, 500);
});


function moveActiveTab() {
  let topPosition = activeIndex * 58 + 2.5;

  if (activeIndex > 6) {
    topPosition += shortcuts.clientHeight;
  }

  active_tab.style.top = `${topPosition}px`;
}


const originalMainHTML = document.querySelector("main .text").innerHTML;

function reloadOriginalContent() {
  const mainText = document.querySelector("main .text");
  
  // Replace the current content with the original HTML
  mainText.innerHTML = originalMainHTML;
}


function changeLink() {
    sidebar_links.forEach((sideLink) => sideLink.classList.remove("active"));
    this.classList.add("active");
  
    const linkText = this.querySelector(".link").textContent;
    const mainText = document.querySelector(".text");
    const title = document.querySelector("h1");

    if (linkText === "Home") {
      reloadOriginalContent();
      activeIndex = this.dataset.active;
      title.textContent = "Quinn Webster";


      const allMainContent = document.querySelector(".allMainContent");
      allMainContent.style.display = 'block';
      

      moveActiveTab();
  }
    else if (linkText === "Battle Snake") {
      fetch("tab_content/battlesnake/battlesnake.html")
      .then(response => response.text())
      .then(html => {
          // Update the main text container with the fetched HTML content
          mainText.innerHTML = html;

          // Update the title
          title.textContent = 'Quinn Webster';


          const allMainContent = document.querySelectorAll(".allMainContent");
          allMainContent.forEach(element => {
              element.style.display = 'none';
          });
          
      })

      
      .catch(error => console.error('Error fetching content:', error));

      activeIndex = this.dataset.active;

      moveActiveTab();
    } else if (linkText === "News Summarizer") {
      fetch("tab_content/newspaper/newspaper.html")
      .then(response => response.text())
      .then(html => {
          // Update the main text container with the fetched HTML content
          mainText.innerHTML = html;

          // Update the title
          title.textContent = 'Quinn Webster';


          const allMainContent = document.querySelectorAll(".allMainContent");
          allMainContent.forEach(element => {
              element.style.display = 'none';
          });
          
      })

      
      .catch(error => console.error('Error fetching content:', error));

  activeIndex = this.dataset.active;

  moveActiveTab();
    }else if (linkText === "Cribbage Game Optimizer") {
      // Fetch the HTML content of air_hockey.html
      fetch("tab_content/cribbage/cribbage.html")
          .then(response => response.text())
          .then(html => {
              // Update the main text container with the fetched HTML content
              mainText.innerHTML = html;

              // Update the title
              title.textContent = 'Quinn Webster';



              const allMainContent = document.querySelectorAll(".allMainContent");
              allMainContent.forEach(element => {
                  element.style.display = 'none';
              });


          })
          .catch(error => console.error('Error fetching content:', error));

      activeIndex = this.dataset.active;

      moveActiveTab();
  }else if (linkText === "Air Hockey") {
      // Fetch the HTML content of air_hockey.html
      fetch("tab_content/air_hockey/air_hockey.html")
          .then(response => response.text())
          .then(html => {
              // Update the main text container with the fetched HTML content
              mainText.innerHTML = html;

              // Update the title
              title.textContent = 'Quinn Webster';


              const allMainContent = document.querySelectorAll(".allMainContent");
              allMainContent.forEach(element => {
                  element.style.display = 'none';
              });
              
          })

          
          .catch(error => console.error('Error fetching content:', error));

      activeIndex = this.dataset.active;

      moveActiveTab();
  }else if (linkText === "Password Checker") {
      mainText.textContent = `Password Checker, add description here`;
      title.textContent = "Quinn Webster";
  }else if (linkText === "Project 2") {
    mainText.textContent = `Project 2, add description here`;
    title.textContent = "Quinn Webster";
  }


  
    activeIndex = this.dataset.active;
  
    moveActiveTab();
} 
  

sidebar_links.forEach((link) => link.addEventListener("click", changeLink));

function showTooltip() {
  let tooltip = this.parentNode.lastElementChild;
  let spans = tooltip.children;
  let tooltipIndex = this.dataset.tooltip;

  Array.from(spans).forEach((sp) => sp.classList.remove("show"));
  spans[tooltipIndex].classList.add("show");

  tooltip.style.top = `${(100 / (spans.length * 2)) * (tooltipIndex * 2 + 1)}%`;
}

tooltip_elements.forEach((elem) => {
  elem.addEventListener("mouseover", showTooltip);
});





//Trying to get home page to load properly

document.addEventListener("DOMContentLoaded", function() {
  fetch("air_hockey.html")
      .then(response => response.text())
      .then(html => {
          // Update the main text container with the fetched HTML content
          main.innerHTML = html;
          
          // You might want to reassign the main variable if you're using it as a reference to the <main> element
          // main = document.querySelector('main'); // uncomment this line if needed

          // Any other operations you need to perform after fetching and updating the content
          moveActiveTab();
      })
      .catch(error => console.error('Error fetching content:', error));
});
