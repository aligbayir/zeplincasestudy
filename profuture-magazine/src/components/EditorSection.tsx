import React from 'react';

export const EditorSection: React.FC = () => {
    return (
        <section className="bg-primary-dark text-white px-5 lg:px-[144px] py-[60px] flex flex-col gap-10">
            <div className="flex justify-center items-start gap-10 lg:gap-[100px] flex-wrap flex-col lg:flex-row items-center">
                {/* Editor Info */}
                <div className="flex items-center gap-5">
                    {/* Large photo hidden as per previous CSS decision/design */}
                    <img
                        src="/images/3d4883268dce5a57b2c0bda392b9db410b59c678.png"
                        className="w-[150px] h-auto rounded-[20px] object-cover absolute top-[-200px] right-[144px] hidden"
                        alt="Editor Photo"
                    />

                    <div className="flex items-center gap-[17px]">
                        <div className="w-[55px] h-[55px] rounded-full border border-[#ACB1C6] flex items-center justify-center shrink-0">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="white" />
                            </svg>
                        </div>
                        <div className="flex flex-col gap-[3px]">
                            <span className="font-light text-[16.5px] opacity-90">Dergi Editörü</span>
                            <span className="font-bold text-[18px]">Prof. Dr. Elif Başkaya Acar</span>
                            <span className="font-light text-[16px] opacity-80">elif@gmail.com</span>
                        </div>
                    </div>
                </div>

                {/* Mail Info */}
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-[17px]">
                        <div className="w-[55px] h-[55px] rounded-full border border-[#ACB1C6] flex items-center justify-center shrink-0">
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.75 2.625H5.25C2.83777 2.625 0.875 4.58777 0.875 7V14C0.875 16.4122 2.83777 18.375 5.25 18.375H15.75C18.1622 18.375 20.125 16.4122 20.125 14V7C20.125 4.58777 18.1622 2.625 15.75 2.625ZM14.0908 10.2289L18.3207 6.46883C18.3561 6.64047 18.375 6.81805 18.375 7V14C18.375 14.1595 18.3553 14.314 18.3279 14.4657L14.0908 10.2289ZM15.75 4.375C16.3703 4.375 16.9334 4.60016 17.383 4.96118L11.0815 10.5624C10.7491 10.858 10.2488 10.8563 9.91895 10.5632L3.61696 4.96118C4.06669 4.60016 4.62975 4.375 5.25 4.375H15.75ZM2.67205 14.4657C2.64471 14.314 2.625 14.1595 2.625 14V7C2.625 6.81805 2.64385 6.64047 2.67926 6.46888L6.909 10.2291L2.67205 14.4657ZM5.25 16.625C4.61864 16.625 4.0465 16.3919 3.59319 16.0192L8.21899 11.3937L8.75641 11.8715C9.2533 12.3124 9.87665 12.5328 10.5 12.5328C11.1234 12.5328 11.7467 12.3124 12.244 11.8706L12.7808 11.3935L17.4068 16.0192C16.9535 16.3919 16.3814 16.625 15.75 16.625H5.25Z" fill="white" />
                            </svg>
                        </div>
                        <div className="flex flex-col gap-[3px]">
                            <span className="font-light text-[16.5px] opacity-90">Mail Adresi</span>
                            <span className="font-bold text-[18px]">profuture@gmail.com</span>
                        </div>
                    </div>
                </div>

                {/* Address Info */}
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-[17px]">
                        <div className="w-[55px] h-[55px] rounded-full border border-[#ACB1C6] flex items-center justify-center shrink-0">
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.0001 7.87504C14.0001 5.94474 12.4304 4.37504 10.5001 4.37504C8.56976 4.37504 7.00006 5.94474 7.00006 7.87504C7.00006 9.80533 8.56976 11.375 10.5001 11.375C12.4304 11.375 14.0001 9.80533 14.0001 7.87504ZM10.5001 9.62504C9.53533 9.62504 8.75006 8.83976 8.75006 7.87504C8.75006 6.91031 9.53533 6.12504 10.5001 6.12504C11.4648 6.12504 12.2501 6.91031 12.2501 7.87504C12.2501 8.83976 11.4648 9.62504 10.5001 9.62504ZM15.7501 18.375H12.3957L13.0772 16.7404C13.6677 15.3228 14.5572 13.9283 15.8748 12.3517C16.9233 11.099 17.5001 9.50883 17.5001 7.87504C17.5001 5.7764 16.5704 3.8068 14.9494 2.47037C13.3301 1.13651 11.2033 0.605015 9.10211 1.0109C6.28399 1.55948 4.07257 3.83841 3.59918 6.68216C3.26935 8.668 3.76239 10.6205 4.98602 12.18C6.51556 14.1308 7.49652 15.7167 8.16559 17.3232L8.60426 18.375H5.25006C4.76642 18.375 4.37506 18.7664 4.37506 19.25C4.37506 19.7337 4.76642 20.125 5.25006 20.125H15.7501C16.2337 20.125 16.6251 19.7337 16.6251 19.25C16.6251 18.7664 16.2337 18.375 15.7501 18.375ZM9.78057 16.6498C9.04827 14.8921 7.99468 13.1806 6.3626 11.0999C5.44573 9.93094 5.07745 8.46464 5.32525 6.96927C5.67388 4.87577 7.36492 3.13175 9.43707 2.72843C9.78656 2.66007 10.1378 2.62674 10.4855 2.62674C11.7083 2.62674 12.8901 3.04117 13.8368 3.82132C15.0528 4.82364 15.7501 6.30106 15.7501 7.87503C15.7501 9.09952 15.3177 10.2907 14.5324 11.2289C13.0977 12.9447 12.1219 14.4828 11.4622 16.0671L10.5001 18.375L9.78057 16.6498Z" fill="white" />
                            </svg>
                        </div>
                        <div className="flex flex-col gap-[3px]">
                            <span className="font-bold text-[18px]">Profuture Teknoloji Yayınevi</span>
                            <span className="font-normal text-[16px]">Ahmet Kemal Mahallesi 1245. Cadde No: 10 Çankaya/Ankara</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center gap-5 mt-10 text-center">
                <div className="w-full h-[1px] bg-[#ACB1C6] opacity-50"></div>
                <div className="text-[15px] font-light italic max-w-[1200px] text-white/80">
                    Bu sitede yer alan tüm yazılı, görsel ve uygulama içerikleri kaynak gösterilmeden kullanılamaz. Site içerisinde sunulan bilgiler yalnızca bilgilendirme amacıyla hazırlanmış olup, bu bilgilerin kullanımından doğabilecek her türlü sorumluluk kullanıcıya aittir. Siteye erişim sağlayan kullanıcılar, bu şartları okumuş, anlamış ve kabul etmiş sayılır.
                </div>
                <div className="text-[16px] font-normal">
                    Profuture Teknoloji - Tüm Hakları Saklıdır. © 2025
                </div>
            </div>
        </section>
    );
};
