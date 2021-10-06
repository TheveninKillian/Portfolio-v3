<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section id="skills" m="t-10 b-80px xl:t-15">
    <h3 class="h3">{{ t('skills.title') }}</h3>

    <ul class="skills-grid">
      <li data-aos="flip-left"><ant-design:html5-outlined /> HTML</li>
      <li data-aos="flip-left"><uil:html3-alt /> CSS</li>
      <li data-aos="flip-left"><teenyicons:javascript-outline /> Javascript</li>
      <li data-aos="flip-left"><file-icons:typescript /> Typescript</li>
      <li data-aos="flip-left"><cib:vue-js /> Vue</li>
      <li data-aos="flip-left"><cib:wordpress /> Wordpress</li>
      <li data-aos="flip-left"><teenyicons:firebase-outline /> Firebase</li>
      <li data-aos="flip-left"><bx:bxl-git /> Git</li>
      <li data-aos="flip-left"><file-icons:vite /> Vite JS</li>
      <li data-aos="flip-left"><akar-icons:figma-fill /> Figma</li>
      <li data-aos="flip-left"><cib:adobe-photoshop /> Photoshop</li>
      <li data-aos="flip-left"><codicon:terminal-cmd /> CMD</li>
    </ul>
  </section>
</template>

<style lang="scss">
  @import '../assets/sass/mixins';

  .skills-grid{
    display: grid;

    @include breakpoint(sm){
      grid-template-columns: 1fr 1fr;
    }

    @include breakpoint(md){
      grid-template-columns: repeat(4, 1fr);
    }

    li{
      margin-bottom: 10px;
      padding: 20px 0;

      border: 1px solid rgba(255, 255, 255, 0.1);

      text-align: center;

      @include breakpoint(sm){
        margin-bottom: 0px;
      }

      &:nth-child(even){
        @include breakpoint(sm){
          margin-left: 10px;
        }

        @include breakpoint(md){
          margin-right: 10px;
        }
      }

      &:nth-child(odd){
        @include breakpoint(sm){
          margin-right: 10px;
        }

        @include breakpoint(md){
          margin-left: 10px;
        }
      }

      svg{
        display: block;
        margin: 0 auto 10px;

        font-size: 50px;
      }
    }
  }
</style>