export default function FloatingBadge({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div
      className={`
        absolute ${className}
        bg-[#2f6dff]
        text-white
        px-8 py-4
        rounded-full
        shadow-[0_15px_30px_rgba(47,109,255,0.35)]
        text-2xl
        font-semibold
        whitespace-nowrap
      `}
    >
      {text}
    </div>
  );
}

