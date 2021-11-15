<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <!-- list of breeds START -->
        <v-col class="text-center pt-16" cols="3">
          <h1 class="mb-16">List Of Breeds</h1>
          <DogBreedButton
            v-for="name in breedNames"
            :key="name"
            :breedName="name"
            @onDogBreedButtonClicked="onBreedButtonClicked($event)"
          />
        </v-col>
        <!-- list of breeds END -->

        <v-divider class="mx-12" vertical></v-divider>

        <!-- gallery START -->
        <v-col class="text-center" cols="7">
          <v-row>
            <v-col cols="12">
              <v-btn
                fab
                x-large
                color="#f0d3cd"
                :loading="isRefreshBtnLoading"
                :disabled="requestedBreedName == null"
                @click="onRefreshButtonClicked"
                :style="{
                  width: '140px',
                  height: '140px',
                  fontSize: '21px',
                  fontWeight: 'bold',
                }"
              >
                REFRESH
              </v-btn>
            </v-col>
          </v-row>

          <v-row>
            <v-col v-if="breedImageUrls.length == 0">
              <p class="error--text my-5">no dog pictures to show</p>
            </v-col>
            <v-col
              v-else
              v-for="imageUrl in breedImageUrls"
              :key="imageUrl"
              class="d-flex child-flex"
              cols="6"
            >
              <DogBreedImage :imageUrl="imageUrl" />
            </v-col>
          </v-row>
        </v-col>
        <!-- gallery START -->
      </v-row>
    </v-container>

    <Footer />
  </v-app>
</template>

<script>
import DogBreedButton from "./components/DogBreedButton";
import DogBreedImage from "./components/DogBreedImage";
import Footer from "./components/Footer";

import {
  getDogBreedNames,
  getRandomImagesByDogBreedName,
} from "./services/breedsService";

export default {
  name: "App",
  components: {
    DogBreedButton,
    DogBreedImage,
    Footer,
  },
  data: () => ({
    isRefreshBtnLoading: false,
    breedNames: [],
    breedImageUrls: [],
    requestedBreedName: null,
  }),
  methods: {
    // Populate breedImageUrls array with URLs
    async getDogImagesByBreedName(breedName) {
      this.breedImageUrls = await getRandomImagesByDogBreedName(breedName);
    },
    // Update the requested breed, and fetch images
    async onBreedButtonClicked(breedName) {
      this.requestedBreedName = breedName;
      this.getDogImagesByBreedName(breedName);
    },
    // Refresh the images by the requested breed
    async onRefreshButtonClicked() {
      this.isRefreshBtnLoading = true;
      this.getDogImagesByBreedName(this.requestedBreedName);
      this.isRefreshBtnLoading = false;
    },
  },
  async created() {
    // Fetch dog breed names from API
    this.breedNames = await getDogBreedNames();
  },
};
</script>
