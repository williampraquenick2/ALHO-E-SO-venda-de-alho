
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center mb-1 sm:mb-2 -mt-2">
      {/* Container da imagem com margem zero para aproximar do texto abaixo */}
      <div className="mb-0">
        <img 
          src="https://i.imgur.com/sEmytT4.png" 
          alt="Alho e Só" 
          className="w-40 h-40 xs:w-48 xs:h-48 sm:w-64 sm:h-64 object-contain drop-shadow-lg"
          onError={(e) => {
            e.currentTarget.src = "https://via.placeholder.com/200?text=Alho+e+So";
          }}
        />
      </div>
      
      <div className="space-y-0 text-center">
        <h1 className="text-2xl sm:text-3xl font-black tracking-tighter text-purple-900 uppercase leading-none">
          ALHO <span className="text-purple-600">E SÓ</span>
        </h1>
        <div className="flex flex-col gap-0 pt-1">
          <p className="text-[11px] sm:text-sm font-bold text-purple-800 uppercase tracking-widest opacity-90 leading-tight">
            Alho Triturado 100% Puro
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-2 text-[9px] sm:text-[10px] text-neutral-400 font-semibold uppercase tracking-wider">
            <span>6 Anos de Mercado</span>
            <span className="hidden xs:inline text-purple-200">•</span>
            <span>William e Fernanda</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
