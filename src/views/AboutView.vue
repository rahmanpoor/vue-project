<template>
  <div class="about">
     <p>این صفحه در حال توسعه است</p>
    <Text msg="این متن درون msg  هست" />
  </div>
</template>


<script>
import Text from "../components/Text.vue";
// @ is an alias to /src

export default {
  name: "AboutView",
  components: {
    Text,
  },
};
</script>
