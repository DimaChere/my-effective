const shimmer =
    "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function TagListSketeton() {
    return (
        <div className={`${shimmer} w-64 h-16 bg-slate-700 rounded-lg`}>
            <div className="flex bg-slate-300"></div>
        </div>
    );
}
