import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { router } from "./Router";
import { StoreProvider } from "@/store/store";

export default function App() {
    return (
        <ThemeProvider>
            <StoreProvider>
                <RouterProvider router={router} />
            </StoreProvider>
        </ThemeProvider>
    )
}
