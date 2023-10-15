<script>
import vClickOutside from "click-outside-vue3";

export default {
  props: ["options", "value"],
  directives: {
    clickOutside: vClickOutside.directive,
  },
  emits: ["update:value"],
  setup(props) {
    return {
      options: props.options,
      value: props.value,
    };
  },
  components: {},
  data() {
    return {
      visible: false,
      initialHeight: false,
      menuEl: false,
      speed: 30,
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

      for (let i = 0; i < this.initialHeight; i++) {
        setTimeout(() => {
          this.menuEl.style.height = i + "px";
        }, this.speed);
      }
    },

    hide() {
      for (let i = this.initialHeight; i >= 0; i--) {
        setTimeout(() => {
          this.menuEl.style.height = i + "px";
          if (i == 0) {
            setTimeout(() => {
              this.menuEl.style.zIndex = "-10";
              this.menuEl.style.opacity = 0;
            }, 100);
          }
        }, this.speed);
      }
    },

    onClickOutside() {
      if (this.menuEl !== false && this.visible) {
        this.showHide();
      }
    },

    select(option) {
      this.value = option;
      this.$emit("update:value", this.value);
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
        <li
          v-for="option in options"
          @click="select(option)"
          :class="{ active: value == option }"
        >
          {{ option.text }}
        </li>
      </ul>
    </div>
    <button>{{ value.text }}</button>
  </div>
</template>

<style scoped></style>
