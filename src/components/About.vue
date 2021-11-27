<script setup>
import { useWindowSize } from 'vue-window-size';
import { useI18n } from 'vue-i18n'
import cv from '../assets/Killian_Thevenin_cv.pdf'

const { t } = useI18n()

const { width, height } = useWindowSize();
const windowWidth = ref(width)
</script>

<template>
  <div class="wrapper-title" data-aos="fade-up">
    <a href="#portfolio" class="arrow-down">
      <bi:arrow-down />
    </a>

    <h1 class="h1">{{ t('title.h1-1') }} <br v-if="windowWidth >= 768 && windowWidth < 1440"> {{ t('title.h1-2') }}, <img display="inline-block" w="30px md:50px" src="../assets/logo.png" alt="logo vue js">ue JS</h1>
  
    <a href="#contact">
      <button class="btn" m="t-5">{{ t('title.button') }} <ant-design:arrow-right-outlined /></button>
    </a>

      <a :href="cv" download>
        <button class="btn" m="l-5">{{ t('title.download') }}</button>
      </a>
  </div>

  <hr>
  
  <section m="t-15 xl:t-20">
    <div id="about" m="t-15 sm:x-40px">
      <h2 class="h2">{{ t('about.title') }}</h2>

      <p>{{ t('about.one') }}</p>

      <p m="t-5">{{ t('about.two') }}</p>

      <p m="t-5">{{ t('about.three') }}</p>
    </div>
  </section>
</template>

<style lang="scss">
  @import '../assets/sass/mixins';

  .wrapper-title{
    position: relative;

    margin: 3.75rem 20px 80px;

    @include breakpoint(sm){
      margin: 3.75rem 100px 80px;
    }

    @include breakpoint(xl){
      margin: 5.75rem 250px 80px;
    }

    .arrow-down{
      position: absolute;
      top: 10px;
      left: -20px;

      height: 65px;
      width: 20px;

      @include breakpoint(sm){
        top: 20px;
        left: -30px;

        height: 115px;
      }

      svg{
        position: absolute;
        top: 0;

        color: rgba(255, 255, 255, 0.8);

        font-size: 14px;

        animation: arrow-anime 2s ease-in-out infinite;
      }
    }
  }

  .h1{
    font-weight: 500;
    font-size: 30px;

    @include breakpoint(sm){
      font-size: 50px;
    }
  }

  button svg{
    position: relative;
    top: 5px;
  }

  @keyframes arrow-anime {
    0%{
      top: 0;
    }

    50%{
      top: calc(100% - 14px);
    }

    0%{
      top: 0%;
    }
  }

  @media screen and (min-width: 1920px){
  .wrapper-title{
    margin-left: calc(50vw - 700px);
    margin-right: calc(50vw - 700px);
    margin-top: 5.75rem;
    margin-bottom: 80px;
  }
}
</style>