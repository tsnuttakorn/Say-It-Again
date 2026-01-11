<script setup>
import PracticeView from "../components/PracticeView.vue"
import { thaiDailyWords } from "../data/thaiDailyWords"
</script>

<template>
  <PracticeView title="คำศัพท์ในชีวิตประจำวัน" :items="thaiDailyWords" />
</template>
