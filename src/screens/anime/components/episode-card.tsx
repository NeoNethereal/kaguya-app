import React from 'react';

import type { Episode } from '@/types';
import type { Media } from '@/types/anilist';
import { Button, Image, Text, View } from '@/ui';

interface EpisodeCardProps {
  episode: Episode;
  media: Media;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode, media }) => {
  return (
    <Button className="flex flex-col items-start justify-center rounded-md bg-transparent p-0">
      <Image
        className="aspect-video w-full rounded-md"
        source={{
          uri:
            episode.thumbnail ||
            media.bannerImage ||
            media.coverImage.extraLarge,
        }}
      />

      <View className="mt-1">
        <Text variant="sm" weight="semibold" numberOfLines={2}>
          {episode.title
            ? `${episode.number}. ${episode.title}`
            : `Episode ${episode.number}`}
        </Text>
      </View>
    </Button>
  );
};

export default EpisodeCard;