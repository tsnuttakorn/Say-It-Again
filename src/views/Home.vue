<template>
  <div class="h-screen w-screen bg-[#F7F9F9] flex flex-col p-4 gap-4 overflow-hidden font-sans text-[#4B4B4B]">
    
    <div class="flex-1 flex gap-4">
      <button 
        @click="$router.push('/numbers')"
        class="flex-1 relative active:scale-95 transition-transform duration-150 group"
      >
        <div class="absolute inset-0 bg-[#E5A158] rounded-[2.5rem] translate-y-2"></div>
        <div class="absolute inset-0 bg-[#FFD19A] rounded-[2.5rem] border-2 border-white flex flex-col items-center justify-center shadow-sm">
          <span class="text-[10rem] leading-none mb-4 drop-shadow-sm">🔢</span>
          <span class="text-6xl md:text-7xl font-bold text-[#8A5A2B]">ตัวเลข</span>
        </div>
      </button>

      <button 
        @click="$router.push('/days')"
        class="flex-1 relative active:scale-95 transition-transform duration-150 group"
      >
        <div class="absolute inset-0 bg-[#88B04B] rounded-[2.5rem] translate-y-2"></div>
        <div class="absolute inset-0 bg-[#C5E1A5] rounded-[2.5rem] border-2 border-white flex flex-col items-center justify-center shadow-sm">
          <span class="text-[10rem] leading-none mb-4 drop-shadow-sm">📅</span>
          <span class="text-6xl md:text-7xl font-bold text-[#4F6331]">วัน</span>
        </div>
      </button>
    </div>

    <div class="flex-1 flex gap-4">
      <button 
        @click="$router.push('/months')"
        class="flex-1 relative active:scale-95 transition-transform duration-150 group"
      >
        <div class="absolute inset-0 bg-[#5DA9D4] rounded-[2.5rem] translate-y-2"></div>
        <div class="absolute inset-0 bg-[#B3E5FC] rounded-[2.5rem] border-2 border-white flex flex-col items-center justify-center shadow-sm">
          <span class="text-[10rem] leading-none mb-4 drop-shadow-sm">🗓</span>
          <span class="text-6xl md:text-7xl font-bold text-[#35627A]">เดือน</span>
        </div>
      </button>

      <button 
        @click="$router.push('/daily')"
        class="flex-1 relative active:scale-95 transition-transform duration-150 group"
      >
        <div class="absolute inset-0 bg-[#A686C5] rounded-[2.5rem] translate-y-2"></div>
        <div class="absolute inset-0 bg-[#E1BEE7] rounded-[2.5rem] border-2 border-white flex flex-col items-center justify-center shadow-sm">
          <span class="text-[10rem] leading-none mb-4 drop-shadow-sm">🏠</span>
          <span class="text-6xl md:text-7xl font-bold text-[#5E4477]">คำศัพท์</span>
        </div>
      </button>
    </div>

  </div>
</template>

<style scoped>
button {
  -webkit-tap-highlight-color: transparent;
}

body {
  touch-action: none;
  overflow: hidden;
  background-color: #F7F9F9;
}
</style>