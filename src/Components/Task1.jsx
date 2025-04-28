import React from "react";

function Task1() {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Task 1</h1>
      <h1>React Portals: Escaping the DOM Hierarchy</h1>

      <p>
        <b>What are React Portals?</b>
      </p>

      <p>
        React Portals provide a way to render a component's children into a DOM
        node that exists outside the DOM hierarchy of the parent component.
        Normally, when a React component renders, its output is inserted into
        the DOM at the location specified by the component's render method. A
        portal lets you "teleport" that output to a different place in the DOM.
      </p>

      <p>
        <b>Why are they used?</b>
      </p>

      <p>
        Portals are particularly useful for handling situations where a
        component needs to visually "break out" of its container. Common use
        cases include:
      </p>

      <ul>
        <li>
          <b>Modals and Dialogs:</b> These often need to be positioned at the
          top level of the document (e.g., as direct children of{" "}
          <code>&lt;body&gt;</code>) to avoid layout issues caused by parent
          container styles (like <code>overflow: hidden</code> or{" "}
          <code>z-index</code>).
        </li>
        <li>
          <b>Tooltips and Popovers:</b> Similar to modals, tooltips and popovers
          may need to be positioned relative to a specific element, but rendered
          outside of the parent's hierarchy to prevent clipping or style
          conflicts.
        </li>
        <li>
          <b>Overlays:</b> Components that need to appear on top of other
          content, such as loading indicators or notifications, can benefit from
          portals to ensure they are rendered correctly regardless of the
          parent's styling.
        </li>
      </ul>

      <p>
        In essence, Portals offer a solution to rendering challenges posed by
        complex or constrained DOM structures, giving developers more
        flexibility in controlling the visual presentation of their components.
      </p>
    </div>
  );
}

export default Task1;
