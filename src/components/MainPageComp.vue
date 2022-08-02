<template>
  <q-page-container>
    <q-page padding style="padding-top: 66px">
      <q-breadcrumbs class="text-black text-bread ds" active-color="grey">
        <template v-slot:separator>
          <q-icon size="1.5em" name="chevron_right" color="black" />
        </template>
        <q-breadcrumbs-el label="Ana Sayfa" />
        <q-breadcrumbs-el label="Beyaz Eşya" />
      </q-breadcrumbs>
      <slot />
    </q-page>
  </q-page-container>
</template>
