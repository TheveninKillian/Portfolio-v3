<script setup>
const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  window.history.pushState("", "", '/')
}
</script>

<template>
  <Header />
  <About />
  <Skills />
  <hr>
  <Portfolio />
  <hr>
  <Faq />
  <hr>
  <Contact />

  <button @click="scrollTop">
    <ant-design:arrow-up-outlined />
  </button>
</template>

<style lang="scss" scoped>
@import './assets/sass/mixins';

button{
  position: fixed;
  bottom: 10px;
  right: 10px;

  height: 40px;
  width: 40px;

  background-color: #fff;
  border-radius: 50%;
  opacity: .2;

  cursor: pointer;
  transition: .3s;

  @include breakpoint(sm){
    bottom: 20px;
    right: 20px;
  }

  &:hover{
    opacity: 1;
  }

  svg{
    position: relative;
    top: 2.5px;

    color: #1D1E21;

    font-size: 20px;
  }
}
</style>
