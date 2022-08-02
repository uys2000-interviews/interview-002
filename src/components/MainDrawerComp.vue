<template>
  <q-drawer
    :model-value="drawerLeft"
    :breakpoint="700"
    elevated
    class="bg-seceondary text-black"
    @update:model-value="setDrawer"
    behavior="mobile"
  >
    <q-scroll-area class="fit">
      <div class="text-center">
        <span class="text-h4">Menü</span>
      </div>
      <br /><q-separator /><br />
      <div>
        <q-btn-group spread class="no-radius">
          <q-btn
            class="bg-primary text-accent bar-btn"
            no-caps
            label="Giriş"
            icon="person"
          />
          <q-btn
            class="bg-primary text-accent bar-btn"
            no-caps
            label="Kayıt"
            icon="lock"
          />
        </q-btn-group>
      </div>
      <br /><q-separator /><br />
      <q-form class="search full-width" @submit="() => ''">
        <q-input filled class="no-radius" label="Ne Aramıştınız..." />
        <q-btn icon="search" type="submit" class="bg-bt-main no-radius" />
      </q-form>
      <br /><q-separator /><br />
      <div>
        <q-expansion-item expand-separator icon="list" label="Kategoriler">
          <q-tab-panels
            v-model="panel"
            animated
            class="shadow-2 rounded-borders"
          >
            <q-tab-panel name="0">
              <q-list separator>
                <q-item clickable v-ripple v-for="menu in menus" :key="menu">
                  <q-item-section @click="openMenuLevel1(menu)">
                    {{ menu }}
                  </q-item-section>
                </q-item>
              </q-list>
            </q-tab-panel>
            <q-tab-panel name="1">
              <q-list separator>
                <q-item
                  clickable
                  v-ripple
                  v-for="menuitem in menuItems[menuActive]?.menus"
                  :key="menuitem"
                >
                  <q-item-section @click="openMenuLevel2(menuitem)">
                    {{ menuitem }}
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section @click="openMenuGeri"> Geri </q-item-section>
                </q-item>
              </q-list>
            </q-tab-panel>
            <q-tab-panel name="2">
              <q-list separator>
                <q-item
                  clickable
                  v-ripple
                  v-for="menuitem in menuItems[menuActive].innerItems[
                    menuActive2
                  ]"
                  :key="menuitem"
                >
                  <q-item-section>
                    {{ menuitem }}
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section @click="openMenuGeri"> Geri </q-item-section>
                </q-item>
              </q-list>
            </q-tab-panel>
          </q-tab-panels>
        </q-expansion-item>
        <q-expansion-item expand-separator icon="business" label="Kurumsal">
          <q-list bordered separator>
            <q-item clickable v-ripple>
              <q-item-section> Hakkımızda </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section> Kampanyalar </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section> Banka Hesap Numaraları </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section> Blog </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section> Haberler </q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>
        <q-expansion-item
          expand-separator
          icon="support_agent"
          label="Müşteri Hizmetleri"
        >
          <q-list bordered separator>
            <q-item clickable v-ripple>
              <q-item-section> Sipariş Sorgulama </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section> Teslimat ve Kargo </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section> İade ve Değişim </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section> Üyelik Sözleşmesi</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section> Gizlilik ve Güvenlik </q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>
        <q-expansion-item expand-separator icon="help" label="Yardım">
          <q-list bordered separator>
            <q-item clickable v-ripple>
              <q-item-section> İletişim Bilgileri </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section>Sıkça Sorulan Sorular </q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>
        <q-expansion-item expand-separator icon="call" label="İletşim">
          <div class="q-pa-md">
            <div>
              <span><b>Adres:</b></span>
              <address>
                1376. Sok. No: 1/43 Boran Plaza, Halkapınar , Konak/İzmir
              </address>
            </div>
            <div>
              <span><b>Tel:</b></span>
              <span><a href="tel:+90(850)5555555">0850 555 5555</a></span>
            </div>
          </div>
        </q-expansion-item>
      </div>
    </q-scroll-area>
  </q-drawer>
</template>
<script>
export default {
  props: ["drawerLeft"],
  inject: ["setDrawer"],
  data() {
    return {
      panel: "0",
      menuActive: 0,
      menuActive2: 0,
      menu: "",
      menus: [
        "Beyaz Eşya",
        "Ayakkabı",
        "Televizyon ve Ses Sistemleri",
        "Ev Eşyaları",
        "Kişisel Bakım",
        "Mutfak Gereçleri",
      ],
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
    };
  },
  methods: {
    openMenuLevel1: function (item) {
      const index = this.menus.findIndex((i) => i == item);
      if (index != -1 && this.menuItems.length > index) {
        this.menuActive = index;
        this.panel = "1";
      }
    },
    openMenuLevel2: function (item) {
      const menus = this.menuItems[this.menuActive].menus;
      const index = menus.findIndex((i) => i == item);
      if (index != -1) {
        this.menuActive2 = index;
        this.panel = "2";
      }
    },
    openMenuGeri: function () {
      this.panel = (parseInt(this.panel) - 1).toString();
    },
  },
};
</script>
