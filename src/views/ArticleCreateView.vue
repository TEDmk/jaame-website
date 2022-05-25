<template>
  <div>
    <my-upload
      @update:modelValue="show"
      langType="fr"
      width="1024"
      height="300"
      noCircle="true"
      v-model="show"
    ></my-upload>
  </div>
  <button
    @click="
      () => {
        this.show = true;
      }
    "
  >
    Open
  </button>
</template>
<script>
import myUpload from "vue-image-crop-upload";
export default {
  data() {
    return {
      show: false,
    };
  },
  components: {
    "my-upload": myUpload,
  },
};
</script>
