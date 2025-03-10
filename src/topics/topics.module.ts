import { Module } from '@nestjs/common';
import { EpisodesController } from './episodes/episodes.controller';
import { TopicsController } from './topics.controller';

@Module({
  controllers: [EpisodesController, TopicsController]
})
export class TopicsModule {}
