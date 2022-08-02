<template>
  <q-page-sticky class="ds" expand position="top">
    <q-toolbar class="bg-primary text-white">
      <q-btn
        v-for="item in menus"
        :key="item"
        flat
        :label="item"
        @click="openMenu(item)"
      />
      <q-menu fit v-model="menu" no-parent-event>
        <inner-menu :menu="menuActive"
      /></q-menu>
    </q-toolbar>
  </q-page-sticky>
</template>
<script>
import InnerMenu from "@/components/InnerMenuComp.vue";
export default {
  components: {
    InnerMenu,
  },
  data() {
    return {
      menus: [
        "Beyaz Eşya",
        "Ayakkabı",
        "Televizyon ve Ses Sistemleri",
        "Ev Eşyaları",
        "Kişisel Bakım",
        "Mutfak Gereçleri",
      ],
      menu: false,
      menuActive: "",
    };
  },
  methods: {
    openMenu: function (item) {
      if (this.menuActive == item) this.menu = !this.menu;
      else this.menu = true;
      this.menuActive = this.menus.findIndex((i) => i == item);
    },
  },
};
</script>
