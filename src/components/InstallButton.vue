<template>
  <button v-if="showButton" class="install-button" @click="install" type="button" :aria-label="ariaLabel">
    <svg class="install-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
    <span class="install-label">Instalar app</span>
  </button>

  <transition name="ios-help">
    <div v-if="showIOSHelp" class="ios-help-overlay" @click.self="showIOSHelp = false">
      <div class="ios-help-modal" role="dialog" aria-modal="true" aria-labelledby="ios-help-title">
        <button class="ios-help-close" @click="showIOSHelp = false" aria-label="Fechar">×</button>
        <h3 id="ios-help-title">Instalar no iPhone</h3>
        <ol>
          <li>Toque em <strong>Compartilhar</strong>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-icon" aria-hidden="true">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <polyline points="16 6 12 2 8 6" />
              <line x1="12" y1="2" x2="12" y2="15" />
            </svg>
            na barra do Safari
          </li>
          <li>Role e toque em <strong>Adicionar à Tela de Início</strong></li>
          <li>Confirme em <strong>Adicionar</strong></li>
        </ol>
        <p class="ios-help-hint">O atalho vai aparecer como app na sua tela inicial.</p>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

const deferredPrompt = ref<BeforeInstallPromptEvent | null>(null)
const isInstalled = ref(false)
const isIOS = ref(false)
const showIOSHelp = ref(false)

const showButton = computed(
  () => !isInstalled.value && (deferredPrompt.value !== null || isIOS.value),
)

const ariaLabel = computed(() =>
  isIOS.value && !deferredPrompt.value
    ? 'Ver instruções para instalar o app no iPhone'
    : 'Instalar o app na tela inicial',
)

function onBeforeInstallPrompt(e: Event) {
  e.preventDefault()
  deferredPrompt.value = e as BeforeInstallPromptEvent
}

function onAppInstalled() {
  isInstalled.value = true
  deferredPrompt.value = null
  showIOSHelp.value = false
}

async function install() {
  if (isIOS.value && !deferredPrompt.value) {
    showIOSHelp.value = true
    return
  }
  if (!deferredPrompt.value) return
  await deferredPrompt.value.prompt()
  const { outcome } = await deferredPrompt.value.userChoice
  if (outcome === 'accepted') deferredPrompt.value = null
}

onMounted(() => {
  const standalone =
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as Navigator & { standalone?: boolean }).standalone === true
  if (standalone) {
    isInstalled.value = true
    return
  }

  const ua = window.navigator.userAgent
  const isIOSDevice = /iPad|iPhone|iPod/.test(ua) && !(window as Window & { MSStream?: unknown }).MSStream
  const isSafari = /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS/.test(ua)
  isIOS.value = isIOSDevice && isSafari

  window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt)
  window.addEventListener('appinstalled', onAppInstalled)
})

onBeforeUnmount(() => {
  window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt)
  window.removeEventListener('appinstalled', onAppInstalled)
})
</script>

<style scoped>
.install-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #0052f5 0%, #2e7bff 100%);
  color: white;
  border: none;
  border-radius: 999px;
  padding: 9px 18px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.3px;
  cursor: pointer;
  font-family: inherit;
  box-shadow: 0 4px 14px rgba(0, 82, 245, 0.35);
  transition: transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease;
  white-space: nowrap;
}

.install-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 18px rgba(0, 82, 245, 0.45);
  filter: brightness(1.05);
}

.install-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(0, 82, 245, 0.4);
}

.install-button:focus-visible {
  outline: 2px solid white;
  outline-offset: 2px;
}

.install-icon {
  flex-shrink: 0;
}

.ios-help-overlay {
  position: fixed;
  inset: 0;
  background: rgba(3, 29, 66, 0.65);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.ios-help-modal {
  background: white;
  border-radius: 16px;
  padding: 32px 26px 24px;
  max-width: 400px;
  width: 100%;
  position: relative;
  color: #1a1a1a;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
  border-top: 4px solid #0052f5;
}

.ios-help-modal h3 {
  margin: 0 0 18px;
  color: #031d42;
  font-size: 22px;
}

.ios-help-modal ol {
  padding-left: 22px;
  line-height: 1.7;
  margin: 0 0 18px;
  color: #2c3e50;
}

.ios-help-modal li {
  margin-bottom: 10px;
}

.ios-help-modal strong {
  color: #0052f5;
}

.inline-icon {
  vertical-align: middle;
  margin: 0 2px;
  color: #0052f5;
}

.ios-help-hint {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
  text-align: center;
}

.ios-help-close {
  position: absolute;
  top: 10px;
  right: 14px;
  background: none;
  border: none;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
  color: #9ca3af;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: background 0.15s ease, color 0.15s ease;
}

.ios-help-close:hover {
  background: #f3f4f6;
  color: #1a1a1a;
}

.ios-help-enter-active,
.ios-help-leave-active {
  transition: opacity 0.2s ease;
}
.ios-help-enter-active .ios-help-modal,
.ios-help-leave-active .ios-help-modal {
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.ios-help-enter-from,
.ios-help-leave-to {
  opacity: 0;
}
.ios-help-enter-from .ios-help-modal,
.ios-help-leave-to .ios-help-modal {
  transform: translateY(20px) scale(0.96);
  opacity: 0;
}
</style>
