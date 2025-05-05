import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Ultra HD Smart TV",
    category: "electronics",
    price: 1299.99,
    rating: 4.8,
    image: "https://images.pexels.com/photos/6782570/pexels-photo-6782570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Experience stunning clarity with this 65\" Ultra HD Smart TV featuring HDR technology and built-in streaming apps.",
    featured: true,
    stock: 15,
    specs: {
      "Screen Size": "65 inches",
      "Resolution": "4K Ultra HD",
      "Refresh Rate": "120Hz",
      "Connectivity": "Wi-Fi, Bluetooth, HDMI x4",
      "Smart Features": "Voice Control, App Store"
    }
  },
  {
    id: 2,
    name: "Pro Gaming Laptop",
    category: "computers",
    price: 1899.99,
    rating: 4.7,
    image: "https://images.pexels.com/photos/1038916/pexels-photo-1038916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Dominate every game with this high-performance gaming laptop featuring the latest GPU and a responsive high refresh rate display.",
    featured: true,
    new: true,
    stock: 8,
    specs: {
      "Processor": "Intel Core i9, 12th Gen",
      "RAM": "32GB DDR5",
      "Storage": "1TB NVMe SSD",
      "Graphics": "NVIDIA RTX 4080, 12GB",
      "Display": "17.3\" 240Hz QHD"
    }
  },
  {
    id: 3,
    name: "Noise-Cancelling Headphones",
    category: "audio",
    price: 299.99,
    rating: 4.9,
    image: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Immerse yourself in your audio with these premium wireless noise-cancelling headphones featuring 40 hours of battery life.",
    discount: 15,
    stock: 22,
    specs: {
      "Type": "Over-ear",
      "Battery Life": "40 hours",
      "Connectivity": "Bluetooth 5.2, 3.5mm jack",
      "Features": "Active Noise Cancellation, Ambient Mode",
      "Controls": "Touch, Voice Assistant"
    }
  },
  {
    id: 4,
    name: "Next-Gen Gaming Console",
    category: "gaming",
    price: 499.99,
    rating: 4.8,
    image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Experience next-generation gaming with stunning graphics, lightning-fast load times, and an expanding library of exclusive titles.",
    featured: true,
    stock: 5,
    specs: {
      "CPU": "8-core Custom Zen 2",
      "GPU": "RDNA 2, 10.3 TFLOPS",
      "Storage": "1TB Custom SSD",
      "Output": "8K, 4K@120Hz",
      "Features": "Ray Tracing, 3D Audio"
    }
  },
  {
    id: 5,
    name: "Wireless Earbuds",
    category: "audio",
    price: 149.99,
    rating: 4.6,
    image: "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Enjoy premium sound quality and comfort with these wireless earbuds featuring adaptive EQ and water resistance.",
    new: true,
    stock: 30,
    specs: {
      "Battery Life": "6 hours (24 with case)",
      "Connectivity": "Bluetooth 5.3",
      "Features": "Active Noise Cancellation, Transparency Mode",
      "Water Resistance": "IPX4",
      "Controls": "Touch, Voice Assistant"
    }
  },
  {
    id: 6,
    name: "Ultra-Wide Gaming Monitor",
    category: "computers",
    price: 899.99,
    rating: 4.7,
    image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Get the competitive edge with this ultra-wide curved gaming monitor featuring a 175Hz refresh rate and 1ms response time.",
    discount: 10,
    stock: 12,
    specs: {
      "Size": "34 inches",
      "Resolution": "3440 x 1440 UWQHD",
      "Refresh Rate": "175Hz",
      "Response Time": "1ms",
      "Features": "G-Sync, HDR600, RGB Lighting"
    }
  },
  {
    id: 7,
    name: "Smartphone Flagship",
    category: "smartphones",
    price: 1099.99,
    rating: 4.9,
    image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Experience cutting-edge mobile technology with this premium smartphone featuring an exceptional camera system and all-day battery life.",
    featured: true,
    stock: 18,
    specs: {
      "Display": "6.7\" AMOLED, 120Hz",
      "Processor": "Latest Gen Octa-core",
      "Storage": "256GB",
      "Camera": "48MP Main, 12MP Ultra-wide, 10MP Telephoto",
      "Battery": "5000mAh, Fast Charging"
    }
  },
  {
    id: 8,
    name: "Professional DSLR Camera",
    category: "electronics",
    price: 2499.99,
    rating: 4.8,
    image: "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Capture stunning professional-quality images with this high-end DSLR camera featuring advanced autofocus and 4K video recording.",
    discount: 8,
    stock: 7,
    specs: {
      "Sensor": "45.7MP Full-Frame CMOS",
      "ISO Range": "100-51,200 (expandable)",
      "Video": "4K UHD 60fps, 8K 30fps",
      "Autofocus": "153-point Phase-Detection",
      "Features": "Weather Sealing, Dual Card Slots"
    }
  },
  {
    id: 9,
    name: "Smart Watch Premium",
    category: "accessories",
    price: 399.99,
    rating: 4.6,
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Track your fitness goals, receive notifications, and more with this premium smartwatch featuring an always-on display and advanced health sensors.",
    new: true,
    stock: 25,
    specs: {
      "Display": "1.9\" AMOLED Always-On",
      "Battery": "Up to 18 days",
      "Sensors": "Heart Rate, Blood Oxygen, ECG, Temperature",
      "Features": "GPS, 100+ Sport Modes, Water Resistant",
      "Connectivity": "Bluetooth 5.2, WiFi, NFC"
    }
  },
  {
    id: 10,
    name: "Premium Wireless Mouse",
    category: "accessories",
    price: 129.99,
    rating: 4.7,
    image: "https://images.pexels.com/photos/5082582/pexels-photo-5082582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Enhance your productivity with this ergonomic wireless mouse featuring customizable buttons and ultra-precise tracking.",
    stock: 35,
    specs: {
      "Sensor": "25,600 DPI Optical",
      "Buttons": "8 Programmable",
      "Battery": "Up to 70 hours",
      "Connectivity": "2.4GHz Wireless, Bluetooth, USB-C",
      "Features": "RGB Lighting, On-board Memory"
    }
  },
  {
    id: 11,
    name: "VR Headset Pro",
    category: "gaming",
    price: 799.99,
    rating: 4.5,
    image: "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Immerse yourself in virtual worlds with this advanced VR headset featuring high-resolution displays and precise motion tracking.",
    featured: true,
    stock: 9,
    specs: {
      "Display": "Dual LCD, 2448x2448 per eye",
      "Refresh Rate": "120Hz",
      "Field of View": "110 degrees",
      "Tracking": "Inside-out, 6DoF",
      "Features": "Hand Tracking, Pass-through Camera"
    }
  },
  {
    id: 12,
    name: "High-Performance Desktop PC",
    category: "computers",
    price: 2499.99,
    rating: 4.8,
    image: "https://images.pexels.com/photos/2225617/pexels-photo-2225617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Power through demanding applications with this high-performance desktop PC featuring top-tier components and customizable RGB lighting.",
    stock: 6,
    specs: {
      "Processor": "Intel Core i9-12900K",
      "Graphics": "NVIDIA RTX 4090, 24GB",
      "RAM": "64GB DDR5 5200MHz",
      "Storage": "2TB NVMe SSD + 4TB HDD",
      "Cooling": "360mm AIO Liquid Cooler"
    }
  }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getNewProducts = () => {
  return products.filter(product => product.new);
};

export const getDiscountedProducts = () => {
  return products.filter(product => product.discount);
};