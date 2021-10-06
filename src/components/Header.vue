<script setup>
import { useWindowSize } from 'vue-window-size';
import { useI18n } from 'vue-i18n'

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}

const { width, height } = useWindowSize();
const windowWidth = ref(width)
const windowHeight = ref(height)

const activeNav = ref(false)
</script>

<template>
  <header>
    <div class="wrapper">
      <div display="flex">
        <p class="title" font="medium">Killian Thevenin</p>

        <div @click="toggleLocales()" cursor="pointer" m="l-5">
          <bi:translate />
          <span>{{ t('language') }}</span>
        </div>
      </div>

      <div v-if="windowWidth < 1024" pos="relative" cursor="pointer" @click="activeNav = !activeNav">
          <eva:menu-outline /> 
          <span>Menu</span>
        </div>
    </div>

    <nav :class="{ active: activeNav }">
      <ul>
        <a href="#about" @click="activeNav = !activeNav"><li>{{ t('nav.about') }}</li></a>
        <a href="#skills" @click="activeNav = !activeNav"><li>{{ t('nav.skills') }}</li></a>
        <a href="#portfolio" @click="activeNav = !activeNav"><li>Portfolio</li></a>
        <a href="#faq" @click="activeNav = !activeNav"><li>FAQ</li></a>
        <a href="#contact" @click="activeNav = !activeNav"><li>Contact</li></a>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
  @import '../assets/sass/mixins';

header{
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;

  padding: 0 10px 1px;

  background-color: #18191C;

  z-index: 100;

  @include breakpoint(sm){
    padding: 0 20px 1px;
  }

  @include breakpoint(md){
    display: flex;
    justify-content: space-between;

    padding: 0 40px 1px;
  }

  @include breakpoint(xl){
    padding: 0 200px 1px;
  }

  .wrapper{
    display: flex;
    justify-content: space-between;

    height: 60px;
    line-height: 60px;

    font-size: 18px;

    .title{
      color: #fff;

      @include breakpoint(md){
        font-size: 18px;
      }
    }

    span{
      margin-left: 5px;

      color: rgba(255, 255, 255, 0.8);
    }

    svg{
      position: relative;
      top: 5px;
    }
  }

  nav{
    max-height: 0px;

    font-size: 14px;

    overflow: hidden;
    transition: all 1s;

    @include breakpoint(md){
      max-height: initial;
      height: 60px;
      line-height: 60px;
    }

    &.active{
      max-height: 200px;
    }

    ul{
      @include breakpoint(md){
        display: flex;
      }

      li{
        margin-bottom: 15px;

        font-weight: 500;

        @include breakpoint(md){
          margin-left: 20px;
        }
      }
    }
  }
}
</style>