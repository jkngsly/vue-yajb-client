<script>
import vClickOutside from "click-outside-vue3";

export default {
  props: {
    options: [
      { text: "Test" },
      { text: "Test2" },
      { text: "Test3" },
      { text: "Test4" },
    ],
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  emits: ["update:value"],
  setup(props) {},
  components: {},
  data() {
    return {
      visible: false,
      initialHeight: false,
      menuEl: false,
      speed: 50,
    };
  },
  methods: {
    showHide(e) {
      this.visible = !this.visible;

      if (this.menuEl === false) {
        this.menuEl = e.target.parentElement.querySelector(".dropdown-menu ul");
      }

      if (this.initialHeight === false) {
        this.initialHeight = this.menuEl.offsetHeight;
      }

      if (this.visible) this.show();
      else this.hide();
    },

    show() {
      this.menuEl.style.height = "0px";
      this.menuEl.style.zIndex = "10";
      this.menuEl.style.opacity = 1;

      for (var i = 0; i < this.initialHeight; i++) {
        setTimeout(() => {
          this.menuEl.style.height = i + "px";
        }, this.speed);
      }
    },

    hide() {
      for (var i = this.initialHeight; i > 1; i--) {
        setTimeout(() => {
          this.menuEl.style.height = i + "px";

          if (i < 1) {
            setTimeout(() => {
              this.menuEl.style.zIndex = "-10";
              this.menuEl.style.opacity = 0;
              this.menuEl.style.height = this.initialHeight + "px";
            }, 20);
          }
        }, this.speed);
      }
    },

    onClickOutside() {
      if (this.menuEl !== false && this.visible) {
        this.showHide();
      }
    },
  },
};
</script>

<template>
  <div
    v-dropdown="options"
    class="dropdown"
    @click="showHide"
    v-click-outside="onClickOutside"
  >
    <div class="dropdown-menu">
      <ul>
        <li>Today</li>
        <li>Past 3 Days</li>
        <li>Past Week</li>
        <li>Past Month</li>
      </ul>
    </div>
    <button>On-site</button>
  </div>
</template>

<style scoped></style>
