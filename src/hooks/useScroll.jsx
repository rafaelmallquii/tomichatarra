// useScroll.jsx

import { useEffect, useState } from "react";

export const useScrollPosition = () => {
    const [scrollPosition, setscrollPosition] = useState(0);

    useEffect(() => {
        const updateScrollPosition = () => {
            setscrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", updateScrollPosition);

        return () => window.removeEventListener("scroll", updateScrollPosition);
    }, []);
    return scrollPosition;
};