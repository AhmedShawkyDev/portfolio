import { defaultLocale } from '@/navigation';
import { redirect } from 'next/navigation';


export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
