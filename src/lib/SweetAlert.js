import Swal from 'sweetalert2';
import { Palette } from 'styles/Palette/Palette';

export const confirmAlert = (title, subTitle, icon, requestFunction) => {
  const { main } = Palette;

  return Swal.fire({
		title,
		text: subTitle,
		icon,
		showCancelButton: true,
		confirmButtonColor: main,
		cancelButtonColor: '#d33',
		confirmButtonText: '확인',
		cancelButtonText: '취소',
	}).then((result) => {
		if (result.value) {
			requestFunction();
		}
	});
};