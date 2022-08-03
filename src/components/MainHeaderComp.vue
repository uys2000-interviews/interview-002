<template>
  <q-header reveal class="bg-white text-black">
    <slot />
    <q-toolbar>
      <q-btn flat class="mb" icon="menu" @click="setDrawer(true)" />
      <q-space class="mb" />
      <q-avatar class="logo" square>
        <img :src="require('@/assets/karma-kirmizi.png')" />
      </q-avatar>
      <q-form class="search ds" @submit="() => ''">
        <q-input filled class="no-radius" label="Ne Aramıştınız..." />
        <q-btn icon="search" type="submit" class=" bg-primary text-white no-radius" />
      </q-form>
      <q-space />
      <q-btn-dropdown no-caps flat class="bg-white text-black ds">
        <template v-slot:label>
          <div class="row items-center no-wrap">
            <q-icon left name="person" />
            <div class="text-center">
              <strong class="text-weight-bold text-subtitle1">Giriş Yap</strong>
              <br />
              <span class="text-subtitle2"> veya Üye Ol</span>
            </div>
          </div>
        </template>
        <q-list>
          <q-item clickable v-close-popup>
            <q-item-section avatar>
              <q-icon name="person" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Giriş Yap</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup>
            <q-item-section avatar>
              <q-icon name="lock" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Üye Ol</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <q-btn flat no-caps>
        <div class="row items-center no-wrap">
          <q-icon left name="shopping_cart" />
          <div class="text-center">
            <span><strong>Sepet</strong></span
            ><br />
            <span>0.0TL</span>
          </div>
        </div>
      </q-btn>
    </q-toolbar>
  </q-header>
</template>
<script>
export default {
  inject: ["setDrawer"],
};
</script>
