import React from 'react';

const About = () => {
    return (
        <div>


            <section className="relative bg-[url('https://images.unsplash.com/photo-1550547660-d9450f859349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')] bg-cover bg-center h-screen flex items-center justify-center text-center">
                <div className="bg-black bg-opacity-50 p-10 rounded-xl animate__animated animate__fadeIn">
                    <h1 className="text-5xl font-bold text-white">Welcome to Burger Shop</h1>
                    <p className="text-lg text-gray-200 mt-4">
                        The finest crafted burgers, made with love and passion.
                    </p>
                    <button className="mt-6 px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300">
                        Order Now
                    </button>
                </div>
            </section>

            {/* About Section */}
            <section className="bg-gray-100 py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-8">
                        <h2 className="text-4xl font-bold text-gray-900 animate-bounce">About Our Burger Shop</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            We serve the best burgers made with fresh ingredients, crafted with passion to bring the best taste right to your table!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="relative group">
                            <div className="overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1550547660-d9450f859349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTc3M3wwfDF8c2VhcmNofDF8fGJ1cmdlcnN8ZW58MHx8fHwxNjg3NjgzNDAwfDA&ixlib=rb-4.0.3&q=80&w=400"
                                    alt="Burger Image"
                                    className="object-cover w-full h-96 transform hover:scale-110 transition duration-300"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
                                <h3 className="text-white font-bold text-2xl">Our Signature Burger</h3>
                            </div>
                        </div>

                        <div className="text-left">
                            <h3 className="text-3xl font-bold text-gray-800 animate-pulse">Crafted with Passion</h3>
                            <p className="mt-4 text-gray-600 text-lg">
                                At our burger shop, we prioritize quality over everything. Our burgers are made using the finest ingredients, grilled to perfection with a perfect blend of seasoning. Whether you like your burger spicy, cheesy, or with extra toppings, we have something for everyone.
                            </p>
                            <p className="mt-2 text-gray-600 text-lg">
                                Enjoy our burgers in a cozy and welcoming atmosphere, or order online for fast delivery to your door.
                            </p>
                            <button className="mt-6 px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900 animate-bounce">Our Story</h2>
                    <div className="flex flex-col md:flex-row gap-8 mt-10">

                        <div className="w-full md:w-1/2 text-left flex flex-col justify-center animate__animated animate__fadeInRight">
                            <h3 className="text-3xl font-bold text-black" >Where It All Began</h3>
                            <p className="mt-4 text-gray-700">
                                Started in 2015, we have grown from a small burger stand to one of the most beloved burger joints in town. We believe in serving the highest quality burgers, made fresh every day with passion and dedication.
                            </p>
                            <button className="mt-6 px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300">
                                Read More
                            </button>
                        </div>
                        <div className="w-full md:w-1/2 animate__animated animate__fadeInLeft">
                            <img
                                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Our Story"
                                className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="bg-gray-200 py-16">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900">Our Values</h2>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6 bg-white shadow-lg rounded-lg hover:bg-gray-50 transition duration-300 transform hover:scale-105">
                            <h3 className="text-xl font-semibold text-gray-800">Quality Ingredients</h3>
                            <p className="mt-2 text-gray-600">
                                We source only the freshest, highest-quality ingredients to craft our burgers.
                            </p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg hover:bg-gray-50 transition duration-300 transform hover:scale-105">
                            <h3 className="text-xl font-semibold text-gray-800">Customer Satisfaction</h3>
                            <p className="mt-2 text-gray-600">
                                We prioritize our customers’ experience, ensuring top-notch service every time.
                            </p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg hover:bg-gray-50 transition duration-300 transform hover:scale-105">
                            <h3 className="text-xl font-semibold text-gray-800">Sustainability</h3>
                            <p className="mt-2 text-gray-600">
                                We care about the planet, sourcing eco-friendly packaging and sustainable products.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;