# Week 5 — Handoff notes (SIS 2 starter design)

Routes (from the prototype):
- list of posts → `/posts` (frames `posts-desktop` and `posts-phone`: the same page in two layouts)
- one post → `/posts/:id` (frame `post-desktop`), opened with "Read more" on the first card; its "Back to all posts" link returns to the list
- not found → `*` (frame `404-desktop`), reached from "Read more" on the third card; its link goes back to the list
- Not routes: the header links Home / Contact / Posts and the second card ("Why TypeScript saves me time") are not connected in the prototype. Figma has no URLs, so the paths above are my choice.

Components → React files:
- PostCard → `src/components/ui/Card.tsx` (the card shell; the post content is placed inside it)
- Button → `src/components/ui/Button.tsx`
- Tag → `src/components/ui/Tag.tsx`

Button variants → prop: `variant = 'primary' | 'secondary'` (Figma: Primary, Secondary; the default is primary)
- Primary: fill `color/primary`, text `color/on-primary`, no stroke, radius 8
- Secondary: fill `color/surface`, text and 1px inside stroke `color/primary`, radius 8

PostCard layout:
direction vertical, gap 12, padding 16, radius 8
(fill `color/surface`, 1px inside stroke `color/border`, width 320, height hugs the content; children: image, title 20 Regular `color/text`, date 14 Regular `color/text-muted`, row of Tag, Button)

Breakpoint change:
phone 1 column(s), desktop 3 columns; header stacked vertically on the phone, one row on the desktop (the switch is at `min-width: 640px`)

Tokens (all ten):
| Figma variable | Value | CSS variable |
|---|---|---|
| `color/primary` | `#1d4ed8` | `--color-primary` |
| `color/on-primary` | `#ffffff` | `--color-on-primary` |
| `color/text` | `#1f2937` | `--color-text` |
| `color/text-muted` | `#9ca3af` | `--color-text-muted` |
| `color/surface` | `#ffffff` | `--color-surface` |
| `color/border` | `#d1d5db` | `--color-border` |
| `space/2` | `8` | `--space-2` |
| `space/4` | `16` | `--space-4` |
| `space/6` | `24` | `--space-6` |
| `radius/md` | `8` | `--radius-md` |

Design mistake (reported back to the designer): `color/text-muted` `#9ca3af` is only 2.54 : 1 on `color/surface` `#ffffff`, below the 4.5 : 1 minimum for normal text. `tokens.css` uses the darker `#6b7280` (4.83 : 1); every other value matches the design.
