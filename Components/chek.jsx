export default function  ProductImageGallery = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [showHint, setShowHint] = useState(true);
  const haptic = useHaptic();

  const next = () => {
    setIndex((i) => Math.min(i + 1, images.length - 1));
    haptic();
  };

  const prev = () => {
    setIndex((i) => Math.max(i - 1, 0));
    haptic();
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-[38vh] bg-gray-100 overflow-hidden">
      
      {/* IMAGE */}
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0.4, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) next();
            if (info.offset.x > 60) prev();
          }}
          className="absolute inset-0 w-full h-full object-contain"
        />
      </AnimatePresence>

      {/* EDGE TAP ZONES (INVISIBLE) */}
      <div className="absolute inset-0 flex">
        <div className="w-1/3" onClick={prev} />
        <div className="w-1/3" />
        <div className="w-1/3" onClick={next} />
      </div>

      {/* IMAGE COUNTER */}
      <div className="absolute top-4 right-4 bg-black/70 text-white text-xs font-medium px-3 py-1 rounded-full">
        {index + 1} / {images.length}
      </div>

      {/* SWIPE HINT (FIRST TIME ONLY) */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-medium text-gray-700 shadow"
          >
            Swipe to view more
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
