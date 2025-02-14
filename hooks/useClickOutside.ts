import { useEffect, useRef } from "react";

export function useClickOutside<TElement extends HTMLElement>(
	enabled: boolean,
	callbackFn: () => void
) {
	const ref = useRef<TElement>(null);

	useEffect(() => {
		if (!enabled) return;

		const handleClickOutside = (event: PointerEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				callbackFn();
			}
		};

		document.addEventListener("pointerdown", handleClickOutside);

		return () => {
			document.removeEventListener("pointerdown", handleClickOutside);
		};
	}, [enabled]);

	return { ref };
}
