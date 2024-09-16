
import React from 'react';

const ReviewBurger = ({ burger, handleReviewChange, handleReviewSubmit, reviews, reviewInputs }) => {

    // console.log(reviews[burger.id]);

    return (
        <div key={burger._id} className="bg-white shadow-md rounded-lg p-4 ">

            <img src={burger.image} alt={burger.name} className="w-full md:w-64 h-40 object-cover rounded-lg" />

            <h2 className="text-xl font-semibold mt-2">{burger.name}</h2>
            <p className="text-gray-600">{burger.description}</p>

            <form onSubmit={(e) => handleReviewSubmit(e, burger._id)} className="mt-4">
                <label className="block text-gray-700">Write a Review</label>
                <textarea
                    value={reviewInputs[burger._id] || ''}  // Use the review input state for the text field
                    onChange={(e) => handleReviewChange(e, burger._id)}
                    className="textarea textarea-bordered w-full mt-2"
                    placeholder="Write your review here..."
                    required
                ></textarea>
                <button type="submit" className="btn btn-outline mt-2">
                    Submit Review
                </button>
            </form>


            <div className="mt-4">
                <h3 className="text-lg font-bold">Reviews:</h3>
                {Array.isArray(reviews[burger._id]) && reviews[burger._id].length > 0 ? (
                    reviews[burger._id].map((review, index) => (
                        <div key={index} className="bg-gray-100 p-2 rounded-lg mt-2">
                            <p><strong>{review.email}:</strong> {review.review}</p>
                        </div>
                    ))
                ) : (
                    <p>No reviews yet for this product.</p>
                )}
            </div>
        </div>
    );
};

export default ReviewBurger;