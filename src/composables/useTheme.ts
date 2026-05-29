import { ref, watch } from 'vue'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'thc-theme'

function initialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  // Sem preferência salva: segue o sistema, com padrão escuro.
  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function apply(theme: Theme) {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme)
  }
}

const theme = ref<Theme>(initialTheme())
apply(theme.value)

watch(theme, (t) => {
  apply(t)
  if (typeof window !== 'undefined') localStorage.setItem(STORAGE_KEY, t)
})

/** Centro do logo central do hero — origem do efeito de "acender/apagar". */
function originFromLogo(): { x: number; y: number } {
  const logo = document.querySelector('.logoBanner') ?? document.querySelector('.logoHeader')
  if (logo) {
    const r = logo.getBoundingClientRect()
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 }
  }
  return { x: window.innerWidth / 2, y: window.innerHeight / 2 }
}

function prefersReducedMotion(): boolean {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
}

export function useTheme() {
  function toggle() {
    const next: Theme = theme.value === 'dark' ? 'light' : 'dark'

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const startViewTransition = (document as any).startViewTransition?.bind(document)

    // Sem suporte à View Transitions ou movimento reduzido: troca direta.
    if (!startViewTransition || prefersReducedMotion()) {
      theme.value = next
      return
    }

    const { x, y } = originFromLogo()
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    )
    const goingLight = next === 'light'

    // Define a direção para o CSS empilhar a camada certa por cima.
    document.documentElement.dataset.vtDir = goingLight ? 'in' : 'out'

    const transition = startViewTransition(() => {
      theme.value = next
    })

    transition.ready
      .then(() => {
        const grow = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ]
        // Acende (light): a camada nova cresce a partir do logo.
        // Apaga (dark): a camada antiga (clara) encolhe de volta para o logo.
        const anim = document.documentElement.animate(
          { clipPath: goingLight ? grow : [grow[1], grow[0]] },
          {
            duration: 680,
            easing: 'ease-in-out',
            // Mantém o estado final até o pseudo-elemento ser removido — sem
            // isso, o clip volta ao início no último frame e dá uma "piscada".
            fill: 'forwards',
            pseudoElement: goingLight
              ? '::view-transition-new(root)'
              : '::view-transition-old(root)',
          },
        )
        // Limpa a animação ao fim (com fill:forwards ela ficaria pendurada).
        transition.finished.finally(() => anim.cancel())
      })
      .catch(() => {})

    transition.finished.finally(() => {
      delete document.documentElement.dataset.vtDir
    })
  }

  return { theme, toggle }
}
