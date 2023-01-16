<template>
  <div class="content mx-[10%] md:mx-[20%] lg:mx-[25%] xl:mx-[30%] 2xl:mx-[35%] mt-8">
    <h1 class="text-3xl font-bold">Mode d'emploi</h1>
    <p>Le générateur de posts est un outil qui permet de générer des images pour des posts pour les réseaux sociaux.</p>

    <h2 class="text-2xl font-bold mt-8">Nouveaux Produits</h2>
    <p>La page Nouveaux Produits permet de générer des posts pour présenter les nouveaux produits de la boutique.</p>
    <p>Il suffit de remplir les champs de texte.</p>
    <p>Concernant le sous-titre et la description, il est possible de mettre en valeur du texte en mettant 2 astérisques avant et 1 astérisque après le texte.</p>
    <img src="../assets/en_valeur.png" class="h-32 object-cover border">
    
    <p>Ensuite, il faut ajouter une image en cliquant sur le bouton "Choissez un fichier".</p>
    <p>Il est possible d'ajouter plusieurs images.</p>
    <p>L'image doit être transparent et au format .png. Pour retirer l'arrière-plan d'une image, il est possible d'utiliser des outils comme <a href="https://www.fococlipping.com/clip" target="_blank">Foco Clipping</a> ou <a href="https://www.remove.bg/" target="_blank">Remove.bg</a>.</p>
    <p>Une fois les images ajoutées, il suffit de cliquer sur le bouton "Générer".</p>
    <img src="../assets/generer.png" class="h-32 object-cover border">
    <p>L'image générée est affiché sur le côté droit.</p>
    <p>Il est possible de télécharger l'image générée en cliquant sur le bouton "Télécharger".</p>
    <img src="../assets/telecharger.png" class="h-64 object-cover border">
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .content a, .content h1, .content h2 {
        color: #09709B;
    }

    img {
        margin-bottom: 2rem;
        margin-top: 0.5em;
        border: 2px solid #09709B;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }
</style>