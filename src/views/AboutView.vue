<template>
  <div class="about">
     <HelloWorld msg="UAE" />
  </div>
</template>


<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "AboutView",
  components: {
    HelloWorld,
  },
};
</script>
