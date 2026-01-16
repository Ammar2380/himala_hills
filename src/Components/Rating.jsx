import { Star } from 'lucide-react';

const Rating = ({ value, count }) => (
  <div className="flex items-center gap-2 text-yellow-500">
    <div className="flex">
      {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={i < Math.round(value) ? 'currentColor' : 'none'} />)}
    </div>
    <span className="text-xs font-bold text-gray-400">{value} ({count} Reviews)</span>
  </div>
);

export default Rating;
