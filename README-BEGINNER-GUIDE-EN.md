# Hide Empty Headings - Beginner's Guide

## The Story Behind This Plugin

> A small plugin, born from 3 hours of trial and error and one brave attempt.

### How It Started

This plugin was born from a client's request.

The client's pain point was simple: in Obsidian's reading mode, those empty sections with "only a heading, no content" were too distracting. He didn't want to delete those headings (because he still needed them), but he also didn't want to see them.

Seems like a simple request, right?

### 3 Hours of Trial and Error

I thought so too at first.

Then I started a long journey of trying different solutions:

| Solution | Result |
|----------|--------|
| CSS snippet | ❌ Can't detect if there's content under headings |
| Dataview query | ❌ Can only query, can't control display |
| CustomJS script | ❌ Timing issues with execution |
| Modify theme | ❌ Theme doesn't support this logic |

One hour passed, two hours passed, three hours passed......

I tried everything, but nothing worked perfectly.

### Why Didn't I Think of Writing a Plugin?

Honestly, because I had **never written an Obsidian plugin before**.

For me, writing a plugin seemed like a "high barrier" thing:
- Need to learn Obsidian API
- Need to understand TypeScript
- Need to set up development environment
- Need to publish to the marketplace

All of these were things I had never done before.

### Enter AI

But this time, I decided to give it a try.

Not because I suddenly became more capable, but because I had an **AI assistant**.

Starting from scratch, I:
1. Explained the requirement to AI
2. AI helped me generate the code
3. I tested and reported issues
4. AI helped me fix them
5. Repeat the cycle......

It took about 1 hour, and the plugin was ready.

### From 0 to 1

This is my **first ever** Obsidian plugin.

I used to think writing plugins was very hard, requiring lots of prior knowledge. But this experience taught me:

> With AI, writing plugins isn't that hard. The hard part is whether you're willing to take the first step.

### Plugin Features

- **Zero Configuration**: Works immediately after installation, no setup needed
- **Smart Detection**: Can identify if sub-headings have content
- **Lightweight**: Only runs when needed, won't affect performance
- **Safe & Reliable**: Doesn't modify your note files, only hides them visually

---

## Table of Contents
- [What is Obsidian](#what-is-obsidian)
- [What Does This Plugin Do](#what-does-this-plugin-do)
- [Why You Need This Plugin](#why-you-need-this-plugin)
- [Installation](#installation)
- [How to Use](#how-to-use)
- [FAQ](#faq)

---

## What is Obsidian

Obsidian is a **free** note-taking app, similar to Notion, but more focused on personal knowledge management.

### Core Concept of Obsidian

```
Obsidian Notes = Markdown Files (.md)
├── Stored on your local computer
├── Can be opened with any text editor
└── Belongs to you forever, never lost
```

**In simple terms**: Obsidian is a tool that lets you manage notes locally, supports Markdown syntax, and can be extended with various plugins.

---

## What Does This Plugin Do

**One-line description**: Automatically hides empty sections that have "only headings, no content".

### Example

Suppose you have a note like this:

```markdown
# My Study Notes

## Chapter 1: JavaScript Basics
(Some content here...)

## Chapter 2: React Introduction
(Some content here...)

## Chapter 3: Vue Introduction
(Empty, not written yet)

## Chapter 4: Summary
(Empty, not written yet)
```

**Before using the plugin**:
```
┌─────────────────────────────┐
│  My Study Notes             │
├─────────────────────────────┤
│  Chapter 1: JavaScript      │ ← Has content
│  Chapter 2: React           │ ← Has content
│  Chapter 3: Vue             │ ← Empty (shown)
│  Chapter 4: Summary         │ ← Empty (shown)
└─────────────────────────────┘
```

**After using the plugin**:
```
┌─────────────────────────────┐
│  My Study Notes             │
├─────────────────────────────┤
│  Chapter 1: JavaScript      │ ← Has content
│  Chapter 2: React           │ ← Has content
│  (Empty headings hidden!)   │
└─────────────────────────────┘
```

### Features

| Feature | Description |
|---------|-------------|
| ✅ Auto Hide | Automatically hides headings with no content below |
| ✅ Real-time | Automatically detects when switching notes |
| ✅ No Setup | Works immediately after installation |
| ✅ Smart | Can identify if sub-headings have content |

---

## Why You Need This Plugin

### Scenario 1: Notes Still in Progress
You're writing a note, have built the outline framework, but some sections aren't finished yet.

**Problem**: These empty headings take up space and look messy, but you don't want to delete the framework.

**Solution**: This plugin automatically hides them, and they'll show up when you finish writing.

### Scenario 2: Template Notes
You create notes using templates that have many preset headings, but most aren't used.

**Problem**: Every note opens with a bunch of empty headings.

**Solution**: The plugin automatically hides unused headings.

### Scenario 3: Study Outlines
You're organizing your knowledge system, building a framework first before filling in content.

**Problem**: The framework shows a bunch of empty headings, affecting readability.

**Solution**: Only shows sections with content, much cleaner.

---

## Installation

### Method 1: Manual Installation (Recommended)

1. **Find the Obsidian plugins folder**

   Open your Obsidian vault folder and find the `.obsidian\plugins` directory:
   ```
   Your Vault Folder/
   └── .obsidian/
       └── plugins/  ← Put the plugin here
   ```

2. **Copy the plugin folder**

   Copy the `hide-empty-headings` folder into the `plugins` directory:
   ```
   .obsidian/plugins/
   └── hide-empty-headings/
       ├── main.js
       └── manifest.json
   ```

3. **Enable the plugin**

   - Open Obsidian
   - Click ⚙️ Settings in the bottom-left corner
   - Click "Community plugins"
   - Find "Hide Empty Headings"
   - Toggle the switch to enable it

   ![Settings Interface](aseets/pic1.png)

---

## How to Use

### Zero Configuration, Ready to Use

After installation and enabling, the plugin works automatically. You don't need any settings.

### Verify It's Working

1. Open a note with empty headings
2. Switch to **Reading Mode** (shortcut `Ctrl+E` or click the reading icon in the top-right)
3. Observe if the empty headings have disappeared

```
Edit Mode (Normal Display)     Reading Mode (Empty Headings Hidden)
┌──────────────────┐          ┌──────────────────┐
│ Heading with     │          │ Heading with     │
│ content          │          │ content          │
│ Empty heading    │   →      │ (Hidden!)        │
│ Heading with     │          │ Heading with     │
│ content          │          │ content          │
└──────────────────┘          └──────────────────┘
```

### Supported Heading Levels

The plugin supports all Markdown heading levels:
- `#` Heading 1
- `##` Heading 2
- `###` Heading 3
- `####` Heading 4
- `#####` Heading 5
- `######` Heading 6

---

## FAQ

### Q1: Why aren't my headings being hidden?

**Check the following**:
- ✅ Make sure you're in **Reading Mode** (not Edit Mode)
- ✅ Make sure the plugin is enabled (Settings → Community plugins)
- ✅ Make sure there's really no content under the heading (including empty lines)

### Q2: Does it hide headings in Edit Mode?

No. The plugin only works in **Reading Mode**. In Edit Mode, all headings are displayed normally.

### Q3: Will the hidden heading content be lost?

**Absolutely not**. The plugin only visually hides the headings. Your note files are not changed at all. When you close Reading Mode or switch to Edit Mode, all content is still there.

### Q4: If a sub-heading has content, will the parent heading be hidden?

No. The plugin is smart - if a sub-heading under a heading has content, the parent heading won't be hidden.

```markdown
## Chapter 1 (Empty)
### 1.1 Section (Has content)
```

In this case, "Chapter 1" won't be hidden because the section under it has content.

### Q5: How do I temporarily disable the plugin?

Go to Settings → Community plugins → Find the plugin → Toggle the switch off.

### Q6: Which Obsidian versions are supported?

Minimum requirement: Obsidian 0.15.0 (versions from September 2022 onwards are supported).

---

## Author Info

- **Author**: Xingxing
- **Website**: https://xingxing.aigongxue.cfd/
- **Email**: 2430486030@qq.com
- **Role**: Full-stack developer, independent creator, All in AI

---

## Feedback & Support

Having issues or feature suggestions? Feel free to contact the author!

📧 Email: 2430486030@qq.com
