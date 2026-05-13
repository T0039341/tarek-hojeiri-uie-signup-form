# tarek-hojeiri-uie-signup-form

This is a small Angular sign-up form project built as part of a UI engineering exercise.

The app allows users to enter their first name, last name and email address, validates the inputs, and submits the data to a mock API using `json-server`.

I mainly focused on keeping the implementation clean, responsive and accessible while using modern Angular patterns.

Some of the things included in the project:

- standalone Angular architecture
- typed reactive forms
- validation and accessibility handling
- responsive SCSS styling
- mock API integration
- unit tests with Vitest
- simple CI workflow using GitHub Actions

---

## Tech Stack

- Angular 21
- TypeScript
- SCSS
- RxJS
- Vitest
- json-server
- GitHub Actions

---

## Running the project

Install dependencies:

```bash
npm install
```

Start the Angular development server:

```bash
npm start
```

The app runs on:

```txt
http://localhost:4200
```

---

## Running the mock API

The project uses `json-server` as a lightweight mock backend.

Start it with:

```bash
npm run mock-api
```

The mock API runs on:

```txt
http://localhost:3000
```

Submitted entries are stored in:

```txt
db.json
```

---

## Running tests

Run tests in watch mode:

```bash
npm test
```

Run tests once (used in CI):

```bash
npm run test:ci
```

---

## Building the project

Create a production build with:

```bash
npm run build
```

---

## Notes

A few implementation choices I made during the exercise:

- used standalone Angular APIs instead of NgModules
- used `NonNullableFormBuilder` for typed forms
- added validation feedback and accessibility improvements
- added a lightweight CI workflow to run tests and builds automatically
- kept the mock backend intentionally simple
