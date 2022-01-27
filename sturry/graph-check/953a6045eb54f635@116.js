export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Sturry graph check

Inspired by: https://observablehq.com/@mbostock/graph-o-matic`
)});
  main.variable(observer("viewof sturry")).define("viewof sturry", ["html"], function(html){return(
html`<textarea rows="10" cols="80"></textarea>`
)});
  main.variable(observer("sturry")).define("sturry", ["Generators", "viewof sturry"], (G, _) => G.input(_));
  main.variable(observer("chart")).define("chart", ["dot","graphOf","sturry","html"], function(dot,graphOf,sturry,html)
{
  try {
    const svg = dot`${graphOf(sturry)}`;
    svg.style.maxWidth = '';
    return html`<div style="overflow: scroll; max-height: 700px;">${svg}</div>`;
  } catch (error) {
    return this;
  }
}
);
  main.variable(observer("graphOf")).define("graphOf", ["yaml","sturry","actClusterHelper"], function(yaml,sturry,actClusterHelper){return(
(sturryYaml) => {
  const parsed = yaml.parse(sturry)
  const data = parsed?.data || parsed || {}

  let latestBackground = '<NONE>';
  
  Object.keys(data)
    .forEach((key, i, a) => {
      const state = data[key];
      
      // Support for easy background
      if (state.background === undefined) {
        state.background = latestBackground;
      }
      latestBackground = state.background;
      
      // Support for easy dialog
      if (state.description === undefined) {
        const character = Object.keys(state)[0];
        const description = Object.values(state)[0];
        delete state[character];
        state.description = description;
        state.characterName = character;
        state.characterImage = character;
      }
      
      if (state.actions === undefined) {
        // Support for easy continuation
        if (i+1 < a.length) {
          state.actions = [{
            targetStateName: a[i+1],
          }]
        } else {
          state.actions = [];
        }
      } else {
        // Support for shortcut continuation
        state.actions = state.actions.map((action) => {
          if (typeof action === "string") {
            return { targetStateName: action };
          }
          if (action.targetStateName === undefined) {
            const targetStateName = Object.keys(action)[0];
            const description = Object.values(action)[0];
            return {
              description,
              targetStateName,
            }
          }
        })
      }
    })
  
  return `digraph {
  rankdir = LR;
  node [ shape=box ];
${actClusterHelper(sturry)}
${
  Object.keys(data)
    .reduce((result, currentKey, i, source) => {
      const current = data[currentKey]
      //const split = current.background && current.background.split(/text=/)
      //const location = split.length > 0 ? split[1] : current.background
      const location = current.background
      result.push(`  "${currentKey}" [ label = "${currentKey}\n${location}\n${current.characterName || '—'}" ];`)
      result.push(...(current.actions.map(action => 
        `  "${currentKey}" -> "${action.targetStateName}"${
          action.description ? ` [ label = "${action.description}" ]` : ''
        };`)))
      return result
    }, [])
    .join('\n')
}
}`
}
)});
  main.variable(observer()).define(["md","graphOf","sturry"], function(md,graphOf,sturry){return(
md`\`\`\`
${graphOf(sturry)}
\`\`\``
)});
  main.variable(observer()).define(["actClusterHelper","sturry"], function(actClusterHelper,sturry){return(
actClusterHelper(sturry)
)});
  main.variable(observer("actClusterHelper")).define("actClusterHelper", function(){return(
(text) => {
  const result = [];
  for (const match of text.matchAll(/^# Act \d+: (.*)\n/mg)) {
    const subgraphName = `cluster_${match[1].replaceAll(/[^a-zA-Z]/g, '')}`;
    const indexEndOfSection = text.indexOf('\n#', match.index + 1);
    const section = text.substring(match.index, indexEndOfSection > -1 ? indexEndOfSection : undefined)
    const nodes = Array.from(section.matchAll(/^  ([^: ]+):\n/mg)).map(a => a[1])
    result.push(`  subgraph ${subgraphName} { graph[label="${match[1]}"]; ${nodes.join('; ')} }`)
  }
  return result.join('\n')
}
)});
  main.variable(observer("yaml")).define("yaml", function(){return(
import('https://cdn.skypack.dev/yaml@2.0.0-10?min')
)});
  main.variable(observer("dot")).define("dot", ["require"], function(require){return(
require("@observablehq/graphviz@0.2")
)});
  return main;
}
