import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#FAFAFA",
      paper: "#FFFFFF",
    },
    primary: {
      main: "#FF9F24",
    },
    secondary: {
      main: "#FF9F2440",
    },
    text: {
      primary: "#0F0D23",
      secondary: "#323232",
      disabled: "#969696",
    },
  },
  typography: {
    fontFamily: "DM Sans, sans-serif",
    fontSize: 14,
    h1: {
      fontSize: 24,
      fontWeight: 700,
    },
    h2: {
      fontSize: 20,
      fontWeight: 700,
    },
    h3: {
      fontSize: 18,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: 16,
      fontWeight: 700,
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
    },
    button: {
      fontFamily: "DM Sans, sans-serif",
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiPill: {
      defaultProps: {
        sx: {
          borderRadius: "15.5px",
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        color: "#8F8F8F",
      },
    },
    MuiContainer: {
      defaultProps: {
        margintop: "24px",
        marginleft: "24px",
        marginright: "24px",
      },
    },
    MuiChip: {
      variants: [
        {
          props: { variant: "outlined" },
          styleOverrides: {
            root: {
              borderRadius: "15.5px",
              fontSize: "14px",
              fontWeight: 400,
              color: "#0F0D23",
              "& .MuiChip-label": {
                paddingLeft: "10px",
                paddingRight: "10px",
              },
            },
          },
        },
      ],
    },
    MuiButton: {
      defaultProps: {
        sx: {
          fontFamily: "DM Sans, sans-serif",
          textTransform: "none",
          color: (props) =>
            props.variant === "contained" ? "#fff" : "inherit",
        },
      },
      variants: [
        {
          props: { variant: "contained" },
          styleOverrides: {
            root: {
              backgroundColor: (theme) => theme.palette.primary.main,
            },
          },
        },
      ],
    },
  },
});

export default theme;
