<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const isHome = computed(() => route.path === '/' || route.path === '/index.html')

function print() {
  if (typeof window !== 'undefined') window.print()
}
</script>

<template>
  <div v-if="!isHome" class="print-button-wrap no-print">
    <button type="button" class="print-button" title="Stampa questa pagina o salvala in PDF" @click="print">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <polyline points="6 9 6 2 18 2 18 9" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <rect x="6" y="14" width="12" height="8" />
      </svg>
      Stampa / Salva PDF
    </button>
  </div>
</template>

<style scoped>
.print-button-wrap {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.5rem;
}

.print-button {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.8rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
  border: 1px solid transparent;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s;
}

.print-button:hover {
  border-color: var(--vp-c-brand-1);
}
</style>
