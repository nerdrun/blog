<script setup lang="ts"></script>
<template>
  <section class="w-[1024px]">
    <h2 class="text-3xl font-semibold border-b border-b-diminished-grey pb-3">Hi! I'm Kai.</h2>
    <h3 class="text-lg my-4 text-light-grey">I'm a software engineer specializing in :</h3>
    <ul class="pl-3">
      <li>
        <span class="text-light-grey">Web:</span>
        Javascript, Typescript, Vue
      </li>
      <li>
        <span class="text-light-grey">App:</span>
        Flutter, Dart, Android, Java
      </li>
      <li>
        <span class="text-light-grey">Server:</span>
        NodeJS<span class="italic">(with or withour NestJS)</span>, Golang
      </li>
      <li>
        <span class="text-light-grey">Infrastructure:</span>
        AWS, GCP
      </li>
      <li>
        <span class="text-light-grey">DevOps:</span>
        Docker, Docker-swarm
      </li>
    </ul>
    <div class="my-4">
      <span class="text-light-grey">Currently: </span>
      <span class="font-semibold text-white">
        Full-stack engineer at
        <a href="https://it.schwarz/en/international/spain" target="_blank" class="underline text-cyan-400">
          Schwarz global services barcelona
        </a>
        of
        <a href="https://gruppe.schwarz/" target="_blank" class="underline text-cyan-500">
          Schwarz Grouppe
        </a>
      </span>
    </div>
    <div>
      <router-link to="/about">
        <div class="underline text-cyan-400 font-semibold">Read more -></div>
      </router-link>
    </div>
  </section>
</template>
<style scoped></style>