import {ChangeEvent, FC} from 'react';

interface AuthUsernameInputProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    disabled: boolean;
}

const AuthUsernameInput: FC<AuthUsernameInputProps> = ({value, onChange, error, disabled}) => {
    return (
        <div className="relative sm:mt-8">
            <div className="flex items-center">
                <div className="absolute left-0 flex items-center pl-3 pointer-events-none">
                    <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15 15C18.1066 15 20.625 12.4816 20.625 9.375C20.625 6.2684 18.1066 3.75 15 3.75C11.8934 3.75 9.375 6.2684 9.375 9.375C9.375 12.4816 11.8934 15 15 15ZM18.75 9.375C18.75 11.4461 17.0711 13.125 15 13.125C12.9289 13.125 11.25 11.4461 11.25 9.375C11.25 7.30393 12.9289 5.625 15 5.625C17.0711 5.625 18.75 7.30393 18.75 9.375Z"
                            fill="#2D31A6" fillOpacity="0.2"/>
                        <path
                            d="M26.25 24.375C26.25 26.25 24.375 26.25 24.375 26.25H5.625C5.625 26.25 3.75 26.25 3.75 24.375C3.75 22.5 5.625 16.875 15 16.875C24.375 16.875 26.25 22.5 26.25 24.375ZM24.375 24.3685C24.3723 23.9057 24.0867 22.5196 22.8148 21.2477C21.5918 20.0247 19.2921 18.75 15 18.75C10.7079 18.75 8.40816 20.0247 7.18518 21.2477C5.91329 22.5196 5.62767 23.9057 5.625 24.3685H24.375Z"
                            fill="#2D31A6" fillOpacity="0.2"/>
                    </svg>
                </div>
                <input
                    type="text"
                    name="username"
                    value={value}
                    disabled={disabled}
                    onChange={onChange}
                    placeholder="Username"
                    className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                        error ? 'border-red-500' : 'border-blue-200'
                    } bg-blue-100 text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default AuthUsernameInput;