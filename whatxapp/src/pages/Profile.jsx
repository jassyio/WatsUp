const Profile = () => (
  <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="bg-white shadow-lg rounded-lg p-6 w-96">
      <h1 className="text-2xl font-bold text-center text-whatsapp-dark mb-4">
        Profile
      </h1>
      <div className="space-y-4">
        <div>
          <label className="block font-medium">Name:</label>
          <p className="bg-gray-200 p-2 rounded">John Doe</p>
        </div>
        <div>
          <label className="block font-medium">Email:</label>
          <p className="bg-gray-200 p-2 rounded">johndoe@example.com</p>
        </div>
        <button className="w-full bg-whatsapp text-white py-3 rounded-lg font-medium hover:bg-whatsapp-dark">
          Edit Profile
        </button>
      </div>
    </div>
  </div>
);

export default Profile;
