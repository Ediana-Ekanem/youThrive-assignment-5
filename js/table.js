let tbody = document.querySelector("tbody");
let pageUl = document.querySelector(".pagination");
let tr = tbody.querySelectorAll("tr");
let emptyBox = [];
let index = 1;
let itemPerPage = 8;

for (let i = 0; i < tr.length; i++) {
  emptyBox.push(tr[i]);
}

function displayPage(limit) {
  tbody.innerHTML = "";
  for (let i = 0; i < limit; i++) {
    if (emptyBox[i]) {
      tbody.appendChild(emptyBox[i]);
    }
  }
  const pageNum = pageUl.querySelectorAll(".list");
  pageNum.forEach((n) => n.remove());
}
displayPage(itemPerPage);

function pageGenerator(getem) {
  const num_of_tr = emptyBox.length;
  if (num_of_tr <= getem) {
    pageUl.style.display = "none";
  } else {
    pageUl.style.display = "flex";
    const num_Of_Page = Math.ceil(num_of_tr / getem);
    for (let i = 1; i <= num_Of_Page; i++) {
      const li = document.createElement("li");
      li.className = "list";
      const a = document.createElement("a");
      a.href = "#";
      a.innerText = i;
      a.setAttribute("data-page", i);
      li.appendChild(a);
      pageUl.insertBefore(li, pageUl.querySelector(".next"));
    }
  }
}
pageGenerator(itemPerPage);

let pageLink = pageUl.querySelectorAll("a");
let lastPage = pageLink.length - 2;

function pageRunner(page, items, lastPage, active) {
  for (let button of page) {
    button.onclick = (e) => {
      const page_num = e.target.getAttribute("data-page");
      const page_mover = e.target.getAttribute("id");
      if (page_num != null) {
        index = page_num;
      } else {
        if (page_mover === "next") {
          index++;
          if (index >= lastPage) {
            index = lastPage;
          }
        } else {
          index--;
          if (index <= 1) {
            index = 1;
          }
        }
      }
      pageMaker(index, items, active);
    };
  }
}

function getpagElement(val) {
  let pagelink = pageUl.querySelectorAll("a");
  let lastpage = pagelink.length - 2;
  let pageli = pageUl.querySelectorAll(".list");
  pageli[0].classList.add("active");
  pageRunner(pagelink, val, lastpage, pageli);
}

function pageMaker(index, item_per_page, activePage) {
  const start = item_per_page * index;
  const end = start + item_per_page;
  const current_page = emptyBox.slice(
    start - item_per_page,
    end - item_per_page
  );
  tbody.innerHTML = "";
  for (let j = 0; j < current_page.length; j++) {
    let item = current_page[j];
    tbody.appendChild(item);
  }
  Array.from(activePage).forEach((e) => {
    e.classList.remove("active");
  });
  activePage[index - 1].classList.add("active");
}

// Initial setup
pageRunner(pageLink, itemPerPage, lastPage, pageUl.querySelectorAll(".list"));

// search content
var search = document.getElementById("search");
search.onkeyup = (e) => {
  const text = e.target.value;
  for (let i = 0; i < tr.length; i++) {
    const matchText = tr[i].querySelectorAll("td")[2].innerText;
    if (matchText.toLowerCase().indexOf(text.toLowerCase()) > -1) {
      tr[i].style.visibility = "visible";
    } else {
      tr[i].style.visibility = "collapse";
    }
  }
};
