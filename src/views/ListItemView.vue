<template>
  <div class="flex wrap">
    <q-select class="width-33" v-model="order" :options="orderOptions" />
    <q-select class="width-33" v-model="type" :options="typeOptions" />
    <q-space />
    <div>
      <q-tabs v-model="tab" indicator-color="white">
        <q-tab name="grid" icon="grid_view" />
        <q-tab name="rows" icon="table_rows" />
      </q-tabs>
    </div>
  </div>
  <div v-if="items.length != 0" class="flex wrap justify-around">
    <show-case v-for="item in items" :key="item" :item="item" />
  </div>
</template>
<script>
import ShowCase from "@/components/ShowCaseComp.vue";
import { getToken, getProducts } from "@/services/service";
export default {
  components: { ShowCase },
  inject: ["setGlobalToken"],
  data() {
    return {
      order: "En son Eklenene Göre",
      orderOptions: ["En son Eklenene Göre", "İlk Eklenene Göre"],
      type: "Tüm Ürünler",
      typeOptions: ["Tüm Ürünler", "Seçilmiş Ürünler"],
      tab: "grid",
      items: [],
      token: "",
    };
  },
  methods: {
    setToken: function (response) {
      this.token = response.data.token;
      this.setGlobalToken(this.token);
    },
    getToken: function () {
      getToken(this.setToken);
    },
    setProducts: function (response) {
      console.log(response);
      this.items = response.data;
    },
    getProducts: function () {
      getProducts(0, this.token, this.setProducts);
    },
  },
  mounted() {
    this.getToken();
  },
  watch: {
    token() {
      this.getProducts();
    },
  },
};
</script>
