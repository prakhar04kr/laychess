import IndexPage from "@/routes/index";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  return (
    <>
      <IndexPage />
      <Toaster position="top-center" />
    </>
  );
}
