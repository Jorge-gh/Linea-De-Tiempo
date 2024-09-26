function toggleItem(element){
    element.classList.toggle("expanded") 
}

function expandAll(){
    const items = document.querySelectorAll('.item button')
    for (const element of items) {
        element.classList.add("expanded")
    }
}

function collapseAll() {
    const items = document.querySelectorAll('.item button')
    for (const element of items) {
        element.classList.remove("expanded")
    }
}