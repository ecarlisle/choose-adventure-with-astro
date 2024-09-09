import { atom } from "nanostores";

// Create a store to hold the count value
export const countAtom = atom<number>(0);

// Increment the count
export const incrementAtomCount = () => {
  countAtom.set(countAtom.get() + 1);
  return countAtom.get();
};

// Decrement the count
export const decrementAtomCount = () => {
  countAtom.set(countAtom.get() - 1);
  return countAtom.get();
};
