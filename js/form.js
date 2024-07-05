function formSend() {
    let e = document.querySelector(".gamers__form"),
        a = document.querySelector(".gamers__popup"),
        s = document.querySelector(".gamers__request");
    e &&
        e.addEventListener("submit", async function (i) {
            i.preventDefault();
            let c = new FormData(i.target);
            fetch(i.target.action, { method: e.method, body: c, headers: { Accept: "application/json" } })
                .then((i) => {
                    i.ok
                        ? ((s.style.display = "block"),
                          e.reset(),
                          setTimeout(() => {
                              s.style.display = "none";
                          }, 3e3))
                        : i.json().then((e) => {
                              Object.hasOwn(e, "errors")
                                  ? ((a.innerHTML = e.errors.map((e) => e.message).join(", ")),
                                    setTimeout(() => {
                                        a.innerHTML = "";
                                    }, 3e3))
                                  : ((a.innerHTML = "Oops! There was a problem submitting your form"),
                                    setTimeout(() => {
                                        a.innerHTML = "";
                                    }, 3e3));
                          });
                })
                .catch((e) => {
                    (a.innerHTML = "Oops! There was a problem submitting your form"),
                        setTimeout(() => {
                            a.innerHTML = "";
                        }, 3e3);
                });
        });
}
formSend(),
    (function () {
        let e = document.querySelector(".gamers__form-email input"),
            a = document.querySelector(".gamers__form-alias input");
            l = document.querySelector(".gamers__form-link input");
            ch = document.querySelector(".custom-select select");
            (r = document.querySelector(".gamers__form-checked")),
            (n = document.querySelector(".gamers__form-checked-2")),
            (t = document.querySelector(".gamers__form-submit")),
            (o = () => {
                !0 === r.checked && !0 === n.checked && "" !== e.value && "" !== a.value && "" !== l.value && "" !== ch.value ? (t.disabled = !1) : (t.disabled = !0);
            }),
            r.addEventListener("change", o),
            n.addEventListener("change", o),
            e.addEventListener("input", o);
    })();



var x, i, j, le, ll, selElmnt, ab, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
le = x.length;
for (i = 0; i < le; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  ab = document.createElement("DIV");
  ab.setAttribute("class", "select-selected");
  ab.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(ab);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(func) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  ab.addEventListener("click", function(func) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    func.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);