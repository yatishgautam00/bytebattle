"use client";
// pages/register.js
import React, { useState, useEffect } from "react";
import { db } from "@/lib/firebase"; // Make sure to adjust the import path to your firebase setup
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog"; // Adjust the import path

const Register = () => {
    const [teamLeader, setTeamLeader] = useState({
        name: "",
        contact: "",
        email: "",
        branch: "",
        semester: "",
      });
      const [teamMembers, setTeamMembers] = useState([]);
      const [projectTitle, setProjectTitle] = useState("Project Title");
      const [isFormValid, setIsFormValid] = useState(false);
      const [errors, setErrors] = useState({ email: "", contact: "" });
      const router = useRouter();
    
      const maxParticipants = 4;
    
      const handleAddMember = () => {
        if (teamMembers.length < maxParticipants - 1) {
          setTeamMembers([
            ...teamMembers,
            { name: "", branch: "", email: "", semester: "" },
          ]);
        }
      };
    
      const handleRemoveMember = (index) => {
        setTeamMembers(teamMembers.filter((_, idx) => idx !== index));
      };
    
      const handleMemberChange = (index, field, value) => {
        const updatedMembers = [...teamMembers];
        updatedMembers[index][field] = value;
        setTeamMembers(updatedMembers);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          await addDoc(collection(db, "registrations"), {
            teamLeader,
            teamMembers,
            projectTitle,
            timestamp: new Date(),
          });
    
          alert("Registration successful!");
          router.push("/success");
        } catch (error) {
          console.error("Error saving registration:", error);
          alert("Failed to register. Please try again.");
        }
      };
    
      const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
    
      const validateContact = (contact) => {
        const contactRegex = /^\d{10}$/;
        return contactRegex.test(contact);
      };
    
      const validateForm = () => {
        const isTeamLeaderValid = Object.values(teamLeader).every(
          (value) => value.trim() !== ""
        );
    
        const areMembersValid = teamMembers.every((member) =>
          Object.values(member).every((value) => value.trim() !== "")
        );
    
        const isEmailValid = validateEmail(teamLeader.email);
        const isContactValid = validateContact(teamLeader.contact);
    
        setErrors({
          email: isEmailValid ? "" : "Valid email format",
          contact: isContactValid ? "" : "Contact must be 10 digits",
        });
    
        setIsFormValid(
          isTeamLeaderValid &&
          areMembersValid &&
          isEmailValid &&
          isContactValid
        );
      };
    
      useEffect(() => {
        validateForm();
      }, [teamLeader, teamMembers]);

  return (
    <div className="max-w-lg mx-auto my-10 p-6 backdrop-blur-md bg-white bg-opacity-10 shadow-2xl rounded-lg text-white md:max-w-2xl lg:max-w-4xl">
      <h2 className="text-4xl font-extrabold mb-6 text-center text-yellow-300">
        ByteBattle Registration
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-yellow-300">
              Team Leader Name
            </label>
            <input
              type="text"
              className="w-full p-2 border-2 border-yellow-500 rounded text-white bg-transparent focus:border-yellow-300 focus:outline-none placeholder-slate-400"
              placeholder="Enter your name"
              value={teamLeader.name}
              onChange={(e) =>
                setTeamLeader({ ...teamLeader, name: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block font-medium text-yellow-300">Email</label>
            <input
              type="email"
              className="w-full p-2 border-2 border-yellow-500 rounded text-white bg-transparent focus:border-yellow-300 focus:outline-none placeholder-slate-400"
              placeholder="Enter your email"
              value={teamLeader.email}
              onChange={(e) =>
                setTeamLeader({ ...teamLeader, email: e.target.value })
              }
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label className="block font-medium text-yellow-300">
              Contact Number (+91)
            </label>
            <input
              type="tel"
              className="w-full p-2 border-2 border-yellow-500 rounded text-white bg-transparent focus:border-yellow-300 focus:outline-none placeholder-slate-400"
              placeholder="Valid mobile number"
              value={teamLeader.contact}
              onChange={(e) =>
                setTeamLeader({ ...teamLeader, contact: e.target.value })
              }
              required
            />
            {errors.contact && (
              <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-yellow-300">
                Branch
              </label>
              <input
                type="text"
                className="w-full p-2 border-2 border-yellow-500 rounded text-white bg-transparent focus:border-yellow-300 focus:outline-none placeholder-slate-400"
                placeholder="Enter your branch"
                value={teamLeader.branch}
                onChange={(e) =>
                  setTeamLeader({ ...teamLeader, branch: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block font-medium text-yellow-300">
                Semester
              </label>
              <input
                type="text"
                className="w-full p-2 border-2 border-yellow-500 rounded text-white bg-transparent focus:border-yellow-300 focus:outline-none placeholder-slate-400"
                placeholder="Enter your semester"
                value={teamLeader.semester}
                onChange={(e) =>
                  setTeamLeader({ ...teamLeader, semester: e.target.value })
                }
                required
              />
            </div>
          </div>
        </div>

        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="mb-6 p-4 backdrop-blur-md bg-opacity-10 rounded text-white shadow-md"
          >
            <h4 className="font-semibold text-yellow-300">
              Team Member {index + 1}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border-2 border-yellow-500 rounded bg-transparent focus:border-yellow-300 focus:outline-none placeholder-slate-400"
                value={member.name}
                onChange={(e) =>
                  handleMemberChange(index, "name", e.target.value)
                }
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border-2 border-yellow-500 rounded bg-transparent focus:border-yellow-300 focus:outline-none placeholder-slate-400"
                value={member.email}
                onChange={(e) =>
                  handleMemberChange(index, "email", e.target.value)
                }
                required
              />
            </div>
            <div className="grid py-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-2">
              <input
                type="text"
                placeholder="Branch"
                className="w-full p-2 border-2 border-yellow-500 rounded bg-transparent focus:border-yellow-300 focus:outline-none placeholder-slate-400"
                value={member.branch}
                onChange={(e) =>
                  handleMemberChange(index, "branch", e.target.value)
                }
                required
              />
              <input
                type="text"
                placeholder="Semester"
                className="w-full p-2 border-2 border-yellow-500 rounded bg-transparent focus:border-yellow-300 focus:outline-none placeholder-slate-400"
                value={member.semester}
                onChange={(e) =>
                  handleMemberChange(index, "semester", e.target.value)
                }
                required
              />
              <button
                type="button"

                className="mt-2 md:mt-0 lg:mt-0 w-full bg-red-600 text-white py-2 rounded"
                onClick={() => handleRemoveMember(index)}
              >
                 Remove Member
              </button>
            </div>
          </div>
        ))}
        <div className="grid grid-cols-2">
          <button
            type="button"
            className="bg-yellow-600 col-span-1 text-white py-2 rounded mt-4 hover:bg-yellow-500"
            onClick={handleAddMember}
            disabled={teamMembers.length >= maxParticipants - 1}
          >
            Add Member
          </button>
        </div>

        <div className="mb-4 mt-4">
          <label className="block font-medium text-yellow-300">
            Project Title (Optional)
          </label>
          <input
            type="text"
            className="w-full p-2 border-2 border-yellow-500 rounded text-white bg-transparent focus:border-yellow-300 focus:outline-none placeholder-slate-400"
            placeholder="Enter project title"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
          />
        </div>

        <div className="text-center">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button 

                disabled={!isFormValid}
                className={`mt-4 bg-green-500 text-white py-2 px-6 rounded ${
                  !isFormValid ? "opacity-50 cursor-not-allowed" : "hover:bg-green-600"
                }`}
              >
                Submit Registration
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className='backdrop-blur-md bg-white bg-opacity-10 border-yellow-400'>
              <AlertDialogHeader>
                <AlertDialogTitle className='text-white text-xl'>Confirm Submission</AlertDialogTitle>
                <AlertDialogDescription className='text-slate-300 text-lg'>
                  Are you sure you want to submit this registration?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className='text-red-400 border-red-500 hover:border-red-700 hover:text-red-700 hover:bg-transparent bg-transparen'>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleSubmit} className='bg-green-500 text-white   text-md hover:bg-green-400'>
                  Confirm
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </form>
    </div>
  );
};

export default Register;
