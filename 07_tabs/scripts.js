const tabs = document.querySelectorAll(".item")
const contents = document.querySelectorAll(".target p")

function switchTab(i){

    contents.forEach(c => c.style.display = "none");
    contents[i].style.display = "block";


    tabs.forEach(tab => tab.classList.remove("active"));
    tabs[i].classList.add("active")
    
}

tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => switchTab(i));
})

switchTab(0);
