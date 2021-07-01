import React, { useState } from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="header">
        <Image src="/icon.png" width={120} height={100} />
      </div>
    </header>
  );
}
