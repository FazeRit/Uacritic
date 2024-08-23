import {ChangeEvent, FC, useCallback, useEffect, useRef} from 'react';
import './MultiRangeSlider.css';

interface MultiRangeSliderProps {
    min: number;
    max: number;
    minVal: number;
    maxVal: number;
    onRangeChange: (minVal: number, maxVal: number) => void;
}

const MultiRangeSlider: FC<MultiRangeSliderProps> = ({min, max, minVal, maxVal, onRangeChange}) => {
    const minValRef = useRef<number>(minVal);
    const maxValRef = useRef<number>(maxVal);
    const range = useRef<HTMLDivElement>(null);

    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, maxVal, getPercent]);

    const handleMinChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(event.target.value), maxVal - 1);
        minValRef.current = value;
        onRangeChange(value, maxValRef.current);
    };

    const handleMaxChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(Number(event.target.value), minVal + 1);
        maxValRef.current = value;
        onRangeChange(minValRef.current, value);
    };

    return (
        <div>
            <div className="flex items-center justify-center h-[5vh]">
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={minVal}
                    onChange={handleMinChange}
                    className="thumb thumb--left absolute sm:w-[70vw] md:w-[200px] lg:w-[240px] h-0 z-50 outline-none pointer-events-none"
                    style={{zIndex: minVal > max - 100 ? 5 : undefined}}
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={maxVal}
                    onChange={handleMaxChange}
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