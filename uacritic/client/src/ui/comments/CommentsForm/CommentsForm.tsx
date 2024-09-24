import {ChangeEvent, FC, FormEvent, useState} from 'react';
import RatingInput from "@/ui/comments/RatingInput";
import useDebounce from '@/hooks/useDebounce';

interface Comment {
    name: string;
    surname: string;
    rating: number;
    text: string;
}

interface CommentsFormProps {
    addComment: (comment: Comment) => void;
}

const CommentsForm: FC<CommentsFormProps> = ({addComment}) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [rating, setRating] = useState(5);
    const [text, setText] = useState('');
    const [error, setError] = useState('');

    const debouncedName = useDebounce(name, 300);
    const debouncedSurname = useDebounce(surname, 300);
    const debouncedText = useDebounce(text, 300);
    const debouncedRating = useDebounce(rating, 300);

    const validateFields = (name: string, surname: string) => {
        if (!name && !surname) {
            return "Ім'я або Прізвище не можуть бути порожніми";
        }
        return '';
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newName = e.target.value;
        console.log(1);
        setName(newName);
        setError(validateFields(newName, surname));
    };

    const handleSurnameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newSurname = e.target.value;
        console.log(2);
        setSurname(newSurname);
        setError(validateFields(name, newSurname));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validationError = validateFields(debouncedName, debouncedSurname);


        if (validationError) {
            setError(validationError);
            return;
        }

        const newComment: Comment = {
            name: debouncedName,
            surname: debouncedSurname,
            rating: debouncedRating,
            text: debouncedText,
        };
        addComment(newComment);

        setName('');
        setSurname('');
        setRating(5);
        setText('');
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="sm:w-full sm:mt-8 lg:mt-0 lg:w-[480px] p-4 bg-white rounded-lg shadow-lg"
        >
            <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700" htmlFor="firstName">
                    Name
                </label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="mt-3 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 sm:text-sm"
                    placeholder="Ім'я"
                    value={name}
                    onChange={handleNameChange}
                />
            </div>
            <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700" htmlFor="lastName">
                    Surname
                </label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="mt-3 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 sm:text-sm"
                    placeholder="Прізвище"
                    value={surname}
                    onChange={handleSurnameChange}
                />
            </div>

            {error && (
                <div
                    className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg shadow-sm flex items-center space-x-3">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor"
                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M12 8v4m0 4h.01m-6.93-6.36A9.96 9.96 0 0112 4c2.21 0 4.23.74 5.85 1.96m-1.87 1.63A8.02 8.02 0 0012 6c-1.68 0-3.24.55-4.5 1.46m1.85 2.53A5.978 5.978 0 0112 8c1.34 0 2.57.48 3.54 1.28"/>
                    </svg>
                    <p className="text-base font-medium">{error}</p>
                </div>
            )}

            <RatingInput value={rating} onChange={setRating}/>

            <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700" htmlFor="comments">
                    Comments
                </label>
                <textarea
                    id="comments"
                    name="comments"
                    className="mt-3 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 sm:text-sm resize-none overflow-y-auto"
                    placeholder="Напишіть ваші коментарі тут..."
                    rows={4}
                    maxLength={250}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    style={{height: '100px'}}
                ></textarea>
            </div>
            <button
                type="submit"
                className="w-full py-2 px-4 bg-teal-500 text-white font-semibold rounded-md shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
            >
                submit
            </button>
        </form>
    );
};

export default CommentsForm;