'use client';

import React, { useState } from 'react';
import { Shield, Eye, EyeOff, Lock, Mail, AlertCircle } from 'lucide-react';

export default function AstraAdminLogin() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    React.useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 2,
                y: (e.clientY / window.innerHeight - 0.5) * 2
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            alert('Login functionality would be implemented here');
        }, 1500);
    };

    return (
        <div className="min-h-screen w-full bg-black flex items-center justify-center p-4 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute top-20 right-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse transition-transform duration-300 ease-out"
                    style={{
                        transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`
                    }}
                ></div>
                <div
                    className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse transition-transform duration-300 ease-out"
                    style={{
                        animationDelay: '1s',
                        transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`
                    }}
                ></div>
                <div
                    className="absolute top-1/2 left-1/3 w-72 h-72 bg-lime-500/3 rounded-full blur-3xl transition-transform duration-500 ease-out"
                    style={{
                        transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`
                    }}
                ></div>
            </div>

            {/* Scanline effect */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
                <div className="h-full w-full bg-gradient-to-b from-transparent via-green-500/20 to-transparent animate-scan"></div>
            </div>

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDI1NSwwLDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30 transition-transform duration-500 ease-out"
                style={{
                    transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`
                }}
            ></div>

            {/* Floating cyber elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Hexagon with glow */}
                <div
                    className="absolute top-10 left-10 w-32 h-32 transition-all duration-700 ease-out"
                    style={{
                        transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * 25}px) rotate(${mousePosition.x * 10}deg)`,
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                    }}
                >
                    <div className="w-full h-full border-2 border-green-500/30 relative">
                        <div className="absolute inset-0 bg-green-500/5 blur-xl"></div>
                    </div>
                </div>

                {/* Concentric circles */}
                <div
                    className="absolute top-1/4 right-20 w-24 h-24 transition-all duration-500 ease-out"
                    style={{
                        transform: `translate(${mousePosition.x * -35}px, ${mousePosition.y * -35}px) scale(${1 + mousePosition.x * 0.1})`
                    }}
                >
                    <div className="absolute inset-0 border border-green-500/20 rounded-full"></div>
                    <div className="absolute inset-2 border border-green-500/15 rounded-full"></div>
                    <div className="absolute inset-4 border border-green-500/10 rounded-full"></div>
                    <div className="absolute inset-0 bg-green-500/5 rounded-full blur-lg"></div>
                </div>

                {/* Crosshair target */}
                <div
                    className="absolute bottom-20 right-1/4 w-28 h-28 transition-all duration-600 ease-out"
                    style={{
                        transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * -20}px) rotate(${-mousePosition.y * 15}deg)`
                    }}
                >
                    <div className="absolute inset-0 border border-green-500/25 rounded-full"></div>
                    <div className="absolute top-0 left-1/2 w-px h-full bg-green-500/20"></div>
                    <div className="absolute top-1/2 left-0 w-full h-px bg-green-500/20"></div>
                    <div className="absolute top-1/2 left-1/2 w-3 h-3 -ml-1.5 -mt-1.5 bg-green-500/40 rounded-full shadow-lg shadow-green-500/50"></div>
                </div>

                {/* Circuit lines */}
                <div
                    className="absolute bottom-1/3 left-1/4 w-32 h-24 transition-all duration-800 ease-out"
                    style={{
                        transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * 30}px)`
                    }}
                >
                    <svg width="100%" height="100%" className="opacity-20">
                        <path d="M0,12 L20,12 L20,0 L40,0 M40,0 L60,0 L60,24 L80,24"
                            stroke="rgb(34, 197, 94)"
                            strokeWidth="1.5"
                            fill="none" />
                        <circle cx="20" cy="12" r="2" fill="rgb(34, 197, 94)" />
                        <circle cx="60" cy="24" r="2" fill="rgb(34, 197, 94)" />
                    </svg>
                </div>

                {/* Lock icon with scan lines */}
                <div
                    className="absolute top-1/3 right-1/3 w-20 h-20 transition-all duration-400 ease-out"
                    style={{
                        transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * -25}px)`
                    }}
                >
                    <Lock className="w-full h-full text-green-500/15" strokeWidth={1.5} />
                    <div className="absolute inset-0 flex flex-col justify-between">
                        <div className="h-px bg-green-500/30 animate-pulse"></div>
                        <div className="h-px bg-green-500/30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        <div className="h-px bg-green-500/30 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                </div>

                {/* Binary code stream */}
                <div
                    className="absolute top-2/3 left-10 transition-all duration-550 ease-out"
                    style={{
                        transform: `translate(${mousePosition.x * -28}px, ${mousePosition.y * -18}px)`
                    }}
                >
                    <div className="text-green-500/15 font-mono text-xs leading-tight">
                        <div>1010</div>
                        <div>0110</div>
                        <div>1100</div>
                        <div>0011</div>
                    </div>
                </div>

                {/* Radar sweep */}
                <div
                    className="absolute top-1/2 left-1/2 w-36 h-36 -ml-18 -mt-18 transition-all duration-700 ease-out"
                    style={{
                        transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
                    }}
                >
                    <div className="absolute inset-0 border border-green-500/10 rounded-full"></div>
                    <div className="absolute inset-4 border border-green-500/10 rounded-full"></div>
                    <div className="absolute inset-8 border border-green-500/10 rounded-full"></div>
                    <div
                        className="absolute top-1/2 left-1/2 w-full h-px origin-left bg-gradient-to-r from-green-500/40 to-transparent"
                        style={{
                            transform: 'rotate(45deg)',
                            animation: 'spin 4s linear infinite'
                        }}
                    ></div>
                </div>

                {/* Shield icon */}
                <div
                    className="absolute bottom-10 right-10 w-16 h-16 transition-all duration-650 ease-out"
                    style={{
                        transform: `translate(${mousePosition.x * -22}px, ${mousePosition.y * 28}px) rotate(${mousePosition.y * 8}deg)`
                    }}
                >
                    <Shield className="w-full h-full text-green-500/10" strokeWidth={1.5} />
                    <div className="absolute inset-0 bg-green-500/5 blur-xl rounded-full"></div>
                </div>

                {/* Data packets */}
                <div
                    className="absolute top-20 right-1/4 transition-all duration-450 ease-out"
                    style={{
                        transform: `translate(${mousePosition.x * 32}px, ${mousePosition.y * -32}px)`
                    }}
                >
                    <div className="flex gap-1">
                        <div className="w-2 h-2 bg-green-500/30 rounded-sm animate-pulse"></div>
                        <div className="w-2 h-2 bg-green-500/30 rounded-sm animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-green-500/30 rounded-sm animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                </div>
            </div>

            <div className="relative w-full max-w-md">
                {/* Logo and Title */}
                <div
                    className="text-center mb-8 transition-transform duration-300 ease-out"
                    style={{
                        transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`
                    }}
                >
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-black rounded-2xl mb-4 border-2 border-green-500 shadow-lg shadow-green-500/50 relative group">
                        <div className="absolute inset-0 bg-green-500/10 rounded-2xl group-hover:bg-green-500/20 transition-all duration-300"></div>
                        <Shield className="w-10 h-10 text-green-500 relative z-10" strokeWidth={2.5} />
                        <div className="absolute inset-0 rounded-2xl border border-green-500/30 animate-ping opacity-20"></div>
                    </div>
                    <h1 className="text-5xl font-bold text-white mb-2 tracking-tight" style={{ textShadow: '0 0 20px rgba(34, 197, 94, 0.3)' }}>
                        ASTRA
                    </h1>
                    <p className="text-green-400/80 text-sm font-mono tracking-wider">ADMIN_CONTROL_CENTER</p>
                </div>

                {/* Login Card */}
                <div
                    className="bg-zinc-950/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-green-500/30 p-8 relative overflow-hidden transition-transform duration-300 ease-out"
                    style={{
                        transform: `translate(${mousePosition.x * 8}px, ${mousePosition.y * 8}px) rotateY(${mousePosition.x * 2}deg) rotateX(${-mousePosition.y * 2}deg)`,
                        transformStyle: 'preserve-3d'
                    }}
                >
                    {/* Card glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5"></div>
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>

                    <div className="relative">
                        {/* Status Indicator */}
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                                <span className="text-xs text-green-400 font-mono">SYSTEM_SECURE</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Lock className="w-3 h-3 text-green-500/60" />
                                <span className="text-xs text-zinc-600 font-mono">256-BIT</span>
                            </div>
                        </div>

                        <h2 className="text-xl font-bold text-white mb-1">Access Control</h2>
                        <p className="text-zinc-500 text-sm mb-6 font-mono">AUTHENTICATION_REQUIRED</p>

                        <div className="space-y-5">
                            {/* Email Input */}
                            <div>
                                <label className="block text-xs font-mono text-green-400 mb-2 tracking-wider">
                                    EMAIL_ADDRESS
                                </label>
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-600 group-focus-within:text-green-500 transition-colors" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-black border border-zinc-800 rounded-lg py-3 pl-12 pr-4 text-white placeholder-zinc-700 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500/50 transition-all font-mono text-sm"
                                        placeholder="admin@astra.sec"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div>
                                <label className="block text-xs font-mono text-green-400 mb-2 tracking-wider">
                                    PASSWORD
                                </label>
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-600 group-focus-within:text-green-500 transition-colors" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full bg-black border border-zinc-800 rounded-lg py-3 pl-12 pr-12 text-white placeholder-zinc-700 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500/50 transition-all font-mono text-sm"
                                        placeholder="••••••••••••"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zinc-600 hover:text-green-500 transition-colors"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="w-5 h-5" />
                                        ) : (
                                            <Eye className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between text-xs">
                                <label className="flex items-center text-zinc-500 cursor-pointer group font-mono">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 rounded border-zinc-700 bg-black text-green-500 focus:ring-1 focus:ring-green-500/50 focus:ring-offset-0 cursor-pointer"
                                    />
                                    <span className="ml-2 group-hover:text-green-400 transition-colors">REMEMBER_ME</span>
                                </label>
                                <button
                                    type="button"
                                    className="text-green-500 hover:text-green-400 font-mono transition-colors tracking-wide"
                                >
                                    RESET_AUTH?
                                </button>
                            </div>

                            {/* Submit Button */}
                            <button
                                onClick={handleSubmit}
                                disabled={isLoading}
                                className="w-full bg-green-600 hover:bg-green-500 text-black font-bold py-3 rounded-lg transition-all duration-200 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 font-mono tracking-wider relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                                {isLoading ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        AUTHENTICATING...
                                    </span>
                                ) : (
                                    'INITIATE_LOGIN'
                                )}
                            </button>
                        </div>

                        {/* Security Notice */}
                        <div className="mt-6 pt-6 border-t border-zinc-800">
                            <div className="flex items-start gap-2 text-xs text-zinc-600">
                                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                <p className="font-mono leading-relaxed">
                                    All sessions are monitored and encrypted. Unauthorized access attempts will be logged and reported.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-6 space-y-1">
                    <p className="text-zinc-700 text-xs font-mono">ASTRA_SECURITY_v2.4.1</p>
                    <p className="text-zinc-800 text-xs font-mono">© 2026 ALL_RIGHTS_RESERVED</p>
                </div>
            </div>

            <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
        </div>
    );
}
