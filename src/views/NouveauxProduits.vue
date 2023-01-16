<template>
  <div class="m-6 flex flex-row items-center justify-center">

    <div class="flex flex-col items-end mr-6">

      <div class="inputs mb-4">
        <label for="titrePrincipal">Titre principal</label>
        
        <input type="text" class="border ml-4 px-2" v-model="titrePrincipal" placeholder="Mon titre">
      </div>



      <div class="inputs mb-4 flex items-center">
        <label for="preSousTitre">Sous-titre</label>
        
        <textarea type="text" class="border ml-4 px-2 h-20 w-64" v-model="preSousTitre" placeholder="Mon texte **en gras* !" @input="changerBold"></textarea>
      </div>



      <div class="inputs mb-4 flex items-center">
        <label for="preDescription">Description</label>
        
        <textarea type="text" class="border ml-4 px-2 h-20 w-64" v-model="preDescription" placeholder="Ma description **souligné* si voulue." @input="changerUnderline"></textarea>
      </div>

      <div class="inputs mb-4">
        <label for="image">Image</label>
        <input type="file" name="image" class="ml-4 px-2" @change="onChange">
        <div class="flex flex-wrap">
          <img v-for="image in images" :key="image" :src="image" class="h-32 w-32 object-cover border">
        </div>
      </div>

      <button class="
      bg-[#09709b]
      text-white
      font-bold
      px-4
      py-2
      rounded
      " @click="convertirImage">Générer une image</button>
      <div class="flex flex-row w-full flex-wrap mt-2">
        <div v-for="image in imagesFinies" :key="image" class="flex flex-col mr-2 mb-4">
          <img :src="image" class="h-32 w-32 object-cover border">
          <button class="
          bg-[#7984C4]
          text-white
          font-bold
          px-4
          py-2
          rounded
          mt-2
          " @click="downloadImage(image)">Télécharger</button>
        </div>
      </div>
    </div>


    <Carte
    :titrePrincipal="titrePrincipal"
    :sousTitre="sousTitre"
    :description="description"
    :images="images"
    ></Carte>
  </div>
</template>

<script>
import Carte from '../components/Carte.vue'

import * as htmlToImage from 'html-to-image';


export default {
  name: 'NouveauxProduits',

  components: {
    Carte
  },

  data() {
    return {
      titrePrincipal: 'De nouveaux articles arrivent !',
      
      preSousTitre: '',
      sousTitre: '',

      preDescription: '',
      description: '',

      images: [],
      imagesFinies: []
    }
  },

  methods: {
    onChange(event) {
        let newImage = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(newImage);
        reader.onload = e => {
            this.images.push(e.target.result);
            console.log(this.images)
        };
    },

    changerBold() {
      console.log(this.preSousTitre)
      this.sousTitre = this.preSousTitre
      while (this.sousTitre.includes('**')) {
        this.sousTitre = this.sousTitre.replace('**', '<strong>').replace('*', '</strong>')
      }
      console.log(this.sousTitre)
    },

    changerUnderline() {
      console.log(this.preDescription)
      this.description = this.preDescription
      while (this.description.includes('**')) {
        this.description = this.description.replace('**', '<strong>').replace('*', '</strong>')
      }
      console.log(this.description)
    },
    
    convertirImage() {
      let carte = document.querySelector('.carte')
      htmlToImage.toPng(carte)
        .then((dataUrl) => {
          this.imagesFinies.push(dataUrl)
        })
        .catch((error) => {
          console.error('oops, something went wrong!', error);
        });
    },

    downloadImage(image) {
      let link = document.createElement('a');
      link.download = 'image.png';
      link.href = image;
      link.click();
    }
  }
}
</script>

<style>

</style>