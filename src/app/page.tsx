import { AddCatForm } from "@/components/AddCatForm";
import { CatsList } from "@/components/CatsList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <AddCatForm />
      <CatsList />
    </main>
  );
}
