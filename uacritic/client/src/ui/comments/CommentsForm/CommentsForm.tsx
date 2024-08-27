import {FC, FormEvent, useState} from 'react';
import RatingInput from "@/ui/comments/RatingInput";

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

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError('');
        
        if (!name && !surname) {
            setError("Ім'я або Прізвище не можуть бути порожніми");
        }

        const newComment: Comment = {name, surname, rating, text};
        addComment(newComment);

        setName('');
        setSurname('');
        setRating(5);
        setText('');
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="sm:w-full sm:mt-8 lg:mt-0 lg:w-[480px] p-4 bg-white rounded-lg shadow-lg">
            <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700" htmlFor="firstName">
                    Ім'я
                </label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="mt-3 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 sm:text-sm"
                    placeholder="Ім'я"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700" htmlFor="lastName">
                    Прізвище
                </label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="mt-3 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 sm:text-sm"
                    placeholder="Прізвище"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                />
            </div>
            {error &&
                <p className="flex text-white text-lg rounded-lg bg-red-500 justify-center">
                    {error}
                </p>
            }
            <RatingInput value={rating} onChange={setRating}/>

            <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700" htmlFor="comments">
                    Коментарі
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
                className="w-full py-2 px-4 bg-teal-500 text-white font-semibold rounded-md shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400">
                Погодити
            </button>
        </form>
    );
};

export default CommentsForm;
