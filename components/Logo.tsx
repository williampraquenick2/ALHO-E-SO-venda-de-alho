
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center -mt-6 sm:-mt-8">
      {/* Imagem maior e sem margem inferior */}
      <div className="mb-0">
        <img 
          src="https://i.imgur.com/sEmytT4.png" 
          alt="Alho e Só" 
          className="w-48 h-48 xs:w-56 xs:h-56 sm:w-72 sm:h-72 object-contain drop-shadow-md"
          onError={(e) => {
            e.currentTarget.src = "https://via.placeholder.com/200?text=Alho+e+So";
          }}
        />
      </div>
      
      {/* Texto colado na imagem */}
      <div className="space-y-0 text-center -mt-6 sm:-mt-10">
        <h1 className="text-2xl sm:text-3xl font-black tracking-tighter text-emerald-900 uppercase leading-none">
          ALHO <span className="text-emerald-600">E SÓ</span>
        </h1>
        <div className="flex flex-col gap-0 pt-1">
          <p className="text-[11px] sm:text-sm font-bold text-emerald-800 uppercase tracking-widest opacity-90 leading-tight">
            Alho Triturado 100% Puro
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-2 text-[9px] sm:text-[10px] text-neutral-400 font-semibold uppercase tracking-wider mt-0.5">
            <span>6 Anos de Mercado</span>
            <span className="text-emerald-200">•</span>
            <span>William e Fernanda</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
