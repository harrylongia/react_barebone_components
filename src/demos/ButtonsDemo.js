import React from "react";
import Button from "../components/Button/Button";

export default function ButtonsDemo() {
  return (
    <div className="App__Section">
      <p className="App__Section--title">Buttons</p>
      <div className="App__grid2">
        <Button>Default Button</Button>
        <Button danger>Default Danger Button</Button>
        <Button type="link">Link Button</Button>
        <Button type="link" danger>
          Danger Link Button
        </Button>
        <Button type="primary">Primary Button</Button>
        <Button type="primary" danger>
          Danger Primary Button
        </Button>
        <Button type="hollow" shape="round">
          Primary Button
        </Button>
        <Button type="hollow" danger shape="round">
          Danger Primary Button
        </Button>
      </div>
    </div>
  );
}
