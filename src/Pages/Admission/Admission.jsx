


import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import swal from 'sweetalert';

const Admission = () => {
    const { user } = useContext(AuthContext);
    const defaultCandidateName = user?.displayName || '';
    const defaultEmail = user?.email || '';

    const [admissionData, setAdmissionData] = useState({
        imageUrl: '',
        candidateName: defaultCandidateName,
        email: defaultEmail,
        collegeName: '',
        candidatePhone: '',
        address: '',
        dateOfBirth: '',
        subject: '', // New field for the subject category
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setAdmissionData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:5000/admission`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(admissionData),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    swal('Good job!', 'Admission Form Fill Up Successfully', 'success');
                }
            })
            .catch((error) => {
                console.error('Error submitting form:', error);
                swal('Oops!', 'An error occurred while submitting the form', 'error');
            });

        setAdmissionData({
            imageUrl: '',
            candidateName: defaultCandidateName,
            email: defaultEmail,
            collegeName: '',
            candidatePhone: '',
            address: '',
            dateOfBirth: '',
            subject: '', // Reset subject field
        });
    };


    const handlecollegeNameChange = (e) => {
        const { value } = e.target;

        e
        setAdmissionData((prevState) => ({
            ...prevState,
            collegeName: value,

        }));
    };

    const handleSubjectChange = (e) => {
        const { value } = e.target;
        setAdmissionData((prevState) => ({
            ...prevState,
            subject: value,
        }));
    };

    return (
        <div className="container w-[60%] mx-auto p-4">
            <h1 className="text-4xl text-center font-semibold">Admission Form Fill up</h1>
            <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="collegeName" className="block font-semibold text-lg mb-2">
                        Select College:
                    </label>
                    <select
                        id="collegeName"
                        value={admissionData.collegeName}
                        onChange={handlecollegeNameChange}
                        className="border border-gray-300 p-2 w-full"
                        required
                    >
                        <option value="" disabled>
                            Select a college
                        </option>
                        <option value="Harvard University">Harvard University</option>
                        <option value="Stanford University">Stanford University</option>
                        <option value="Massachusetts Institute of Technology (MIT)">Massachusetts Institute of Technology (MIT)</option>
                        <option value="Yale University">Yale University</option>
                        <option value="California Institute of Technology (Caltech)">California Institute of Technology (Caltech)</option>
                        <option value="Princeton University">Princeton University</option>
                        {/* Add more colleges here */}
                    </select>
                </div>

                <div>
                    <label htmlFor="name" className="block font-semibold text-lg mb-2">
                        Subject:
                    </label>
                    <select
                        id="subject"
                        value={admissionData.subject}
                        onChange={handleSubjectChange}
                        className="border border-gray-300 p-2 w-full"
                        required
                    >
                        <option value="" disabled>
                            Select a subject
                        </option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Business">Business</option>
                        <option value="Engineering">Engineering</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="candidateName" className="block font-semibold text-lg mb-2">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="candidateName"
                        value={admissionData.candidateName}
                        onChange={handleChange}
                        defaultValue={defaultCandidateName}
                        readOnly
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block font-semibold text-lg mb-2">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={admissionData.email}
                        onChange={handleChange}
                        defaultValue={defaultEmail}
                        readOnly
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                </div>

                {/* Additional fields for candidate information */}
                <div>
                    <label htmlFor="candidatePhone" className="block font-semibold text-lg mb-2">
                        Phone Number:
                    </label>
                    <input
                        type="tel"
                        id="candidatePhone"
                        value={admissionData.candidatePhone}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="address" className="block font-semibold text-lg mb-2">
                        Address:
                    </label>
                    <input
                        type="text"
                        id="address"
                        value={admissionData.address}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="dateOfBirth" className="block font-semibold text-lg mb-2">
                        Date of Birth:
                    </label>
                    <input
                        type="date"
                        id="dateOfBirth"
                        value={admissionData.dateOfBirth}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="imageUrl" className="block font-semibold text-lg mb-2">
                        Image URL:
                    </label>
                    <input
                        type="text"
                        id="imageUrl"
                        value={admissionData.imageUrl}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                </div>
                {/* End of additional fields */}
                <div className="col-span-2">
                    <button
                        type="submit"
                        className="btn btn-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded col-span-2"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Admission;
