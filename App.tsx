
import React, { useState } from 'react';
import Logo from './components/Logo';
import { trackPurchase } from './services/pixelService';

const App: React.FC = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = () => {
    setIsLoading(true);
    
    // Pequeno atraso para feedback visual e garantir disparo do Pixel
    setTimeout(() => {
      // 1. Dispara o evento Purchase no Meta Pixel
      trackPurchase();
      
      // 2. Altera o estado para mostrar sucesso
      setIsConfirmed(true);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-3 sm:p-6">
      <main className="w-full max-w-[340px] xs:max-w-sm sm:max-w-md">
        <div className="bg-white rounded-[1.8rem] sm:rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.05)] border border-neutral-100 pt-3 pb-6 px-5 sm:pt-6 sm:pb-10 sm:px-10 text-center transition-all duration-500">
          <Logo />

          {!isConfirmed ? (
            <div className="space-y-4 sm:space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <header className="space-y-1 pt-2 border-t border-neutral-50">
                <h2 className="text-lg sm:text-2xl font-black text-neutral-900 uppercase tracking-tight">
                  CONFIRMAR PEDIDO
                </h2>
                <p className="text-neutral-500 text-[11px] sm:text-sm leading-snug px-2">
                  Obrigado por comprar com o <strong>Alho É Só</strong>. <br/>
                  Seu alho roxo nacional está quase a caminho!
                </p>
              </header>

              <div className="pt-1">
                <button
                  onClick={handleConfirm}
                  disabled={isLoading}
                  className={`
                    w-full py-4 sm:py-5 px-6 rounded-xl sm:rounded-2xl font-extrabold text-white text-sm sm:text-lg
                    transition-all duration-300 transform shadow-md active:scale-95
                    ${isLoading 
                      ? 'bg-neutral-300 cursor-not-allowed' 
                      : 'bg-purple-700 hover:bg-purple-800 hover:shadow-xl hover:shadow-purple-200'}
                  `}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      PROCESSANDO...
                    </span>
                  ) : (
                    'APERTE AQUI PARA CONFIRMAR'
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[8px] sm:text-[10px] text-neutral-300 font-bold uppercase tracking-widest">
                <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                Ambiente 100% Seguro
              </div>
            </div>
          ) : (
            <div className="space-y-4 sm:space-y-6 animate-in zoom-in-95 duration-500 py-1">
              <div className="flex justify-center">
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-purple-50 rounded-full flex items-center justify-center border-4 border-purple-100 shadow-inner">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="w-8 h-8 sm:w-12 sm:h-12"
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#7e22ce" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>
              
              <div className="space-y-2">
                <h2 className="text-xl sm:text-3xl font-black text-purple-900 tracking-tight uppercase">
                  TUDO PRONTO!
                </h2>
                <p className="text-neutral-700 text-sm sm:text-lg font-bold">
                  Pedido liberado com sucesso.
                </p>
                <div className="bg-purple-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-purple-50 shadow-sm">
                  <p className="text-purple-900 text-[12px] sm:text-sm font-medium leading-relaxed">
                    Seu pedido foi registrado. <br /> 
                    <strong className="text-purple-700">William e Fernanda</strong> já estão preparando seu <strong>ALHO E SÓ!</strong> <br /> 
                    E será entregue na data combinada no Whatsapp.
                  </p>
                </div>
              </div>

              <div className="pt-1">
                <div className="text-[9px] sm:text-xs text-neutral-300 font-bold italic uppercase tracking-tighter">
                  Você já pode fechar esta página.
                </div>
              </div>
            </div>
          )}
        </div>
        
        <footer className="mt-4 text-center text-neutral-400 text-[8px] sm:text-[11px] font-bold uppercase tracking-[0.15em] opacity-80">
          <p>&copy; {new Date().getFullYear()} Alho e Só • Tradição em Alho Roxo</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
