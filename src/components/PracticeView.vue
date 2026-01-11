<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  title: String,
});

const index = ref(0);
const finished = ref(false);

const current = computed(() => props.items[index.value]);

function speak(text) {
  if (!text) return;
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = "th-TH";
  msg.rate = 0.7;
  speechSynthesis.cancel();
  speechSynthesis.speak(msg);
}

function next() {
  if (index.value < props.items.length - 1) {
    index.value++;
    speak(current.value.label);
  } else {
    finished.value = true;
  }
}

function prev() {
  if (index.value > 0) {
    index.value--;
    speak(current.value.label);
  }
}

onMounted(() => {
  if (current.value?.label) {
    speak(current.value.label);
  }
});
</script>

<template>
  <div class="h-screen w-full bg-black flex flex-col overflow-hidden px-4 py-4">
    <!-- ================= NORMAL MODE ================= -->
    <template v-if="!finished">
      <div class="flex flex-col items-center justify-center flex-1 gap-4">
        <!-- Title -->
        <div class="text-lg sm:text-xl md:text-2xl text-slate-400 text-center">
          {{ title }}
        </div>

        <!-- Visual -->
        <div class="flex items-center justify-center h-[26vh] max-h-[240px]">
          <span
            v-if="current.emoji"
            class="leading-none text-[5.5rem] sm:text-[6.5rem] md:text-[8rem]"
          >
            {{ current.emoji }}
          </span>

          <img
            v-else-if="current.image"
            :src="current.image"
            class="h-full object-contain"
            alt=""
          />
        </div>

        <!-- Text -->
        <div
          class="font-black text-white text-center leading-none text-[3rem] sm:text-[4rem] md:text-[5.5rem]"
        >
          {{ current.label }}
        </div>

        <!-- Controls -->
        <div class="w-full max-w-md flex gap-3 mt-2">
          <!-- Prev -->
          <button
            v-if="index > 0"
            class="flex-1 h-14 sm:h-16 text-lg sm:text-xl font-bold bg-gray-600 text-white rounded-2xl active:scale-95 transition"
            @click="prev"
          >
            ⬅️ ย้อนกลับ
          </button>

          <!-- Replay -->
          <button
            class="h-14 sm:h-16 aspect-square text-2xl sm:text-3xl bg-blue-600 text-white rounded-2xl active:scale-95 transition"
            @click="speak(current.label)"
          >
            🔁
          </button>

          <!-- Next -->
          <button
            class="flex-1 h-14 sm:h-16 text-lg sm:text-xl font-bold bg-emerald-600 text-white rounded-2xl active:scale-95 transition"
            @click="next"
          >
            ➡️ ถัดไป
          </button>
        </div>
      </div>
    </template>

    <!-- ================= SUMMARY GRID MODE ================= -->
    <template v-else>
      <div class="flex flex-col flex-1 overflow-hidden gap-4">
        <h2 class="text-xl sm:text-2xl text-slate-300 text-center font-bold">
          ทบทวนทั้งหมด
        </h2>

        <div
          class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 overflow-y-auto flex-1 pb-2"
        >
          <button
            v-for="(item, i) in items"
            :key="i"
            @click="speak(item.label)"
            class="bg-white rounded-2xl p-3 flex flex-col items-center justify-center active:scale-95 transition"
          >
            <div class="text-4xl sm:text-5xl">
              {{ item.emoji }}
            </div>
            <div class="mt-2 text-base sm:text-lg font-bold text-gray-700">
              <!-- {{ i + 1 }}. {{ item.label }} -->
              {{ item.label }}
            </div>
          </button>
        </div>

        <button
          class="h-14 sm:h-16 text-xl sm:text-2xl font-bold bg-blue-600 text-white rounded-2xl active:scale-95 transition"
          @click="router.push('/')"
        >
          ✅ เสร็จสิ้น
        </button>
      </div>
    </template>
  </div>
</template>

<style scoped>
button {
  -webkit-tap-highlight-color: transparent;
}
</style>
