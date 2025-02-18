import { Grid2 } from "@mui/material";
import { ReactNode } from "react";
import { Navbar } from "./Navbar";

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <Grid2 container height="100vh" direction="column">
            <Grid2>
                <Navbar />
            </Grid2>
            <Grid2 container flexGrow={1} direction="column">
                {children}
            </Grid2>
        </Grid2>
    );
};
