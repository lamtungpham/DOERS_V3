import { useState, useEffect } from 'react';

export const CustomPrompt = ({ isOpen, title, defaultValue, placeholder, onConfirm, onCancel }: any) => {
  const [value, setValue] = useState(defaultValue || '');

  useEffect(() => {
    setValue(defaultValue || '');
  }, [defaultValue, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
        <div className="p-4 border-b border-gray-200 font-bold">{title}</div>
        <div className="p-4">
          <input 
            type="text" 
            autoFocus
            className="w-full px-3 py-2 border border-gray-300 rounded focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none"
            placeholder={placeholder}
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') onConfirm(value);
              if (e.key === 'Escape') onCancel();
            }}
          />
        </div>
        <div className="p-4 border-t border-gray-200 flex justify-end gap-2 bg-gray-50">
          <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">Hủy</button>
          <button type="button" onClick={() => onConfirm(value)} className="px-4 py-2 bg-brand-orange text-white rounded hover:bg-orange-600 transition">Xác nhận</button>
        </div>
      </div>
    </div>
  );
};
