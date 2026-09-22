# Install Tailwind CSS

Simple setup for **HTML + Tailwind CSS + JavaScript** using Tailwind CSS v4.

## 1. Install Node.js and npm

npm comes with Node.js, so you only need to install Node.js.

### macOS using Homebrew

If you already have Homebrew:

```bash
brew install node
```

Check:

```bash
node -v
npm -v
```

If you do not have Homebrew, install it from:

```text
https://brew.sh/
```

Then run:

```bash
brew install node
```

### Linux using Terminal

For Ubuntu/Debian:

```bash
sudo apt update
sudo apt install nodejs npm
```

Check:

```bash
node -v
npm -v
```

### Windows using PowerShell or Command Prompt

Using `winget`:

```powershell
winget install OpenJS.NodeJS.LTS
```

Close and reopen your terminal after installation.

Check:

```powershell
node -v
npm -v
```

## 2. Create a project

### macOS / Linux

```bash
mkdir "Modern Website"

cd "Modern Website"

npm init -y

mkdir src dist

touch src/index.html src/input.css src/script.js
```

### Windows PowerShell

```powershell
mkdir "Modern Website"

cd "Modern Website"

npm init -y

mkdir src

mkdir dist

New-Item src/index.html -ItemType File

New-Item src/input.css -ItemType File

New-Item src/script.js -ItemType File
```

### Windows Command Prompt

```cmd
mkdir "Modern Website"

cd "Modern Website"

npm init -y

mkdir src

mkdir dist

type nul > src\index.html

type nul > src\input.css

type nul > src\script.js
```

## 3. Install Tailwind CSS

Run inside the project folder:

```bash
npm install tailwindcss @tailwindcss/cli
```

## 4. Add Tailwind

Open:

```text
src/input.css
```

For a basic setup:

```css
@import "tailwindcss";
```

### Optional: Add fonts and custom theme values

For example:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

@import "tailwindcss";

@theme {
  --color-primary: #ee0181;
  --font-poppins: "Poppins", sans-serif;
}
```

Then you can use:

```html
<h1 class="font-poppins text-primary">
  Hello World!
</h1>
```

## 5. Start Tailwind

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./dist/output.css --watch
```

Keep this terminal running.

The `--watch` option automatically rebuilds `output.css` when you change your source files.

## 6. Connect Tailwind to HTML

In:

```text
src/index.html
```

Add:

```html
<link href="../dist/output.css" rel="stylesheet">
```

Test it with:

```html
<h1 class="text-3xl font-bold underline">
  Hello World!
</h1>
```

## 7. Project structure

```text
Modern Website/

├── dist/
│   └── output.css

├── src/
│   ├── index.html
│   ├── input.css
│   └── script.js

├── node_modules/

├── package.json
└── package-lock.json
```

## Commands to remember

Check Node/npm:

```bash
node -v
npm -v
```

Create package.json:

```bash
npm init -y
```

Install Tailwind:

```bash
npm install tailwindcss @tailwindcss/cli
```

Start Tailwind:

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./dist/output.css --watch
```

Stop Tailwind:

```text
Ctrl + C
```

## VS Code

Install **Tailwind CSS IntelliSense** by Tailwind Labs for Tailwind class suggestions.

If VS Code shows:

```text
Unknown at rule @theme
```

this can be caused by VS Code's built-in CSS validator not recognizing Tailwind's custom `@theme` directive.

You can disable that warning in VS Code:

**Settings → search `unknown at rules` → CSS › Lint: Unknown At Rules → Ignore**

Or add this to `settings.json`:

```json
{
  "css.lint.unknownAtRules": "ignore"
}
```

## Important

This guide is for **Tailwind CSS v4**.

Use:

```css
@import "tailwindcss";
```

Tailwind v4 uses a CSS-first configuration approach, so a `tailwind.config.js` file is not required for this setup.

