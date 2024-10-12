# Why & How passing array as an argument don't need to pass by address? 
```
warning: passing argument 2 of 'fibonacci' from incompatible pointer type [-Wincompatible-pointer-types]
   fibonacci(n, &fibolist);
                ^~~~~~~~~
v55.c:5:28: note: expected 'int *' but argument is of type 'int (*)[(sizetype)(n)]'
 void fibonacci(int n, int *fibolist){
```
## Solution:
### The issue lies in how you're passing the fibolist array to the fibonacci function. In C, when you pass an array as an argument to a function, it decays into a pointer to its first element. However, you're using &fibolist which takes the address of the array itself, resulting in a type mismatch.

### Here's the breakdown:

- fibolist: This represents the array itself.
- &fibolist: This takes the address of the array, which is a pointer to an array of n integers (int (*)[n]).
The fibonacci function expects a simple pointer to an integer (int *), not a pointer to an array.

Here's how to fix the code:
``` C
#include <stdio.h>
#include <math.h>
#include <stdbool.h>

void fibonacci(int n, int *fibolist){
  int first = 0, second = 1;
  fibolist[0] = first;
  fibolist[1] = second;
  for (int i = 2; i <= n; i++)
  {
    fibolist[i] = fibolist[i - 2] + fibolist[i - 1];
  }
  for (int i = 0; i < n; i++)
  {
    printf("%d", fibolist[i]);
    if (i <= n - 2)
      printf(" ");
    if (i == n - 1)
      printf("(%dth)", n);
  }
}

int main()
{
  int n;
  printf("Enter a number: ");
  scanf("%d", &n);
  int fibolist[n];

  // fibonacci(n, &fibolist); // false
  // Pass just 'fibolist' to let it decay into a pointer
  fibonacci(n, fibolist);  // true

  return 0;
}
```
By passing just fibolist, you're providing the function with the correct pointer type, resolving the warning.