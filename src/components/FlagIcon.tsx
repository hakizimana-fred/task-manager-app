
export const FlagIcon = ({ language }: { language: 'french' | 'english' }) => {
  return (
    <div className="flex items-center gap-2">
      {language === 'french' ? (
        <div className="flex items-center border border-gray-300 rounded-sm overflow-hidden">
          <div className="w-1/3 h-8 bg-[#0055A4]"></div>
          <div className="w-1/3 h-8 bg-white"></div>
          <div className="w-1/3 h-8 bg-[#EF4135]"></div>
        </div>
      ) : (
        <div className="relative w-10 h-6 bg-[#00247D] border border-gray-300 rounded-sm overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-full h-1 bg-white"></div>
            <div className="w-1 h-full bg-white"></div>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-full h-[0.5rem] bg-[#CF142B]"></div>
            <div className="w-[0.5rem] h-full bg-[#CF142B]"></div>
          </div>
        </div>
      )}
      <span className="text-sm font-medium">{language === 'french' ? 'French' : 'English'}</span>
    </div>
  );
};

