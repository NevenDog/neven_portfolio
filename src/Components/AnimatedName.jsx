import React, { useState, useEffect } from 'react';

const AnimatedName = () => {
    const names = ['Neven', 'Mattia'];
    const [displayText, setDisplayText] = useState('');
    const [nameIndex, setNameIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        const currentName = names[nameIndex];

        if (isTyping) {
            if (displayText !== currentName) {
                const timeout = setTimeout(() => {
                    setDisplayText(currentName.slice(0, displayText.length + 1));
                }, 150); // Typing speed
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setIsTyping(false);
                }, 2000); // Wait before starting to erase
                return () => clearTimeout(timeout);
            }
        } else {
            if (displayText !== '') {
                const timeout = setTimeout(() => {
                    setDisplayText(currentName.slice(0, displayText.length - 1));
                }, 100); // Erasing speed
                return () => clearTimeout(timeout);
            } else {
                setNameIndex((prev) => (prev + 1) % names.length);
                setIsTyping(true);
            }
        }
    }, [displayText, isTyping, nameIndex]);

    return (
        <span className="relative">
      {displayText}
            <span className={`
        ml-1 inline-block w-0.5 h-6 bg-white
        ${isTyping ? 'animate-blink' : ''}
      `}/>
    </span>
    );
};

export default AnimatedName;