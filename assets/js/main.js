const list = document.querySelector(".flower-list .list");
const items = document.querySelectorAll(".sell-item")
const listItems = document.querySelectorAll(".list .list-item")
function filter() {
    list.addEventListener("click",  e => {
        const getType = e.target.getAttribute("data-id");
        console.log(getType);
        
        switch (getType) {
            case "all":
                getItems('sell-item')
                break;
            case "cactuses":
                getItems(getType);
                break;
            case "exotic":
                getItems(getType);
                break;
            case "greens":
                getItems(getType);
                break;
            case "popular":
                getItems(getType);
                break;
            case "various":
                getItems(getType);
                break;
            case "winter":
                getItems(getType);
                break;
            default:
                break;
        }
    })
}
filter();

function getItems(className) {
    items.forEach(item => {
        if(item.classList.contains(className)){
            item.style.display = "block";
        } else {
            item.style.display = "none"
        }
    })
}