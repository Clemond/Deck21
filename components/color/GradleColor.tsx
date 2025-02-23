// GradientBackground.tsx
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

interface GradientBackgroundProps {
  children: React.ReactNode;
  colors?: [string, string, ...string[]];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
}

export default function GradientColor({
  children,
  colors = ["#eab308", "#946308"],
  start = { x: 0, y: 0 },
  end = { x: 0, y: 1 }
}: GradientBackgroundProps) {
  return (
    <LinearGradient colors={colors} start={start} end={end}>
      {children}
    </LinearGradient>
  );
}
