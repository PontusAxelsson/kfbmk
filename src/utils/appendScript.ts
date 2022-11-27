import { useEffect } from 'react';
export const appendScript = (resourceUrl: string) => {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = resourceUrl;
		script.async = false;
		script.defer = true;
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		};
	}, [resourceUrl]);
};
