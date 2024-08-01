import { MantineProvider} from "@mantine/core";
import Homepage from "./Components/Homepage";
import "@mantine/core/styles.css";

export default function App() {
  return (
      <div className="w-full h-screen bg-bgColor text-textColor " >
    <MantineProvider>

      <Homepage />
    </MantineProvider>
      </div>
  );
}
