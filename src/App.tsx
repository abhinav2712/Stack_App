import React, { useState } from 'react';

interface Stack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  size(): number;
}

class ArrayStack<T> implements Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  size(): number {
    return this.items.length;
  }
}

const App = () => {
  const [stack, setStack] = useState<Stack<number>>(new ArrayStack<number>());

  const handlePush = () => {
    stack.push(Math.floor(Math.random() * 100));
    setStack(stack);
  };

  const handlePop = () => {
    stack.pop();
    setStack(stack);
  };

  const handlePeek = () => {
    console.log(stack.peek());
  };

  const handleSize = () => {
    console.log(stack.size());
  };

  return (
    <div>
      <h1>Stack Example</h1>
      <button onClick={handlePush}>Push</button>
      <button onClick={handlePop}>Pop</button>
      <button onClick={handlePeek}>Peek</button>
      <button onClick={handleSize}>Size</button>
      <ul>
        {stack.size() === 0 && <li>Stack is empty.</li>}
        {stack.size() > 0 &&
          stack
            .toString()
            .split(',')
            .map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
};

export default App;