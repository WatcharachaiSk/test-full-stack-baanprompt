import Swal from 'sweetalert2';

export const sweet_popUpTimer = (position, icons, timer, title, text) => {
  position = position || 'center';
  icons = icons || 'success';
  timer = timer || 2500;
  title = title || '';
  text = text || '';
  Swal.fire({
    position: position,
    icon: icons,
    title: title,
    showConfirmButton: false,
    timer: timer,
    text: text,
  });
};

export const sweet_bacis_animation = (position, icons, title, text) => {
  position = position || 'center';
  icons = icons || 'success';
  title = title || '';
  text = text || '';

  Swal.fire({
    position: position,
    icon: icons,
    title: title,
    text: text,
    showClass: {
      popup: 'animate__animated animate__fadeInDown',
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp',
    },
  });
};

export const sweet_toast = (position, icon, title) => {
  position = position || 'center';
  icon = icon || 'success';
  title = title || '';

  const Toast = Swal.mixin({
    toast: true,
    position: position,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: icon,
    title: title,
  });
};
