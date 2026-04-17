"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

const Upload = () => {
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const handleUpload = async (file) => {
    if (!file) return;

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("caption", caption);

      // auto today date
      const today = new Date().toISOString();
      formData.append("uploaded_date", today);

      const res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      setImageUrl(data.data?.image);
      setCaption("");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-4">

      {/* caption */}
      <input
        type="text"
        placeholder="Enter caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        className="px-4 py-2 border rounded-lg w-64"
      />

      {/* upload button */}
      <label className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl cursor-pointer hover:bg-blue-700 transition">
        <Plus size={18} />
        {loading ? "Uploading..." : "Upload"}

        <input
          type="file"
          className="hidden"
          onChange={(e) => handleUpload(e.target.files[0])}
        />
      </label>

      {/* preview */}
      {imageUrl && (
        <div className="flex flex-col items-center gap-2">
          <img
            src={imageUrl}
            alt="uploaded"
            className="w-64 h-64 object-cover rounded-xl shadow"
          />

          <p className="text-gray-700 font-medium">{caption}</p>
        </div>
      )}
    </div>
  );
};

export default Upload;