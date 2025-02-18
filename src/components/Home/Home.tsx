import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Button, Grid2, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";

const GlowButton = styled(Button)(({ theme }) => ({
    transition: "all 0.3s ease",
    borderRadius: "25px",
    padding: "10px 30px",
    "&:hover": {
        backgroundColor: theme.palette.primary.main,
        boxShadow: `0 0 20px ${theme.palette.primary.main}`,
    },
}));

const SocialIcon = styled(Box)(({ theme }) => ({
    cursor: "pointer",
    transition: "all 0.3s ease",
    color: theme.palette.primary.main,
    "&:hover": {
        transform: "translateY(-2px)",
        filter: "brightness(1.2)",
    },
}));

const ContentBox = styled(Box)(() => ({
    maxWidth: "500px",
    margin: "0 auto",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
}));

const roles = ["Software Engineer", "Full Stack Developer", "React Developer"];

export const Home = () => {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const role = roles[index];

        const updateText = () => {
            if (!isDeleting) {
                // Typing Effect
                if (text.length < role.length) {
                    setText((prev) => role.substring(0, prev.length + 1));
                } else {
                    // Finished typing, wait before deleting
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            } else {
                // Erasing Effect
                if (text.length > 0) {
                    setText((prev) => prev.substring(0, prev.length - 1));
                } else {
                    // Finished erasing, move to next role
                    setIsDeleting(false);
                    setIndex((prevIndex) => (prevIndex + 1) % roles.length);
                }
            }
        };

        const timer = setTimeout(updateText, isDeleting ? 50 : 100); // Erase faster than typing

        return () => clearTimeout(timer); // Cleanup previous timer
    }, [text, isDeleting, index]);

    return (
        <Grid2
            container
            spacing={2}
            flexGrow={1}
            alignItems="center"
            justifyContent="space-evenly"
        >
            {/* Left Section */}
            <Grid2 container>
                <ContentBox>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: "2rem", md: "2.5rem" },
                            lineHeight: 1.2,
                        }}
                    >
                        Hi, I'm{" "}
                        <Box component="span" color="primary.main">
                            Shanti Jangam
                        </Box>
                    </Typography>

                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: "1.5rem", md: "2rem" },
                            lineHeight: 1.2,
                        }}
                    >
                        I'm a {text}|
                    </Typography>

                    <Typography variant="body1">
                        Master's Student in Computer Science with 2 years of
                        experience building ReactJS applications and REST APIs
                    </Typography>

                    {/* Social Icons */}
                    <Box
                        sx={{
                            display: "flex",
                            gap: 3,
                            justifyContent: { xs: "center", md: "flex-start" },
                        }}
                    >
                        <SocialIcon>
                            <LinkedInIcon fontSize="large" />
                        </SocialIcon>
                        <SocialIcon>
                            <GitHubIcon fontSize="large" />
                        </SocialIcon>
                        <SocialIcon>
                            <TwitterIcon fontSize="large" />
                        </SocialIcon>
                    </Box>

                    {/* Action Buttons */}
                    <Box
                        sx={{
                            display: "flex",
                            gap: 2,
                            justifyContent: { xs: "center", md: "flex-start" },
                        }}
                    >
                        <GlowButton variant="contained">Hire Me</GlowButton>
                        <GlowButton
                            variant="outlined"
                            sx={{
                                borderColor: "primary.main",
                                "&:hover": {
                                    borderColor: "primary.main",
                                    color: "common.black",
                                },
                            }}
                        >
                            Contact
                        </GlowButton>
                    </Box>
                </ContentBox>
            </Grid2>

            {/* Right Section */}
            <Grid2
                container
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: { xs: 4, md: 0 },
                }}
            >
                <Box
                    sx={{
                        width: { xs: "300px", md: "400px" },
                        height: { xs: "300px", md: "400px" },
                        borderRadius: "50%",
                        overflow: "hidden",
                        backgroundColor: "primary.main",
                        "&:hover": {
                            boxShadow: (theme) =>
                                `0 0 30px ${theme.palette.primary.main}`,
                            transition: "all 0.5s ease",
                        },
                    }}
                >
                    <Box
                        component="img"
                        src="/path-to-your-image.jpg"
                        alt="Profile"
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                </Box>
            </Grid2>
        </Grid2>
    );
};
