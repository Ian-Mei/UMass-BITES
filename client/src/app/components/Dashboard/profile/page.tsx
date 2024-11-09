import React from 'react';
import Image from 'next/image'; // Ensure you have the correct import for the Image component

const ProfilePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <Image
                    className="w-24 h-24 rounded-full object-cover mb-4"
                    src="https://via.placeholder.com/150"
                    alt="Profile"
                    width={96}
                    height={96}
                />
                <h2 className="text-2xl font-semibold mb-2">John Doe</h2>
                <p className="text-gray-600 mb-4">john.doe@example.com</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Edit Profile
                </button>
            </div>
        </div>
    );
};

export default ProfilePage;