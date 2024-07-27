# Describe about typescript types

## TypeScript types help developers ensure that variables, function parameters, and return values adhere to specific data types, providing robust type checking and reducing runtime errors. Here’s an overview of the main types and some key concepts in TypeScript: 

### **Basic Types**
1. **`number`**: Represents numeric values, including integers and floats.
   ```typescript
   let age: number = 25;
   ```

2. **`string`**: Represents text data.
   ```typescript
   let name: string = "Alice";
   ```

3. **`boolean`**: Represents a true or false value.
   ```typescript
   let isActive: boolean = true;
   ```

4. **`void`**: Indicates that a function doesn’t return a value.
   ```typescript
   function logMessage(message: string): void {
       console.log(message);
   }
   ```

5. **`null` and `undefined`**: Represent absence of value or the default value for uninitialized variables.
   ```typescript
   let nothing: null = null;
   let notDefined: undefined = undefined;
   ```

6. **`any`**: Represents any type, effectively turning off type checking.
   ```typescript
   let uncertain: any = "Could be anything";
   uncertain = 42;
   ```

### **Complex Types**
1. **`Array`**: Represents a collection of elements of the same type.
   ```typescript
   let numbers: number[] = [1, 2, 3];
   let names: Array<string> = ["Alice", "Bob"];
   ```

2. **`Tuple`**: Represents an array with fixed size and types for each position.
   ```typescript
   let person: [string, number] = ["Alice", 30];
   ```

3. **`Object`**: Represents a collection of key-value pairs.
   ```typescript
   let person: { name: string; age: number } = { name: "Alice", age: 30 };
   ```

### **Union and Intersection Types**
1. **`Union Type`**: Allows a variable to be one of several types.
   ```typescript
   let id: number | string;
   id = 101;
   id = "A101";
   ```

2. **`Intersection Type`**: Combines multiple types into one.
   ```typescript
   interface Person {
       name: string;
   }

   interface Worker {
       jobTitle: string;
   }

   type Employee = Person & Worker;

   let employee: Employee = {
       name: "Alice",
       jobTitle: "Engineer"
   };
   ```

### **Literal Types**
Literal types specify exact values a variable can hold.
   ```typescript
   let direction: "left" | "right" = "left";
   ```

### **Enums**
Enums define a set of named constants.
   ```typescript
   enum Color {
       Red,
       Green,
       Blue
   }

   let color: Color = Color.Green;
   ```

### **Type Aliases and Interfaces**
1. **`Type Alias`**: Defines a new name for a type.
   ```typescript
   type ID = number | string;
   ```

2. **`Interface`**: Defines the shape of an object.
   ```typescript
   interface Person {
       name: string;
       age: number;
   }

   let person: Person = {
       name: "Alice",
       age: 30
   };
   ```

### **Generics**
Generics allow creating reusable components with flexible types.
   ```typescript
   function identity<T>(value: T): T {
       return value;
   }

   let number = identity(42); // number is of type number
   let text = identity("Hello"); // text is of type string
   ```

TypeScript’s type system is designed to enhance code quality and maintainability by catching errors during development rather than at runtime.