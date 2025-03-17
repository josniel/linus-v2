import type { Metadata } from 'next';
import MainSection from '@/components/Store/Sections/MainSection';
import Condoms from '@/components/Store/Sections/Condoms';
import TopSellers from '@/components/Store/Sections/TopSellers';
import Clothes from '@/components/Store/Sections/Clothes';

export const metadata: Metadata = {
  title: 'Linus App',
  description: 'Finance App',
};
export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <MainSection className="section0" />
      <Condoms className="section1" />
      <TopSellers className="section2" />
      <Clothes className="section3" />
    </main>
  );
}
