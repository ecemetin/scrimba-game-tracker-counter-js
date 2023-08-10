let count = 0;
const saveEl = document.getElementById("save-el");
const countEl = document.getElementById("count-el");

function increment() {
    count += 1;
    countEl.textContent = count;
}
function decrement() {
    count -= 1;
    countEl.textContent = count;
}
function save() {
    let previousEntries = " "+ count + " - "
    saveEl.textContent += previousEntries;

}
function reset() {
    countEl.textContent = 0;
    saveEl.textContent = 0;
}
