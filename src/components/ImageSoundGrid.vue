<script setup>
defineProps({
  title: String,
  items: Array,
})

function speak(text) {
  const msg = new SpeechSynthesisUtterance(text)
  msg.lang = "th-TH"
  msg.rate = 1.0 
  speechSynthesis.cancel()
  speechSynthesis.speak(msg)
}
</script>

<template>
  <div class="h-screen w-screen bg-[#F7F9F9] flex flex-col p-3 overflow-hidden font-sans">
    
    <div class="flex items-center mb-2 gap-3 shrink-0">
      <button 
        @click="$router.back()" 
        class="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm active:scale-90 transition-all text-xl"
      >
        ⬅️
      </button>
      <h1 class="text-2xl font-black text-gray-700">{{ title }}</h1>
    </div>

    <div class="flex-1 grid grid-cols-4 md:grid-cols-6 gap-2 min-h-0">
      <button
        v-for="(item, i) in items"
        :key="i"
        @click="speak(item.text)"
        class="relative group active:translate-y-1 transition-all h-full"
      >
        <div class="absolute inset-0 bg-gray-200 rounded-2xl translate-y-1"></div>
        
        <div class="absolute inset-0 bg-white rounded-2xl border border-gray-100 
                    flex flex-col items-center justify-center shadow-sm p-1">
          
          <div class="text-4xl md:text-5xl lg:text-6xl leading-tight">
            {{ item.icon }}
          </div>
          
          <div class="text-xl md:text-2xl font-bold text-gray-600 truncate w-full text-center px-1 pt-3">
            {{ item.text }}
          </div>
        </div>
      </button>
    </div>
  </div>
</template>

<style scoped>
.h-screen {
  touch-action: none;
  position: fixed;
  top: 0;
  left: 0;
}

button {
  -webkit-tap-highlight-color: transparent;
}
</style>