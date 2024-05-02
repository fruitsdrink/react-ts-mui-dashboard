import { useState } from "react";
import { useTheme, Box, Typography } from "@mui/material";
import PixIcon from "@mui/icons-material/Pix";
import FlexBetween from "./flex-between";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  return (
    <FlexBetween mb={"0.25rem"} p={"0.5rem 0rem"} color={palette.grey[300]}>
      {/* left side */}
      <FlexBetween gap={"0.75rem"}>
        <PixIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize={"16px"}>
          Finanseer
        </Typography>
      </FlexBetween>
      {/* right side */}
      <FlexBetween gap={"2rem"}>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit"
            }}
          >
            看板
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit"
            }}
          >
            趋势
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
}
