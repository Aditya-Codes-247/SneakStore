import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CreditCard, ShieldCheck, Lock } from 'lucide-react';

const Payment = () => {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<string>('credit');
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      navigate('/order-confirmation');
    }, 2000);
  };

  const shippingCost = 5.99;
  const orderTotal = total + shippingCost;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Payment
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Payment Form */}
        <div className="lg:col-span-2 space-y-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Payment Methods */}
            <div className="bg-gray-900 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <CreditCard className="mr-2 h-6 w-6 text-purple-400" />
                Payment Method
              </h2>
              <div className="space-y-4 mb-6">
                <label className="flex items-center p-4 bg-gray-800 rounded-lg cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="credit"
                    checked={paymentMethod === 'credit'}
                    onChange={() => setPaymentMethod('credit')}
                    className="h-5 w-5 text-purple-600"
                  />
                  <div className="ml-4 flex-1">
                    <p className="text-white font-medium">Credit / Debit Card</p>
                    <p className="text-gray-400 text-sm">Visa, Mastercard, American Express</p>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-10 h-6 bg-white rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-blue-700">VISA</span>
                    </div>
                    <div className="w-10 h-6 bg-white rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-red-600">MC</span>
                    </div>
                    <div className="w-10 h-6 bg-white rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-blue-500">AMEX</span>
                    </div>
                  </div>
                </label>
                <label className="flex items-center p-4 bg-gray-800 rounded-lg cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={paymentMethod === 'paypal'}
                    onChange={() => setPaymentMethod('paypal')}
                    className="h-5 w-5 text-purple-600"
                  />
                  <div className="ml-4 flex-1">
                    <p className="text-white font-medium">PayPal</p>
                    <p className="text-gray-400 text-sm">Pay with your PayPal account</p>
                  </div>
                  <div className="w-16 h-6 bg-white rounded flex items-center justify-center">
                    <span className="text-xs font-bold text-blue-800">PayPal</span>
                  </div>
                </label>
              </div>

              {paymentMethod === 'credit' && (
                <div className="space-y-6">
                  <div>
                    <label htmlFor="cardNumber" className="block text-gray-300 mb-2">
                      Card Number *
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={cardInfo.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      required
                      className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="cardName" className="block text-gray-300 mb-2">
                      Cardholder Name *
                    </label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={cardInfo.cardName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="expiryDate" className="block text-gray-300 mb-2">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        value={cardInfo.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        required
                        className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="cvv" className="block text-gray-300 mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={cardInfo.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        required
                        className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'paypal' && (
                <div className="bg-gray-800 p-6 rounded-lg text-center">
                  <p className="text-white mb-4">You will be redirected to PayPal to complete your payment.</p>
                  <div className="w-24 h-8 bg-white rounded mx-auto flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-800">PayPal</span>
                  </div>
                </div>
              )}
            </div>

            {/* Billing Address */}
            <div className="bg-gray-900 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Billing Address</h2>
              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  id="sameAsShipping"
                  className="h-5 w-5 text-purple-600"
                  defaultChecked
                />
                <label htmlFor="sameAsShipping" className="ml-2 text-gray-300">
                  Same as shipping address
                </label>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button
                type="button"
                onClick={() => navigate('/checkout')}
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                ← Back to Shipping
              </button>
              <button
                type="submit"
                disabled={isProcessing}
                className={`bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center ${
                  isProcessing ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-3"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <Lock className="h-5 w-5 mr-2" />
                    Complete Order
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="space-y-6">
          <div className="bg-gray-900 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.size}`} className="flex items-center gap-4">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-white font-medium">{item.product.name}</h3>
                    <p className="text-gray-400 text-sm">Size: {item.size} | Qty: {item.quantity}</p>
                  </div>
                  <span className="text-purple-400 font-bold">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-800 pt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">Subtotal</span>
                <span className="text-white">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Shipping</span>
                <span className="text-white">${shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t border-gray-800 pt-2 mt-2">
                <span className="text-white font-bold">Total</span>
                <span className="text-xl font-bold text-purple-400">${orderTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-6">
            <div className="flex items-center gap-3 text-gray-300 mb-4">
              <ShieldCheck className="h-5 w-5 text-green-500" />
              <span className="text-white font-medium">Secure Payment</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your payment information is encrypted and secure. We never store your full credit card details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;