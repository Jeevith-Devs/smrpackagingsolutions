import type { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'stretch-film',
    name: 'Stretch Film (Machine & Manual)',
    category: 'Films & Tapes',
    description: 'High-tensile linear low-density polyethylene film providing superior load stability and puncture resistance for palletized goods.',
    features: [
      'Available in 12 to 50 Micron thickness',
      'High stretchability up to 300%',
      'Excellent clarity & cling properties',
      'Manual rolls & Machine grade rolls'
    ],
    specs: 'Width: 500mm | Length: 300m - 1500m | Micron: 15-50',
    image: '/products/Stretch Film (Machine & Manual).png',
    badge: 'Best Seller'
  },
  {
    id: 'pet-strap',
    name: 'PET Strap & Seals',
    category: 'Strapping & Tools',
    description: 'Heavy-duty polyester strapping engineered as a strong alternative to steel strap, offering shock-absorption for heavy industrial loads.',
    features: [
      'High break strength & low elongation',
      'Weather & UV resistant',
      'Safe handling without sharp edges',
      'Compatible with manual & friction weld tools'
    ],
    specs: 'Width: 12mm - 19mm | Thickness: 0.6mm - 1.2mm',
    image: '/products/PET Strap & Seals.png',
    badge: 'Industrial Grade'
  },
  {
    id: 'pp-strap',
    name: 'PP Strap & Seals',
    category: 'Strapping & Tools',
    description: 'Economical polypropylene strapping designed for light-to-medium palletizing, bundling, and box reinforcement.',
    features: [
      'Uniform thickness & width precision',
      'Suitable for semi-auto & fully automatic machines',
      'Custom colors & company logo printing available',
      'High split resistance'
    ],
    specs: 'Width: 9mm - 15mm | Core Size: 200mm / 406mm',
    image: '/products/PP Strap & Seals.png'
  },
  {
    id: 'cord-strap',
    name: 'Cord Strap & Buckles',
    category: 'Moisture & Cargo Securing',
    description: 'Woven polyester cord strapping paired with high-tensile steel buckles for dynamic heavy machinery and container securing.',
    features: [
      'Non-abrasive to finished surfaces',
      'Re-tensionable and easy to apply',
      'High system strength for export sea freight',
      'Certified for heavy cargo securing'
    ],
    specs: 'System Strength: 500daN to 2000daN',
    image: '/products/Cord Strap & Buckles.png'
  },
  {
    id: 'vci-roll',
    name: 'VCI Roll & Cover',
    category: 'Protective Packaging',
    description: 'Vapor Corrosion Inhibitor (VCI) poly rolls and 3D covers that emit anti-rust vapors to protect metal automotive and engineering parts.',
    features: [
      'Multi-metal corrosion protection',
      'Transparent for quick visual inspection',
      'Custom 3D gusseted covers for machinery',
      'Eco-friendly and non-toxic formula'
    ],
    specs: 'Thickness: 80 - 150 Micron | Custom Bag Sizes',
    image: '/products/VCI Roll & Cover.png',
    badge: 'Anti-Rust Tech'
  },
  {
    id: 'bubble-roll',
    name: 'Bubble Roll & Pouches',
    category: 'Protective Packaging',
    description: 'Cushioning air bubble wrap rolls and custom anti-static pouches designed to absorb impacts and prevent scratches during transit.',
    features: [
      'Air retention layer for long lasting protection',
      'Anti-static pink pouches for electronics',
      'Perforated rolls & custom size bags',
      'Lightweight reducing freight cost'
    ],
    specs: 'Bubble Dia: 10mm & 25mm | GSM: 40 - 120',
    image: '/products/Bubble Roll & Pouches.png'
  },
  {
    id: 'ldpe-roll',
    name: 'LDPE Roll & Cover',
    category: 'Films & Tapes',
    description: 'Low-density polyethylene film rolls and industrial covers providing moisture proofing, dust protection, and weather sealing.',
    features: [
      'High tear strength and stretch ability',
      'Virgin & semi-virgin polymer grades',
      'UV stabilized options for outdoor storage',
      'Custom sheet widths up to 4 meters'
    ],
    specs: 'Thickness: 50 to 250 Micron | Tubing / Sheet',
    image: '/products/LDPE Roll & Cover.png'
  },
  {
    id: 'foam-roll',
    name: 'Foam Roll & Pouch',
    category: 'Protective Packaging',
    description: 'Expanded polyethylene (EPE) foam rolls and cut sheets offering non-abrasive surface protection for glass, electronics, and polished items.',
    features: [
      '100% recyclable and resilient cushion',
      'Dust-free and moisture resistant',
      'Laminated EPE foam sheets available',
      'Custom pouch die-cutting'
    ],
    specs: 'Thickness: 0.8mm to 10mm | Length: 100m+',
    image: '/products/Foam Roll & Pouch.png'
  },
  {
    id: 'container-desiccant',
    name: 'Container Desiccant',
    category: 'Moisture & Cargo Securing',
    description: 'High-absorption Calcium Chloride desiccant bags designed to eliminate "container rain" and protect export sea cargo from humidity damage.',
    features: [
      'Absorbs up to 300% of its weight in moisture',
      'Leak-proof dual layer membrane design',
      'Hanging hook for container corrugated walls',
      'REACH & RoHS compliant'
    ],
    specs: 'Weight: 1kg & 1.5kg pole/bag variants',
    image: '/products/Container Desiccant.png',
    badge: 'Export Essential'
  },
  {
    id: 'dunnage-bags',
    name: 'Dunnage Air Bags',
    category: 'Moisture & Cargo Securing',
    description: 'Inflatable Kraft paper and Polywoven air bags placed between cargo voids in trucks and containers to prevent cargo shifts and damage.',
    features: [
      'Fast-fill valve mechanism for quick inflation',
      'Puncture-resistant inner PE bladder',
      'Re-usable and recyclable design',
      'AAR certified for international freight'
    ],
    specs: 'Sizes: 90x120cm, 90x180cm, 100x220cm',
    image: '/products/Dunnage Air Bags.png'
  },
  {
    id: 'edge-protectors',
    name: 'Edge Protectors',
    category: 'Boxes & Pallets',
    description: 'Heavy-duty laminated paper angle boards that reinforce box stackability and protect pallet corners from strap indentation.',
    features: [
      'High vertical load stack strength',
      'Moisture-resistant coating options',
      'Custom leg lengths & wall thickness',
      '100% eco-friendly paper product'
    ],
    specs: 'Legs: 30x30mm to 75x75mm | Thickness: 3-6mm',
    image: '/products/Edge Protectors.png'
  },
  {
    id: 'bopp-tapes',
    name: 'BOPP Tapes',
    category: 'Films & Tapes',
    description: 'Premium acrylic adhesive packaging tapes engineered for high tack adhesion on all corrugated carton box surfaces.',
    features: [
      'Transparent, Brown, and Printed logo tapes',
      'High tensile strength & shear resistance',
      'Suitable for manual dispensers & auto tapers',
      'All-weather temperature performance'
    ],
    specs: 'Width: 24mm, 48mm, 72mm | Micron: 40-52',
    image: '/products/BOPP Tapes.png',
    badge: 'Popular'
  },
  {
    id: 'pp-sheets',
    name: 'PP Sheets & Box',
    category: 'Boxes & Pallets',
    description: 'Polypropylene corrugated fluted sheets used as layer pads, partitions, floor protection, and reusable returnable packaging containers.',
    features: [
      'Waterproof, oil-proof & chemical resistant',
      'High impact resistance and durability',
      'Corona treated for screen printing',
      'Custom GSM from 250 to 1200'
    ],
    specs: 'Thickness: 2mm to 10mm | Custom Dimensions',
    image: '/products/PP Sheets & Box.png'
  },
  {
    id: 'box-latching-tools',
    name: 'Latching Tools',
    category: 'Strapping & Tools',
    description: 'Manual and pneumatic tensioners, sealers, and friction weld tools for effortless PET and PP strapping operation.',
    features: [
      'Ergonomic heavy-duty construction',
      'High tension capability up to 4000N',
      'Quick battery-operated strapping options',
      'Low maintenance industrial design'
    ],
    specs: 'Strap Width: 12mm - 19mm | Battery / Manual',
    image: '/products/Latching Tools.png'
  },
  {
    id: 'ratchet-belts',
    name: 'Ratchet Belts',
    category: 'Moisture & Cargo Securing',
    description: 'Heavy duty polyester webbing cargo lashing belts with steel ratchet buckles for securing vehicles, machinery, and heavy pallets on flatbeds.',
    features: [
      '100% High tenacity polyester yarn',
      'Double J-hook steel end fittings',
      'Weatherproof & low elongation under load',
      'Safety factor 2:1 certified'
    ],
    specs: 'Lashing Capacity: 1 Ton to 10 Ton | Length: 6m - 12m',
    image: '/products/Ratchet Belts.png'
  },
  {
    id: 'silica-gel',
    name: 'Silica Gel',
    category: 'Moisture & Cargo Securing',
    description: 'Active desiccant sachets containing porous amorphous silica for moisture absorption inside electronics, leather, and pharmaceutical boxes.',
    features: [
      'Non-toxic & chemically inert',
      'White & Indicating Blue / Orange variants',
      'Non-woven cloth & Tyvek pouch packaging',
      'Sachet weights from 1 gram to 500 grams'
    ],
    specs: 'Package: 1g, 5g, 10g, 50g, 100g, 500g',
    image: '/products/Silica Gel.png'
  },
  {
    id: '2-ply-rolls',
    name: '2 Ply Rolls',
    category: 'Boxes & Pallets',
    description: 'Single face corrugated paper rolls ideal for wrapping oversized industrial components, furniture, and sheet metal panels.',
    features: [
      'Flexible fluting cushions sharp corners',
      'Made from high-burst kraft paper',
      'Economical bulk wrapping solution',
      'Available in broad flute types'
    ],
    specs: 'Width: 36 inches to 72 inches | Length: 50m',
    image: '/products/2 Ply Rolls.png'
  },
  {
    id: 'partition-cartons',
    name: 'Carton Boxes with Partition',
    category: 'Boxes & Pallets',
    description: 'Heavy duty corrugated shipping boxes equipped with custom internal dividers to safely isolate fragile glass bottles or precision metal parts.',
    features: [
      '3-ply, 5-ply, and 7-ply heavy kraft options',
      'Precision slotted interlocking partitions',
      'High bursting strength & compression load',
      'Custom printing for branding & safety marks'
    ],
    specs: 'Custom Dimensions | Flute Type: B, C, E, BC',
    image: '/products/Carton Boxes with Partition.png'
  },
  {
    id: 'angle-boards',
    name: 'Angle Boards',
    category: 'Boxes & Pallets',
    description: 'V-shape solid kraft board protectors used to secure container door loading, edge drop protection, and vertical stacking integrity.',
    features: [
      'Reinforces structural stability of pallets',
      'Prevents strap cutting damage',
      'Customized length cutting to fit paletted height',
      'Fully recyclable paper composite'
    ],
    specs: 'Thickness: 3mm - 8mm | Length: Up to 3 Meters',
    image: '/products/Angle Boards.png'
  },
  {
    id: 'die-cut-boxes',
    name: 'Die Cut Boxes',
    category: 'Boxes & Pallets',
    description: 'Precision die-cut corrugated boxes designed for mailer packaging, self-locking assemblies, display units, and component fitted trays.',
    features: [
      'Clean edge cut without ragged edges',
      'Self-locking design eliminates tape usage',
      'Custom interior cutouts for foam inserts',
      'High aesthetic appeal for commercial products'
    ],
    specs: 'Custom CAD Die Designs | E-flute / B-flute',
    image: '/products/Die Cut Boxes.png'
  },
  {
    id: 'machine-packing',
    name: 'Machine Packing',
    category: 'Protective Packaging',
    description: 'Specialized heavy-duty wooden and corrugated vacuum packing services tailored for exporting high-value CNC machinery and electrical panels.',
    features: [
      'ISPM-15 heat treated wood compliance',
      'VCI vacuum foil barrier wrapping',
      'Shock absorbing EPE foam lining',
      'Turnkey packing execution at client site'
    ],
    specs: 'On-Site Service | Custom Heavy Freight Spec',
    image: '/products/Machine Packing.png',
    badge: 'Turnkey Solution'
  },
  {
    id: 'jumbo-boxes-pallets',
    name: 'Jumbo Boxes with Pallets',
    category: 'Boxes & Pallets',
    description: 'Extra-large 7-ply heavy corrugated gaylord jumbo boxes pre-mounted on wooden or plastic pallets for bulk component storage and export.',
    features: [
      'Replaces heavy wooden crates',
      'Holds payloads up to 1000 kg',
      'Collapsible design for space saving returns',
      'Forklift accessible from all 4 sides'
    ],
    specs: 'Payload: 500kg - 1200kg | 4-Way Entry',
    image: '/products/Jumbo Boxes with Pallets.png'
  },
  {
    id: 'top-closed-reaper-pallets',
    name: 'Top Closed & Reaper Pallets',
    category: 'Boxes & Pallets',
    description: 'Wooden and Composite top-closed deck pallets and reaper skid pallets treated for export fumigation compliance.',
    features: [
      'ISPM-15 Heat Treated (HT) & Stamped',
      'Top closed deck prevents small item fall-through',
      'High static and dynamic load rating',
      'Custom dimensions for sea containers'
    ],
    specs: 'Size: 1200x1000mm, 1100x1100mm | Load: 1.5 - 3 Ton',
    image: '/products/Top Closed & Reaper Pallets.png'
  },
  {
    id: 'container-lashing',
    name: 'Container Lashing',
    category: 'Moisture & Cargo Securing',
    description: 'Heavy duty modular container lashing system with pre-threaded woven webbings designed to prevent rear door cargo spills when opening.',
    features: [
      'Engineered for 20ft & 40ft ISO sea containers',
      'Complies with IMO / ILO / UNECE cargo guidelines',
      'Fast installation with forged steel hooks',
      'Certified break load up to 5000 daN'
    ],
    specs: 'Webbing Width: 32mm - 50mm | Container Ready',
    image: '/products/Container Lashing.png'
  }
];
