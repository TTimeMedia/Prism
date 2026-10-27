# Prism's team

Claude Code subagents that run the day-to-day work around Prism. They draft; the owner approves.

| Role | File | Does |
|---|---|---|
| Chief of staff | `.claude/skills/team` | Runs the daily round, writes the brief, carries out approvals |
| Support lead | `.claude/agents/support-lead.md` | Triages tester requests, drafts replies, hands bugs to engineering |
| Social & marketing | `.claude/agents/social-marketing.md` | Plans the calendar, writes posts, makes visuals, queues them in Postiz |
| Engineer | `.claude/agents/engineer.md` | Reproduces and fixes bugs; shows mockups before visible changes |
| Release manager | `.claude/agents/release-manager.md` | Prepares OTAs, builds, and notes as commands for the owner |
| Privacy & compliance | `.claude/agents/privacy-compliance.md` | Checks data changes against RLS, delete/export, the policy, and store labels |

## Using it

The team runs as a Claude Code **Agent Team** (experimental; turned on in the gitignored `.claude/settings.local.json`), so each role is a persistent teammate, and Pixel Agents in VS Code draws each one as a character in the office.

- `/team start`: open the office for the day. It seats the five teammates (`support`, `social`, `engineer`, `release`, `privacy`), schedules the 8:53 round, and runs the first one. Keep this session open; closing it ends the team, and `/resume` doesn't bring teammates back.
- `/team`: the daily round and brief.
- `/team approve S1 M2`: carry out approved items.
- `/team social plan next week` (or any role plus a task): hand work to one role.

## The desk

The working files live in a private Notion page ("Prism Team Desk"), because they hold tester details and this repo is public. `ops/team/templates/` shows the starting layout.

## Every morning

A Claude Code cloud routine, "Prism team morning round", runs the round at 8:53 AM Pacific even when the laptop is off. It checks the support table and drafts social posts into Notion. It skips bug fixes and the hello@ inbox, which need a live session.
