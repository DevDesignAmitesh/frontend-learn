import type { ReactElement } from "react";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

export interface SmallButtonProps {
  firstElm: string | ReactElement;
  secondElm: string | ReactElement;
}

export interface UpDownButtonProps {
  firstElm: ReactElement;
}

export interface ButtonProps {
  firstElm: string;
  type: "md" | "sm" | "lg";
  align: "left" | "right";
}

type BtnItem =
  | {
      kind: "small";
      firstElm: string | ReactElement;
      secondElm: string | ReactElement;
    }
  | {
      kind: "button";
      firstElm: string;
      type: "md" | "sm" | "lg";
      align: "left" | "right";
    }
  | { kind: "updown"; firstElm: ReactElement }
  | { kind: "arrow"; direction: "up" | "down" | "left" | "right" }
  | { kind: "backspace" };

export const btnItems: BtnItem[][] = [
  // ───────────────── Row 1
  [
    { kind: "small", firstElm: "`", secondElm: "~" },
    { kind: "small", firstElm: "1", secondElm: "!" },
    { kind: "small", firstElm: "2", secondElm: "@" },
    { kind: "small", firstElm: "3", secondElm: "#" },
    { kind: "small", firstElm: "4", secondElm: "$" },
    { kind: "small", firstElm: "5", secondElm: "%" },
    { kind: "small", firstElm: "6", secondElm: "^" },
    { kind: "small", firstElm: "7", secondElm: "&" },
    { kind: "small", firstElm: "8", secondElm: "*" },
    { kind: "small", firstElm: "9", secondElm: "(" },
    { kind: "small", firstElm: "0", secondElm: ")" },
    { kind: "small", firstElm: "-", secondElm: "_" },
    { kind: "small", firstElm: "=", secondElm: "+" },
    { kind: "backspace" },
  ],

  // ───────────────── Row 2
  [
    { kind: "button", firstElm: "Tab", type: "md", align: "left" },
    ...["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((k) => ({
      kind: "small" as const,
      firstElm: k,
      secondElm: k.toLowerCase(),
    })),
    { kind: "small", firstElm: "[", secondElm: "{" },
    { kind: "small", firstElm: "]", secondElm: "}" },
    { kind: "small", firstElm: "\\", secondElm: "|" },
  ],

  // ───────────────── Row 3
  [
    { kind: "button", firstElm: "Caps", type: "lg", align: "left" },
    ...["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((k) => ({
      kind: "small" as const,
      firstElm: k,
      secondElm: k.toLowerCase(),
    })),
    { kind: "small", firstElm: ";", secondElm: ":" },
    { kind: "small", firstElm: "'", secondElm: '"' },
    {
      kind: "button",
      firstElm: "Enter",
      type: "lg",
      align: "right",
    },
  ],

  // ───────────────── Row 4
  [
    { kind: "button", firstElm: "Shift", type: "lg", align: "left" },
    ...["Z", "X", "C", "V", "B", "N", "M"].map((k) => ({
      kind: "small" as const,
      firstElm: k,
      secondElm: k.toLowerCase(),
    })),
    { kind: "small", firstElm: ",", secondElm: "<" },
    { kind: "small", firstElm: ".", secondElm: ">" },
    { kind: "small", firstElm: "/", secondElm: "?" },
    { kind: "button", firstElm: "Shift", type: "lg", align: "right" },
  ],

  // ───────────────── Row 5
  [
    { kind: "button", firstElm: "Ctrl", type: "sm", align: "left" },
    { kind: "button", firstElm: "Alt", type: "sm", align: "left" },
    {
      kind: "button",
      firstElm: "Space",
      type: "lg",
      align: "left",
    },
    { kind: "button", firstElm: "Alt", type: "sm", align: "right" },
    { kind: "button", firstElm: "Ctrl", type: "sm", align: "right" },
  ],
];

export const arrowCluster = [
  null,
  { kind: "arrow", icon: <ArrowUp size={16} /> },
  null,

  { kind: "arrow", icon: <ArrowLeft size={16} /> },
  { kind: "arrow", icon: <ArrowDown size={16} /> },
  { kind: "arrow", icon: <ArrowRight size={16} /> },
];
