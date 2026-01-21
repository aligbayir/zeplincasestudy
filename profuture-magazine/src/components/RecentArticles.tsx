import React from 'react';

export const RecentArticles: React.FC = () => {
    const emailIcon = "data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.9299 6.8855L15 5.53455V3C15 1.75928 13.9907 0.75 12.75 0.75H5.25C4.00928 0.75 3 1.75928 3 3V5.53455L1.07007 6.8855C0.869385 7.02576 0.75 7.25537 0.75 7.5V13.5C0.75 15.5676 2.43237 17.25 4.5 17.25H13.5C15.5676 17.25 17.25 15.5676 17.25 13.5V7.5C17.25 7.25537 17.1306 7.02576 16.9299 6.8855ZM5.25 2.25H12.75C13.1638 2.25 13.5 2.58655 13.5 3V8.68437L9 11.8345L4.5 8.68433V3C4.5 2.58655 4.83618 2.25 5.25 2.25ZM13.5 15.75H4.5C3.25928 15.75 2.25 14.7407 2.25 13.5V8.94022L3.3186 9.68829C3.31915 9.68866 3.31952 9.68921 3.32007 9.68958L5.45764 11.1858L4.71973 12.0015C4.44141 12.3087 4.46558 12.783 4.77246 13.0609C4.91602 13.1906 5.09619 13.2546 5.27563 13.2546C5.47998 13.2546 5.68359 13.1715 5.83154 13.0078L6.6958 12.0526L8.57007 13.3645C8.69897 13.455 8.84985 13.5 9 13.5C9.15015 13.5 9.30102 13.455 9.42993 13.3645L11.3042 12.0526L12.1685 13.0078C12.3164 13.1715 12.52 13.2546 12.7244 13.2546C12.9038 13.2546 13.084 13.1906 13.2275 13.0609C13.5344 12.783 13.5586 12.3087 13.2803 12.0015L12.5424 11.1858L14.6799 9.68958C14.6804 9.68926 14.6807 9.68884 14.6811 9.68852L15.75 8.94026V13.5C15.75 14.7407 14.7407 15.75 13.5 15.75ZM6 7.5C6 7.08582 6.33545 6.75 6.75 6.75H11.25C11.6646 6.75 12 7.08582 12 7.5C12 7.91419 11.6646 8.25 11.25 8.25H6.75C6.33545 8.25 6 7.91419 6 7.5ZM6 4.5C6 4.08582 6.33545 3.75 6.75 3.75H11.25C11.6646 3.75 12 4.08582 12 4.5C12 4.91419 11.6646 5.25 11.25 5.25H6.75C6.33545 5.25 6 4.91419 6 4.5Z' fill='%232A2C31'/%3E%3C/svg%3E";
    const downloadIcon = "data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.8574 11.085C17.4858 11.0851 17.9999 11.6018 18 12.2334C18 15.4153 15.4227 18 12.2627 18H5.7373C2.57159 18 0 15.4095 0 12.2334C0.000120876 11.6018 0.514207 11.0851 1.14258 11.085C1.77108 11.085 2.28601 11.6017 2.28613 12.2334C2.28613 14.146 3.83445 15.7031 5.7373 15.7031H12.2627C14.1656 15.7031 15.7139 14.146 15.7139 12.2334C15.714 11.6017 16.2289 11.085 16.8574 11.085ZM9.0166 0C9.68517 0 10.2285 0.551413 10.2285 1.21191V9.52832L13.7422 6.04199C14.2108 5.57677 15.0285 5.57677 15.4971 6.04199C15.9827 6.53015 15.9827 7.30563 15.4971 7.78809L10.0225 13.2217C9.82252 13.4341 9.58836 13.6698 9.1543 13.7617C9.08016 13.7846 9.00578 13.7842 8.93164 13.7842C8.40617 13.7842 8.02875 13.4056 7.88574 13.2676V13.2617L2.52539 7.94336C2.27968 7.70213 2.14272 7.34547 2.14844 6.99512C2.15429 6.64493 2.32026 6.30667 2.58301 6.07129C3.09717 5.62342 3.8795 5.63997 4.36523 6.12207L7.79395 9.52832V1.21191C7.79395 0.540027 8.34816 0.000161438 9.0166 0Z' fill='%232A2C31'/%3E%3C/svg%3E";
  
    return (
      <section className="px-5 lg:px-[144px] py-[60px] bg-white">
        <div className="flex gap-[60px] justify-center items-center lg:items-start flex-col lg:flex-row">
          
          {/* Sidebar / Cover Area */}
          <div className="flex flex-col gap-[30px]">
             <div className="flex flex-col gap-[12px] w-full lg:w-[293px]">
               <span className="text-text-gray text-[22px] font-medium">Profuture Teknoloji Dergisi</span>
               <h2 className="text-primary-red text-[28px] font-bold">Güncel Yazılar</h2>
               
               <button className="flex w-auto h-[55px] px-6 py-[17px] items-center gap-[10px] rounded-[50px] border border-[#ACB1C6] text-text-dark text-[17px] transition-colors duration-200 hover:bg-[#F0F0F3] self-start">
                  <span>Tümünü Görüntüle</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9639 7.81854C15.8593 7.309 15.5836 7.03981 15.3364 6.80907L9.03257 0.425417C8.4716 -0.141806 7.56835 -0.141806 7.00738 0.425417C6.73165 0.694607 6.58903 1.05994 6.58903 1.45411C6.58903 1.83867 6.74115 2.204 7.00738 2.4828L11.0578 6.57834H1.39767C0.627526 6.57834 0 7.21286 0 8.0012C0 8.78955 0.627526 9.41445 1.39767 9.41445H11.0578L7.10245 13.4138C6.54148 13.9811 6.52247 14.8944 7.04541 15.4905C7.32114 15.7981 7.71097 15.9904 8.11981 16H8.16735C8.56668 16 8.93749 15.8462 9.22273 15.5578L15.4029 9.3087C15.5836 9.12603 16.1255 8.57804 15.9734 7.82815L15.9639 7.81854Z" fill="#2A2C31"/>
                  </svg>
               </button>
             </div>
  
             <div className="relative w-full max-w-[466px]">
                <div className="hidden lg:flex absolute -left-[45px] top-[155px] -rotate-90 w-[155px] h-[65px] bg-primary-red text-white items-center justify-center font-bold text-[25px] rounded-t-[25px]">Son Sayı</div>
                <img src="/images/4ea01484c7dd245bdbf49f971e18826446c35e46.png" className="w-full h-auto rounded-[25px] border-[5px] border-[#FFD9DA] object-cover" alt="Son Sayı Cover" />
             </div>
          </div>
  
          {/* Article List */}
          <div className="flex flex-col gap-5 w-full max-w-[951px]">
            
            {/* Article 1 */}
            <article className="w-full p-5 rounded-[20px] border-2 border-[#DFE3F1] bg-white shadow-[0_5px_15px_0_rgba(188,188,188,0.25)] flex flex-col gap-[15px]">
              <div className="flex items-center gap-[15px] justify-between flex-wrap">
                 <span className="px-[10px] py-[3px] rounded-[8px] text-[14px] bg-primary-blue text-white">İklim</span>
                 <span className="px-[10px] py-[3px] rounded-[8px] text-[14px] bg-[#F6F8FF] text-primary-dark">Araştırma Makalesi</span>
                 <div className="ml-auto">
                   <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.59982 4.43729C7.58985 4.3573 7.57515 4.29224 7.55573 4.23731C7.53631 4.18239 7.50639 4.13706 7.47228 4.09226C7.34893 3.93228 7.16207 3.85229 6.9159 3.85229H6.34955V6.36931H6.9159C7.16207 6.36931 7.34945 6.29412 7.47228 6.13414C7.50692 6.08934 7.53631 6.03922 7.55573 5.98429C7.57568 5.93416 7.59037 5.8643 7.59982 5.78911C7.6098 5.70912 7.61977 5.619 7.61977 5.50382C7.62449 5.39343 7.62449 5.26331 7.62449 5.11347C7.62449 4.96362 7.62449 4.82817 7.61977 4.71832C7.61977 4.60847 7.6098 4.51301 7.59982 4.43835V4.43729Z" fill="#676A73"/>
                      <path d="M13.4019 4.97057C13.4019 3.28812 12.0597 1.92456 10.4037 1.92456H2.99814C1.34213 1.92456 0 3.28812 0 4.97057C0 6.65302 1.34213 8.01658 2.99814 8.01658H10.4032C12.0592 8.01658 13.4013 6.65302 13.4013 4.97057H13.4019ZM22 5.10228C22 2.28931 19.7472 0 16.9779 0H13.9645C13.4097 0 12.9599 0.456475 12.9599 1.02067C12.9599 1.58486 13.4097 2.04134 13.9645 2.04134H16.9779C18.6397 2.04134 19.9913 3.4145 19.9913 5.10281V19.8988C19.9913 21.5871 18.6397 22.9603 16.9779 22.9603H8.94297C7.28118 22.9603 5.92961 21.5871 5.92961 19.8988V11.2252C5.92961 10.661 5.47978 10.2046 4.92498 10.2046C4.37017 10.2046 3.92035 10.661 3.92035 11.2252V19.8988C3.92035 22.7118 6.17315 25.0011 8.94244 25.0011H16.9774C19.7461 25.0011 21.9995 22.7123 21.9995 19.8988V5.10228H22Z" fill="#676A73"/>
                   </svg>
                 </div>
              </div>
              
              <h3 className="text-[20px] font-bold text-[#2A2C31]">Türkiye’nin Teknoloji Politikaları ve Döngüsel Ekonomi</h3>
              
              <div className="flex items-center gap-[25px] flex-wrap">
                 <div className="flex items-center gap-[6px] bg-[#F0F0F3] px-[10px] py-[5px] rounded-[13px] text-[16px]">
                   <span className="info-icon page-icon"></span>
                   <span className="info-text">Sayfa: <strong>12-28</strong></span>
                 </div>
                 
                 <div className="flex items-center gap-[6px] bg-[#F0F0F3] px-[10px] py-[5px] rounded-[13px] text-[16px]">
                   <span className="info-icon author-icon"></span>
                   <span className="info-text">Elif Başkaya Acar,  Emre Taran,  Halil Başar</span>
                 </div>
              </div>
              
              <div className="flex justify-end gap-[10px] mt-[10px]">
                 <button 
                  className="w-[55px] h-[55px] rounded-full border border-[#ACB1C6] bg-center bg-no-repeat transition-colors duration-200 hover:bg-gray-50" 
                  style={{ backgroundImage: `url('${emailIcon}')` }}
                 ></button>
                 <button 
                  className="w-[55px] h-[55px] rounded-full border border-[#ACB1C6] bg-center bg-no-repeat transition-colors duration-200 hover:bg-gray-50" 
                  style={{ backgroundImage: `url('${downloadIcon}')` }}
                 ></button>
                 <button className="flex w-[150px] h-[55px] px-[24px] py-[17px] items-center justify-center gap-[10px] rounded-[50px] bg-primary-blue text-white text-[17px] transition-transform duration-200 hover:-translate-y-0.5">
                   <span>Görüntüle</span>
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M11.9931 20C7.51361 20 3.70795 16.415 1.83832 14.2783C0.720642 13.001 0.720642 10.999 1.83783 9.72168C3.70795 7.58496 7.51361 4 11.9931 4C16.4716 4 20.2773 7.58496 22.1484 9.72168C23.2656 10.999 23.2656 13.001 22.1484 14.2783C20.2773 16.415 16.4716 20 11.9931 20ZM11.9931 6C8.30316 6 4.98969 9.15625 3.3432 11.0381C2.87982 11.5684 2.87982 12.4316 3.34369 12.9619C4.98969 14.8438 8.30316 18 11.9931 18C15.6816 18 18.996 14.8428 20.6425 12.9619C21.1064 12.4316 21.1064 11.5684 20.6425 11.0381C18.996 9.15625 15.6816 6 11.9931 6ZM11.9931 16C9.78754 16 7.9931 14.2061 7.9931 12C7.9931 9.79395 9.78754 8 11.9931 8C14.1992 8 15.9931 9.79395 15.9931 12C15.9931 14.2061 14.1992 16 11.9931 16ZM11.9931 10C10.8901 10 9.9931 10.8975 9.9931 12C9.9931 13.1025 10.8901 14 11.9931 14C13.0956 14 13.9931 13.1025 13.9931 12C13.9931 10.8975 13.0956 10 11.9931 10Z" fill="white"/>
                   </svg>
                 </button>
              </div>
            </article>
            
            {/* Article 2 (Duplicate for visual) */}
            <article className="w-full p-5 rounded-[20px] border-2 border-[#DFE3F1] bg-white shadow-[0_5px_15px_0_rgba(188,188,188,0.25)] flex flex-col gap-[15px]">
               {/* Same content as Article 1, ensuring className usage */}
               {/* ... (reusing the same structure as above) ... */}
               <div className="flex items-center gap-[15px] justify-between flex-wrap">
                 <span className="px-[10px] py-[3px] rounded-[8px] text-[14px] bg-primary-blue text-white">İklim</span>
                 <span className="px-[10px] py-[3px] rounded-[8px] text-[14px] bg-[#F6F8FF] text-primary-dark">Araştırma Makalesi</span>
                 <div className="ml-auto">
                   <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.59982 4.43729C7.58985 4.3573 7.57515 4.29224 7.55573 4.23731C7.53631 4.18239 7.50639 4.13706 7.47228 4.09226C7.34893 3.93228 7.16207 3.85229 6.9159 3.85229H6.34955V6.36931H6.9159C7.16207 6.36931 7.34945 6.29412 7.47228 6.13414C7.50692 6.08934 7.53631 6.03922 7.55573 5.98429C7.57568 5.93416 7.59037 5.8643 7.59982 5.78911C7.6098 5.70912 7.61977 5.619 7.61977 5.50382C7.62449 5.39343 7.62449 5.26331 7.62449 5.11347C7.62449 4.96362 7.62449 4.82817 7.61977 4.71832C7.61977 4.60847 7.6098 4.51301 7.59982 4.43835V4.43729Z" fill="#676A73"/>
                      <path d="M13.4019 4.97057C13.4019 3.28812 12.0597 1.92456 10.4037 1.92456H2.99814C1.34213 1.92456 0 3.28812 0 4.97057C0 6.65302 1.34213 8.01658 2.99814 8.01658H10.4032C12.0592 8.01658 13.4013 6.65302 13.4013 4.97057H13.4019ZM22 5.10228C22 2.28931 19.7472 0 16.9779 0H13.9645C13.4097 0 12.9599 0.456475 12.9599 1.02067C12.9599 1.58486 13.4097 2.04134 13.9645 2.04134H16.9779C18.6397 2.04134 19.9913 3.4145 19.9913 5.10281V19.8988C19.9913 21.5871 18.6397 22.9603 16.9779 22.9603H8.94297C7.28118 22.9603 5.92961 21.5871 5.92961 19.8988V11.2252C5.92961 10.661 5.47978 10.2046 4.92498 10.2046C4.37017 10.2046 3.92035 10.661 3.92035 11.2252V19.8988C3.92035 22.7118 6.17315 25.0011 8.94244 25.0011H16.9774C19.7461 25.0011 21.9995 22.7123 21.9995 19.8988V5.10228H22Z" fill="#676A73"/>
                   </svg>
                 </div>
              </div>
              
              <h3 className="text-[20px] font-bold text-[#2A2C31]">Türkiye’nin Teknoloji Politikaları ve Döngüsel Ekonomi</h3>
              
              <div className="flex items-center gap-[25px] flex-wrap">
                 <div className="flex items-center gap-[6px] bg-[#F0F0F3] px-[10px] py-[5px] rounded-[13px] text-[16px]">
                   <span className="info-icon page-icon"></span>
                   <span className="info-text">Sayfa: <strong>12-28</strong></span>
                 </div>
                 
                 <div className="flex items-center gap-[6px] bg-[#F0F0F3] px-[10px] py-[5px] rounded-[13px] text-[16px]">
                   <span className="info-icon author-icon"></span>
                   <span className="info-text">Elif Başkaya Acar,  Emre Taran,  Halil Başar</span>
                 </div>
              </div>

               <div className="flex justify-end gap-[10px] mt-[10px]">
                 <button 
                  className="w-[55px] h-[55px] rounded-full border border-[#ACB1C6] bg-center bg-no-repeat transition-colors duration-200 hover:bg-gray-50" 
                  style={{ backgroundImage: `url('${emailIcon}')` }}
                 ></button>
                 <button 
                  className="w-[55px] h-[55px] rounded-full border border-[#ACB1C6] bg-center bg-no-repeat transition-colors duration-200 hover:bg-gray-50" 
                  style={{ backgroundImage: `url('${downloadIcon}')` }}
                 ></button>
                 <button className="flex w-[150px] h-[55px] px-[24px] py-[17px] items-center justify-center gap-[10px] rounded-[50px] bg-primary-blue text-white text-[17px] transition-transform duration-200 hover:-translate-y-0.5">
                   <span>Görüntüle</span>
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M11.9931 20C7.51361 20 3.70795 16.415 1.83832 14.2783C0.720642 13.001 0.720642 10.999 1.83783 9.72168C3.70795 7.58496 7.51361 4 11.9931 4C16.4716 4 20.2773 7.58496 22.1484 9.72168C23.2656 10.999 23.2656 13.001 22.1484 14.2783C20.2773 16.415 16.4716 20 11.9931 20ZM11.9931 6C8.30316 6 4.98969 9.15625 3.3432 11.0381C2.87982 11.5684 2.87982 12.4316 3.34369 12.9619C4.98969 14.8438 8.30316 18 11.9931 18C15.6816 18 18.996 14.8428 20.6425 12.9619C21.1064 12.4316 21.1064 11.5684 20.6425 11.0381C18.996 9.15625 15.6816 6 11.9931 6ZM11.9931 16C9.78754 16 7.9931 14.2061 7.9931 12C7.9931 9.79395 9.78754 8 11.9931 8C14.1992 8 15.9931 9.79395 15.9931 12C15.9931 14.2061 14.1992 16 11.9931 16ZM11.9931 10C10.8901 10 9.9931 10.8975 9.9931 12C9.9931 13.1025 10.8901 14 11.9931 14C13.0956 14 13.9931 13.1025 13.9931 12C13.9931 10.8975 13.0956 10 11.9931 10Z" fill="white"/>
                   </svg>
                 </button>
              </div>
            </article>

          </div>
        </div>
      </section>
    );
};
