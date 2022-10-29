<template>
  <div class="relative sh-960:mx-3">
    <label for="search">
      <input
        id="search"
        class="h-11 w-full pr-11 pl-4 text-gray-800 border-indigo-200 rounded-md focus:border-indigo-200 focus:ring focus:ring-opacity-40 focus:ring-indigo-200"
        type="text"
        placeholder="Поиск"
        :value="search"
        @input="$emit('update:search', $event.target.value)"
      />
      <span
        class="flex bg-indigo-100 rounded-r-md absolute inset-y-0 right-0 items-center px-4"
      >
        <svg class="w-5 h-5 text-indigo-900" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps<{ search: string }>();
// defineEmits<{ (e: "update:search", value: string): void }>();
</script>
