export type ProductCategory = 
  | 'All'
  | 'Strapping & Tools'
  | 'Protective Packaging'
  | 'Films & Tapes'
  | 'Boxes & Pallets'
  | 'Moisture & Cargo Securing';

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  features: string[];
  specs?: string;
  image: string;
  badge?: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  content: string;
  avatar: string;
  tag: string;
};

export type QuoteFormData = {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  product?: string;
  quantity?: string;
  message: string;
};

export type QualityHighlight = {
  title: string;
  description: string;
  iconName: string;
};
