import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    title: 'Oversized Heavy Tee',
    tag: 'New',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop',
    price: '$45',
    href: '#new',
  },
  {
    id: 2,
    title: 'Utility Cargo Pants',
    tag: 'Trending',
    image:
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1600&auto=format&fit=crop',
    price: '$78',
    href: '#men',
  },
  {
    id: 3,
    title: 'Minimalist Hoodie',
    tag: 'Core',
    image:
      'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1600&auto=format&fit=crop',
    price: '$68',
    href: '#women',
  },
  {
    id: 4,
    title: 'Statement Puffer',
    tag: 'Limited',
    image:
      'https://images.unsplash.com/photo-1542060748-10c28b62716c?q=80&w=1600&auto=format&fit=crop',
    price: '$160',
    href: '#new',
  },
  {
    id: 5,
    title: 'Eco Denim Jacket',
    tag: 'Organic',
    image:
      'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1600&auto=format&fit=crop',
    price: '$120',
    href: '#men',
  },
  {
    id: 6,
    title: 'Everyday Sweatpants',
    tag: 'Core',
    image:
      'https://images.unsplash.com/photo-1571731956672-ac8e8f797cf1?q=80&w=1600&auto=format&fit=crop',
    price: '$58',
    href: '#women',
  },
];

export default function CollectionGrid() {
  return (
    <section id="new" className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">New drops, built to last</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mt-2">Premium materials. Neutral tones. Effortless silhouettes.</p>
          </div>
          <a href="#lookbook" className="hidden sm:inline-flex px-5 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors font-medium">
            View lookbook
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, idx) => (
            <motion.a
              href={product.href}
              key={product.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full bg-black text-white dark:bg-white dark:text-black">
                  {product.tag}
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{product.title}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Unisex fit</p>
                </div>
                <p className="font-semibold">{product.price}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
