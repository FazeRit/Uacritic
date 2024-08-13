'use client';

import { ChangeEvent, FC, useCallback, useEffect, useRef, useState } from 'react';
import './MultiRangeSlider.css'; // Include this to handle the slider thumb styling

interface MultiRangeSliderProps {
    min: number;
    max: number;
}

const MultiRangeSlider: FC<MultiRangeSliderProps> = ({ min, max }) => {
    const [minVal, setMinVal] = useState<number>(min);
    const [maxVal, setMaxVal] = useState<number>(max);
    const minValRef = useRef<number>(min);
    const maxValRef = useRef<number>(max);
    const range = useRef<HTMLDivElement>(null);

    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, getPercent]);

    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);

    return (
        <div>
            <div className="flex items-center justify-center h-[5vh]">
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={minVal}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        const value = Math.min(Number(event.target.value), maxVal - 1);
                        setMinVal(value);
                        minValRef.current = value;
                    }}
                    className="thumb thumb--left absolute sm:w-[70vw] md:w-[200px] lg:w-[240px] h-0 z-50 outline-none pointer-events-none"
                    style={{ zIndex: minVal > max - 100 ? 5 : undefined }}
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={maxVal}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        const value = Math.max(Number(event.target.value), minVal + 1);
                        setMaxVal(value);
                        maxValRef.current = value;
                    }}
                    className="thumb thumb--right absolute sm:w-[70vw] md:w-[200px] lg:w-[240px] h-0 z-50 outline-none pointer-events-none"
                />

                <div className="relative sm:w-[70vw] md:w-[200px] lg:w-[240px]">
                    <div className="absolute w-full h-[5px] bg-[#ced4da] rounded-sm z-0"></div>
                    <div ref={range} className="absolute h-[5px] bg-primaryText z-0 rounded-sm"></div>
                    <div className="absolute left-[4px] text-[#364F6B] text-xs sm:mt-[20px]">{minVal}</div>
                    <div className="absolute right-[-0px] text-[#364F6B] text-xs sm:mt-[20px]">{maxVal}</div>
                </div>
            </div>
        </div>
    );
};

export default MultiRangeSlider;