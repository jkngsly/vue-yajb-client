import slider from "nouislider";

export default {
  mounted(el, binding, vnode, prevVnode) {
    slider.create(el, {
      start: [20, 80],
      connect: true,
      range: {
        min: 0,
        max: 100,
      },
    });
  },

  updated(el, binding, vnode, prevVnode) {},
};
