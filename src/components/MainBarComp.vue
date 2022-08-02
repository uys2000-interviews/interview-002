<template>
  <div class="bg-bar flex q-px-xl ds">
    <social-media-icons />
    <q-space />
    <q-btn dense no-caps flat class="bar-btn no-radius" label="Yardım" />
    <q-btn
      dense
      no-caps
      flat
      class="bar-btn no-radius bg-bt-main"
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
