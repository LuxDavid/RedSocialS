import { useState } from "react";

const CarouselMini= ({ images = [] }) => {
  // índice de la primera imagen visible
  const [index, setIndex] = useState(0);

  const visible = 4;          // cuántas se muestran
  const max = images.length;  // total

  function next() {
    if (index < max - visible) setIndex(index + 1);
  }

  function prev() {
    if (index > 0) setIndex(index - 1);
  }

  return (
    <div className="mini-carousel">
      <div className="viewport">
        <div
          className="track"
          style={{ transform: `translateX(-${index * 100 / visible}%)` }}
        >
          {images.map((src, i) => (
            <div className="item" key={i}>
              <img src={src} alt={`img-${i}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="controls">
        <button onClick={prev} disabled={index === 0}>
          ◀
        </button>

        <button onClick={next} disabled={index >= max - visible}>
          ▶
        </button>
      </div>
    </div>
  );
}

export default CarouselMini;