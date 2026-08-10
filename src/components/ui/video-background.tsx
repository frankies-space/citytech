type VideoBackgroundProps = {
  src: string;
  poster?: string;
  className?: string;
  overlayClassName?: string;
};

export function VideoBackground({
  src,
  poster,
  className = "",
  overlayClassName = "bg-ink/70",
}: VideoBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  );
}
