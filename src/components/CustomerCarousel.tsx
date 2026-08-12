import React from 'react';

interface ClientLogo {
  id: string;
  name: string;
  imageSrc: string;
  websiteUrl: string;
}

const CLIENT_LOGOS: ClientLogo[] = [
  {
    id: 'kumar-industries',
    name: 'Kumar Industries',
    imageSrc: '/clients/kumarindus.png',
    websiteUrl: 'https://www.kumarindus.com/',
  },
  {
    id: 'veedol',
    name: 'Veedol India',
    imageSrc: '/clients/veedol.png',
    websiteUrl: 'https://www.veedolindia.com/',
  },
  {
    id: 'federal-mogul',
    name: 'Federal Mogul Auto Parts',
    imageSrc: '/clients/fedral.png',
    websiteUrl: 'https://www.drivparts.com/fmstorefront/federalmogul/en/USD/',
  },
  {
    id: 'nippon-steel',
    name: 'Nippon Steel',
    imageSrc: '/clients/nippon steels.png',
    websiteUrl: 'https://www.nipponsteel.com/',
  },
  {
    id: 'sgi-automotive',
    name: 'SGI Automotive India',
    imageSrc: '/clients/sgi.png',
    websiteUrl: 'https://sgiautoindia.com/',
  },
  {
    id: 'roki-uno-minda',
    name: 'Roki Uno Minda Co.',
    imageSrc: '/clients/roki.png',
    websiteUrl: 'https://www.unominda.com/group-companies/mil-joint-ventures/roki-uno-minda-co-private-limited',
  },
  {
    id: 'airflow',
    name: 'Airflow India',
    imageSrc: '/clients/airflow.png',
    websiteUrl: 'https://www.airflow.co.in/',
  },
  {
    id: 'sevenstar',
    name: 'Sevenstar Aircon',
    imageSrc: '/clients/sevenstar.png',
    websiteUrl: 'https://sevenstaraircon.in/',
  },
  {
    id: 'koyama',
    name: 'Koyama India',
    imageSrc: '/clients/koyama.png',
    websiteUrl: 'https://www.koyamaindia.com/',
  },
];

// Duplicate to create a seamless infinite loop (CSS animation scrolls -50%)
const MARQUEE_LOGOS = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

export const CustomerCarousel: React.FC = () => {
  return (
    <div className="relative py-6 bg-white/70 backdrop-blur-md border-y border-slate-200/80 overflow-hidden z-20">

      {/* Gradient fades – left edge */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      {/* Gradient fades – right edge */}
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      {/* Pure-CSS GPU-composited marquee — zero JS per frame, lag-free on mobile */}
      <div className="flex overflow-hidden" aria-label="Our clients">
        <div className="marquee-track items-center gap-10">
          {MARQUEE_LOGOS.map((client, index) => (
            <a
              key={`${client.id}-${index}`}
              href={client.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={client.name}
              className="flex items-center justify-center shrink-0 py-2 px-4 rounded-xl border border-transparent
                         grayscale opacity-60
                         hover:grayscale-0 hover:opacity-100 hover:scale-110 hover:bg-white/80
                         hover:shadow-md hover:border-slate-200
                         transition-[filter,opacity,transform,box-shadow,background-color,border-color]
                         duration-300 ease-out"
            >
              <img
                src={client.imageSrc}
                alt={client.name}
                className="h-10 w-auto max-w-[120px] object-contain"
                loading="lazy"
                draggable={false}
              />
            </a>
          ))}
        </div>
      </div>

    </div>
  );
};
