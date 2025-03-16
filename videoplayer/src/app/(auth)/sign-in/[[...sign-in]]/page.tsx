import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <SignIn
  appearance={{
    elements: {
      rootBox: 'w-full',
      card: 'w-full shadow-none bg-transparent space-y-6',
      headerTitle: 'text-2xl font-bold text-gray-900',
      headerSubtitle: 'text-gray-600',
      socialButtonsBlockButton: 'hover:bg-gray-50',
      footerActionText: 'text-gray-600',
      footerActionLink: 'text-indigo-600 hover:text-indigo-700',
    }
  }}
 />;
}