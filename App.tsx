
import React, { useState } from 'react';
import Logo from './components/Logo';

const App: React.FC = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = () => {
    setIsLoading(true);
    
    // Simula o processamento e garante que a transição ocorra sem erros
    setTimeout(() => {
      setIsConfirmed(true);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <main className="w-full max-w-[350px] sm:max-w-md">
        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-neutral-100 pt-4 pb-8 px-6 sm:pb-12 sm:px-12 text-center transition-all duration-500">
          <Logo />

          {!isConfirmed ? (
            <div className="fade-in-up mt-2 space-y-6">
              <header className="space-y-2 pt-4 border-t border-neutral-50">
                <h2 className="text-xl sm:text-2xl font-black text-neutral-900 uppercase tracking-tight">
                  CONFIRMAR PEDIDO
                </h2>
                <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed px-2">
                  Obrigado por comprar com o <strong>Alho É Só</strong>. <br/>
                  Seu alho triturado puro está quase saindo!
                </p>
              </header>

              <div className="pt-2">
                <button
                  onClick={handleConfirm}
                  disabled={isLoading}
                  className={`
                    w-full py-4 sm:py-5 px-6 rounded-2xl font-black text-white text-sm sm:text-lg tracking-wide
                    transition-all duration-300 transform shadow-lg active:scale-95
                    ${isLoading 
                      ? 'bg-neutral-300 cursor-not-allowed' 
                      : 'bg-emerald-600 hover:bg-emerald-700 hover:shadow-emerald-200'}
                  `}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                      </svg>
                      PROCESSANDO...
                    </span>
                  ) : (
                    'APERTE AQUI PARA CONFIRMAR'
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-neutral-300 font-bold uppercase tracking-widest pt-2">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
                </svg>
                Ambiente 100% Seguro
              </div>
            </div>
          ) : (
            <div className="scale-in space-y-6 py-4">
              <div className="flex justify-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-emerald-50 rounded-full flex items-center justify-center border-4 border-emerald-100 shadow-sm">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-600"
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-1">
                  <h2 className="text-2xl sm:text-3xl font-black text-emerald-900 tracking-tight uppercase">
                    TUDO PRONTO!
                  </h2>
                  <p className="text-emerald-700 text-sm sm:text-lg font-bold">
                    Pedido liberado com sucesso.
                  </p>
                </div>
                <div className="bg-emerald-50 p-5 sm:p-6 rounded-3xl border border-emerald-100 shadow-sm text-left">
                  <p className="text-emerald-950 text-[13px] sm:text-sm font-medium leading-relaxed">
                    Seu pedido foi registrado. <br /> 
                    <strong className="text-emerald-700">William e Fernanda</strong> já estão preparando seu <span className="font-black">ALHO E SÓ!</span> <br /><br />
                    Ele será entregue na data combinada pelo WhatsApp.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <div className="text-[10px] text-neutral-300 font-bold italic uppercase tracking-wider">
                  Você já pode fechar esta página.
                </div>
              </div>
            </div>
          )}
        </div>
        
        <footer className="mt-6 text-center text-neutral-400 text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">
          <p>&copy; {new Date().getFullYear()} Alho e Só • Tradição em Alho</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
