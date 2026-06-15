import { useEffect, useRef, type RefObject } from 'react';

/**
 * Cierra un elemento desplegable (dropdown, menú…) al hacer click fuera de él
 * o al pulsar la tecla `Escape`. Devuelve un `ref` que debe asignarse al
 * contenedor del elemento.
 *
 * @param enabled   Si el desplegable está abierto (registra los listeners).
 * @param onDismiss Callback invocado al detectar click-fuera o `Escape`.
 */
function useDismiss<T extends HTMLElement>(
  enabled: boolean,
  onDismiss: () => void,
): RefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!enabled) return;

    const handlePointer = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onDismiss();
      }
    };

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onDismiss();
    };

    document.addEventListener('mousedown', handlePointer);
    document.addEventListener('keydown', handleKey);

    return () => {
      document.removeEventListener('mousedown', handlePointer);
      document.removeEventListener('keydown', handleKey);
    };
  }, [enabled, onDismiss]);

  return ref;
}

export default useDismiss;
