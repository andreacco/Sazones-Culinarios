'use client'

import NavBar from "@/components/home/NavBar/NavBar";
import {NextUIProvider} from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <div>
        <NavBar/>
      </div>
    </NextUIProvider>
  )
}
