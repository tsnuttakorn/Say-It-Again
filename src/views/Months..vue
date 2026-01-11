<script setup>
import PracticeView from "../components/PracticeView.vue"
import { thaiMonths } from "../data/thaiMonths"
</script>

<template>
  <PracticeView title="ฝึกอ่านเดือน" :items="thaiMonths" />
</template>
