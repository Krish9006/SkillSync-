"use client";

export default function TerminalBlock({ children, title = "terminal.sh", className = "" }) {
    return (
        <div className={`font-mono text-sm bg-os-surface border border-os-border rounded-lg overflow-hidden ${className}`}>
            {/* Header */}
            <div className="bg-white/5 px-4 py-2 flex items-center justify-between border-b border-os-border">
                <span className="text-slate-400 text-xs">{title}</span>
                <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-slate-600" />
                    <div className="w-2 h-2 rounded-full bg-slate-600" />
                </div>
            </div>

            {/* Body */}
            <div className="p-4 text-slate-300 leading-relaxed">
                <div className="flex gap-4">
                    <div className="flex flex-col text-slate-600 select-none text-right min-w-[1.5rem]">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                    </div>
                    <div className="w-full">
                        <span className="text-signal-purple">const</span> <span className="text-signal-blue">vision</span> = <span className="text-signal-green">"Build together"</span>;
                        <br />
                        <span className="text-slate-500">// {children}</span>
                        <br />
                        <span className="animate-pulse">_</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
