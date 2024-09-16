import React, { useEffect, useState } from 'react';
import ReviewBurger from './ReviewBurger';
import { useUser } from '@clerk/clerk-react';

const ReviewsBurger = () => {
    const [burgers, setBurgers] = useState([]);
    const [reviews, setReviews] = useState({});
    const [reviewInputs, setReviewInputs] = useState({});
    const { user } = useUser();
    // console.log(burgers);
    // Fetch burgers on component mount
    useEffect(() => {
        const fetchBurgers = async () => {
            try {
                const response = await fetch('http://localhost:8000/burgers'); // Replace with your endpoint
                const data = await response.json();
                setBurgers(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching burgers:', error);
            }
        };
        fetchBurgers();
    }, []);



    const fetchReviews = async (burgerId, setReviews) => {
        try {
            const response = await fetch(`http://localhost:8000/reviews/${burgerId}`);
            const data = await response.json();
            setReviews((prev) => ({
                ...prev,
                [burgerId]: Array.isArray(data) ? data : [],  // Ensure fetched reviews are an array
            }));
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };
    // Handler for submitting a review
    const handleReviewSubmit = async (e, burgerId) => {
        e.preventDefault();

        const reviewText = reviewInputs[burgerId] || ''; // Get the text from the review input state

        if (!user) {
            alert('Please sign in to submit a review');
            return;
        }

        const newReview = {
            burgerId,
            review: reviewText,
            email: user.primaryEmailAddress.emailAddress, // Clerk user email
        };

        try {
            const response = await fetch('http://localhost:8000/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newReview),
            });

            if (response.ok) {
                alert('Review submitted successfully!');

                // Clear the review input field
                setReviewInputs({ ...reviewInputs, [burgerId]: '' });

                // Immediately update the reviews state to reflect the new review locally
                setReviews((prevReviews) => ({
                    ...prevReviews,
                    [burgerId]: [...(prevReviews[burgerId] || []), newReview],  // Append the new review to the existing reviews
                }));
            } else {
                throw new Error('Failed to submit review');
            }
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    };

    // Update review text in the state
    const handleReviewChange = (e, burgerId) => {
        setReviewInputs({
            ...reviewInputs,
            [burgerId]: e.target.value,
        });
    };

    useEffect(() => {
        burgers.forEach((burger) => {
            fetchReviews(burger._id, setReviews);  // Pass the setter function
        });
    }, [burgers]);


    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Burger Reviews</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {burgers.map((burger) =>
                    <ReviewBurger
                        key={burger._id}
                        burger={burger}
                        reviews={reviews}
                        handleReviewSubmit={handleReviewSubmit}
                        handleReviewChange={handleReviewChange}
                        reviewInputs={reviewInputs}
                    ></ReviewBurger>
                )}
            </div>
        </div>
    );
};

export default ReviewsBurger;