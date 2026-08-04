import { useEffect, useState } from "react";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percentage =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;

      setProgress(Math.min(100, Math.max(0, percentage)));
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  );
}

export default ScrollProgress;
