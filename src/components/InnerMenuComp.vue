<template>
  <q-splitter v-model="splitterModel" v-if="menuItems[menu]">
    <template v-slot:before>
      <q-tabs v-model="tab" vertical class="text-primary">
        <q-tab
          v-for="item in menuItems[menu].menus.length"
          :key="item"
          :name="`${item - 1}`"
          :label="menuItems[menu].menus[item - 1]"
        />
      </q-tabs>
    </template>

    <template v-slot:after>
      <q-tab-panels
        v-model="tab"
        animated
        swipeable
        vertical
        transition-prev="jump-up"
        transition-next="jump-up"
      >
        <q-tab-panel
          v-for="item in menuItems[menu].menus.length"
          :key="item"
          :name="`${item - 1}`"
        >
          <div class="text-h4 q-mb-md">
            {{ menuItems[menu].menus[item - 1] }}
          </div>
          <q-list bordered separator>
            <q-item
              clickable
              v-ripple
              v-for="i in menuItems[menu].innerItems[item - 1]"
              :key="i"
            >
              <q-item-section>{{ i }} </q-item-section>
            </q-item>
          </q-list>
        </q-tab-panel>
      </q-tab-panels>
    </template>
  </q-splitter>
</template>
<script>
export default {
  props: ["menu"],
  data() {
    return {
      menuItems: [
        {
          menus: ["Bulaşık Makinesi", "Çamaşır Makinesi", "Buz Dolabı"],
          innerItems: [
            ["Beyaz Makina", "Sarı makina"],
            ["Beyaz Makina", "Beyaz makina"],
            ["Sarı Makina", "Sarı makina"],
          ],
        },
        {
          menus: ["Spor Ayakkabı", "Klasik Ayakkabı"],
          innerItems: [
            ["Beyaz Ayakkabı", "Sarı Ayakkabı"],
            ["Beyaz Ayakkabı", "Beyaz Ayakkabı"],
          ],
        },
        {
          menus: ["LCD Televizyon", "Klasik Televizyon", "Ses Sistemi", "Set"],
          innerItems: [
            [
              "LG Televizyon",
              "Veste Televizyon",
              "Samsun Televizyon",
              "asd Televizyon",
            ],
            ["SiyahBeyaz Televizyon", "Tüplü Televizyon"],
            [
              "3+1 Ses Sistemi",
              "4+2 Ses Sistemi",
              "Bas Ses Sistemi",
              "Sinema Ses Sistemi",
            ],
          ],
        },
      ],
      tab: "0",
      splitterModel: 20,
    };
  },
  updated() {
    if (this.menuItems[this.menu]) {
      if (this.menuItems[this.menu].menus.length <= parseInt(this.tab))
        this.tab = (this.menuItems[this.menu].menus.length - 1).toString();
    }
  },
};
</script>
