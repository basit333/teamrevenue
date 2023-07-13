const tabsBtn = document.querySelectorAll(".our__services--tab");
const tabContent = document.querySelectorAll(".our__services--tab-list");
const tabContentContainer = document.querySelector(".our__services--tab-content");

tabsBtn.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabsBtn and tab content
    tabsBtn.forEach((tab) => tab.classList.remove("active"));
    tabContent.forEach((content) => content.classList.remove("active"));
    tabContentContainer.classList.remove("active");

    // Add active class to the clicked tab
    tab.classList.add("active");

    // Show the corresponding tab content with opacity animation
    const tabId = tab.getAttribute("data-tab");
    const activeTabContent = document.getElementById(tabId);
    activeTabContent.classList.add("active");

    // Add active class to the tab content container
    tabContentContainer.classList.add("active");
  });
});

// Accordion

// Get all the accordion buttons
const accordionBtns = document.querySelectorAll(".our__services--accordion-btn");

// Loop through each accordion button and add a click event listener
accordionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all accordion buttons
    accordionBtns.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add active class to the clicked accordion button
    btn.classList.add("active");

    // Get the corresponding accordion content
    const accordionContent = btn.nextElementSibling;

    // Get all the accordion contents
    const allAccordionContents = document.querySelectorAll(".our__services--accordion-content");

    // Remove active class from all accordion contents
    allAccordionContents.forEach((content) => {
      content.classList.remove("active");
    });

    // Add active class to the corresponding accordion content
    accordionContent.classList.add("active");
  });
});
