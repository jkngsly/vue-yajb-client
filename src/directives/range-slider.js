import slider from "nouislider";
import wNumb from "wnumb";

const updateLabel = (label, newValue) => {
  label.innerHTML = "$" + newValue[0] + "K" + " - $" + newValue[1] + "K";
};

export default {
  mounted(el, binding, vnode, prevVnode) {
    const options = binding.value;
    console.log(options);
    slider.create(el, {
      start: options.start,
      /*
      pips: {
        mode: "steps",
        density: 2,
        format: wNumb({
          decimals: 0,
          suffix: "K",
          prefix: "$",
        }),
      },
      */
      format: wNumb({
        decimals: 0,
      }),
      connect: true,
      step: 10,
      range: {
        min: options.range[0],
        max: options.range[1],
      },
    });

    let label = document.createElement("span");
    label.setAttribute("id", "range-slider-value");
    el.appendChild(label);
    updateLabel(label, options.start);

    el.noUiSlider.on("slide", () => {
      const newValue = el.noUiSlider.get();
      binding.instance.parentValue = newValue;
      binding.instance.$emit("update:value", newValue);
      updateLabel(label, newValue);
    });
  },

  updated(el, binding, vnode, prevVnode) {},
};
