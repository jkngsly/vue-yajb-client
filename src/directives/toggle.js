const toggleTrue = (el) => {
  let button = el.querySelector("span");
  const width = el.offsetWidth - 50;
  for (let i = 0; i <= width; i++) {
    setTimeout(() => {
      button.style.transform = "translateX(" + i + "px)";

      if (i === width) {
        el.classList.add("checked");
      }
    }, 0);
  }
};

const toggleFalse = (el) => {
  let button = el.querySelector("span");
  const width = el.offsetWidth - 50;
  for (let i = width; i >= 0; i--) {
    setTimeout(() => {
      button.style.transform = "translateX(" + i + "px)";

      if (i === 0) {
        el.classList.remove("checked");
      }
    }, 0);
  }
};

export default {
  mounted(el, binding, vnode, prevVnode) {
    const button = document.createElement("span");
    el.appendChild(button);

    if (binding.value) {
      toggleTrue(el);
    }

    el.addEventListener("click", (e) => {
      binding.instance.checked = binding.instance.checked ? false : true;
    });
  },

  updated(el, binding, vnode, prevVnode) {
    let checked = binding.instance.checked;
    if (checked) {
      toggleTrue(el);
    } else {
      toggleFalse(el);
    }
  },
};
