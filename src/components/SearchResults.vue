<script>
import Position from "./Position.vue";

export default {
  components: { Position },
  data() {
    return {
      activeChild: false,
      results: [
        {
          active: false,
          title: "Senior DevOps Engineer",
          company: "Amazon Web Services",
          salary: "125,000 - 175,000",
          location: "United States (Remote)",
          description: `Vivamus ut tempor purus. Cras nec lorem feugiat, ullamcorper diam vitae,
        faucibus lorem. Pellentesque id efficitur sapien. Integer eleifend,
        lectus at viverra posuere, ligula ex cursus urna, efficitur varius urna
        elit at ex. Praesent pulvinar est ut purus lacinia, ut dapibus odio
        commodo. Donec gravida vestibulum diam, vitae laoreet lacus aliquet sed.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Etiam dapibus iaculis sapien a ornare. Morbi congue
        tortornis....`,
        },
        {
          active: false,
          title: "Senior DevOps Engineer",
          company: "Amazon Web Services",
          salary: "125,000 - 175,000",
          location: "United States (Remote)",
          description: `Vivamus ut tempor purus. Cras nec lorem feugiat, ullamcorper diam vitae,
        faucibus lorem. Pellentesque id efficitur sapien. Integer eleifend,
        lectus at viverra posuere, ligula ex cursus urna, efficitur varius urna
        elit at ex. Praesent pulvinar est ut purus lacinia, ut dapibus odio
        commodo. Donec gravida vestibulum diam, vitae laoreet lacus aliquet sed.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Etiam dapibus iaculis sapien a ornare. Morbi congue
        tortornis....`,
        },
        {
          active: false,
          title: "Senior DevOps Engineer",
          company: "Amazon Web Services",
          salary: "125,000 - 175,000",
          location: "United States (Remote)",
          description: `Vivamus ut tempor purus. Cras nec lorem feugiat, ullamcorper diam vitae,
        faucibus lorem. Pellentesque id efficitur sapien. Integer eleifend,
        lectus at viverra posuere, ligula ex cursus urna, efficitur varius urna
        elit at ex. Praesent pulvinar est ut purus lacinia, ut dapibus odio
        commodo. Donec gravida vestibulum diam, vitae laoreet lacus aliquet sed.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Etiam dapibus iaculis sapien a ornare. Morbi congue
        tortornis....`,
        },
      ],
    };
  },
  methods() {},
};
</script>

<template>
  <div id="results">
    <span>Showing 20 of 70 Results</span>
    <Position v-for="result in results" :position="result" />
  </div>
</template>

<style scoped></style>
