import React, { useState } from "react";

interface Stack<T> {
  push(item: T): void;
  pop(): void;
  peek(): T | null;
  size(): number;
}

class ArrayStack<T> implements Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  push(item: T): void {
    this.items.push(item);
  }

  pop(): void {
    this.items.pop();
  }

  peek(): T | null {
    if (this.items.length === 0) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  size(): number {
    return this.items.length;
  }
}

function App() {
  const [stack, setStack] = useState<ArrayStack<number>>(new ArrayStack());
  const [inputValue, setInputValue] = useState("");

  const handlePush = () => {
    const newItem = parseInt(inputValue, 10);
    if (!isNaN(newItem)) {
      stack.push(newItem);
      setStack(new ArrayStack([...stack]));
      setInputValue("");
    }
  };

  const handlePop = () => {
    stack.pop();
    setStack(new ArrayStack([...stack]));
  };

  const handlePeek = () => {
    const topItem = stack.peek();
    if (topItem !== null) {
      alert(topItem);
    }
  };

  const handleSize = () => {
    const size = stack.size();
    alert(size);
  };

  return (
    <div>
      <h1>Stack Example</h1>
      <button onClick={handlePush}>Push</button>
      <button onClick={handlePop}>Pop</button>
      <button onClick={handlePeek}>Peek</button>
      <button onClick={handleSize}>Size</button>
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ul>
        {stack
          .toArray()
          .map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;