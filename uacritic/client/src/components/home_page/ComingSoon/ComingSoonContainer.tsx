import { FC } from "react";
import ComingSoonText from "./ComingSoonText/ComingSoonText";

interface ComingSoonContainerProps {
    reverse?: boolean;
}

const ComingSoonContainer: FC<ComingSoonContainerProps> = ({ reverse = false }) => {
    const item = {
        title: "Назва",
        genres: ['1', '2', '3','4','5','6'],
        description: "124333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333334",
        imageUrl: 'https://via.placeholder.com/300x200.png?text=Movie+4'
    };

    return (
        <div className="border-t-lineMain border-t-[3px] md:border-l-[3px] md:border-r-[3px] border-l-lineMain border-r-lineMain mt-[4vw]">
            <div className="flex flex-col ">
                <div className="flex flex-row mt-[0.5vw] sm:p-[2vw] w-full">
                    {reverse ? (
                        <>
                            <div className="sm:ml-[0vw] md:ml-[0] lg:ml-[4vw] md:mt-[4vw] lg:mt-[3vw] md:w-[40vw] lg:w-[40vw]">
                                <ComingSoonText title={item.title} genres={item.genres} description={item.description}/>
                            </div>
                            <div className="flex flex-col sm:pl-[10vw] md:pl-[10vw]">
                                <p className="md:text-[2.5vw] lg:text-[2vw] roboto-bold sm:pl-[13vw] md:pl-[5vw] lg:pl-[13vw] text-primaryText">Coming
                                    soon</p>
                                <img
                                    className="sm:w-[40vw] sm:h-[40vw] md:w-[30vw] ml-auto md:h-[30vw] mt-[1vw] rounded-3xl"
                                    src={item.imageUrl} alt={item.title}/>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex flex-col">
                                <p className="md:text-[2.5vw] lg:text-[2vw] roboto-bold text-primaryText">
                                    Coming soon
                                </p>
                                <img
                                    className="sm:w-[40vw] sm:h-[40vw] md:w-[30vw] ml-auto md:h-[30vw] mt-[1vw] rounded-3xl"
                                    src={item.imageUrl}
                                    alt={item.title}
                                />
                            </div>
                            <div
                                className="sm:ml-[10vw] md:ml-[10vw] lg:ml-[10vw] md:mt-[4vw] lg:mt-[3vw] md:w-[40vw] lg:w-[40vw]">
                                <ComingSoonText title={item.title} genres={item.genres} description={item.description}/>
                            </div>
                        </>
                    )}
                </div>
                <div className="sm:mt-[5vw] lg:w-[20vw] sm:w-[80vw] md:hidden break-words sm:p-[2vw]">
                    <p className="md:mt-[0.5vw] lg:mt-[1vw] roboto-black md:text-[2vw] lg:text-[1.5vw] text-primaryText">Опис</p>
                    <p className="md:mt-[0.5vw] lg:mt-[1vw] md:text-[1.5vw] roboto-regular lg:text-[1.3vw]">
                        {item.description}
                    </p>
                </div>
            </div>
            <div>
                {reverse ?
                    (<div><svg className="sm:w-full w-full h-auto" viewBox="0 0 1214 18" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                        <line x1="-0.000825081" y1="17.3066" x2="1216" y2="15.3" stroke="#646363"/>
                        <rect x="1136" width="80" height="15.5" fill="#646363"/>
                        <path d="M1136 0.800049L1104 14.8H1136V0.800049Z" fill="#646363" stroke="#646363"/>
                    </svg></div>)
                    :
                    (<div><svg className="sm:w-full w-full h-auto" viewBox="0 0 1214 16.1" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                        <line y1="-0.5" x2="1216" y2="-0.5"
                              transform="matrix(0.999999 -0.00164948 0.00165084 0.999999 0 16)" stroke="#646363"/>
                        <rect width="80" height="15.4936" fill="#646363"/>
                        <path d="M80 1L112 14.9942H80V1Z" fill="#646363" stroke="#646363"/>
                    </svg></div>)}
            </div>
        </div>
    );
};

export default ComingSoonContainer;