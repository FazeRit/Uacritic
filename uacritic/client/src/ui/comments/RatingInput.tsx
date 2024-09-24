import {ChangeEvent, FC, useState} from 'react';

interface RatingInputProps {
    value: number;
    onChange: (value: number) => void;
}

const RatingInput: FC<RatingInputProps> = ({value, onChange}) => {
    const [hovering, setHovering] = useState<boolean>(false);

    const handleRatingChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(parseInt(event.target.value, 10));
    };

    const getThumbColor = (rating: number) => {
        const colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-lime-500', 'bg-green-500'];
        return rating >= 1 && rating <= 10 ? colors[Math.ceil(rating / 2) - 1] : 'bg-gray-500';
    };

    const calculateTooltipPosition = (rating: number) => {
        const offset = 30;
        return `calc(${(rating - 1) * 10}% + ${offset}px)`;
    };

    return (
        <div>
            <div className="mb-4 relative">
                <label className="block text-lg font-medium text-gray-700" htmlFor="rating">
                    Share your feelings
                </label>
                <div className="relative">
                    <input
                        type="range"
                        id="rating"
                        name="rating"
                        min="1"
                        max="10"
                        value={value}
                        onChange={handleRatingChange}
                        onMouseEnter={() => setHovering(true)}
                        onMouseLeave={() => setHovering(false)}
                        className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer ${getThumbColor(value)}`}
                        style={{
                            accentColor: 'transparent',
                        }}
                    />
                    {hovering && (
                        <div
                            className="absolute -top-8 left-0 transform -translate-x-1/2 px-2 py-1 text-sm font-medium text-white bg-gray-800 rounded-lg pointer-events-none"
                            style={{
                                left: calculateTooltipPosition(value),
                            }}
                        >
                            {value}
                        </div>
                    )}
                </div>
                <div className="text-center mt-2">Rating: {value}</div>
            </div>
        </div>
    );
};

export default RatingInput;
