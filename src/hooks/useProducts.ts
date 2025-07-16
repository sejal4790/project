import { useState, useEffect } from 'react';
import { IProduct } from '../models/Product';
import pack from '../assets/Images/pack.jpg'; 
import box from '../assets/Images/box.jpg';

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      // In a real app, you'd make an API call to your backend
      // For now, we'll use mock data since we can't run MongoDB in the browser
      const mockProducts: IProduct[] = [
        {
          _id: '1',
          name: 'Traditional Thekua',
          description: 'Authentic Mithila Thekua made with premium wheat flour, pure jaggery, and aromatic ghee. Handcrafted using traditional methods passed down through generations. Each piece is carefully prepared to deliver the perfect balance of sweetness and texture that defines this beloved Bihar delicacy.',
          price: 150,
          image_url: pack,
          category: 'Sweet',
          ingredients: ['Premium Wheat Flour', 'Pure Jaggery', 'Desi Ghee', 'Green Cardamom', 'Fennel Seeds'],
        },
        {
          _id: '2',
          name: 'Premium Thekua Gift Box',
          description: 'Our signature Thekua presented in an elegant gift box, perfect for festivals, celebrations, or sharing with loved ones. Contains 20 pieces of freshly made Thekua with beautiful traditional packaging that reflects the rich heritage of Mithila.',
          price: 300,
          image_url: box,
          category: 'Gift Box',
          ingredients: ['Premium Wheat Flour', 'Pure Jaggery', 'Desi Ghee', 'Green Cardamom', 'Fennel Seeds', 'Traditional Packaging'],
        },
        {
          _id: '3',
          name: 'Bulk Thekua Pack',
          description: 'Perfect for large gatherings, festivals, or businesses. Our bulk pack contains 50 pieces of authentic Thekua, maintaining the same quality and taste in larger quantities. Ideal for sharing the joy of traditional Mithila sweets with everyone.',
          price: 650,
          image_url: pack,
          category: 'Bulk Pack',
          ingredients: ['Premium Wheat Flour', 'Pure Jaggery', 'Desi Ghee', 'Green Cardamom', 'Fennel Seeds'],
        },
      ];

      setProducts(mockProducts);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }

  return { products, loading, error };
}