interface A222 {
  a1: () => void;
}

interface B extends A222 {
  a1: () => void;
  a2: () => void;
}

const a2222: B = {
  a1: () => { console.log('a') },
  a2: function (): void {
    throw new Error("Function not implemented.")
  },
}

