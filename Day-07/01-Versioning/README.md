# Day-07: How Versioning Works in Node.js

## 📚 Topic

**How Versioning Works in Node.js**

Versioning is important in Node.js projects because npm packages are continuously updated. Version numbers help developers understand the type of changes made in a package.

## 🔢 Semantic Versioning

Node.js packages commonly follow **Semantic Versioning (SemVer)**.

A version looks like:

```text
5.1.0
```

It has three parts:

```text
MAJOR.MINOR.PATCH
```

### Major

Example:

```text
5.1.0 → 6.0.0
```

Major versions can contain breaking changes.

### Minor

Example:

```text
5.1.0 → 5.2.0
```

Minor versions usually add new features while maintaining compatibility.

### Patch

Example:

```text
5.1.0 → 5.1.1
```

Patch versions usually contain bug fixes and small improvements.

## 📦 Version Symbols

### Caret `^`

Example:

```json
"express": "^5.1.0"
```

Allows compatible updates within the same major version.

### Tilde `~`

Example:

```json
"express": "~5.1.0"
```

Generally allows patch-level updates within the same minor version.

## 📄 package.json

`package.json` contains project information and dependency version ranges.

Example:

```json
{
  "dependencies": {
    "express": "^5.1.0"
  }
}
```

## 🔒 package-lock.json

`package-lock.json` records the exact dependency versions installed in the project.

It helps keep installations consistent across different computers.

## 🧪 Useful Commands

Check installed package version:

```cmd
npm list express
```

Check outdated packages:

```cmd
npm outdated
```

Install a specific package version:

```cmd
npm install express@5.1.0
```

## 🧠 Quick Summary

| Version | Meaning          |
| ------- | ---------------- |
| Major   | Breaking changes |
| Minor   | New features     |
| Patch   | Bug fixes        |

### Key Point

> **Major = Breaking Changes**
> **Minor = New Features**
> **Patch = Bug Fixes**
