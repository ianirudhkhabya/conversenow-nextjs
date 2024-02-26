"use client";

import Image from "next/image";

import Modal from "@/components/modals/Modal";

interface ImageModalProps {
  src?: string | null;
  isOpen?: boolean;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, isOpen, onClose }) => {
  if (!src) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex items-center justify-center w-80 h-80">
        <Image
          className="object-cover"
          src={src}
          alt="Image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
