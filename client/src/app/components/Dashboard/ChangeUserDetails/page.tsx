"use client";
import React, { useState } from 'react';
import UserDetailsFormProps from './UserDetailsFormProps'; // Ensure you have the correct import for the UserDetailsForm component
import Modal from 'react-modal';


    const ProfilePage: React.FC = () => {
        const [modalIsOpen, setModalIsOpen] = useState(false);

        const openModal = () => {
            setModalIsOpen(true);
        };

        const closeModal = () => {
            setModalIsOpen(false);
        };

        return (
            <div className=''>
                <button onClick={openModal}>Open Form</button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="User Details Form"
                    style={{
                        content: {
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)'
                        }
                    }}
                >
                    <UserDetailsFormProps onSubmit={function (event: React.FormEvent<HTMLFormElement>): void {
                        console.log('Form submitted', event);
                        closeModal();
                    }} />
                    <button onClick={closeModal}>Close</button>
                </Modal>
            </div>
        );
    };

    export default ProfilePage;