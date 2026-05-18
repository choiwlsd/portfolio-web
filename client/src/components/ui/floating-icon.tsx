export default function FloatingIcon({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        w-28 h-28 rounded-4xl
        bg-white shadow-2xl
        flex items-center justify-center
        rotate-[-8deg]
      "
    >
      {children}
    </div>
  );
}