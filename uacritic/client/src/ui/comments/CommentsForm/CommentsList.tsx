import {FC} from 'react';
    
interface Comment {
    username: string
    rating: number;
    text: string;
}

interface CommentsListProps {
    comments: Comment[];
}

const CommentsList: FC<CommentsListProps> = ({comments}) => {
    return (
        <div className="lg:w-[80vw] md:min-h-[340px] lg:min-h-[480px] flex-col lg:mx-[4vw] lg:pt-4 sm:mt-10 lg:mt-0">
            <h2 className="text-2xl font-semibold flex justify-center mb-4">Comments</h2>
            {comments.length === 0 ? (
                <p className="text-lg text-gray-700 flex justify-center">No comments yet</p>
            ) : (
                <ul className="space-y-4">
                    {comments.map((comment, index) => (
                        <li key={index} className="p-4 bg-white rounded-lg shadow-md">
                            <div className="flex justify-between">
                                <p className="text-lg font-semibold">{comment.username}</p>
                                <p className="text-lg font-semibold">{comment.rating}/10</p>
                            </div>
                            <p className="mt-2 text-gray-700">{comment.text}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CommentsList;