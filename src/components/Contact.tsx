import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useOrders } from '../hooks/useOrders';
import { useCart } from '../contexts/CartContext';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    quantity: '1',
    address: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const { createOrder } = useOrders();
  const { items, total, clearCart } = useCart();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (items.length > 0) {
        // Create order with cart items
        await createOrder({
          customer_name: formData.name,
          customer_email: formData.email,
          customer_phone: formData.phone,
          shipping_address: formData.address || 'Address not provided',
          items: items.map(item => ({
            product_id: item.id,
            product_name: item.name,
            quantity: item.quantity,
            price: item.price,
          })),
          total_amount: total,
          status: 'pending',
        });
        
        clearCart();
      }
      
      setSubmitted(true);
      
      // Reset form after submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          quantity: '1',
          address: '',
        });
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('There was an error submitting your order. Please try again.');
    }
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-secondary-900 mb-4">
            Order Your <span className="text-primary-600">Thekua</span>
          </h2>
          <p className="text-lg text-secondary-700 max-w-2xl mx-auto">
            Ready to taste authentic Mithila Thekua? Place your order now and we'll deliver fresh, handcrafted Thekua right to your doorstep.
          </p>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-md p-8" id="order">
              <h3 className="text-2xl font-serif font-semibold text-secondary-900 mb-6">
                Place Your Order
              </h3>
              
              {items.length > 0 && (
                <div className="bg-primary-50 p-4 rounded-md mb-6">
                  <h4 className="font-medium text-primary-800 mb-2">Items in your cart:</h4>
                  <ul className="text-sm text-primary-700">
                    {items.map((item) => (
                      <li key={item.id} className="flex justify-between">
                        <span>{item.name} x{item.quantity}</span>
                        <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-primary-200 mt-2 pt-2 font-medium">
                    Total: ₹{total.toFixed(2)}
                  </div>
                </div>
              )}
              
              {submitted ? (
                <div className="bg-earthen-100 text-earthen-800 p-4 rounded-md mb-6">
                  <p className="font-medium">Thank you for your order!</p>
                  <p>We've received your Thekua order and will contact you shortly to confirm delivery details.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-secondary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-secondary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-secondary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="address" className="block text-sm font-medium text-secondary-700 mb-1">
                    Delivery Address *
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-3 py-2 border border-secondary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter your complete delivery address"
                  ></textarea>
                </div>

                {items.length === 0 && (
                  <div className="mb-4">
                    <label htmlFor="quantity" className="block text-sm font-medium text-secondary-700 mb-1">
                      Quantity (Packs)
                    </label>
                    <select
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-secondary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="1">1 Pack (₹150)</option>
                      <option value="2">2 Packs (₹300)</option>
                      <option value="3">3 Packs (₹450)</option>
                      <option value="5">5 Packs (₹750)</option>
                      <option value="10">10 Packs (₹1500)</option>
                    </select>
                  </div>
                )}
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">
                    Special Instructions (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-secondary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Any special requests or delivery instructions..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors font-medium"
                >
                  {items.length > 0 ? 'Confirm Order' : 'Place Thekua Order'}
                </button>
              </form>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
              <div className="p-8">
                <h3 className="text-2xl font-serif font-semibold text-secondary-900 mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="w-5 h-5 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-secondary-900 mb-1">Visit Us</h4>
                      <p className="text-secondary-700">
                        AZAMNAGAR,P.O.-LALBAGH, Darbhanga,<br />
                  Bihar -846004, India 
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Phone className="w-5 h-5 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-secondary-900 mb-1">Call Us</h4>
                      <p className="text-secondary-700">
                        +91 9204122025<br />
                      
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Mail className="w-5 h-5 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-secondary-900 mb-1">Email Us</h4>
                      <p className="text-secondary-700">
                        shop@mithilamrit.com<br />
                        info@mithilamrit.com<br />
                        care@mithilamrit.com
                        
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium text-secondary-900 mb-3">Delivery Information</h4>
                  <ul className="space-y-2 text-secondary-700">
                    <li className="flex justify-between">
                      <span>Local Delivery:</span>
                      <span>Same Day</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Within State:</span>
                      <span>1-2 Days</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Pan India:</span>
                      <span>3-5 Days</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Minimum Order:</span>
                      <span>₹150</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-8 p-4 bg-primary-50 rounded-md">
                  <h4 className="font-medium text-primary-800 mb-2">Fresh Guarantee</h4>
                  <p className="text-sm text-primary-700">
                    All our Thekua is made fresh to order and delivered within 24-48 hours to ensure maximum freshness and taste.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;