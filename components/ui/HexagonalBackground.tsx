'use client';

import React, { useEffect, useRef } from 'react';

interface HexagonalBackgroundProps {
    mousePosition: { x: number; y: number };
}

export default function HexagonalBackground({ mousePosition }: HexagonalBackgroundProps) {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-black">
            {/* Dynamic Grid Layer with Pulse */}
            <div
                className="absolute inset-[-50%] w-[200%] h-[200%] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTA0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0zMCAwIEw2MCAxNy4zMiBZNjAgNTEuOTYgTDMwIDY5LjI4IEwwIDUxLjk2IEwwIDE3LjMyIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgzNCwgMTk3LCA5NCwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] transition-transform duration-100 ease-out opacity-30 animate-pulse"
                style={{
                    transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px) rotate(${mousePosition.x * 0.5}deg)`
                }}
            />

            {/* Secondary Offset Grid Layer for depth */}
            <div
                className="absolute inset-[-50%] w-[200%] h-[200%] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTA0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0zMCAwIEw2MCAxNy4zMiBZNjAgNTEuOTYgTDMwIDY5LjI4IEwwIDUxLjk2IEwwIDE3LjMyIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgzNCwgMTk3LCA5NCwgMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] transition-transform duration-300 ease-out opacity-20"
                style={{
                    transform: `translate(${mousePosition.x * -40}px, ${mousePosition.y * -40}px) scale(1.1)`
                }}
            />

            {/* Radial Gradient Mask for Cyber Vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />

            {/* Decorative localized glows */}
            <div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[100px] transition-transform duration-700 ease-out mix-blend-screen"
                style={{
                    transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`
                }}
            />
            <div
                className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] transition-transform duration-500 ease-out mix-blend-screen"
                style={{
                    transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`
                }}
            />

            {/* Floating Cyber Particles */}
            <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-green-500/40 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
            <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-green-400/30 rounded-full animate-ping" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        </div>
    );
}
