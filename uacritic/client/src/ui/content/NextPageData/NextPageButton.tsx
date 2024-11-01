import {FC} from "react";

interface NextDataButtonProps {
    onClick: () => void;
}

const NextPageButton: FC<NextDataButtonProps> = ({onClick}) => {
    return (
        <div className="mt-20 flex justify-center items-center">
            <button
                onClick={onClick}
                className="text-gray-500 cursor-pointer bg-white border border-gray-300 rounded px-4 py-2"
                type="button">
                Click for further data
            </button>
        </div>
    );
};

export default NextPageButton;