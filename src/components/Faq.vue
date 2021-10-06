<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section id="faq" m="t-15 b-80px xl:t-20">
    <h2 class="h2">FAQ</h2>

    <ul>
      <li data-aos="fade-right">
        <p class="title">
          {{ t('faq.title-one') }}
        </p>
        <p>{{ t('faq.one') }}</p>
      </li>

      <li data-aos="fade-left">
        <p class="title">
          {{ t('faq.title-two') }}
        </p>
        <p>{{ t('faq.two') }}</p>
      </li>

      <li data-aos="fade-right">
        <p class="title">
          {{ t('faq.title-three') }}
        </p>
        <p>{{ t('faq.three') }}</p>
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
  #faq {
    li{
      margin-bottom: 60px;

      text-align: center;

      .title{
        margin-bottom: 10px;

        color: #fff;

        font-size: 20px;
        font-weight: 500;
      }
    }
  }
</style>