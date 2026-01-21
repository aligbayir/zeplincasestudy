import React from 'react';

export const CallForArticles: React.FC = () => {
    return (
        <section className="w-full flex justify-center bg-white px-5 lg:px-0 py-10 lg:py-0">
            <div className="w-full max-w-[1440px] min-h-[400px] h-auto lg:h-[439px] bg-gray-100 border border-dashed border-gray-300 flex flex-col lg:flex-row items-center lg:items-end justify-between rounded-[25px] relative px-6 lg:px-12 overflow-hidden lg:overflow-visible" style={{ backgroundImage: "url('/images/Asset1.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>

                {/* Left Side - Image */}
                <div className="hidden lg:flex flex-1 justify-start h-full items-center z-10">
                    <img src="/images/callforpapers1.png" alt="Call For Papers" className="h-full object-contain" />
                </div>

                {/* Center - Content */}
                <div className="flex-1 flex flex-col justify-center h-full items-center py-12 lg:py-8 relative z-10 gap-3 text-center w-full">
                    <img src="/images/promotion.png" alt="Promotion" className="h-[30px] lg:h-[40px] w-auto object-contain mb-1" />

                    <span className="text-[#64748B] text-[16px] lg:text-[18px] font-medium tracking-wide">Makale Çağrısı</span>

                    <h2 className="text-[#273D89] text-[24px] lg:text-[28px] font-bold leading-tight max-w-[600px]">
                        Türkiye Ulusal Dijital Veri ve Altyapıları
                    </h2>

                    <div className="w-[20px] h-[3px] bg-[#FF94D1] rounded-full my-1 opacity-70"></div>

                    <p className="text-[#475569] text-[14px] lg:text-[15px] leading-[24px] max-w-[580px] font-light px-2 lg:px-0">
                        Bu dosya kapsamında; ulusal ölçekte dijital veri yönetimi, kamu ve özel sektörde teknoloji altyapıları, yapay zekâ uygulamaları, büyük veri analitiği, siber güvenlik, akıllı sistemler ve dijital dönüşüm odaklı özgün, güncel ve disiplinlerarası akademik çalışmalar değerlendirilecektir.
                    </p>

                    <div className="w-[20px] h-[3px] bg-[#FF94D1] rounded-full my-1 opacity-70"></div>

                    <button className="flex items-center gap-3 bg-[#D71D1D] hover:bg-[#b01313] text-white px-6 lg:px-8 py-3 rounded-full transition-colors mt-2 group">
                        <span className="text-[15px] lg:text-[17px] font-medium">Makale Gönder</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </button>
                </div>

                {/* Right Side - Image with Pop-out */}
                <div className="hidden lg:flex flex-1 justify-end h-full items-end relative z-20">
                    <img
                        src="/images/3d4883268dce5a57b2c0bda392b9db410b59c678.png"
                        alt="Right Visual"
                        className="w-[306px] h-[465px] object-cover"
                        style={{ marginBottom: '0', transform: 'translateY(0)' }}
                    />
                </div>
            </div>
        </section>
    );
};
