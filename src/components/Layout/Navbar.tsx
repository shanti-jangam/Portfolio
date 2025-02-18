import { AppBar, Box, ButtonProps, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link, LinkProps, useLocation, useNavigate } from "react-router-dom";

const GlowButton = styled(Typography)<
    ButtonProps & { to?: LinkProps["to"]; active?: boolean }
>(({ theme, active }) => ({
    position: "relative",
    transition: "all 0.3s ease",
    textDecoration: active ? "underline" : "none",
    textUnderlineOffset: active ? "8px" : "0px",
    color: active ? theme.palette.primary.main : "inherit",
    textShadow: active ? `0 0 10px ${theme.palette.primary.main}` : "none",
    "&:hover": {
        textDecoration: "underline",
        textUnderlineOffset: "8px",
        color: theme.palette.primary.main,
        textShadow: `0 0 10px ${theme.palette.primary.main}`,
        "&::before": {
            opacity: 1,
        },
    },
}));

const GlowTypography = styled(Typography)(({ theme }) => ({
    transition: "all 0.3s ease",
    cursor: "pointer",
    "&:hover": {
        color: theme.palette.primary.main,
        textShadow: `0 0 10px ${theme.palette.primary.main}`,
    },
}));

export const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Skills", path: "/skills" },
        { name: "Experience", path: "/experience" },
        { name: "Education", path: "/education" },
        { name: "Projects", path: "/projects" },
    ];

    return (
        <AppBar
            position="sticky"
            sx={{ backgroundColor: "transparent", color: "white" }}
        >
            <Toolbar>
                <GlowTypography
                    variant="h6"
                    sx={{ flexGrow: 1 }}
                    onClick={() => navigate("/")}
                >
                    Shanti Jangam
                </GlowTypography>
                <Box sx={{ display: "flex", gap: 4 }}>
                    {navItems.map((item) => (
                        <GlowButton
                            key={item.name}
                            color="inherit"
                            component={Link}
                            to={item.path}
                            active={location.pathname === item.path} // Highlight active tab
                        >
                            {item.name}
                        </GlowButton>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};
