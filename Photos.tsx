import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPhotosByAlbumId } from '../api/users';

const Photos = () => {
  const [searchParams] = useSearchParams();
  const albumId = searchParams.get('albumId');
  const [photos, setPhotos] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (albumId) {
      getPhotosByAlbumId(albumId).then(setPhotos);
    }
  }, [albumId]);

  return (
    <div className="min-h-screen relative overflow-hidden px-4 py-10">
      
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/tamkeen-logo.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '100px',
          opacity: 0.05,
          zIndex: 0,
        }}
      />

     
      <div className="relative z-10 max-w-5xl mx-auto bg-white bg-opacity-90 p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-red-600 mb-6">
          📸 Photos from Album {albumId}
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {photos.map((photo) => (
            <div key={photo.id} className="text-center">
              <img src={photo.thumbnailUrl} alt={photo.title} className="rounded mx-auto" />
              <p className="text-sm mt-2 text-gray-700">{photo.title}</p>
            </div>
          ))}
        </div>

        
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 hover:underline font-semibold"
        >
          🔙 Back
        </button>
      </div>
    </div>
  );
};

export default Photos;

