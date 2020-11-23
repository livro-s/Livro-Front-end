export const useKeyDown = (e, requestFunction) => {
	if (e.key === 'Enter') {
		e.preventDefault();
		requestFunction();
	}
};
