# JavaScript Chrome DevTools

Chrome DevTools is a built‑in suite of tools for diagnosing frontend issues: JS bugs, CSS/layout problems, performance, memory leaks, and quick DOM edits. Most browsers provide similar tooling.

Quick keys

- Inspect / Elements: right-click → Inspect or Cmd+Opt+C
- Console: Cmd+Opt+J
- Sources (debugging): Cmd+Opt+I then Sources
- Lighthouse: audit page performance, accessibility, best practices

---

## Debugging JavaScript

Workflow:

1. Reproduce the bug reliably.
2. Use the Sources panel and breakpoints instead of many console.log calls.
3. Pause with breakpoints (event listener breakpoints, line-of-code, conditional).
4. Step through (Step into / Step over / Step out).
5. Inspect Scope, add Watch expressions, or evaluate in the Console drawer.

Example: incorrect concatenation (5 + 1 = "51")

- Use Event Listener Breakpoints → Mouse → click to pause on click handlers.
- Set a line breakpoint on the line calculating the sum.
- Inspect types in Scope or Watch (typeof sum) and evaluate fixes in the Console (parseInt(addend1) + parseInt(addend2)).
- Edit and save code within DevTools to test fixes quickly (Cmd+S).

Advantages of breakpoints

- No code changes required.
- See all variables in-scope, closures and unexpected influences.
- More efficient than littering code with logs.

---

## Sources panel overview

- Page file tree (left): all resources loaded by the page.
- Code editor (center): file contents; set line breakpoints.
- Debugger (right): Call stack, Scopes, Breakpoints, Watch.

Use Event Listener Breakpoints to pause when handlers run. Disable breakpoints when needed.

---

## Inspecting values

- Scope pane: view local/global/closure variables when paused. Double-click to edit values.
- Watch: track expressions (e.g., typeof sum).
- Console drawer: evaluate expressions while paused (e.g., parseInt(addend1) + parseInt(addend2)).

---

## Debugging Memory Leaks

Common leak causes:

- Accidental globals (undeclared variables attached to window/global).
- Detached DOM nodes (removed from DOM but still referenced).
- Uncleared timers/subscriptions (setInterval, event listeners).
- Closures capturing large objects repeatedly.

Tools:

- Performance panel (record with Memory enabled) — visualize heap over time.
- Memory tab → Heap snapshot — inspect retained objects, detached nodes, retained size.
- Allocation profiler / Allocation Timeline — spot objects allocated repeatedly.
- 3-snapshot technique: take snapshots at stable points and compare Objects allocated between snapshots.

Tips:

- Search snapshots for "Detached" to find nodes removed from DOM but still retained.
- Look for unexpected instance counts of classes (search class name).
- Use Finalization techniques cautiously; prefer explicit cleanup (clearInterval, removeEventListener, null references).
- In Node: use --expose-gc, heapdump tools, and take production snapshots (protected endpoint) when necessary.

Example detection steps (heap snapshots):

1. Take baseline snapshot after page load.
2. Trigger actions that should allocate and free memory; take second snapshot.
3. Perform more actions and take third snapshot.
4. Compare objects allocated between snapshots to find retained objects.

---

## Debugging Runtime Performance

Use the Performance panel to analyze runtime work:

- Record with Screenshots; enable CPU throttling to simulate mobile (e.g., 4x or 20x).
- Inspect FPS chart, CPU usage, Main thread flame chart.
- Zoom into long frames, inspect call stacks and warnings (red triangles).
- Identify forced reflows/layout thrashing, long tasks, paint or heavy scripting.
- Use the Summary and call stack to jump to the responsible source line.

Common optimizations:

- Reduce layout calculations; avoid forced synchronous layouts.
- Animate using transform/opacity (compositor-only) instead of top/left.
- Debounce input handlers; minimize per-frame work.
- Reduce paint areas and complex styles; batch DOM changes.

---

## Profiling and Monitoring

- Use Lighthouse for automated audits (performance/accessibility/best practices).
- Monitor long-term memory/performance in production (CloudWatch, NewRelic, DebugBear).
- For Node.js: node --max-old-space-size=6000 index.js, node --expose-gc --inspect index.js, use heapdump/clinic for profiling.

---

## Practical checklist to fix leaks/perf issues

- Reproduce the problem reliably.
- Profile (Performance + Memory) and take heap snapshots.
- Identify retaining paths and root causes (globals, timers, listeners, caches).
- Apply targeted fixes: remove listeners, clear timers, null large refs, use LRU caches or WeakRefs where appropriate.
- Re-measure to confirm the issue is resolved.

---

## References / Next steps

- Chrome DevTools documentation (Sources, Performance, Memory)
- Articles on memory management, V8 GC, and runtime performance best practices
- Practice profiling your own pages and interpreting snapshots/flame charts
