import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPhotosByAlbumId } from '../api/users';

const Photos = () => {
  const [searchParams] = useSearchParams();
  const albumId = searchParams.get('albumId');
  const [photos, setPhotos] = useState<any[]>([]);

  useEffect(() => {
    if (albumId) {
      getPhotosByAlbumId(albumId).then(setPhotos);
    }
  }, [albumId]);

  return (
    <div>
      <h1 className="text-2xl mb-4">📸 Photos from Album {albumId}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map(photo => (
          <div key={photo.id} className="text-center">
            <img src={photo.thumbnailUrl} alt={photo.title} className="rounded mx-auto" />
            <p className="text-sm mt-2">{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
