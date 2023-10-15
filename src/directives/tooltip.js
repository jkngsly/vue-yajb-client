const getTooltipText = (path, validationErrors) => {
  let text = false;
  validationErrors.forEach((err, v, y) => {
    let index = Object.keys(validationErrors[v])[0];
    if (index === path && !text) {
      text = err[index];
    }
  });

  return text;
};

export default {
  mounted(el, binding, vnode, prevVnode) {
    let wrapper = document.createElement("span");
    wrapper.classList.add("tooltip");
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
  },

  updated(el, binding, vnode, prevVnode) {
    const path = binding.value[0];
    const validationErrors = binding.value[1];
    let text = getTooltipText(path, validationErrors);
    let wrapper = el.parentElement;

    if (text) {
      el.classList.add("field-error");
      wrapper.setAttribute("data-before", text);
      wrapper.classList.remove("tooltip-hidden");
      wrapper.classList.add("tooltip-visible");
    } else if (wrapper.classList.contains("tooltip-visible")) {
      wrapper.classList.add("tooltip-hidden");
      el.classList.remove("field-error");
    }
  },
};
