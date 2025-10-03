'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';

const Form = () => {
  const [userName, setUserName] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);
  const [showPolicyModal, setShowPolicyModal] = useState(false);
  const router = useRouter();

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    if (files.length) {
      setImages(files);
      toast.success(`${files.length} file(s) dropped`);
    }
  };

  const convertToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userName || !content || !acceptedPolicy) {
      toast.error('Please complete all fields and accept the Privacy Policy.');
      return;
    }

    const base64Images = await Promise.all(images.map((img) => convertToBase64(img)));

    const postData = {
      userName,
      content,
      images: base64Images,
    };

    const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const updatedPosts = [postData, ...existingPosts];
    localStorage.setItem('posts', JSON.stringify(updatedPosts));

    toast.success('Post created successfully!');
    router.push('/');
    router.refresh();
  };

  return (
    <>
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleFileDrop}
        className="max-w-md mx-auto p-6 bg-gradient-to-br from-indigo-900 via-purple-700 to-blue-600 shadow-md rounded-md border-2 border-dashed border-blue-300 text-white"
      >
        <h1 className="text-xl font-semibold mb-4">Create a Post</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full border border-blue-300 p-2 rounded text-white bg-transparent"
            required
          />
          <textarea
            placeholder="What is on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border border-blue-300 p-2 rounded h-32 resize-none text-white bg-transparent"
            required
          />

          {/* Drop Zone */}
          <div
            onClick={() => document.getElementById('fileUpload').click()}
            className="flex flex-col items-center justify-center border-2 border-dashed border-blue-400 rounded-md p-6 cursor-pointer bg-white/10 hover:bg-white/20 transition"
          >
            <CloudArrowUpIcon className="h-10 w-10 text-blue-300 mb-2" />
            <p className="font-medium">Browse Files</p>
            <p className="text-sm text-gray-300">Drag and drop files here</p>
            <input
              id="fileUpload"
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          {/* Previews */}
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

          {/* Privacy Policy */}
          <div className="space-y-2 bg-white/10 p-4 rounded-md border border-blue-400">
            <h2 className="text-lg font-semibold text-white">Privacy Policy</h2>
            <p className="text-sm text-gray-200">
              Please read our Privacy Policy to understand how your information is used and shared.
              <button
                type="button"
                onClick={() => setShowPolicyModal(true)}
                className="ml-1 underline text-blue-300 hover:text-blue-500"
              >
                View full policy
              </button>
            </p>
            <label className="flex items-start space-x-2 text-white">
              <input
                type="checkbox"
                checked={acceptedPolicy}
                onChange={(e) => setAcceptedPolicy(e.target.checked)}
                className="mt-1 accent-blue-500"
                required
              />
              <span className="text-sm">
                I have read, understood, and accepted the{' '}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold text-blue-300 hover:text-blue-500"
                >
                  PRIVACY POLICY
                </a>{' '}
                for membership.
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit Post
          </button>
        </form>
      </div>

      {/* Modal */}
      {showPolicyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white max-w-lg p-6 rounded shadow-lg space-y-4">
            <h2 className="text-xl font-bold">Privacy Policy</h2>
            <p className="text-sm text-gray-700">
              We value your privacy and are committed to protecting your personal information.
              When you submit a post, we collect your name, post content, and any uploaded images
              solely for the purpose of displaying your post on our platform. We do not share your
              data with third parties, and we do not use your information for marketing purposes.
              All data is stored securely and used only to support the functionality of this site.
              By submitting a post, you acknowledge that your content may be publicly visible and
              that you have read and accepted this privacy policy.
            </p>
            <button
              onClick={() => setShowPolicyModal(false)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;

