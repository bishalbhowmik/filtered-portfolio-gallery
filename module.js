// Portfolio Module Js   

let list = document.querySelectorAll(".filtered-portfolio-gallery__list");
      let itemBox = document.querySelectorAll(".filtered-portfolio-gallery__itembox");

      for (let i = 0; i < list.length; i++) {
        list[i].addEventListener("click", function () {
          for (let j = 0; j < list.length; j++) {
            list[j].classList.remove("filtered-portfolio-gallery__active");
          }
          this.classList.add("filtered-portfolio-gallery__active");

          let dataFilter = this.getAttribute("data-filter");

          for (let k = 0; k < itemBox.length; k++) {
            itemBox[k].classList.remove("filtered-portfolio-gallery__active");
            itemBox[k].classList.add("filtered-portfolio-gallery__hide");

            if (
              itemBox[k].getAttribute("data-item") == dataFilter ||
                dataFilter == "All"
            ) {
              itemBox[k].classList.remove("filtered-portfolio-gallery__hide");
              itemBox[k].classList.add("filtered-portfolio-gallery__active");
            }
          }
        });
      }