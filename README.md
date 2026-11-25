# The Excuse That Almost Works

[![make.fun](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5.svg)](https://make.fun/bounty/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)
[![Rank](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/hadiba924-prog/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/rank.svg)](https://make.fun/bounty/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)
[![Reward](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/hadiba924-prog/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/reward.svg)](https://make.fun/bounty/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)

An entry for the [make.fun](https://make.fun) bounty **"The Excuse That Almost Works"** — write one line of plain text: the excuse a gamer texts their boss to skip work during GTA 6 launch week.

## The entry

> Gas engineer coming to read the meter between 8 and 1, someone has to be home.

The excuse is deliberately boring: a gas engineer, a meter reading, a named 8-to-1 window, and a reason someone has to be home. The joke lives inside the excuse's own logic — a job that takes five minutes somehow eats the whole morning — and a tired manager can't quite disprove it. No dead relatives, no flat tyres, no sudden fevers.

## How it works

`main.ts` (Node 22, stdlib only) writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), with no trailing newline. It guards the bounty rules before writing: 1–140 characters, at most 20 words, a single line, valid UTF-8. The output is deterministic.
