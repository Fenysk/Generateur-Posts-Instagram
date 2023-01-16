<template>
  <div class="carte">
    <div class="cercle"></div>
    <div class="background"></div>
    <h1 class="titre">{{ titrePrincipal }}</h1>
    <div class="etiquette">
      <h2 class="sousTitre" v-html="sousTitre"></h2>
      <div class="produit">
        <div class="flex justify-around">
            <div v-for="image in images" :key="image" class="relative">
                <img :src="image" />
                <div class="rond absolute"></div>
            </div>
        </div>
        <p class="description" v-html="description"></p>
      </div>
      <div class="blockContact">
        <p class="telephone">04.69.96.10.99</p>
        <p class="site">www.sdpack.fr</p>
        <p class="mail">info@sdpack.fr</p>
      </div>
    </div>
    <img src="../assets/logo.png" alt="Logo SD Pack" class="logo h-16 w-fit">
  </div>
</template>

<script>
export default {
    name: 'Carte',

    props: {
        titrePrincipal: String,
        sousTitre: String,
        description: String,
        images: Array
    },
}
</script>

<style>
.carte {
  min-width: 500px; max-width: 500px;
  min-height: 500px; max-height: 500px;
  border: 1px solid black;
  position: relative;
  padding-top: 8px;

  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;

  overflow: hidden;
}

.cercle {
  position: absolute;
  background-color: #09709b;

  height: 1000px;
  width: 1000px;
  border-radius: 100%;
  bottom: 150px;
  z-index: -1;
}

.background {
  position: absolute;
  background-color: #EEF3F6;

  height: 500px;
  width: 500px;

  z-index: -2;
}

.titre {
  color: white;
  font-weight: 900;
  font-size: 2rem;
  padding: 0 20%;
  text-align: center;
  line-height: 1;
}

.sousTitre {
  color: black;
  font-weight: bold;
  font-size: 1.3rem;
  text-align: center;
  line-height: 1.2;
  padding: 0 8%;
}

.sousTitre strong {
  color: #09709b;
  text-transform: uppercase;
}

.etiquette {
  background-color: #fff;
  width: 90%;
  border-radius: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 0 10px 10px 0 rgba(0,0,0,0.1);
}

.produit {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;

  margin-top: 20px;
  margin-bottom: 20px;
}

.produit img {
    height: 150px;
    z-index: 1;

    position: relative;
}

.produit .rond {
  content: " ";
  display: block;
  width: 70px;
  height: 30px;
  border-radius: 100%;
  background-color: #7cb5d851;
  bottom: -10px;
  right: 20px;
}

.produit .description {
  font-size: 1.2rem;
  margin-top: 15px;
  padding: 0 10%;
  text-align: center;
}

.produit .description strong {
  font-weight: normal;

  position: relative;
}

.produit .description strong::after {
  content: " ";
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  background-color: #f1af09;
  bottom: 0px;
  left: 0px;
}

.blockContact {
  display: flex;
  justify-content: space-around;
  margin-left: 10%;
  margin-right: 10%;
}

.blockContact p {
  font-size: 0.8rem;
}

</style>