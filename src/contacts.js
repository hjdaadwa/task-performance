const contacts = document.getElementsByClassName("contacts")[0];

function addContacts() {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 50000; i++) {
    const child = document.createElement("div");
    child.textContent = i;
    child.classList.add("contact");
    fragment.appendChild(child);
  }
  contacts.appendChild(fragment);
}

function changeStickyHeader(e) {
  const topItemIndex = Math.round((e.target.scrollTop + 18) / 18);
  e.target.firstElementChild.textContent = e.target.children[topItemIndex].textContent;
}
  
function onScrollStop(callback) {
  let isScrolling;
  contacts.addEventListener('scroll', (e) => {
      clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        callback(e);
      },150);
    });
};

addContacts();
onScrollStop(changeStickyHeader);
