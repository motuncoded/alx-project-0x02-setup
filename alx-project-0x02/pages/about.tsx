import React from "react";
import Button from "@/components/common/Button";

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Button size="small" shape="rounded-sm">
        Small Rounded-sm
      </Button>
      <Button size="medium" shape="rounded-md" style={{ margin: "0 8px" }}>
        Medium Rounded-md
      </Button>
      <Button size="large" shape="rounded-full">
        Large Rounded-full
      </Button>
    </div>
  );
}

export default About;
