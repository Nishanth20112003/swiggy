document.addEventListener("DOMContentLoaded", () => {
  let headingList = [
    "unexpected guests",
    "movie marathon",
    "Hungry?",
    "Cooking gone wrong",
    "Late night at office",
    "Game night",
  ];
  let display_heading = document.getElementById("display-heading");
  let heading_index = 0;

  function update_city() {
    if (heading_index < headingList.length) {
      display_heading.innerText = headingList[heading_index];
      heading_index = (heading_index + 1) % headingList.length;
      setTimeout(update_city, 3000);
    }
  }
update_city();
  
});

     