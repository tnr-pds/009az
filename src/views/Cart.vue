<template>
  <div class="about">
    <Cart />
  </div>
</template>

<script>
// @ is an alias to /src
import Cart from "@/components/Busket.vue";

export default {
  name: "Home",
  components: {
    Cart,
  },
};
</script>