// Get the menu items
const menuItems = document.querySelectorAll(".menu > ul > li");

// Add click event listeners to each menu item
menuItems.forEach((item) => {
    item.addEventListener("click", function (e) {
        // Remove active class from all sibling li elements
        menuItems.forEach((sibling) => {
            if (sibling !== item) {
                sibling.classList.remove("active");
                const subMenu = sibling.querySelector("ul");
                if (subMenu) {
                    subMenu.style.display = "none"; // Close other sub menus
                }
            }
        });

        // Toggle active class of clicked li
        this.classList.toggle("active");

        // if has a sub menu, toggle it
        const subMenu = this.querySelector("ul");
        if (subMenu) {
            if (subMenu.style.display === "block") {
                subMenu.style.display = "none"; // Close the submenu if it's open
            } else {
                subMenu.style.display = "block"; // Open the submenu if it's closed
            }
        }

        // Remove active class from sub menu items
        const subMenuItems = this.querySelectorAll("ul li");
        subMenuItems.forEach((subMenuItem) => {
            subMenuItem.classList.remove("active");
        });
    });
});

// Get the menu button
const menuButton = document.querySelector(".menu-btn");

// Add click event listener to the menu button
menuButton.addEventListener("click", function () {
    // Toggle active class of sidebar
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");
});
