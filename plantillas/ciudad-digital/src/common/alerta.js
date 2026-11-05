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

export default Swal;
