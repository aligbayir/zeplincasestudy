import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full">
      {/* Blue Hero Background */}
      <div className="relative w-full h-[600px] text-white flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full -z-10 ">
          <img
            src="/images/1253421d65119f74a7618231a19a56a622092d03.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay for better text readability and depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#081542] to-transparent/50 opacity-90"></div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between w-full max-w-[1728px] px-5 lg:px-[144px] z-10 h-full relative">
          {/* Left Content */}
          <div className="flex flex-col gap-[30px] max-w-full lg:max-w-[550px] justify-center h-full pt-10">
            <h1 className="flex flex-col font-bold leading-tight">
              <span className="text-[32px] lg:text-[40px] text-white opacity-95">Profuture Teknoloji Dergisi</span>
              <span className="text-[36px] lg:text-[48px] text-white">Son Sayı Yayında</span>
            </h1>
            <p className="text-[17px] leading-[26px] text-white/90 text-justify lg:text-left font-light max-w-[480px]">
              Profuture teknoloji mekanizmaları değişikliği alanlarında özgün akademik çalışmalar içeren yeni sayıya şimdi erişin.
            </p>

            {/* Metadata Icons */}
            <div className="flex gap-[25px] items-center flex-wrap pt-2">
              <div className="flex items-center gap-[8px] text-white text-[15px] font-medium opacity-90">
                <svg width="18" height="18" viewBox="0 0 17 17" fill="none" className="opacity-80"><path d="M13.1364 0H3.86364C1.73335 0 0 1.73335 0 3.86364V13.1364C0 15.2666 1.73335 17 3.86364 17H13.1364C15.2666 17 17 15.2666 17 13.1364V3.86364C17 1.73335 15.2666 0 13.1364 0ZM1.54545 3.86364C1.54545 2.58532 2.58532 1.54545 3.86364 1.54545H13.1364C14.4147 1.54545 15.4545 2.58532 15.4545 3.86364V4.63636H1.54545V3.86364ZM3.86364 15.4545C2.58532 15.4545 1.54545 14.4147 1.54545 13.1364V6.18182H4.63636V15.4545H3.86364ZM13.1364 15.4545H6.18182V6.18182H15.4545V13.1364C15.4545 14.4147 14.4147 15.4545 13.1364 15.4545Z" fill="white" /></svg>
                <span>Cilt: <strong>2</strong></span>
              </div>
              <div className="flex items-center gap-[8px] text-white text-[15px] font-medium opacity-90">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="opacity-80"><path d="M13.5 0.75H4.5C2.43237 0.75 0.75 2.43237 0.75 4.5V9C0.75 10.8108 2.04053 12.3257 3.75 12.6742V15.75H3C2.58545 15.75 2.25 16.0858 2.25 16.5C2.25 16.9142 2.58545 17.25 3 17.25H6C6.41455 17.25 6.75 16.9142 6.75 16.5C6.75 16.0858 6.41455 15.75 6 15.75H5.25V12.75H12.75V15.75H12C11.5854 15.75 11.25 16.0858 11.25 16.5C11.25 16.9142 11.5854 17.25 12 17.25H15C15.4146 17.25 15.75 16.9142 15.75 16.5C15.75 16.0858 15.4146 15.75 15 15.75H14.25V12.6742C15.9595 12.3257 17.25 10.8108 17.25 9V4.5C17.25 2.43237 15.5676 0.75 13.5 0.75ZM15.75 9C15.75 10.2407 14.7407 11.25 13.5 11.25H4.5C3.25928 11.25 2.25 10.2407 2.25 9V4.5C2.25 3.25928 3.25928 2.25 4.5 2.25H13.5C14.7407 2.25 15.75 3.25928 15.75 4.5V9Z" fill="white" /></svg>
                <span>Sayı: <strong>7</strong></span>
              </div>
              <div className="flex items-center gap-[8px] text-white text-[15px] font-medium opacity-90">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="opacity-80"><path d="M14.25 2.32581V1.5C14.25 1.08545 13.9142 0.75 13.5 0.75C13.0858 0.75 12.75 1.08545 12.75 1.5V2.25H9.75V1.5C9.75 1.08545 9.41418 0.75 9 0.75C8.58582 0.75 8.25 1.08545 8.25 1.5V2.25H5.25V1.5C5.25 1.08545 4.91418 0.75 4.5 0.75C4.08582 0.75 3.75 1.08545 3.75 1.5V2.32581C2.04053 2.6743 0.75 4.18918 0.75 6V13.5C0.75 15.5676 2.43237 17.25 4.5 17.25H13.5C15.5676 17.25 17.25 15.5676 17.25 13.5V6C17.25 4.18918 15.9595 2.6743 14.25 2.32581ZM15.75 13.5C15.75 14.7407 14.7407 15.75 13.5 15.75H4.5C3.25928 15.75 2.25 14.7407 2.25 13.5V6C2.25 5.02354 2.87888 4.19879 3.75 3.8882V4.5C3.75 4.91455 4.08582 5.25 4.5 5.25C4.91418 5.25 5.25 4.91455 5.25 4.5V3.75H8.25V4.5C8.25 4.91455 8.58582 5.25 9 5.25C9.41418 5.25 9.75 4.91455 9.75 4.5V3.75H12.75V4.5C12.75 4.91455 13.0858 5.25 13.5 5.25C13.9142 5.25 14.25 4.91455 14.25 4.5V3.8882C15.1211 4.19879 15.75 5.02354 15.75 6V13.5Z" fill="white" /></svg>
                <span>Haziran 2025</span>
              </div>
            </div>

            <a href="#" className="mt-4 flex w-fit px-8 py-4 items-center gap-[10px] rounded-full bg-white/10 border border-white/20 text-white text-[16px] font-medium backdrop-blur-sm hover:bg-white hover:text-primary-blue transition-all duration-300 group">
              <span>Dergiyi Görüntüle</span>
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor" />
              </svg>
            </a>
          </div>

          {/* Right Image (Overlapping Magazine) */}
          <div className="hidden lg:block absolute right-[5%] bottom-[-320px] z-30">
            <img
              src="/images/837b5e69f459209111b65fe80d0e99d9b1400f4b.png"
              alt="Profuture Magazine Cover"
              className="w-[600px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(39,61,137,0.4)] transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* About Section (Directly Below) */}
      <div className="w-full bg-white py-24 pb-32">
        <div className="max-w-[1728px] mx-auto px-5 lg:px-[144px]">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* About Content */}
            <div className="flex-1 max-w-[650px] pt-12">
              <h3 className="text-[#676A73] text-[16px] font-semibold uppercase tracking-wider mb-2">Dergi Amacı ve Kapsamı</h3>
              <h2 className="text-[32px] font-bold text-primary-navy mb-6">Profuture Teknoloji Dergisi</h2>
              <p className="text-[16px] leading-[28px] text-text-dark/80 text-justify mb-8">
                Profuture Teknoloji Dergisi, 2022 yılında yayın hayatına başlayan; teknoloji, inovasyon, dijital dönüşüm ve geleceğin üretim modelleri ekseninde sosyal bilimler ile mühendislik ve fen bilimlerini bir araya getiren, uluslararası hakemli ve açık erişimli bir akademik yayındır.
              </p>

              <a href="#" className="btn btn-light-outline rounded-full px-8">
                Detay
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
