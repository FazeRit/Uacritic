const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <div className="flex flex-col items-center p-6 bg-blue-100 border border-blue-500 rounded-lg shadow-lg">
                <svg
                    className="w-16 h-16 animate-spin text-blue-500 mb-4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 0116 0h-2a6 6 0 00-12 0H4z"
                    />
                </svg>
                <p className="text-blue-500 font-semibold text-lg">Завантаження...</p>
            </div>
        </div>
    );
};

export default Loading;