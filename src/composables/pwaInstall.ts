import { ref } from 'vue'

export interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export const deferredPrompt = ref<BeforeInstallPromptEvent | null>(null)
export const isInstalled = ref(false)
export const isIOSSafari = ref(false)

if (typeof window !== 'undefined') {
  const standalone =
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as Navigator & { standalone?: boolean }).standalone === true
  if (standalone) {
    isInstalled.value = true
  } else {
    const ua = window.navigator.userAgent
    const isIOSDevice =
      /iPad|iPhone|iPod/.test(ua) &&
      !(window as Window & { MSStream?: unknown }).MSStream
    const isSafari = /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS/.test(ua)
    isIOSSafari.value = isIOSDevice && isSafari

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      deferredPrompt.value = e as BeforeInstallPromptEvent
    })

    window.addEventListener('appinstalled', () => {
      isInstalled.value = true
      deferredPrompt.value = null
    })
  }
}
