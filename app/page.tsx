import type { Metadata } from 'next';
import Landing from '@/components/Landingv2';

export const metadata: Metadata = {
  title: 'Linus App',
  description: 'Finance App',
};
export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Landing />
    </main>
  );
}
