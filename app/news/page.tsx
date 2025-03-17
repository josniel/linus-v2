import type { Metadata } from 'next';
import MainSection from '@/components/News/Sections/MainSection';
import Articles from '@/components/News/Sections/Articles';

export const metadata: Metadata = {
  title: 'Linus App',
  description: 'Finance App',
};
export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <MainSection className="section0" />
      <Articles className="section1" />
    </main>
  );
}
