import { useState } from "react";
import type { Product } from "../../model/types";
import { UiButton } from "~shared/ui/ui-button";
import { Plus, Minus, ChevronLeft, ChevronRight } from "~shared/ui/icons";
import styles from "./product-card.module.css";

type ProductCardProps = {
  product: Product;
  count?: number;
  onAddToCart?: (id: number) => void;
  onRemoveFromCart?: (id: number) => void;
};

export const ProductCard = ({
  product,
  count = 0,
  onAddToCart,
  onRemoveFromCart,
}: ProductCardProps) => {
  const { id, make, model, price, images } = product;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const hasMultipleImages = images && images.length > 1;

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        {images && images.length > 0 ? (
          <img
            src={images[currentImageIndex]}
            alt={`${make} ${model}`}
            className={styles.image}
          />
        ) : (
          <div className={styles.placeholder}>No Image Available</div>
        )}

        {hasMultipleImages && (
          <>
            <div className={styles.controls}>
              <UiButton
                variant="transparent"
                className={styles.controlButton}
                onClick={handlePrevImage}
                aria-label="Previous image"
              >
                <ChevronLeft width={20} height={20} />
              </UiButton>
              <UiButton
                variant="transparent"
                className={styles.controlButton}
                onClick={handleNextImage}
                aria-label="Next image"
              >
                <ChevronRight width={20} height={20} />
              </UiButton>
            </div>
            <div className={styles.pagination}>
              {images.map((_, index) => (
                <div
                  key={index}
                  className={
                    index === currentImageIndex ? styles.dotActive : styles.dot
                  }
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className={styles.content}>
        <span className={styles.brand}>{make}</span>
        <h3 className={styles.model}>{model}</h3>
        <span className={styles.price}>${price.toLocaleString()}</span>

        <div className={styles.actions}>
          {count === 0 ? (
            <UiButton
              variant="primary"
              style={{ width: "100%", height: "48px" }}
              onClick={() => onAddToCart?.(id)}
            >
              Add to Cart
            </UiButton>
          ) : (
            <div className={styles.counter}>
              <UiButton
                variant="secondary"
                style={{
                  width: "48px",
                  height: "48px",
                  padding: 0,
                  borderRadius: "12px",
                  backgroundColor: "#f2f2f7",
                  border: "none",
                }}
                onClick={() => onRemoveFromCart?.(id)}
              >
                <Minus />
              </UiButton>
              <span className={styles.countText}>{count} in cart</span>
              <UiButton
                variant="primary"
                style={{
                  width: "48px",
                  height: "48px",
                  padding: 0,
                  borderRadius: "12px",
                }}
                onClick={() => onAddToCart?.(id)}
              >
                <Plus />
              </UiButton>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
