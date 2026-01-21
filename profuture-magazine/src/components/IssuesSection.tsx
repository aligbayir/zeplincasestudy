import React from 'react';

export const IssuesSection: React.FC = () => {
    const issues = [
        {
            id: 1,
            title: "Teknoloji ve Dijital Dergisi",
            volume: 1,
            issue: 1,
            date: "Aralık 2022",
            isNew: true,
            isLatest: false,
            image: "/images/maskgroup.png"
        },
        {
            id: 2,
            title: "Teknoloji ve Dijital Dergisi",
            volume: 1,
            issue: 1,
            date: "Aralık 2022",
            isNew: true,
            isLatest: false,
            image: "/images/maskgroup.png"
        },
        {
            id: 3,
            title: "Teknoloji ve Dijital Dergisi",
            volume: 1,
            issue: 1,
            date: "Aralık 2022",
            isNew: true,
            isLatest: true,
            image: "/images/maskgroup.png"
        }
    ];

    return (
        <section className="w-full bg-white py-20 overflow-hidden">
            <div className="max-w-[1728px] mx-auto px-5 lg:px-[144px]">

                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-end mb-10">
                    <div>
                        <span className="block text-[#676A73] text-[16px] font-medium mb-1">Sayılar</span>
                        <div className="flex items-center gap-4">
                            <h2 className="text-[32px] font-bold text-primary-navy">Dergiler</h2>
                            {/* Navigation Arrows */}
                            <div className="flex gap-2">
                                <button className="w-8 h-8 rounded-full bg-[#EAEAEA] flex items-center justify-center text-[#676A73] hover:bg-primary-blue hover:text-white transition-colors">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                </button>
                                <button className="w-8 h-8 rounded-full bg-[#E5E7EB] flex items-center justify-center text-primary-blue hover:bg-primary-blue hover:text-white transition-colors">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#EAEAEA] bg-white text-text-dark text-sm font-medium hover:border-primary-blue hover:text-primary-blue transition-colors">
                        Tümünü Görüntüle
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </a>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {issues.map((item) => (
                        <div key={item.id} className="flex flex-col sm:flex-row p-4 gap-[15px] rounded-[20px] border border-[#E9F4F8] bg-white overflow-hidden relative shadow-sm hover:shadow-md transition-shadow duration-300">

                            {/* Latest Issue Ribbon */}
                            {item.isLatest && (
                                <div className="absolute top-[28px] left-[-32px] bg-[#DB0D15] text-white text-[10px] font-bold py-1 px-10 -rotate-45 z-20 shadow-md flex justify-center items-center h-[25px] w-[120px]">
                                    Son Sayı
                                </div>
                            )}

                            {/* Cover Image */}
                            <div className="w-full sm:w-[191px] h-[285px] shrink-0 relative overflow-hidden rounded-[20px] sm:rounded-[35px] bg-[#D9D9D9]">
                                {/* Using the specific image from the snippet as placeholder or the dynamic one */}
                                <img
                                    src={item.image}
                                    alt="Cover"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Right Content */}
                            <div className="flex flex-col justify-center items-end gap-[41px] relative flex-1">

                                {/* Info Block */}
                                <div className="flex flex-col items-start gap-[11px] w-full relative">

                                    {/* PDF Icon and New Badge Row */}
                                    <div className="flex items-start gap-[10px] w-full relative mb-1">
                                        {/* Icon: pdf */}
                                        <div className="flex items-center gap-[10px] relative">
                                            <svg width="22" height="25" viewBox="0 0 22 25" fill="none" className="text-[#676A73]">
                                                <path d="M7.59979 4.43729C7.58982 4.3573 7.57512 4.29224 7.5557 4.23731C7.53628 4.18239 7.50636 4.13706 7.47225 4.09226C7.3489 3.93228 7.16204 3.85229 6.91587 3.85229H6.34952V6.36931H6.91587C7.16204 6.36931 7.34942 6.29412 7.47225 6.13414C7.50689 6.08934 7.53628 6.03922 7.5557 5.98429C7.57565 5.93416 7.59034 5.8643 7.59979 5.78911C7.60976 5.70912 7.61974 5.619 7.61974 5.50382C7.62446 5.39343 7.62446 5.26331 7.62446 5.11347C7.62446 4.96362 7.62446 4.82817 7.61974 4.71832C7.61974 4.60847 7.60976 4.51301 7.59979 4.43835V4.43729Z" fill="currentColor" />
                                                <path d="M3.5997 3.85181H2.90527V4.91247H3.5997C3.76713 4.91247 3.90518 4.86234 4.00386 4.76742C4.09729 4.6725 4.14662 4.54238 4.14662 4.3872C4.14662 4.22722 4.09729 4.09711 4.00386 4.00165C3.90518 3.9014 3.76766 3.85181 3.5997 3.85181Z" fill="currentColor" />
                                                <path d="M13.4019 4.97057C13.4019 3.28812 12.0597 1.92456 10.4037 1.92456H2.99814C1.34213 1.92456 0 3.28812 0 4.97057C0 6.65302 1.34213 8.01658 2.99814 8.01658H10.4032C12.0592 8.01658 13.4013 6.65302 13.4013 4.97057H13.4019ZM4.80741 4.84739C4.7481 4.99723 4.66937 5.12255 4.56124 5.23294C4.45259 5.34332 4.3198 5.43291 4.16706 5.49317C4.00959 5.55823 3.83218 5.58809 3.63535 5.58809H2.90628V7.04444H2.16252V3.18093H3.63535C3.83218 3.18093 4.00959 3.2108 4.16706 3.27585C4.3198 3.33611 4.45259 3.42623 4.56124 3.53609C4.66937 3.64594 4.74863 3.77606 4.80741 3.92164C4.86148 4.06669 4.89087 4.22187 4.89087 4.38718C4.89087 4.54716 4.86148 4.70234 4.80741 4.84739ZM8.36351 5.5481C8.35878 5.68301 8.35353 5.80353 8.33884 5.91338C8.32414 6.02324 8.29947 6.12349 8.26483 6.21841C8.23019 6.30853 8.18609 6.39865 8.12678 6.47864C7.99399 6.67382 7.83127 6.81887 7.64914 6.90899C7.46175 6.99911 7.24025 7.04391 6.97939 7.04391H5.60996V3.18093H6.97939C7.24025 3.18093 7.46228 3.22573 7.64914 3.31585C7.83127 3.40597 7.99399 3.55102 8.12678 3.74619C8.18609 3.82618 8.23019 3.91631 8.26483 4.00643C8.29947 4.10135 8.32414 4.2016 8.33884 4.31145C8.35353 4.42184 8.35878 4.54183 8.36351 4.67674C8.36823 4.80686 8.36823 4.95191 8.36823 5.11242C8.36823 5.2724 8.36823 5.41745 8.36351 5.54756V5.5481ZM9.77702 7.04444H9.03326V3.18093H11.5406V3.85125H9.77702V4.80206H11.2792V5.47771H9.77702V7.04391V7.04444Z" fill="currentColor" />
                                                <path d="M21.9996 5.10228C21.9996 2.28931 19.7468 0 16.9775 0H13.9641C13.4093 0 12.9595 0.456475 12.9595 1.02067C12.9595 1.58486 13.4093 2.04134 13.9641 2.04134H16.9775C18.6393 2.04134 19.9908 3.4145 19.9908 5.10281V19.8988C19.9908 21.5871 18.6393 22.9603 16.9775 22.9603H8.94254C7.28076 22.9603 5.92918 21.5871 5.92918 19.8988V11.2252C5.92918 10.661 5.47935 10.2046 4.92455 10.2046C4.36975 10.2046 3.91992 10.661 3.91992 11.2252V19.8988C3.91992 22.7118 6.17272 25.0011 8.94201 25.0011H16.9769C19.7457 25.0011 21.999 22.7123 21.999 19.8988V5.10228H21.9996Z" fill="currentColor" />
                                                <path d="M14.0716 9.71985C14.0668 9.56787 14.0448 9.42549 14.0065 9.2927C13.9487 9.0794 13.8516 8.89009 13.7167 8.73544C13.7167 8.73544 13.7152 8.73384 13.712 8.73064C13.4968 8.48534 13.1976 8.34509 12.8927 8.34509C12.5877 8.34509 12.3032 8.48001 12.0975 8.72798C11.8943 8.97328 11.7857 9.30977 11.781 9.70492C11.7736 10.3086 11.8219 10.8808 11.9237 11.4087C11.9332 11.4503 11.9405 11.4924 11.9505 11.534C12.0518 12.0129 12.2019 12.4667 12.3951 12.889C12.1678 13.3578 11.9384 13.7631 11.7789 14.0377C11.6581 14.2462 11.5253 14.4648 11.3873 14.6835C10.7664 14.7965 10.2394 14.9341 9.78063 15.1058C9.15969 15.3341 8.6621 15.6284 8.30413 15.9798C8.07213 16.2054 7.91519 16.4465 7.83751 16.6966C7.7551 16.9541 7.76035 17.2122 7.85221 17.4426C7.93671 17.6559 8.08893 17.8356 8.29206 17.9583C8.34035 17.9876 8.39126 18.0121 8.44428 18.0345C8.59912 18.0985 8.76813 18.1326 8.94449 18.1326C9.35285 18.1326 9.77328 17.9535 10.1286 17.6319C10.7905 17.0304 11.4744 16.0636 11.8781 15.4519C12.2093 15.4002 12.5693 15.3559 12.9751 15.3122C13.4538 15.2631 13.8763 15.2338 14.2605 15.2189C14.3791 15.3271 14.4925 15.4301 14.6012 15.5282C15.2053 16.0758 15.6641 16.471 16.0798 16.7483C16.0798 16.751 16.0824 16.7509 16.0845 16.7509C16.2488 16.8613 16.4057 16.952 16.5627 17.0261C16.739 17.1098 16.918 17.1536 17.1017 17.1536C17.3337 17.1536 17.551 17.0826 17.7321 16.9525C17.9158 16.8176 18.0486 16.6235 18.109 16.4049C18.1793 16.1425 18.1378 15.8503 17.993 15.5874C17.9132 15.445 17.8045 15.3101 17.6691 15.1874C17.5578 15.0845 17.4277 14.9885 17.2802 14.9C16.686 14.5443 15.8378 14.3721 14.6852 14.3721H14.5692C14.5062 14.3134 14.4411 14.2542 14.3734 14.1929C13.9361 13.7929 13.5881 13.3583 13.3173 12.8746C13.849 11.6839 14.1025 10.6237 14.071 9.72038L14.0716 9.71985ZM10.232 16.2987C10 16.5835 9.77801 16.824 9.57698 17.0059C9.40534 17.1632 9.21691 17.2613 9.03792 17.2858C9.00643 17.2906 8.97494 17.2933 8.94344 17.2933C8.7865 17.2933 8.65843 17.2293 8.61959 17.1312C8.57865 17.0282 8.62431 16.8293 8.87573 16.5835C9.25995 16.2102 9.86146 15.9159 10.6997 15.6924C10.5401 15.9132 10.3832 16.1148 10.231 16.2987H10.232ZM16.8624 15.6236C16.9999 15.7047 17.1038 15.7879 17.1742 15.8689C17.2902 15.9942 17.3311 16.1073 17.3096 16.183C17.2902 16.2593 17.2056 16.3105 17.1017 16.3105C17.0414 16.3105 16.9784 16.2955 16.9133 16.2641C16.802 16.2102 16.686 16.1436 16.5627 16.063C16.5579 16.063 16.5532 16.0582 16.548 16.0534C16.2603 15.8668 15.9391 15.6044 15.5428 15.253C16.106 15.3117 16.548 15.437 16.8618 15.6236H16.8624ZM12.6071 9.71505C12.6119 9.39829 12.7258 9.18499 12.8921 9.18499C13.0176 9.18499 13.1509 9.30017 13.2113 9.52148C13.2281 9.5876 13.2401 9.66386 13.2428 9.74971C13.2475 9.85263 13.2454 9.96089 13.2401 10.0713C13.2254 10.3832 13.1724 10.7144 13.0806 11.0706C13.0249 11.2988 12.9525 11.5372 12.8633 11.7852C12.762 11.4364 12.689 11.0658 12.6507 10.6707C12.6171 10.3662 12.6024 10.0494 12.6071 9.71558V9.71505ZM13.4023 14.3961L13.3635 14.3987L13.3971 14.4307C13.2979 14.4382 13.194 14.4478 13.09 14.4579C13.0249 14.4654 12.9572 14.4702 12.8895 14.4776C12.7494 14.4926 12.6119 14.507 12.4812 14.5219L12.498 14.4947L12.4712 14.4995C12.4759 14.4872 12.4833 14.475 12.4906 14.4654C12.5919 14.291 12.72 14.0676 12.858 13.81L12.8701 13.8372L12.9016 13.7711C13.0029 13.9182 13.1142 14.0633 13.2302 14.203C13.2858 14.2691 13.3435 14.3331 13.4018 14.3971L13.4023 14.3961Z" fill="currentColor" />
                                            </svg>
                                        </div>

                                        {/* Badge: YENİ */}
                                        {item.isNew && (
                                            <div className="flex px-2 py-[1px] justify-center items-center gap-[10px] rounded-[15px] bg-[#00C3D0]">
                                                <span className="text-white text-center font-inter text-[12px] font-normal leading-[18px] tracking-[0.5px] uppercase">
                                                    YENİ
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Badge: Dergi */}
                                    <div className="flex items-start gap-[10px] w-full relative">
                                        <div className="flex px-[10px] py-[3px] justify-center items-center rounded-[8px] bg-[#F6F8FF]">
                                            <div className="flex w-[36px] h-[19px] flex-col justify-center text-[#112053] font-inter text-[14px] font-normal leading-[25px]">
                                                Dergi
                                            </div>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <div className="h-[49px] w-full text-[#112053] font-inter text-[20px] font-bold leading-[25px]">
                                        {item.title}
                                    </div>

                                    {/* Volume/Issue/Date Info */}
                                    <div className="flex w-[213px] h-[63px] items-center content-center gap-x-[25px] gap-y-[10px] flex-wrap relative">

                                        {/* Volume */}
                                        <div className="flex items-start gap-[6px] relative">
                                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.1364 0H3.86364C1.73335 0 0 1.73335 0 3.86364V13.1364C0 15.2666 1.73335 17 3.86364 17H13.1364C15.2666 17 17 15.2666 17 13.1364V3.86364C17 1.73335 15.2666 0 13.1364 0ZM1.54545 3.86364C1.54545 2.58532 2.58532 1.54545 3.86364 1.54545H13.1364C14.4147 1.54545 15.4545 2.58532 15.4545 3.86364V4.63636H1.54545V3.86364ZM3.86364 15.4545C2.58532 15.4545 1.54545 14.4147 1.54545 13.1364V6.18182H4.63636V15.4545H3.86364ZM13.1364 15.4545H6.18182V6.18182H15.4545V13.1364C15.4545 14.4147 14.4147 15.4545 13.1364 15.4545Z" fill="#2A2C31" />
                                            </svg>
                                            <div className="text-center font-inter text-[16px] leading-[18px] tracking-[0.5px]">
                                                <span className="font-normal text-[#2A2C31]">Cilt: </span>
                                                <span className="font-bold text-[#2A2C31]">{item.volume}</span>
                                            </div>
                                        </div>

                                        {/* Issue */}
                                        <div className="flex items-center gap-[7px] relative">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.5 0.75H4.5C2.43237 0.75 0.75 2.43237 0.75 4.5V9C0.75 10.8108 2.04053 12.3257 3.75 12.6742V15.75H3C2.58545 15.75 2.25 16.0858 2.25 16.5C2.25 16.9142 2.58545 17.25 3 17.25H6C6.41455 17.25 6.75 16.9142 6.75 16.5C6.75 16.0858 6.41455 15.75 6 15.75H5.25V12.75H12.75V15.75H12C11.5854 15.75 11.25 16.0858 11.25 16.5C11.25 16.9142 11.5854 17.25 12 17.25H15C15.4146 17.25 15.75 16.9142 15.75 16.5C15.75 16.0858 15.4146 15.75 15 15.75H14.25V12.6742C15.9595 12.3257 17.25 10.8108 17.25 9V4.5C17.25 2.43237 15.5676 0.75 13.5 0.75ZM15.75 9C15.75 10.2407 14.7407 11.25 13.5 11.25H4.5C3.25928 11.25 2.25 10.2407 2.25 9V4.5C2.25 3.25928 3.25928 2.25 4.5 2.25H13.5C14.7407 2.25 15.75 3.25928 15.75 4.5V9Z" fill="#2A2C31" />
                                            </svg>
                                            <div className="text-center font-inter text-[16px] leading-[18px] tracking-[0.5px]">
                                                <span className="font-normal text-[#2A2C31]">Sayı:</span>
                                                <span className="font-bold text-[#2A2C31]"> {item.issue}</span>
                                            </div>
                                        </div>

                                        {/* Date */}
                                        <div className="flex items-center gap-[6px] relative">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.25 2.32581V1.5C14.25 1.08545 13.9142 0.75 13.5 0.75C13.0858 0.75 12.75 1.08545 12.75 1.5V2.25H9.75V1.5C9.75 1.08545 9.41418 0.75 9 0.75C8.58582 0.75 8.25 1.08545 8.25 1.5V2.25H5.25V1.5C5.25 1.08545 4.91418 0.75 4.5 0.75C4.08582 0.75 3.75 1.08545 3.75 1.5V2.32581C2.04053 2.6743 0.75 4.18918 0.75 6V13.5C0.75 15.5676 2.43237 17.25 4.5 17.25H13.5C15.5676 17.25 17.25 15.5676 17.25 13.5V6C17.25 4.18918 15.9595 2.6743 14.25 2.32581ZM15.75 13.5C15.75 14.7407 14.7407 15.75 13.5 15.75H4.5C3.25928 15.75 2.25 14.7407 2.25 13.5V6C2.25 5.02354 2.87888 4.19879 3.75 3.8882V4.5C3.75 4.91455 4.08582 5.25 4.5 5.25C4.91418 5.25 5.25 4.91455 5.25 4.5V3.75H8.25V4.5C8.25 4.91455 8.58582 5.25 9 5.25C9.41418 5.25 9.75 4.91455 9.75 4.5V3.75H12.75V4.5C12.75 4.91455 13.0858 5.25 13.5 5.25C13.9142 5.25 14.25 4.91455 14.25 4.5V3.8882C15.1211 4.19879 15.75 5.02354 15.75 6V13.5Z" fill="#2A2C31" />
                                            </svg>
                                            <div className="text-center font-inter text-[16px] font-bold leading-[18px] tracking-[0.5px] text-[#2A2C31]">
                                                {item.date}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center gap-[10px] relative">

                                    {/* View Button */}
                                    <button className="flex w-[55px] h-[55px] p-[17px_24px_17px_15px] items-center gap-[10px] rounded-[50px] bg-[#273D89] relative overflow-hidden transition-transform hover:scale-105">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 relative">
                                            <path d="M11.9931 20C7.51361 20 3.70795 16.415 1.83832 14.2783C0.720642 13.001 0.720642 10.999 1.83783 9.72168C3.70795 7.58496 7.51361 4 11.9931 4C16.4716 4 20.2773 7.58496 22.1484 9.72168C23.2656 10.999 23.2656 13.001 22.1484 14.2783C20.2773 16.415 16.4716 20 11.9931 20ZM11.9931 6C8.30316 6 4.98969 9.15625 3.3432 11.0381C2.87982 11.5684 2.87982 12.4316 3.34369 12.9619C4.98969 14.8438 8.30316 18 11.9931 18C15.6816 18 18.996 14.8428 20.6425 12.9619C21.1064 12.4316 21.1064 11.5684 20.6425 11.0381C18.996 9.15625 15.6816 6 11.9931 6ZM11.9931 16C9.78754 16 7.9931 14.2061 7.9931 12C7.9931 9.79395 9.78754 8 11.9931 8C14.1992 8 15.9931 9.79395 15.9931 12C15.9931 14.2061 14.1992 16 11.9931 16ZM11.9931 10C10.8901 10 9.9931 10.8975 9.9931 12C9.9931 13.1025 10.8901 14 11.9931 14C13.0956 14 13.9931 13.1025 13.9931 12C13.9931 10.8975 13.0956 10 11.9931 10Z" fill="white" />
                                        </svg>
                                    </button>

                                    {/* Download Button */}
                                    <button className="flex w-[55px] h-[55px] flex-col justify-between items-center bg-white aspect-square rounded-[100px] border border-[#ACB1C6] relative transition-colors hover:border-primary-blue hover:text-primary-blue group">
                                        <div className="w-[18px] h-[18px] shrink-0 aspect-square relative top-[18px]">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-0 fill-[#2A2C31] group-hover:fill-primary-blue transition-colors">
                                                <path d="M16.8574 11.085C17.4858 11.0851 17.9999 11.6018 18 12.2334C18 15.4153 15.4227 18 12.2627 18H5.7373C2.57159 18 0 15.4095 0 12.2334C0.000120876 11.6018 0.514207 11.085 1.14258 11.085C1.77108 11.085 2.28601 11.6017 2.28613 12.2334C2.28613 14.146 3.83445 15.7031 5.7373 15.7031H12.2627C14.1656 15.7031 15.7139 14.146 15.7139 12.2334C15.714 11.6017 16.2289 11.085 16.8574 11.085ZM9.0166 0C9.68517 0 10.2285 0.551413 10.2285 1.21191V9.52832L13.7422 6.04199C14.2108 5.57677 15.0285 5.57677 15.4971 6.04199C15.9827 6.53015 15.9827 7.30563 15.4971 7.78809L10.0225 13.2217C9.82252 13.4341 9.58836 13.6698 9.1543 13.7617C9.08016 13.7846 9.00578 13.7842 8.93164 13.7842C8.40617 13.7842 8.02875 13.4056 7.88574 13.2676V13.2617L2.52539 7.94336C2.27968 7.70213 2.14272 7.34547 2.14844 6.99512C2.15429 6.64493 2.32026 6.30667 2.58301 6.07129C3.09717 5.62342 3.8795 5.63997 4.36523 6.12207L7.79395 9.52832V1.21191C7.79395 0.540027 8.34816 0.000161438 9.0166 0Z" />
                                            </svg>
                                        </div>
                                    </button>

                                    {/* Arrow Button */}
                                    <button className="flex w-[55px] h-[55px] flex-col justify-between items-center bg-white aspect-square rounded-[100px] border border-[#ACB1C6] relative transition-colors hover:border-primary-blue hover:text-primary-blue group">
                                        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-0">
                                            <rect x="0.5" y="0.5" width="54" height="54" rx="27" className="stroke-[#ACB1C6] group-hover:stroke-primary-blue transition-colors" />
                                            <path d="M34.9661 27.3299C34.8681 26.8522 34.6096 26.5998 34.3778 26.3835L28.468 20.3988C27.9421 19.8671 27.0953 19.8671 26.5694 20.3988C26.3109 20.6512 26.1772 20.9937 26.1772 21.3632C26.1772 21.7237 26.3198 22.0662 26.5694 22.3276L30.3667 26.1672H21.3103C20.5883 26.1672 20 26.7621 20 27.5011C20 28.2402 20.5883 28.826 21.3103 28.826H30.3667L26.6586 32.5755C26.1326 33.1073 26.1148 33.9635 26.6051 34.5223C26.8636 34.8107 27.229 34.991 27.6123 35H27.6569C28.0313 35 28.3789 34.8558 28.6463 34.5854L34.4402 28.7269C34.6096 28.5557 35.1177 28.0419 34.9751 27.3389L34.9661 27.3299Z" className="fill-[#2A2C31] group-hover:fill-primary-blue transition-colors" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
