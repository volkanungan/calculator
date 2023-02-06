type Operator = '+' | '-' | '*' | '/';

export function calc(expr: string) {
  if (!expr.length) {
    return 0;
  }
  const stack: number[] = [];
  for (const curr of expr.split(' ')) {
    validateInput(curr);
    if (isOperator(curr)) {
      doOperation(stack, curr);
    } else {
      stack.push(Number(curr));
    }
  }
  validateResult(stack);
  return round(stack.pop() as number);
}

function validateInput(input: string) {
  if (input.length && isNaN(Number(input)) && !isOperator(input)) {
    throw new Error(`Invalid input: ${input}`);
  }
}

function validateResult(stack: number[]) {
  if (stack.length !== 1) {
    throw new Error(
      'Invalid input: Missing operators for some of the operands'
    );
  }
}

function doOperation(stack: number[], operator: Operator) {
  const [second, first] = [Number(stack.pop()), Number(stack.pop())];
  if (!first || !second) {
    throw new Error(
      `Invalid input: Operands not given before operator ${operator}`
    );
  }
  stack.push(operate(first, second, operator));
}

function round(number: number) {
  return Math.round(number * 100) / 100;
}

export function operate(first: number, second: number, operator: Operator) {
  switch (operator) {
    case '+': {
      return first + second;
    }
    case '-': {
      return first - second;
    }
    case '*': {
      return first * second;
    }
    case '/': {
      if (second === 0) {
        throw new Error('Division by 0 is not a valid operation');
      }
      return first / second;
    }
  }
}

function isOperator(arg: string): arg is Operator {
  const OPERATORS = ['+', '-', '*', '/'];
  return OPERATORS.includes(arg);
}
