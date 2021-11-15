<template>
  <v-img
    :src="imageUrl"
    aspect-ratio="1"
    :style="{
      borderRadius: '4px',
      borderWidth: '1px',
      borderColor: 'black',
    }"
  >
  </v-img>
</template>

<script>
export default {
  name: "BreedImage",
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
  },
};
</script>