export interface Shoe {
  id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  images: string[];
  sizes: number[];
  color: string;
}

export interface Apparel {
  id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  images: string[];
  sizes: string[];
  color: string;
  category: 'tshirt' | 'hoodie' | 'jacket' | 'pants' | 'shorts';
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
  history: string;
  signatureProducts: Shoe[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  orders: Order[];
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  shippingAddress: Address;
  billingAddress: Address;
  paymentMethod: PaymentMethod;
  createdAt: string;
}

export interface CartItem {
  product: Shoe | Apparel;
  quantity: number;
  size: number | string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface PaymentMethod {
  type: 'credit' | 'debit' | 'paypal';
  lastFourDigits?: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: 'orders' | 'shipping' | 'returns' | 'general';
}

export interface Career {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  description: string;
  requirements: string[];
  posted: string;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Shoe | Apparel, size: number | string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}