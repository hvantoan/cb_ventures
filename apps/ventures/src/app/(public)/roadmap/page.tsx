'use client';

import roadmapData from '@/data/roadmap.json';

import { Roadmap } from '../_components';

const RoadmapPage: React.FC = () => {
  return <Roadmap data={JSON.parse(JSON.stringify(roadmapData.data))} />;
};

export default RoadmapPage;
