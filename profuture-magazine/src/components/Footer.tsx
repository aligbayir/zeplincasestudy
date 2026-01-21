
const Footer = () => {
    const contactInfo = [
        {
            label: "Dergi Editörü",
            content: (
                <>
                    <h4 className="text-white text-[18px] font-bold">Prof. Dr. Elif Başkaya Acar</h4>
                    <a href="mailto:elif@gmail.com" className="text-[#D71D1D] text-[15px] font-normal">elif@gmail.com</a>
                </>
            ),
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor" />
                </svg>
            )
        },
        {
            label: "Mail Adresi",
            content: <h4 className="text-white text-[18px] font-bold">profuture@gmail.com</h4>,
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor" />
                </svg>
            )
        },
        {
            label: "Profuture Teknoloji Yayınevi",
            content: (
                <p className="text-white text-[15px] font-normal leading-snug w-[300px]">
                    Ahmet Kemal Mahallesi 1245. Cadde No: 10 Çankaya/Ankara
                </p>
            ),
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor" />
                </svg>
            )
        }
    ];

    return (
        <footer className="w-full bg-[#161F3C] text-white flex flex-col items-center">
            {/* Main Content Area */}
            <div className="w-full max-w-[1728px] px-5 lg:px-[139px] py-[60px] flex flex-col gap-[40px]">

                {/* Info Columns */}
                <div className="flex flex-col lg:flex-row items-start justify-between gap-[40px] w-full">
                    {contactInfo.map((item, index) => (
                        <div key={index} className="flex items-center gap-[20px]">
                            <div className="w-[50px] h-[50px] rounded-full border border-gray-600 flex items-center justify-center text-gray-400">
                                {item.icon}
                            </div>
                            <div className="flex flex-col gap-[5px]">
                                <span className="text-[#888B96] text-[14px] font-normal">{item.label}</span>
                                {item.content}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-[#2E3345]"></div>

                {/* Legal Text */}
                <p className="text-[#888B96] text-[14px] leading-[24px] text-center font-light italic">
                    Bu sitede yer alan tüm yazılı, görsel ve uygulama içerikleri kaynak gösterilmeden kullanılamaz. Site içerisinde sunulan bilgiler yalnızca bilgilendirme amacıyla hazırlanmış olup, bu bilgilerin kullanımından doğabilecek her türlü sorumluluk kullanıcıya aittir. Siteye erişim sağlayan kullanıcılar, bu şartları okumuş, anlamış ve kabul etmiş sayılır.
                </p>
            </div>

            {/* Bottom Red Bar */}
            <div className="w-full bg-[#D71D1D] py-[15px] flex items-center justify-center">
                <span className="text-white text-[14px] font-medium">Profuture Teknoloji - Tüm Hakları Saklıdır. © 2025</span>
            </div>
        </footer>
    );
};

export default Footer;
