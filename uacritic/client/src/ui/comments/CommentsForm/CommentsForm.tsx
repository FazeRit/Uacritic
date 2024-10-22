    import {FC, FormEvent, useState} from 'react';

import Loading from '@/ui/data/status/Loading/Loading';
import AuthRequireError from "@/ui/data/status/AuthRequireError/AuthRequireError";

import RatingInput from "@/ui/comments/RatingInput";

import useDebounce from '@/hooks/useDebounce';
import useAuth from "@/hooks/useAuth";

interface Comment {
    rating: number;
    text: string;
}

interface CommentsFormProps {
    addComment: (comment: Comment) => void;
}

const CommentsForm: FC<CommentsFormProps> = ({addComment}) => {
    const [rating, setRating] = useState(5);
    const [text, setText] = useState('');

    const {authData, isLoading, error} = useAuth();

    const debouncedText = useDebounce(text, 300);
    const debouncedRating = useDebounce(rating, 300);

    if (isLoading) {
        return <Loading/>;
    }

    if (!authData?.loggedIn) {
        return <AuthRequireError/>;
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newComment: Comment = {
            rating: debouncedRating,
            text: debouncedText,
        };

        addComment(newComment);

        setRating(5);
        setText('');
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="sm:w-full sm:mt-8 lg:mt-0 lg:w-[480px] p-4 bg-white rounded-lg shadow-lg"
        >
            {error && (
                <div
                    className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg shadow-sm flex items-center space-x-3"
                >
                    <svg
                        className="w-5 h-5 text-red-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4m0 4h.01m-6.93-6.36A9.96 9.96 0 0112 4c2.21 0 4.23.74 5.85 1.96m-1.87 1.63A8.02 8.02 0 0012 6c-1.68 0-3.24.55-4.5 1.46m1.85 2.53A5.978 5.978 0 0112 8c1.34 0 2.57.48 3.54 1.28"
                        />
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
                />
            </div>
            <button
                type="submit"
                className="w-full py-2 px-4 bg-teal-500 text-white font-semibold rounded-md shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
            >
                Submit
            </button>
        </form>
    );
};

export default CommentsForm;
