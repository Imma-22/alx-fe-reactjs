import React from "react";

function UserCard({ user }) {
  return (
    <div className="user-card-container p-4 max-w-md mx-auto bg-white shadow-md rounded-lg mt-4">
      <div className="flex items-center">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-24 h-24 rounded-full border-2 border-gray-300 mr-4"
        />
        <div>
          <h2 className="text-xl font-semibold">{user.name || user.login}</h2>
          <p className="text-gray-600">{user.bio || "No bio available"}</p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-2 inline-block"
          >
            View Profile
          </a>
        </div>
      </div>
      <div className="mt-4">
        <p>
          <strong>Followers:</strong> {user.followers}
        </p>
        <p>
          <strong>Following:</strong> {user.following}
        </p>
        <p>
          <strong>Repositories:</strong> {user.public_repos}
        </p>
      </div>
    </div>
  );
}

export default UserCard;