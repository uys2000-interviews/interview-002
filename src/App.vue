<template>
  <router-view />
</template>
<script>
export default {
  data() {
    return {
      GlobalToken: "",
    };
  },
  provide() {
    return {
      setGlobalToken: (token) => (this.GlobalToken = token),
      getGlobalToken: () => this.GlobalToken,
    };
  },
};
</script>
