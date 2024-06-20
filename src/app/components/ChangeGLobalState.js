"use client";

import { useMyContext } from "../context";

export default function ChangeGlobalState({ newState }) {
  const { setGlobalState } = useMyContext();

  setGlobalState(newState);
  return null;
}
