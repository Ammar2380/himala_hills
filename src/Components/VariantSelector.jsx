const formatPrice = (amt) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(amt);

const VariantSelector = ({ variants, selected, onSelect }) => (
  <div className="grid grid-cols-3 gap-3">
    {variants.map(v => (
      <button 
        key={v.size}
        onClick={() => onSelect(v)}
        className={`p-4 rounded-2xl border-2 transition-all text-center ${selected.size === v.size ? 'border-[#1a3d3d] bg-[#1a3d3d]/5' : 'border-gray-100 hover:border-gray-300'}`}
      >
        <p className="font-bold text-sm">{v.size}</p>
        <p className="text-xs text-gray-500">{formatPrice(v.price)}</p>
      </button>
    ))}
  </div>
);

export default VariantSelector;
