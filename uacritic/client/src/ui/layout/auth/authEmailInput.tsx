import {ChangeEvent, FC} from 'react';

interface AuthEmailInputProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    disabled: boolean;
}

const AuthEmailInput: FC<AuthEmailInputProps> = ({value, onChange, error, disabled}) => {
    return (
        <div className="relative sm:mt-8">
            <div className="flex items-center">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 7.5C0 5.42893 1.67893 3.75 3.75 3.75H26.25C28.3211 3.75 30 5.42893 30 7.5V22.5C30 24.5711 28.3211 26.25 26.25 26.25H3.75C1.67893 26.25 0 24.5711 0 22.5V7.5ZM3.75 5.625C2.71447 5.625 1.875 6.46447 1.875 7.5V7.9067L15 15.7817L28.125 7.9067V7.5C28.125 6.46447 27.2855 5.625 26.25 5.625H3.75ZM28.125 10.0933L19.2974 15.3899L28.125 20.8223V10.0933ZM28.0617 22.9849L17.4859 16.4767L15 17.9683L12.5141 16.4767L1.93831 22.9849C2.15202 23.7854 2.88216 24.375 3.75 24.375H26.25C27.1178 24.375 27.848 23.7854 28.0617 22.9849ZM1.875 20.8223L10.7026 15.3899L1.875 10.0933V20.8223Z"
                            fill="#2D31A6" fillOpacity="0.2"/>
                    </svg>
                </div>
                <input
                    type="email"
                    name="email"
                    value={value}
                    disabled={disabled}
                    onChange={onChange}
                    placeholder="Email"
                    className={`lg:h-[50px] w-full pl-10 pr-4 py-2 rounded-lg border ${
                        error ? 'border-red-500' : 'border-blue-200'
                    } bg-blue-100 text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default AuthEmailInput;
