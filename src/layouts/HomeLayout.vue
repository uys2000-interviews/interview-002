<template>
  <q-layout view="lHh lpr lff">
    <main-header>
      <main-bar />
    </main-header>
    <main-footer />
    <main-drawer :drawerLeft="drawerLeft" />
    <main-page>
      <router-view />
      <main-menu />
    </main-page>
  </q-layout>
</template>

<script>
import MainBar from "@/components/MainBarComp.vue";
import MainHeader from "@/components/MainHeaderComp.vue";
import MainFooter from "@/components/MainFooterComp.vue";
import MainDrawer from "@/components/MainDrawerComp.vue";
import MainMenu from "@/components/MainMenuComp.vue";
import MainPage from "@/components/MainPageComp.vue";
export default {
  components: {
    MainBar,
    MainHeader,
    MainMenu,
    MainFooter,
    MainDrawer,
    MainPage,
  },
  data() {
    return {
      drawerLeft: false,
    };
  },
  provide() {
    return {
      setDrawer: () => (this.drawerLeft = !this.drawerLeft),
    };
  },
};
</script>
