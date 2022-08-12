export function saveFact(fact, render) {
    if (render === false) {
        alert("Error: No Fact given yet!");
        return;
    }

    let check = localStorage.getItem("SavedFactList");
    check = check ? JSON.parse(check) : [];
    check.push(fact);
    localStorage.setItem("SavedFactList", JSON.stringify(check));
    alert(`Fact Successfully Saved to "My Facts"`);
}