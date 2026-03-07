import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop - Automatically scrolls to top of page on route change
 */
export const ScrollToTop: React.FC = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            return;
        }
        window.scrollTo(0, 0);
    }, [pathname, hash]);

    return null;
};
