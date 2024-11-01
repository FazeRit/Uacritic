import { FC, FormEvent, useState, useEffect } from 'react';

import Loading from '@/ui/status/Loading/Loading';
import AuthRequireError from "@/ui/status/AuthRequireError/AuthRequireError";
import RatingInput from "@/ui/comments/RatingInput";

import useRequest from '@/hooks/useRequest';
import useDebounce from '@/hooks/useDebounce';
import useAuth from "@/hooks/useAuth";

import { Genre } from '@/lib/models/Description/movieDescription';

interface Comment {
    rating: number;
    text: string;
}

interface addCommentProps {
    category: string;
    itemId: number;
    tags: Genre[];
}

const CommentsForm: FC<addCommentProps> = ({ category, itemId, tags }) => {
    const [rating, setRating] = useState(5);
    const [text, setText] = useState('');
    const [apiErrors, setApiErrors] = useState<string[]>([]);
    const [shouldSubmit, setShouldSubmit] = useState(false);

    const { authData, isLoading } = useAuth();
    const debouncedText = useDebounce(text, 300);
    const debouncedRating = useDebounce(rating, 300);

    const { isLoading: addCommentsLoading, error: addCommentError, fetchData } = useRequest<Comment>({
        url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/comments/addComment`,
        method: 'POST',
        token: '',
        body: { rating: debouncedRating, text: debouncedText, category, itemId, tags },
        withCredentials: true,
    });

    useEffect(() => {
        if (shouldSubmit) {
            const submitComment = async () => {
                try {
                    await fetchData();
                    setRating(5);
                    setText('');
                    setApiErrors([]);
                } catch (err: any) {
                    if (err?.errors) {
                        setApiErrors(err.errors.map((error: any) => error.msg));
                    } else {
                        setApiErrors(['Failed to submit comment. Please try again.']);
                    }
                } finally {
                    setShouldSubmit(false);
                }
            };
            submitComment();
        }
    }, [shouldSubmit, fetchData]);

    if (isLoading) return <Loading />;
    if (!authData?.loggedIn) return <AuthRequireError />;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setShouldSubmit(true);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="sm:w-full sm:mt-8 lg:mt-0 lg:w-[480px] p-4 bg-white rounded-lg shadow-lg"
        >
            {apiErrors.length > 0 && (
                <div className="text-red-500 bg-red-100 p-4 rounded-md mt-2">
                    {apiErrors.map((msg, index) => (
                        <p key={index}>{msg}</p>
                    ))}
                </div>
            )}

            <RatingInput value={rating} onChange={setRating} />

            <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700" htmlFor="comments">
                    Comments
                </label>
                <textarea
                    id="comments"
                    name="comments"
                    className="mt-3 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 sm:text-sm resize-none overflow-y-auto"
                    placeholder="Write your comments here..."
                    rows={4}
                    maxLength={250}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    style={{ height: '100px' }}
                />
            </div>

            <button
                type="submit"
                disabled={addCommentsLoading}
                className={`w-full py-2 px-4 font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2
                ${addCommentsLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-teal-500 text-white hover:bg-teal-600 focus:ring-teal-400'}`}
            >
                {addCommentsLoading ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    );
};

export default CommentsForm;
