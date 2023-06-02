'use client';

import { useEffect, useState } from 'react';
import AuthModal from '@/components/AuthModal';
import UploadModal from '@/components/UploadModal';
import SubscriptionModal from '@/components/SubscriptionModal';
import { ProductWithPrice } from '@/types';

interface ModalProviderProps {
  products: ProductWithPrice[];
}

const ModalProvider: React.FC<ModalProviderProps> = ({ products }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
      <UploadModal />
      <SubscriptionModal products={products} />
    </>
  );
};

export default ModalProvider;
