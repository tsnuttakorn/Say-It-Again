<script setup>
import PracticeView from "../components/PracticeView.vue"
import { thaiDays } from "../data/thaiDays"
</script>

<template>
  <PracticeView title="ฝึกอ่านวัน" :items="thaiDays" />
</template>
