import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStudent, deleteStudent } from "../store/studentSlice";
import {
  FaEdit,
  FaTrash,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUser,
  FaTimes,
} from "react-icons/fa";

const StudentDetails = ({ student }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.students);

  const [isEditing, setIsEditing] = useState(false);
  const [editedStudent, setEditedStudent] = useState({ ...student });
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleChange = (e) => {
    setEditedStudent({
      ...editedStudent,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => {
    setEditedStudent({ ...student });
    setIsEditing(false);
  };

  const handleSave = async () => {
    try {
      await dispatch(updateStudent(editedStudent)).unwrap();
      setIsEditing(false);
    } catch (error) {
      alert("Failed to update student: " + error);
    }
  };

  const handleDelete = async () => {
    try {
      await dispatch(deleteStudent(student.id)).unwrap();
      setShowDeleteConfirm(false);
    } catch (error) {
      alert("Failed to delete student: " + error);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <FaUser className="text-white text-xl" />
            </div>
            <div>
              <h5 className="text-xl font-semibold text-white">
                {student.name}
              </h5>
              <span className="text-blue-100 text-sm">
                Roll No: {student.rollNumber}
              </span>
            </div>
          </div>
          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
            {student.class}
          </span>
        </div>
      </div>

      <div className="p-6 space-y-3">
        {student.email && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <FaEnvelope className="text-blue-600 text-sm" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p className="text-gray-800 font-medium">{student.email}</p>
            </div>
          </div>
        )}
        {student.phone && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
              <FaPhone className="text-green-600 text-sm" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Phone</p>
              <p className="text-gray-800 font-medium">{student.phone}</p>
            </div>
          </div>
        )}
        {student.address && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
              <FaMapMarkerAlt className="text-purple-600 text-sm" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Address</p>
              <p className="text-gray-800 font-medium">{student.address}</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-2 mt-4 px-6 pb-4">
        <button
          className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-2 px-4 rounded-lg transition flex items-center justify-center gap-2"
          onClick={handleEdit}
        >
          <FaEdit /> Edit
        </button>
        <button
          className="flex-1 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-2 px-4 rounded-lg transition flex items-center justify-center gap-2"
          onClick={() => setShowDeleteConfirm(true)}
        >
          <FaTrash /> Delete
        </button>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-200/80 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={handleCancel}
            >
              <FaTimes />
            </button>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Edit Student
            </h3>
            <div className="space-y-3">
              {["name", "rollNumber", "class", "email", "phone", "address"].map(
                (field) => (
                  <div key={field}>
                    <label className="block text-sm text-gray-600 mb-1 capitalize">
                      {field.replace(/([A-Z])/g, " $1")}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={editedStudent[field] || ""}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                ),
              )}
            </div>
            <div className="flex gap-2 mt-4">
              <button
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition"
                onClick={handleSave}
                disabled={loading}
              >
                Save Changes
              </button>
              <button
                className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setShowDeleteConfirm(false)}
            >
              <FaTimes />
            </button>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTrash className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Confirm Delete
              </h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete <strong>{student.name}</strong>?
                This action cannot be undone.
              </p>
              <div className="flex gap-3">
                <button
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-4 rounded-lg transition"
                  onClick={() => setShowDeleteConfirm(false)}
                >
                  Cancel
                </button>
                <button
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition"
                  onClick={handleDelete}
                  disabled={loading}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDetails;
