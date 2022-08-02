<template>
  <template v-if="items.length > 0">
    <div class="flex wrap filter">
      <q-select class="width-33" v-model="order" :options="orderOptions" />
      <q-select class="width-33" v-model="type" :options="typeOptions" />
      <q-space />
      <div>
        <q-tabs v-model="showType" indicator-color="white">
          <q-tab name="grid" icon="grid_view" />
          <q-tab name="rows" icon="table_rows" />
        </q-tabs>
      </div>
    </div>
    <div class="q-pt-lg flex flex-center">
      <q-pagination
        v-model="current"
        :max="Math.ceil(items.length / pagination.perPage)"
        input
      />
    </div>
    <q-carousel
      v-model="pagination.page"
      transition-prev="slide-right"
      transition-next="slide-left"
      height="auto"
      animated
      padding
      swipeable
      control-color="primary"
      class="rounded-borders"
      @before-transition="changePage"
    >
      <q-carousel-slide
        class="column no-wrap flex-center"
        v-for="i in Math.ceil(items.length / pagination.perPage)"
        :key="i"
        :name="`${i - 1}`"
      >
        <div class="text-center">
          <div v-if="items.length != 0" class="flex wrap justify-around">
            <show-case
              v-for="item in items.slice(
                pagination.pageInt * pagination.perPage,
                (pagination.pageInt + 1) * pagination.perPage
              )"
              :key="item"
              :item="item"
              :type="showType"
            />
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <div class="q-pb-lg flex flex-center">
      <q-pagination
        v-model="current"
        :max="Math.ceil(items.length / pagination.perPage)"
        input
      />
    </div>
  </template>
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
      showType: "rows",
      items: [],
      token: "",
      current: 1,
      pagination: {
        page: "0",
        pageInt: 0,
        perPage: 20,
      },
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
    changePage: function (newValue) {
      this.current = parseInt(newValue) + 1;
      this.pagination.pageInt = parseInt(newValue);
      this.pagination.page = newValue;
    },
  },
  mounted() {
    this.getToken();
  },
  watch: {
    token() {
      this.getProducts();
    },
    current() {
      this.pagination.pageInt = this.current - 1;
      this.pagination.page = (this.current - 1).toString();
    },
  },
};
</script>
