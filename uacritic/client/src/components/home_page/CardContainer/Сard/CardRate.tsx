import React, { FC } from "react";

const CardRate: FC<{ rate: number }> = ({ rate }) => {
    return (
        <div className="flex flex-row sm:ml-[1vw] md:ml-[0.1vw] lg:ml-[0.5vw] mt-[0.1vw]">
            <p className="mr-[0.2vw] sm:text-[3vw] md:text-[1.5vw] lg:text-[1.1vw] roboto-medium">{rate.toFixed(1)}</p>
            <svg className="lg:mt-[0.1vw] sm:mt-[0.9vw] md:mt-[0.5vw] sm:w-[3vw] md:w-[1.5vw] md:h-[1.5vw] sm:ml-[0.3vw] sm:h-[3vw]" width="1.5vw" height="1.5vw" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.9284 0.534379L11.9113 4.60223C12.0492 4.88515 12.3158 5.08119 12.6243 5.12649L17.0584 5.77884C17.8352 5.8932 18.1451 6.8593 17.5832 7.41363L14.3747 10.58C14.1517 10.8002 14.0498 11.1176 14.1026 11.4284L14.8599 15.8995C14.9926 16.6825 14.1807 17.2795 13.4861 16.9101L9.52023 14.7993C9.24444 14.6527 8.91475 14.6527 8.63896 14.7993L4.67311 16.9101C3.97851 17.2799 3.16657 16.6825 3.29932 15.8995L4.05663 11.4284C4.10944 11.1176 4.00749 10.8002 3.78451 10.58L0.57596 7.41363C0.0141252 6.85893 0.324016 5.89283 1.10076 5.77884L5.53493 5.12649C5.84335 5.08119 6.10997 4.88515 6.24786 4.60223L8.23079 0.534379C8.57772 -0.178126 9.5811 -0.178126 9.9284 0.534379Z" fill="#ED8A19"/>
            </svg>
        </div>
    );
};

export default CardRate;