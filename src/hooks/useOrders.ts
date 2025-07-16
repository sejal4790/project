import { useState, useEffect } from 'react';
import { IOrder } from '../models/Order';

export function useOrders() {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  async function fetchOrders() {
    try {
      // In a real app, you'd make an API call to your backend
      // For now, we'll use mock data since we can't run MongoDB in the browser
      setOrders([]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }

  async function createOrder(orderData: Omit<IOrder, '_id' | 'createdAt' | 'updatedAt'>) {
    try {
      // In a real app, you'd make an API call to your backend
      // For now, we'll simulate order creation
      const newOrder: IOrder = {
        _id: Date.now().toString(),
        ...orderData,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      setOrders(prev => [newOrder, ...prev]);
      return newOrder;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    }
  }

  return { orders, loading, error, createOrder };
}