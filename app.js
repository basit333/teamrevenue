const tabsBtn = document.querySelectorAll(".our__services--tab");
const tabContent = document.querySelectorAll(".our__services--tab-list");

tabsBtn.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabsBtn and tab content
    tabsBtn.forEach((tab) => tab.classList.remove("active"));
    tabContent.forEach((content) => content.classList.remove("active"));

    // Add active class to the clicked tab
    tab.classList.add("active");

    // Show the corresponding tab content with opacity animation
    const tabId = tab.getAttribute("data-tab");
    const activeTabContent = document.getElementById(tabId);
    activeTabContent.classList.add("active");
  });
});
