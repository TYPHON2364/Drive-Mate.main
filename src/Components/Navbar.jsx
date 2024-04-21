import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Img,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { FaUserAlt } from "react-icons/fa";
import { BsTelephone, BsLayoutTextSidebar } from "react-icons/bs";
import { Link, NavLink, useNavigate } from "react-router-dom";
import NavbarStyles from "./Navbar.module.css";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const { isAuth, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      <Flex
        justifyContent="space-between"
        flexWrap="wrap"
        alignItems="center"
        className={NavbarStyles.header}
        // border="solid 1px red"
      >
        <Flex className={NavbarStyles.navHead} alignItems="center"
          // border="solid 1px red"
          gap="5">
          <button ref={btnRef} onClick={onOpen}>
            <AiOutlineMenu />
          </button>
          {/* <Heading size="md" className={NavbarStyles.logo}>
            <Link to="/">ZOOMCAR</Link>
          </Heading>  */}

          <NavLink to="/">
            <Box>
              <Img className={NavbarStyles.logo} boxSize={{ "sm": "75%", "md": "85%", "lg": "100%" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAAAoCAYAAADKZNmCAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEdmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDI0LTA0LTIwPC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPjgwNmZlZDMzLTM1ZjktNDg5ZC1hNTY5LWQ0OWJiYTNjYjM4NDwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICA8ZGM6dGl0bGU+CiAgIDxyZGY6QWx0PgogICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5kcml2ZSAoMTM3IHggNDAgcHgpIC0gMTwvcmRmOmxpPgogICA8L3JkZjpBbHQ+CiAgPC9kYzp0aXRsZT4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3Jp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" />
            </Box>
          </NavLink>

        </Flex>
        <Flex className={NavbarStyles.navHead} alignItems="center"
          // border="solid 1px red"
          // gap="5"
          >
          {/* <a href="https://www.zoomcar.com/in/host/en?auth_required=true&utm_sub_source=dweb_ingress&platform=web">
            <Flex py="2" px="4" bg="white" color="black" borderRadius="1.5rem">
              <img
                src="https://www.zoomcar.com/build/e222e7ff96ffdd76290118718d52d71f.svg"
                alt="icon"
              />
              Become a Host
            </Flex>
          </a> */}

          <p>
            <h1>ZMS</h1>
          </p>
          {/* if logged in then show bookings page */}
          {isAuth ? (
            <Link to="/car-bookings">
              <h1>Bookings</h1>
            </Link>
          ) : null}
          {!isAuth ? (
            <Link to="/login">
              <h1>LogIn/SignUp</h1>
            </Link>
          ) : (
            <Button
            className={NavbarStyles.logout}
              size={{"sm":"sm","md":"md","lg":"md"}}
              bg="red"
              color="#ffffff"
              borderRadius="1.5rem"
              _hover="none"
              // fontSize={{"sm":"7px","md":"15px","lg":"15px"}}
              onClick={() => {
                logOutUser();
                navigate("/");
              }}
            >
              LOGOUT
            </Button>
          )}
        </Flex>
      </Flex>

      {/* drawer  */}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody border="1px solid black" p="0" m="0">
            <Link to="/login">
              <Flex
                className={NavbarStyles.leftLink}
                alignItems="center"
                gap="4"
              >
                <FaUserAlt /> Login or Signup
              </Flex>
            </Link>
            <Link to="/">
              <Flex
                className={NavbarStyles.leftLink}
                alignItems="center"
                gap="4"
                onClick={() => {
                  onClose();
                }}
              >
                <GrLocation />
                Change City
              </Flex>
            </Link>
            <p >
              <Flex
                className={NavbarStyles.leftLink}
                alignItems="center"
                gap="4"
              >
                <img
                  src="https://www.zoomcar.com/build/e222e7ff96ffdd76290118718d52d71f.svg"
                  alt="icon"
                />
                Become a Host
              </Flex>
            </p>
            <p >
              <Flex
                className={NavbarStyles.leftLink}
                alignItems="center"
                gap="4"
              >
                <BsLayoutTextSidebar />
                Zoomcar Fleet Vehicles Policies
              </Flex>
            </p>
            <p>
              <Flex
                className={NavbarStyles.leftLink}
                alignItems="center"
                gap="4"
              >
                <BsLayoutTextSidebar />
                Zoomcar Host Vehicles Policies
              </Flex>
            </p>
            <p>
              <Flex
                className={NavbarStyles.leftLink}
                alignItems="center"
                gap="4"
              >
                <BsTelephone />
                Help & Support
              </Flex>
            </p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
