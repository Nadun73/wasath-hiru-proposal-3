export default function Navigation({ currentSlide, totalSlides, onPrev, onNext }) {
  return (
    <div className="nav-bar">
      <button
        className="nav-button secondary"
        onClick={onPrev}
        disabled={currentSlide === 1}
      >
        ← Back
      </button>

      <div className="nav-center">
        <span className="slide-count">
          {String(currentSlide).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
        </span>

        <div className="dot-group">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index + 1 ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>

      <button
        className="nav-button primary"
        onClick={onNext}
        disabled={currentSlide === totalSlides}
      >
        Next →
      </button>
    </div>
  );
}