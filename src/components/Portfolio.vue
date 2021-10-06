<script setup>
import tictactoe from '../assets/tictactoe.jpg'
import todo from '../assets/todo.jpg'
import landing from '../assets/landing.jpg'
import dashboard from '../assets/dashboard.jpg'
import stream from '../assets/stream.jpg'
import akaruu from '../assets/akaruu.jpg'
import mcu from '../assets/mcu.jpg'

const portfolio = reactive({
  tictactoe: {
    img: tictactoe,
    text: 'Tic Tac Toe',
    url: 'https://codepen.io/Traffy/pen/ZEKwRMZ',
  },
  todo: {
    img: todo,
    text: 'Todo List',
    url: 'https://challenges-killian.vercel.app/Todo/index.html',
  },
  landing: {
    img: landing,
    text: 'Challenge - Landing Page',
    url: 'https://challenges-killian.vercel.app/landing-page/dist/index.html',
  },
  dashboard: {
    img: dashboard,
    text: 'Challenge - Dashboard',
    url: 'https://challenges-killian.vercel.app/Dashboard/dist/index.html',
  },
  stream: {
    img: stream,
    text: 'Streamweb',
    url: 'https://streamweb.netlify.app/',
  },
  akaruu: {
    img: akaruu,
    text: 'Extension - Akaruu',
    url: 'https://chrome.google.com/webstore/detail/akaruu/ggnddmahllpbohpjficfmlkkeapdicdg?hl=fr',
  },
  mcu: {
    img: mcu,
    text: 'MCU',
    url: 'https://mcu-fr.netlify.app/',
  },
})
</script>

<template>
  <section id="portfolio" m="t-15 xl:t-20">
    <h2 class="h2">Portfolio</h2>

    <div class="portfolio-container">
      <div v-for="(item, key) in portfolio" :key="key">
        <img :src="item.img" data-aos="zoom-in">

        <a :href="item.url">
          <p class="portfolio-title">{{ item.text }}</p>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '../assets/sass/mixins';

  .portfolio{
    &-container{
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;

      @include breakpoint(sm){
        flex-direction: row;
        justify-content: center;
      }

      div{
        width: 350px;
        margin-left: auto;
        margin-right: auto;

        @include breakpoint(sm){
          width: calc(100% / 2 - 10px);
        }

        @include breakpoint(md){
          width: calc(100% / 2 - 20px);
          max-width: 450px;
        }

        &:nth-child(even){
          @include breakpoint(sm){
            margin-left: 10px;
            margin-right: 0;
          }

          @include breakpoint(md){
            margin-left: 20px;
          }
        }

        &:nth-child(odd){
          @include breakpoint(sm){
            margin-right: 10px;
            margin-left: 0;
          }

          @include breakpoint(md){
            margin-right: 20px;
          }
        }
      }

      img{
        height: 450px;
        width: 100%;
        
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 10px;

        @include breakpoint(sm){
          height: 550px;
        }
      }
    }

    &-title{
      margin: 25px 0 100px 20px;

      color: #fff;

      font-size: 20px;

      @include breakpoint(md){
        font-size: 30px;
      }

      &:hover{
        text-decoration: underline;
      }
    }
  }
</style>