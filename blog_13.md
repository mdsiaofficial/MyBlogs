# In this program, in the function add_without_plus_opr, *b-- , *a++ cannot do increment or decrement. why?

```
#include <stdio.h>
#include <math.h>
#include <stdbool.h>

void add_without_plus_opr(int *a, int *b){
  while (*b--) {
    *a++;
  }
}

int main()
{
  int a,b;
  printf("Enter two number a and b to add to a: ");
  scanf("%d %d", &a, &b);
  add_without_plus_opr(&a, &b);
  printf("a: %d\nb: %d\n", a,b);

  return 0;
}
``` 

The issue in your code is due to the precedence and the way the `++` and `--` operators work with pointers. Let's break it down:

1. **Operator Precedence**: The `++` and `--` operators have higher precedence than the `*` (dereference) operator. This means that in the expression `*a++`, the `++` is applied to the pointer `a` before the dereference operation. The same applies to `*b--`.

2. **Postfix Increment/Decrement**: The `++` and `--` operators in your code are postfix, meaning they increment or decrement the pointer after the current value is used. So, `*a++` is equivalent to `*(a++)`, and `*b--` is equivalent to `*(b--)`.

In your function `add_without_plus_opr`, the expressions `*a++` and `*b--` do not modify the values pointed to by `a` and `b`. Instead, they increment or decrement the pointers themselves. Here's a corrected version of your function:

```c
#include <stdio.h>
#include <math.h>
#include <stdbool.h>

void add_without_plus_opr(int *a, int *b){
  while ((*b)-- > 0) {
    (*a)++;
  }
}

int main()
{
  int a, b;
  printf("Enter two numbers a and b to add to a: ");
  scanf("%d %d", &a, &b);
  add_without_plus_opr(&a, &b);
  printf("a: %d\nb: %d\n", a, b);

  return 0;
}
```

In this corrected version:
- `(*b)--` decrements the value pointed to by `b` and then checks if it is greater than 0.
- `(*a)++` increments the value pointed to by `a`.

This way, the values of `a` and `b` are correctly modified as intended.

If you have any more questions or need further clarification, feel free to ask!

Source: Conversation with Copilot, 10/12/2024
(1) Increment/decrement operators - cppreference.com. https://en.cppreference.com/w/cpp/language/operator_incdec.
(2) Increment/decrement operators - cppreference.com. https://en.cppreference.com/w/c/language/operator_incdec.
(3) Pointer Increment/Decrement (GNU C Language Manual). https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Pointer-Increment_002fDecrement.html.
(4) Understanding Pointer Manipulation in C: Why *x++ and *x+=1 Act .... https://www.devgem.io/posts/understanding-pointer-manipulation-in-c-why-x-and-x-1-act-differently.
(5) Incrementing and Decrementing Pointers | Microsoft Learn. https://learn.microsoft.com/en-us/cpp/text/incrementing-and-decrementing-pointers?view=msvc-170.