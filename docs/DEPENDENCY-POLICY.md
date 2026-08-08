
# Purpose

## Dependency Upgrade Decision Matrix

Rule 1
Upgrade if the current version is End-of-Life.

Rule 2
Upgrade if the release fixes a High/Critical security vulnerability or a production-impacting bug.

Rule 3
Upgrade if the release introduces a feature required by Content Creator OS.

Rule 4
Review every Major version release before upgrading.

Rule 5
Upgrade if another dependency requires the newer version.

---

## Patch Updates

Default Action:
Defer

Unless Rule 1, 2, 3 or 5 applies.

---

Minor Updates

Default Action:
Review if Needed

---

Major Updates

Default Action:
Review Required

---

Security Updates

Default Action:
Review Immediately

---

## Review Process

1. Dependabot opens PR.
2. GitHub Action evaluates update type.
3. Labels are applied.
4. Policy comment is added.
5. Developer makes final decision.
