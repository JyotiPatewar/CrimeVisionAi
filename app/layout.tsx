import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'CrimeVision AI – Intelligent Multimodal Forensic Analysis',
  description: 'Advanced multimodal platform for forensic evidence analysis, investigation intelligence, and crime scene reconstruction.',
  openGraph: {
    title: 'CrimeVision AI',
    description: 'Intelligent Multimodal Forensic Analysis Platform.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CrimeVision AI',
    description: 'Intelligent Multimodal Forensic Analysis Platform.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
