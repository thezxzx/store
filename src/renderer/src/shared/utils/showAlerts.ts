import Swal from 'sweetalert2'

export const showSuccessAlert = (msg: string) => {
  Swal.fire({
    text: msg,
    icon: 'info'
  })
}

export const showErrorAlert = (msg: string) => {
  Swal.fire({
    text: msg,
    icon: 'info'
  })
}
