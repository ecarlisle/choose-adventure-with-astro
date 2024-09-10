import { atom } from "nanostores";

// Create the count atom.
export const countAtom = atom<number>(0);

// Increment
export const incrementAtomCount = () => {
  countAtom.set(countAtom.get() + 1);
  return countAtom.get();
};

// Decrement
export const decrementAtomCount = () => {
  countAtom.set(countAtom.get() - 1);
  return countAtom.get();
};
