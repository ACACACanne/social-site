'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const [userName, setUserName] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    setImageUrls([]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const url = e.dataTransfer.getData('text/uri-list') || e.dataTransfer.getData('text/plain');
    if (url && isValidUrl(url)) {
      setImageUrls((prev) => [...prev, url]);
      setImages([]);
      toast.success('Image URL dropped successfully!');
    } else {
      toast.error('Invalid URL dropped.');
    }
  };

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName || !content) {
      toast.error('Please fill in all required fields.');
      return;
    }

    const postData = {
      userName,
      content,
      images: images.map((img) => img.name),
      imageUrls,
    };

    console.log('Post submitted:', postData);
    toast.success('Post created successfully!');

    setUserName('');
    setContent('');
    setImages([]);
    setImageUrls([]);
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="max-w-md mx-auto p-6 bg-gradient-to-br from-indigo-900 via-purple-700 to-blue-600 shadow-md rounded-md border-2 border-dashed border-blue-300 text-white"
    >
      <h1 className="text-xl font-semibold mb-4">Create a Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border p-2 rounded h-32 resize-none"
          required
        />
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="w-full"
        />

        {/* Uploaded File Previews */}
        {images.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mt-2">
            {images.map((img, index) => (
              <img
                key={index}
                src={URL.createObjectURL(img)}
                alt={`Preview ${index + 1}`}
                className="w-full h-auto rounded"
              />
            ))}
          </div>
        )}

        {/* Dropped URL Previews */}
        {imageUrls.length > 0 && images.length === 0 && (
          <div className="grid grid-cols-2 gap-2 mt-2">
            {imageUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Dropped URL ${index + 1}`}
                className="w-full h-auto rounded"
              />
            ))}
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Post
        </button>
      </form>
    </div>
  );
};

export default Form;

