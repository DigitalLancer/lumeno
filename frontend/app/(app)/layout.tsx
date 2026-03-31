import Navbar from "@/components/Navbar/Navbar";
import SyncfusionLicenceProvider from "../providers/SyncfusionLicenceProvider";
import { ModalProvider } from "@/context/ModalContext";
import CreateEventModal from "@/components/modals/CreateEventModal";
import UpdateEventModal from "@/components/modals/UpdateEventModal";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SyncfusionLicenceProvider>
      <ModalProvider>
        <div className="flex h-screen overflow-hidden">
          <Navbar />
          <main className="flex-1 min-h-screen overflow-y-auto p-4 md:p-10">
            {children}
          </main>
          <CreateEventModal />
          <UpdateEventModal />
        </div>
      </ModalProvider>
    </SyncfusionLicenceProvider>
  );
}