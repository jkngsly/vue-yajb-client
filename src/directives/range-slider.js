import slider from "nouislider";

export default {
  mounted(el, binding, vnode, prevVnode) {
    const options = binding.value;
    console.log(options);
    slider.create(el, {
      start: options.start,
      connect: true,
      step: 10000,
      range: {
        min: options.range[0],
        max: options.range[1],
      },
    });

    el.noUiSlider.on("slide", () => {
      const newValue = el.noUiSlider.get();
      binding.instance.parentValue = newValue;
      binding.instance.$emit("update:value", newValue);
    });
  },

  updated(el, binding, vnode, prevVnode) {},
};
