'use client';

import LikeButton from '@/components/LikeButotn';
import MediaItem from '@/components/MediaItem';
import useOnPlay from '@/hooks/useOnPlay';
import { Song } from '@/types';

interface SearchContentProps {
  songs: Song[];
}

const SearchContent: React.FC<SearchContentProps> = ({ songs }) => {
  const onPlay = useOnPlay(songs);

  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400">검색한 자료가 없습니다.</div>;
  }
  return (
    <div
      className="
    flex
    flex-col
    gap-y-2
    w-full
    px-6
    "
    >
      {songs.map((item: Song) => (
        <div key={item.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem
              onClick={(id: string) => {
                onPlay(id);
              }}
              data={item}
            />
          </div>
          <div>
            <LikeButton songId={item.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
