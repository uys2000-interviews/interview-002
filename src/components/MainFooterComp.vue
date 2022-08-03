<template>
  <q-footer class="bg-accent text-dark">
    <div
      class="footer row reverse-wrap justify-around items-stretch content-stretch"
    >
      <div>
        <div>
          <span class="text-h5"><b>Kurumsal</b></span>
          <div>
            <span><a href="/#">Hakkımızda </a></span><br />
            <span><a href="/#">Kampanyalar</a></span
            ><br />
            <span><a href="/#">Banka Hesap Numaraları</a></span
            ><br />
            <span><a href="/#">Blog</a></span
            ><br />
            <span><a href="/#">Haberler</a></span
            ><br />
          </div>
        </div>
      </div>
      <div>
        <div>
          <span class="text-h5"><b>Müşteri Hizmetleri</b></span>
          <div>
            <span><a href="/#">Sipariş Sorgulama</a></span
            ><br />
            <span><a href="/#">Teslimat ve Kargo</a></span
            ><br />
            <span><a href="/#">İade ve Değişim</a></span
            ><br />
            <span><a href="/#">Üyelik Sözleşmesi</a></span
            ><br />
            <span><a href="/#">Gizlilik ve Güvenlik</a></span
            ><br />
          </div>
        </div>
      </div>
      <div>
        <div>
          <span class="text-h5"><b>Yardım</b></span>
          <div>
            <span><a href="/#">İletişim Bilgileri</a></span
            ><br />
            <span><a href="/#">Sıkça Sorulan Sorular</a></span
            ><br />
          </div>
        </div>
      </div>
      <div>
        <div>
          <span class="text-h5"><b>İletşim</b></span>
        </div>
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
      <div>
        <div>
          <span class="text-h5"><b>Bizi Takip Edin</b></span>
        </div>
        <div>
          <social-media-icons />
        </div>
        <div>
          <span> E-bültene abone olun, gelişmeleri kaçırmayın. </span>
        </div>
        <div>
          <q-form class="search full-width" @submit="() => ''">
            <q-input filled class="no-radius" label="E-Mail Adresiniz" />
            <q-btn icon="east" type="submit" class=" bg-primary text-white no-radius" />
          </q-form>
        </div>
      </div>
    </div>
    <q-separator />
    <q-toolbar>
      <span>Copyright &copy; 2022</span>
      <q-space />
      <span>LOGO</span>
    </q-toolbar>
  </q-footer>
</template>
<script>
import SocialMediaIcons from "@/components/SocialMediaIconsComp.vue";
export default {
  components: { SocialMediaIcons },
};
</script>
