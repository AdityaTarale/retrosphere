import { Column } from "@/components/column";
import { Separator } from "@/components/ui/separator";
import { Navbar } from "./components/navbar";

import "./App.css";

function App() {
  return (
    <>
      <div className="hidden h-full flex-col md:flex">
        <Navbar />
        <Separator />
        <div className="px-4 h-full py-6">
          <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_300px]">
            <div className="hidden flex-col space-y-4 sm:flex md:order-2">
              <h1>Sidebar Right</h1>
            </div>
            <div className="md:order-1">
              <div className="grid h-full gap-6 lg:grid-cols-4">
                <Column label="Start" />
                <Column label="Stop" />
                <Column label="Continue" />
                <Column label="Nothing" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
