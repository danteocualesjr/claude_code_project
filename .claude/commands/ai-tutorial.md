---
description: Generate a written AI/ML tutorial on a given topic
argument-hint: <topic>
allowed-tools: Read, Write, Bash(mkdir:*), WebSearch
---

# AI Tutorial Generator

Generate a comprehensive, beginner-friendly tutorial on the following AI/ML topic: **$ARGUMENTS**

## Instructions

1. **Create the output directory** if it doesn't exist: `tutorials/`

2. **Write a tutorial Markdown file** saved to `tutorials/<topic-slug>.md` where `<topic-slug>` is a kebab-case version of the topic name.

3. **Structure the tutorial** with these sections:

   ### Overview
   - What this topic is and why it matters in AI/ML
   - Prerequisites (what the reader should already know)

   ### Key Concepts
   - Break down the core ideas clearly with analogies where helpful
   - Use diagrams described in text if useful

   ### Code Examples
   - Provide practical Python code examples demonstrating the concept
   - Include inline comments explaining each step
   - Use common libraries (numpy, scikit-learn, pytorch, tensorflow) as appropriate

   ### Hands-On Exercise
   - A small practical exercise the reader can try on their own
   - Include starter code and expected output

   ### Summary
   - Recap of what was covered
   - Key takeaways (3-5 bullet points)

   ### Further Reading
   - List 3-5 recommended resources for going deeper into the topic

4. **Tone**: Clear, approachable, and educational. Assume the reader has basic Python knowledge but may be new to the specific AI topic.

5. After writing the file, confirm the file path and give a brief summary of what was covered.
