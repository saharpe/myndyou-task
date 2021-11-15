<template>
  <v-btn
    class="card text-center pa-5 mx-auto my-3"
    color="#f0d3cd"
    min-width="250"
    x-large
    :style="{ borderRadius: '8px' }"
    @click="onButtonClicked"
  >
    <h2 class="font-weight-light">{{ breedName }}</h2>
  </v-btn>
</template>

<script>
export default {
  name: "BreedNameCard",
  props: {
    breedName: {
      type: String,
      require: true,
    },
  },
  data: () => ({}),
  methods: {
    onButtonClicked() {
      this.$emit("onDogBreedButtonClicked", this.breedName);
    },
  },
};
</script>

<style>
</style>