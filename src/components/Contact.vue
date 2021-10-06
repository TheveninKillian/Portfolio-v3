<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section id="contact" m="t-15 xl:t-20">
    <h2 class="h2">Contact</h2>

    <p>{{ t('Contact.text') }}</p>

    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/success"
      m="t-5"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <input type="text" :placeholder="t('Contact.name')" required name="name">
        <input type="email" placeholder="Email" required name="email">
      </div>
      <textarea name="message" placeholder="Message" required></textarea>
      <input type="submit" :value="t('Contact.submit')" cursor="pointer">
    </form>

    <div class="service">
      <h3 class="h3" m="b-0">Service Freelance</h3>

      <ul>
        <li>
          <a href="https://5euros.com/profil/killian85">5EUROS</a>
        </li>
        <li><a href="https://www.fiverr.com/killian_dev85">FIVERR</a></li>
        <li><a href="https://www.malt.fr/profile/killianthevenin">MALT</a></li>
        <li><a href="https://www.fr.freelancer.com/u/KillianThvn">FREELANCER</a></li>
      </ul>
    </div>

    <div class="social">
      <h3 class="h3" m="b-0">Social</h3>

      <ul>
        <li><a href="https://github.com/TheveninKillian">GITHUB</a></li>
        <li><a href="https://twitter.com/Killian_Thvn">TWITTER</a></li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
@import '../assets/sass/mixins';

  #contact{
    @include breakpoint(md){
      margin-left: auto;
      margin-right: auto;
      width: 80%;
    }
  }

  form {
    font-size: 14px;

    input, textarea{
      margin-bottom: 5px;
      padding: 10px;
    }

    input[type=text],
    input[type=email],
    textarea{
      width: 100%;

      background-color: #1D1E21;
      border: 1px solid rgba(255, 255, 255, 0.1);

      font-weight: 500;
    }

    textarea{
      height: 100px;
    }

    input[type=submit]{
      background-color: #fff;
      border-radius: 5px;
      color: #1D1E21;

      font-weight: 500;
    }
  }

  .social,
  .service{
    margin-top: 1.75rem;

    font-weight: 500;

    .h3{
      color: #fff;

      text-align: left;
    }

    ul{
      display: flex;

      li{
        margin-right: 10px;

        color: rgba(255, 255, 255, 0.6);

        font-size: 13px;

        cursor: pointer;
        transition: all .3s;

        &:hover{
          color: #fff;
        }
      }
    }
  }
</style>