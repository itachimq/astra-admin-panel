'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, ArrowRight } from 'lucide-react';
import HexagonalBackground from '@/components/ui/HexagonalBackground';

export default function LandingPage() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 2,
                y: (e.clientY / window.innerHeight - 0.5) * 2
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <main className="min-h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden text-white">
            <HexagonalBackground mousePosition={mousePosition} />

            <div className="z-10 text-center space-y-8 p-4">
                <div className="inline-block p-4 rounded-full bg-green-500/10 border border-green-500/20 mb-4 animate-pulse">
                    <Shield className="w-16 h-16 text-green-500" />
                </div>

                <h1 className="text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                    ASTRA SECURITY
                </h1>

                <p className="text-xl text-zinc-400 max-w-lg mx-auto leading-relaxed">
                    Advanced threat detection and administrative control systems.
                    <br />
                    <span className="text-green-500/60 font-mono text-sm">SYSTEM_STATUS: ONLINE</span>
                </p>

                <div className="pt-8">
                    <Link
                        href="/admin/login"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-lg font-bold tracking-wide overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(34,197,94,0.6)]"
                    >
                        <span className="relative z-10">ACCESS CONTROL PANEL</span>
                        <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
                    </Link>
                </div>
            </div>

            <div className="absolute bottom-8 text-zinc-600 font-mono text-xs">
                SECURE_CONNECTION_ESTABLISHED_V2.4.1
            </div>
        </main>
    );
}
