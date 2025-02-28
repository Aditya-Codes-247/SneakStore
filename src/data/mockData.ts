import { Brand, Shoe, User, FAQ, Career, Apparel } from '../types';

export const brands: Brand[] = [
  {
    id: '1',
    name: 'Nike',
    logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    description: 'Just Do It - Experience innovation and style with Nike.',
    history: 'Founded in 1964 as Blue Ribbon Sports, Nike has become the world\'s leading designer, marketer and distributor of authentic athletic footwear.',
    signatureProducts: []
  },
  {
    id: '2',
    name: 'Adidas',
    logo: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f',
    description: 'Impossible is Nothing - Push your limits with Adidas.',
    history: 'Founded in 1949 by Adolf Dassler, Adidas has grown to be one of the largest sportswear manufacturers worldwide.',
    signatureProducts: []
  },
  {
    id: '3',
    name: 'Jordan',
    logo: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28',
    description: 'Become Legendary - Elevate your game with Jordan.',
    history: 'Created in 1984 for basketball legend Michael Jordan, the Jordan Brand has become a cultural phenomenon.',
    signatureProducts: []
  }
];

export const shoes: Shoe[] = [
  {
    id: '1',
    name: 'Air Max Pulse',
    brand: 'Nike',
    price: 159.99,
    description: 'The future of Air is here. The Air Max Pulse brings you a new era of Air.',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa'
    ],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
    color: 'Black/Volt'
  },
  {
    id: '2',
    name: 'Ultra Boost 23',
    brand: 'Adidas',
    price: 189.99,
    description: 'Experience ultimate comfort and energy return with the latest Ultra Boost.',
    images: [
      'https://images.unsplash.com/photo-1518002171953-a080ee817e1f',
      'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb'
    ],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
    color: 'Cloud White'
  }
];

export const apparel: Apparel[] = [
  {
    id: '1',
    name: 'Tech Fleece Hoodie',
    brand: 'Nike',
    price: 120,
    description: 'Premium comfort meets innovative design with the Tech Fleece hoodie.',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7',
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    color: 'Black',
    category: 'hoodie'
  },
  {
    id: '2',
    name: 'Training Shorts',
    brand: 'Adidas',
    price: 45,
    description: 'Lightweight and breathable training shorts for maximum performance.',
    images: [
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b',
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    color: 'Navy',
    category: 'shorts'
  }
];

export const currentUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d',
  orders: []
};

export const faqs: FAQ[] = [
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for unworn items in original condition with tags attached.',
    category: 'returns'
  },
  {
    question: 'How long does shipping take?',
    answer: 'Standard shipping takes 3-5 business days. Express shipping takes 1-2 business days.',
    category: 'shipping'
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to most countries worldwide. Shipping times and costs vary by location.',
    category: 'shipping'
  },
  {
    question: 'How do I track my order?',
    answer: 'You can track your order by logging into your account or using the tracking number provided in your shipping confirmation email.',
    category: 'orders'
  }
];

export const careers: Career[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'full-time',
    description: 'Join our team to build the future of e-commerce.',
    requirements: [
      '5+ years of React experience',
      'Strong TypeScript skills',
      'Experience with e-commerce platforms'
    ],
    posted: '2025-03-01'
  },
  {
    id: '2',
    title: 'Customer Service Representative',
    department: 'Support',
    location: 'New York, NY',
    type: 'full-time',
    description: 'Help our customers have the best shopping experience.',
    requirements: [
      '2+ years of customer service experience',
      'Excellent communication skills',
      'Problem-solving abilities'
    ],
    posted: '2025-03-15'
  }
];