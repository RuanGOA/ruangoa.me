import React from "react";

import { useConfig } from "../../contexts/config.context";

import { useNavigate } from "react-router-dom";

import { ReactComponent as Contact } from "./assets/contact.svg";

import { Button } from "./styled";

export default function ContactButton() {
  const { theme } = useConfig();
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/#contact");
  };

  return (
    <Button theme={theme} onClick={handleContact}>
      <Contact />
    </Button>
  );
}
