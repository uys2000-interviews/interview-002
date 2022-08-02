<template>
  <div v-if="type == 'grid'" class="show-case flex column nowrap">
    <div>
      <div v-if="item.prodImages == null" class="show-img">
        ImageNotFound <br />
        (item.prodImages == null)
      </div>
      <div v-else class="show-img">
        <img :src="require('@/assets/karma-kirmizi.png')" alt="" />
      </div>
    </div>
    <div>
      <div>
        <span>
          {{ item.name }}
        </span>
      </div>
      <div>
        <span>
          {{ numberWithCommas(item.price) + " " }} {{ item.currency }}
        </span>
      </div>
      <div>
        <span>
          <strong>Taksitli Fiyatı :</strong>
        </span>
        <span> 3x{{ numberWithCommas((item.price / 3).toFixed(2)) }} </span>
      </div>
      <div class="inf flex nowrap justify-around">
        <div>
          <div>
            <q-btn
              v-ripple:primary
              round
              flat
              icon="highlight_off"
              title="Sepete Ekle"
            />
          </div>
          <div>
            <q-btn
              v-ripple:primary
              round
              flat
              icon="favorite"
              title="Favoriye Ekle"
            />
          </div>
          <div>
            <q-btn v-ripple:primary round flat icon="tune" title=" Ayarlar" />
          </div>
        </div>
        <div>
          <q-btn
            color="primary full-width"
            label="Ürünü İncele"
            icon-right="east"
          />
        </div>
      </div>
    </div>
  </div>
  <div v-if="type == 'rows'" class="show-case-list flex row nowrap">
    <div>
      <div v-if="item.prodImages == null" class="show-img-list">NotFound</div>
      <div v-else class="show-img-list fit">
        <img :src="require('@/assets/karma-kirmizi.png')" alt="" />
      </div>
    </div>
    <div>
      <div>
        <span>{{ item.name }}</span>
      </div>
      <div>
        <span>
          {{ numberWithCommas(item.price) + " " }} {{ item.currency }}
        </span>
      </div>
      <div>
        <span>
          <strong>Taksitli Fiyatı :</strong>
        </span>
        <span> 3x{{ numberWithCommas((item.price / 3).toFixed(2)) }} </span>
      </div>
      <div class="inf flex nowrap justify-around">
        <div>
          <div>
            <q-btn
              v-ripple:primary
              round
              flat
              icon="highlight_off"
              title="Sepete Ekle"
            />
          </div>
          <div>
            <q-btn
              v-ripple:primary
              round
              flat
              icon="favorite"
              title="Favoriye Ekle"
            />
          </div>
          <div>
            <q-btn v-ripple:primary round flat icon="tune" title=" Ayarlar" />
          </div>
        </div>
        <div>
          <q-btn
            color="primary full-width"
            label="Ürünü İncele"
            icon-right="east"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item", "type"],
  methods: {
    numberWithCommas: function (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>
