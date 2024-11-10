"use client";
import ProfileImage from './ProfileImage';
import UserInfo from './UserInfo';
import Image from 'next/image';
import EditButton from '/public/edit-button.svg';
import Modal from 'react-modal';
import UserDetailsFormProps from './ChangeUserDetails/UserDetailsFormProps';
import React, { useState } from 'react';

interface ProfileCardProps {
  name: string;
  weight: number;
  height: { feet: number; inches: number };
  imageSrc: string;
  allergies:string[];
}
const userID = "mRupKZQfViePG8I6nppc";
const ProfileCard: React.FC<ProfileCardProps> = ({ name, weight, height, imageSrc, allergies }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  if (!height || height.feet === undefined || height.inches === undefined) {
    console.error('Invalid or missing height object');
    return null;
  }

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section className="overflow-hidden px-20 py-5 bg-red-900 rounded-3xl relative">
      <div className="flex gap-5  max-md:flex-col">
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
          <ProfileImage src={imageSrc} />
        </div>
        <div className="flex flex-col max-md:w-full">
          <UserInfo name={name} weight={weight} height={height} allergies={allergies}/>
        </div>
        
      </div>
      <button className="absolute top-4 right-4"onClick={openModal}><Image src={EditButton} className="fill-white"alt="Edit Profile" width={24} height={24} /></button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="User Details Form"
                    ariaHideApp={false}
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
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget)
                        const formDataObj = Object.fromEntries(formData.entries());

                        function formatUserData(data: { [x: string]: unknown; }){
                        const heightLol = Number(formDataObj['heightFeet']) * 12 + Number(formDataObj['heightInches']);
                        return {
                              firstName: data['firstName'],
                              lastName: data['lastName'],
                              weight: Number(data['weight']),
                              height: heightLol,
                              goalCals: Number(data['goalCalories']),
                              goalProtein: Number(data['goalProtein'])
                          };
                      }

                      const newJsonForm = JSON.stringify(formatUserData(formDataObj));
                      // console.log(newJsonForm)

                          const updateInfo = async () => {
                            try {
                              const response = await fetch(`http://localhost:3001/users/edit/${userID}`, {
                                method: 'PUT',
                                headers: {
                                  'Content-Type': 'application/json',
                                },
                                body: newJsonForm,
                              });
                              console.log(response)
                            }
                            catch (error) {
                              console.log(error);
                            }
                          };
                          updateInfo();
                        
                        closeModal();
                    }} />
                    <button onClick={closeModal}>Close</button>
                </Modal>
    </section>
  );
};

export default ProfileCard;
