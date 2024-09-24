const ErrorFetching = () => {
    return (
        <div className="flex justify-center items-center w-full bg-bgMain h-screen">
            <div className="flex flex-col items-center bg-red-100 border border-red-500 p-4 rounded-lg shadow-md">
                <svg className="w-12 h-12 text-red-500 mb-4" fill="none" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24">
                    <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2V7zm0 8h-2v2h2v-2z"
                        fill="currentColor"/>
                </svg>
                <p className="text-red-500 font-semibold text-lg">Error of fetching data</p>
            </div>
        </div>
    );
};

export default ErrorFetching;