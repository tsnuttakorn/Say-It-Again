<script setup>
import PracticeView from "../components/PracticeView.vue"
import { thaiNumbers } from "../data/thaiNumbers"
</script>

<template>
  <PracticeView title="ฝึกอ่านตัวเลข" :items="thaiNumbers" />
</template>
