<template>
  <div>
    <header class="
    w-full
    h-16
    bg-gray-700
    text-white
    flex
    items-center
    justify-around
    lg:px-[10%]
    2xl:px-[20%]
    ">
      <div class="flex items-end">
        <h1 class="
        font-bold
        text-2xl
        ">Générateur de posts</h1>
        <p class="ml-4">v1.0.1</p>
      </div>

      <nav>
        <ul class="
        flex
        items-center
        ">
          <li class="
          mr-8
          ">
            <router-link to="/new-products">Nouveaux Produits</router-link>
          </li>
          <li class="
          mr-8
          ">
            <router-link class="
            bg-[white]
            text-[#09709b]
            px-4
            py-2
            rounded
            " to="/mode-d-emploi">Mode d'emploi</router-link>
          </li>
        </ul>
      </nav>
    </header>

    <router-view/>

  </div>
</template>