<template>
  <q-layout view="lHh lpr lFf">
    <main-header>
      <social-medias />
    </main-header>

    <q-page-container>
      <q-page padding style="padding-top: 66px">
        <q-breadcrumbs class="text-black text-h5" active-color="grey">
          <template v-slot:separator>
            <q-icon size="1.5em" name="chevron_right" color="black" />
          </template>
          <q-breadcrumbs-el label="Ana Sayfa" />
          <q-breadcrumbs-el label="Beyaz Eşya" />
        </q-breadcrumbs>

        <router-view />
        <main-menu />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import SocialMedias from "@/components/SocialMediasComp.vue";
import MainHeader from "@/components/MainHeaderComp.vue";
import MainMenu from "@/components/MainMenuComp.vue";
export default {
  components: { SocialMedias, MainHeader, MainMenu },
};
</script>
