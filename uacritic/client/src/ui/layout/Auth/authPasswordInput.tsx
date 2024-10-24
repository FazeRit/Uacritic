import {ChangeEvent, FC} from 'react';

interface AuthPasswordInputProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    disabled: boolean;
}

const AuthPasswordInput: FC<AuthPasswordInputProps> = ({value, onChange, error, disabled}) => {
    return (
        <div className="relative sm:mt-8">
            <div className="flex items-center relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2.54453 6.5217C1.75563 13.9622 4.17503 19.512 7.08693 23.2301C8.59224 25.1521 10.2283 26.5846 11.6202 27.5426C12.3156 28.0213 12.9602 28.3885 13.5075 28.6399C14.0133 28.8723 14.5543 29.0625 15.0005 29.0625C15.4466 29.0625 15.9877 28.8723 16.4934 28.6399C17.0407 28.3885 17.6853 28.0213 18.3807 27.5426C19.2543 26.9414 20.224 26.1532 21.1973 25.1744L19.8714 23.8486C18.9819 24.7437 18.1007 25.4592 17.3177 25.9981C16.6945 26.4271 16.1435 26.7373 15.7106 26.9362C15.4938 27.0358 15.3166 27.1029 15.1819 27.1436C15.071 27.1771 15.014 27.185 15.0005 27.1869C14.9869 27.185 14.9299 27.1771 14.819 27.1436C14.6844 27.1029 14.5071 27.0358 14.2903 26.9362C13.8574 26.7373 13.3065 26.4271 12.6832 25.9981C11.4378 25.1409 9.94383 23.8369 8.56309 22.074C6.11635 18.9498 4.02208 14.3841 4.29228 8.26945L2.54453 6.5217Z"
                            fill="#2D31A6"
                            fillOpacity="0.2"
                        />
                        <path
                            d="M23.2681 19.2904C25.0898 15.9433 26.258 11.5103 25.4952 5.92333C25.4527 5.61182 25.2262 5.33921 24.9037 5.23649C23.7314 4.86313 21.7507 4.25136 19.7948 3.7339C17.795 3.20482 15.9565 2.8125 15.0005 2.8125C14.0444 2.8125 12.2059 3.20482 10.2061 3.7339C9.54756 3.90814 8.88617 4.09307 8.25377 4.27599L6.74362 2.76583C7.66521 2.49032 8.69786 2.19343 9.72655 1.92126C11.6819 1.40392 13.7587 0.9375 15.0005 0.9375C16.2422 0.9375 18.319 1.40392 20.2744 1.92126C22.2736 2.45022 24.2879 3.07255 25.4727 3.44991C26.4615 3.76483 27.2094 4.61764 27.353 5.6697C28.2118 11.9602 26.7926 16.9481 24.6452 20.6674L23.2681 19.2904Z"
                            fill="#2D31A6"
                            fillOpacity="0.2"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M25.5869 26.9129L1.21191 2.53786L2.53774 1.21204L26.9127 25.587L25.5869 26.9129Z"
                            fill="#2D31A6"
                            fillOpacity="0.2"
                        />
                    </svg>
                </div>
                <input
                    type="password"
                    name="password"
                    value={value}
                    disabled={disabled}
                    onChange={onChange}
                    placeholder="Password"
                    className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                        error ? 'border-red-500' : 'border-blue-200'
                    } bg-blue-100 text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default AuthPasswordInput;