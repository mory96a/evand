import React, { useEffect, useRef } from 'react';

const useClickOutSide = (setShow) => {
    let componentRef = useRef();

    useEffect(() => {
        let handler = (event) => {
            if (!componentRef.current.contains(event.target)) {
                setShow(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
        };
    });

    return componentRef;
};

export default useClickOutSide;