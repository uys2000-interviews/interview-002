<template>
  <div class="bg-accent text-secondary flex q-px-xl ds">
    <social-media-icons />
    <q-space />
    <q-btn dense no-caps flat class="bar-btn no-radius" label="Yardım" />
    <q-btn
      dense
      no-caps
      flat
      class="bar-btn no-radius bg-primary text-white text-weight-bolder"
      label="Blog"
    />
  </div>
</template>
<script>
import SocialMediaIcons from "@/components/SocialMediaIconsComp.vue";
export default {
  components: { SocialMediaIcons },
};
</script>
