import SwalBase from "sweetalert2";

// SweetAlert2 con el estilo CidiTuc: mismos colores de botones en toda la app.
// Se usa igual que el original: import Swal from ".../common/alerta"; Swal.fire({...})
// Los colores usan los tokens --cd-*, así responden al modo claro / oscuro.
const Swal = SwalBase.mixin({
  confirmButtonColor: "var(--cd-accent)",
  cancelButtonColor: "var(--cd-peligro)",
  customClass: {
    popup: "cd-swal",
  },
});

// Confirmación de borrado: "Eliminar" en rojo (acción destructiva) y "Cancelar" neutro, con el foco
// en Cancelar para que un Enter apurado no borre. Es la única alerta que cambia los colores del mixin.
// Uso: const { isConfirmed } = await confirmarBorrado({ text: "¿Eliminar la marca Ford?" });
export const confirmarBorrado = (opciones = {}) =>
  Swal.fire({
    title: "¿Eliminar?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Eliminar",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "var(--cd-peligro)",
    cancelButtonColor: "var(--cd-text-3)",
    focusCancel: true,
    ...opciones,
  });

export default Swal;
