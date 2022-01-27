export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Sturry graph check

Inspired by: https://observablehq.com/@mbostock/graph-o-matic`
)});
  main.variable(observer("viewof sturry")).define("viewof sturry", ["html"], function(html){return(
html`<textarea rows="10" cols="80">
data:
# Act 1
  BeforeElectionResults:
    description: Isabelle is about to announce the winner of Camden's newest election for the next Island Representative.
    background: http://fpoimg.com/128x72?bg_color=000000&text_color=FFFFFF&text=Cut+to+black
  IsabelleAnnouncement_1:
    description: Alright, everyone! The villagers have spoken and the newly elected
      Island Representative is... Alvin!
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Resident+Services
    characterImage: http://fpoimg.com/50x100?bg_color=FFFABC&text_color=C3BAB0&text=Isabelle
    characterName: Isabelle
  IsabelleAnnouncement_2:
    description: Would you like to say a few words?
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Resident+Services
    actions:
      - description: I knew I would win...
        targetStateName: AnnouncementAlvinWinning
      - description: Thank you so much!
        targetStateName: AnnouncementAlvinThanking
    characterImage: http://fpoimg.com/50x100?bg_color=FFFABC&text_color=C3BAB0&text=Isabelle
    characterName: Isabelle
  AnnouncementAlvinWinning:
    description: I'd say that I'm surprised, but I'm not. Marlo's out of touch with what the villagers want. This serves him right.
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Resident+Services
    actions:
      - description: Let's party!
        targetStateName: AnnouncementAlvinWinningPartyTime
      - description: I need a good night's sleep.
        targetStateName: AnnouncementAlvinWinningBedTime
    characterImage: http://fpoimg.com/50x100?bg_color=FFFABC&text_color=C3BAB0&text=Alvin
    characterName: Alvin
  AnnouncementAlvinThanking:
    description: I stand by my promise to make Camden the most eco-friendly island that it can be. Thanks for believing in me!
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Resident+Services
    actions:
      - description: It's time to party!
        targetStateName: AnnouncementAlvinThankingPartyTime
      - description: Now, I'm off to bed.
        targetStateName: AnnouncementAlvinThankingBedTime
    characterImage: http://fpoimg.com/50x100?bg_color=FFFABC&text_color=C3BAB0&text=Alvin
    characterName: Alvin
  AnnouncementAlvinWinningPartyTime:
    description: Now, let's celebrate! My campaign manager, Sprinkles, is hosting a party at her house. I hope to see you there!
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Resident+Services
    actions:
      - targetStateName: PartyAtSprinkles_W1
    characterImage: http://fpoimg.com/50x100?bg_color=FFFABC&text_color=C3BAB0&text=Alvin
    characterName: Alvin
  AnnouncementAlvinWinningBedTime:
    description: Again, thank you so much! I'm thrilled to start working tomorrow and I'd like to be well rested. Take care!
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Resident+Services
    actions:
      - targetStateName: AlvinsBedtime
    characterImage: http://fpoimg.com/50x100?bg_color=FFFABC&text_color=C3BAB0&text=Alvin
    characterName: Alvin
  AnnouncementAlvinThankingPartyTime:
    description: Come join me and my awesome campaign mananger, Sprinkles, at her place to celebrate. It's gonna be wild!
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Resident+Services
    actions:
      - targetStateName: PartyAtSprinkles_T1
    characterImage: http://fpoimg.com/50x100?bg_color=FFFABC&text_color=C3BAB0&text=Alvin
    characterName: Alvin
  AnnouncementAlvinThankingBedTime:
    description: This means the world to me! I'll be cherishing this moment as I crawl into bed tonight. Thank you and take care!
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Resident+Services
    actions:
      - targetStateName: AlvinsBedtime
    characterImage: http://fpoimg.com/50x100?bg_color=FFFABC&text_color=C3BAB0&text=Alvin
    characterName: Alvin

# Act 2
  PartyAtSprinkles_W1:
    description: Congratulations! I'm so glad that you won.
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Campaign+Manager's+House
    characterImage: http://fpoimg.com/50x100?bg_color=FFFABC&text_color=C3BAB0&text=Villager+A
    characterName: Chevre
  PartyAtSprinkles_W2:
    description: Yeah. As soon as I saw that B&B Construction had backed Marlo's campaign, I just knew that you had to win.
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Campaign+Manager's+House
    characterImage: http://fpoimg.com/50x100?bg_color=FFFABC&text_color=C3BAB0&text=Villager+B
    characterName: Fang
  PartyAtSprinkles_W3:
    description: Sure. But did you need to be so rude? My brother and Marlo worked hard on their plans for the island.
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Campaign+Manager's+House
    actions:
      - description: Their plans sucked...
        targetStateName: PartyAtSprinkles_W3_W
      - description: Perhaps I was a bit harsh...
        targetStateName: PartyAtSprinkles_W3_T
    characterImage: http://fpoimg.com/50x100?bg_color=FFFABC&text_color=C3BAB0&text=Bam
    characterName: Bam

# Act 2
  PartyAtSprinkles_T1:
    description: I'm so happy for you, Alvin! You absolutely deserved to win.
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Campaign+Manager's+House
    characterImage: http://fpoimg.com/50x100?bg_color=FFFABC&text_color=C3BAB0&text=Villager+A
    characterName: Chevre
  PartyAtSprinkles_T2:
    description: Yeah, buddy. Way to go! I knew you had it in you.
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Campaign+Manager's+House
    characterImage: http://fpoimg.com/50x100?bg_color=FFFABC&text_color=C3BAB0&text=Villager+B
    characterName: Fang
  PartyAtSprinkles_T3:
    description: Well, I'm not impressed by how awful you were to Marlo in your speech. You didn't need to be that harsh.
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Campaign+Manager's+House
    actions:
      - description: But it's the truth...
        targetStateName: PartyAtSprinkles_T3_W
      - description: Yeah, maybe I was a bit mean...
        targetStateName: PartyAtSprinkles_T3_T
    characterImage: http://fpoimg.com/50x100?bg_color=FFFABC&text_color=C3BAB0&text=Bam
    characterName: Bam

# Act 2
  AlvinsBedtime:
    description: Today was such a great day.
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Alvin's+Bedroom
    actions:
      - description: I'm glad that I defeated Marlo...
        targetStateName: AlvinsBedtime_W
      - description: I'm glad that I gave it my all...
        targetStateName: AlvinsBedtime_T
  AlvinsBedtime_W:
    description: Marlo never had a chance. He was too distracted by everything going on with Chai.
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Alvin's+Bedroom
    actions:
      - targetStateName: Bh6lydNmIUHaWIHyUdoz_88
    characterImage: http://fpoimg.com/50x100?bg_color=FFFABC&text_color=C3BAB0&text=Alvin+Pajamas
    characterName: Alvin Pajamas
  AlvinsBedtime_T:
    description: I feel bad about everything that happened between him and Chai. It probably messed with his head.
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Alvin's+Bedroom
    actions:
      - targetStateName: Bh6lydNmIUHaWIHyUdoz_90
    characterImage: http://fpoimg.com/50x100?bg_color=FFFABC&text_color=C3BAB0&text=Alvin+Pajamas
    characterName: Alvin Pajamas

# Act 2
  PartyAtSprinkles_W3_W:
    description: I stand by what I said. Marlo ran a bad campaign. Honestly, I'm
      surprised that he got as many votes as he did.
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Campaign+Manager's+House
    actions:
      - targetStateName: Bh6lydNmIUHaWIHyUdoz_88
    characterImage: http://fpoimg.com/50x100?bg_color=FFFABC&text_color=C3BAB0&text=Alvin
    characterName: Alvin
  PartyAtSprinkles_W3_T:
    description: I didn't mean to be so rude. Marlo really cares about Camden. I think he's just a little misguided.
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Campaign+Manager's+House
    actions:
      - targetStateName: Bh6lydNmIUHaWIHyUdoz_88
    characterImage: http://fpoimg.com/50x100?bg_color=FFFABC&text_color=C3BAB0&text=Alvin
    characterName: Alvin
  PartyAtSprinkles_T3_W:
    description: Marlo's been the Island Representative for too long. He got arrogant and it cost him the election.
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Campaign+Manager's+House
    actions:
      - targetStateName: Bh6lydNmIUHaWIHyUdoz_90
    characterImage: http://fpoimg.com/50x100?bg_color=FFFABC&text_color=C3BAB0&text=Alvin
    characterName: Alvin
  PartyAtSprinkles_T3_T:
    description: You're right. I shouldn't have said what I did. Marlo's a good guy and I'm grateful for everything he's taught me.
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Campaign+Manager's+House
    actions:
      - targetStateName: Bh6lydNmIUHaWIHyUdoz_90
    characterImage: http://fpoimg.com/50x100?bg_color=FFFABC&text_color=C3BAB0&text=Alvin
    characterName: Alvin

# Act 3 and Act 4
  Bh6lydNmIUHaWIHyUdoz_88:
    description: It's just like you said, boss. Alvin has been bad-mouthing you all over
      town. He deserves what's coming to him.
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Marlo's+House
    actions:
      - targetStateName: Bh6lydNmIUHaWIHyUdoz_92
    characterImage: http://fpoimg.com/50x100?bg_color=FFFABC&text_color=C3BAB0&text=Bam
    characterName: Bam
  Bh6lydNmIUHaWIHyUdoz_90:
    description: I think Alvin is actually a pretty nice guy. I've been
      listening in on all of his conversations and he hasn't said anything nasty
      about you.
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Marlo's+House
    actions:
      - targetStateName: Bh6lydNmIUHaWIHyUdoz_123
    characterImage: http://fpoimg.com/50x100?bg_color=FFFABC&text_color=C3BAB0&text=Marlo
    characterName: Bam
  Bh6lydNmIUHaWIHyUdoz_92:
    description: I knew it! He wins one election and it goes straight to his head. He has no idea what he's doing.
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Marlo's+House
    actions:
      - targetStateName: Bh6lydNmIUHaWIHyUdoz_106
    characterImage: http://fpoimg.com/50x100?bg_color=FFFABC&text_color=C3BAB0&text=Marlo
    characterName: Marlo
  Bh6lydNmIUHaWIHyUdoz_106:
    description: Redd, you wouldn't believe the night I've had. I lost to Alvin. ALVIN! I taught the boy everything he knew!
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Secret+Beach
    actions:
      - targetStateName: Bh6lydNmIUHaWIHyUdoz_110
    characterImage: http://fpoimg.com/50x100?bg_color=FFFABC&text_color=C3BAB0&text=Marlo
    characterName: Marlo
  Bh6lydNmIUHaWIHyUdoz_110:
    description: I told you Alvin was sneaky. But did you listen to your cousin Redd? No. No you didn't.
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Secret+Beach
    actions:
      - targetStateName: Bh6lydNmIUHaWIHyUdoz_114
    characterImage: http://fpoimg.com/50x100?bg_color=FFFABC&text_color=C3BAB0&text=Redd
    characterName: Redd
  Bh6lydNmIUHaWIHyUdoz_114:
    description: I'm really not in the mood for this right now. Let's just cut to the chase. Did you bring what we had discussed?
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Secret+Beach
    actions:
      - targetStateName: Bh6lydNmIUHaWIHyUdoz_118
    characterImage: http://fpoimg.com/50x100?bg_color=FFFABC&text_color=C3BAB0&text=Redd
    characterName: Marlo
  Bh6lydNmIUHaWIHyUdoz_118:
    description: Oh yeah. I got it alright. I got a lot of it. Alvin doesn't have a clue what he got himself into. He'll regret he ever won.
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Secret+Beach
    actions:
      - targetStateName: GoldiesHouse_1
    characterImage: http://fpoimg.com/50x100?bg_color=FFFABC&text_color=C3BAB0&text=Marlo
    characterName: Redd
  Bh6lydNmIUHaWIHyUdoz_123:
    description: It's doesn't matter. I may have taught that kid everything he knows. But I still have a few tricks up my sleeves.
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Secret+Beach
    actions:
      - targetStateName: Bh6lydNmIUHaWIHyUdoz_127
    characterImage: http://fpoimg.com/50x100?bg_color=FFFABC&text_color=C3BAB0&text=Marlo
    characterName: Marlo
  Bh6lydNmIUHaWIHyUdoz_127:
    description: Redd, it was so embarrassing. How could I have lost to Alvin? ALVIN!?
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Secret+Beach
    actions:
      - targetStateName: Bh6lydNmIUHaWIHyUdoz_131
    characterImage: http://fpoimg.com/50x100?bg_color=FFFABC&text_color=C3BAB0&text=Redd
    characterName: Marlo
  Bh6lydNmIUHaWIHyUdoz_131:
    description: Cousin Redd told you. I told you not to underestimate the boy and what did you do? You underestimated him.
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Secret+Beach
    actions:
      - targetStateName: Bh6lydNmIUHaWIHyUdoz_134
    characterImage: http://fpoimg.com/50x100?bg_color=FFFABC&text_color=C3BAB0&text=Redd
    characterName: Redd
  Bh6lydNmIUHaWIHyUdoz_134:
    description: Yeah, well... He's still in way over his head. You have what we talked about on the phone?
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Secret+Beach
    actions:
      - targetStateName: GoldiesHouse_1
    characterImage: http://fpoimg.com/50x100?bg_color=FFFABC&text_color=C3BAB0&text=Marlo
    characterName: Marlo

# Act 5: Goldie's House
  GoldiesHouse_1:
    description: Mornin' Goldie! Thanks for agreeing to meet with me today. I'd really like your help with these new ordinances I've —
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Goldie's+House
    actions:
      - targetStateName: Bh6lydNmIUHaWIHyUdoz_144
    characterImage: http://fpoimg.com/50x100?bg_color=FFFABC&text_color=C3BAB0&text=Alvin
    characterName: Alvin
  Bh6lydNmIUHaWIHyUdoz_144:
    description: Professor Goldie! Oh... Hey, Alvin. Sorry to barge in but it's urgent! There are strange glowing weeds everywhere!
    background: http://fpoimg.com/128x72?bg_color=E6F3FF&text_color=B0BAC3&text=Goldie's+House
    actions:
      - targetStateName: BzzxwsQMhO_IVS2zEPDu_1
    characterImage: http://fpoimg.com/50x100?bg_color=FFFABC&text_color=C3BAB0&text=Julian
    characterName: Julian
  BzzxwsQMhO_IVS2zEPDu_1:
    description: To be continued
    background: http://fpoimg.com/128x72?bg_color=000000&text_color=FFFFFF&text=Cut+to+black
    actions: []
</textarea>`
)});
  main.variable(observer("sturry")).define("sturry", ["Generators", "viewof sturry"], (G, _) => G.input(_));
  main.variable(observer("chart")).define("chart", ["dot","graphOf","sturry","html"], function(dot,graphOf,sturry,html)
{
  try {
    const svg = dot`${graphOf(sturry)}`;
    svg.style.maxWidth = '';
    return html`<div style="overflow: scroll; max-height: 700px;" onclick="this.requestFullscreen();">${svg}</div>`;
  } catch (error) {
    return this;
  }
}
);
  main.variable(observer("customParse")).define("customParse", ["yaml"], function(yaml){return(
(text) => {
  const parsed = yaml.parse(text)
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
          return action
        })
      }
    })
  return data
}
)});
  main.variable(observer("graphOf")).define("graphOf", ["customParse","actClusterHelper","sturry"], function(customParse,actClusterHelper,sturry){return(
(sturryYaml) => {
  const data = customParse(sturryYaml)

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
  for (const match of text.matchAll(/^# (Act .*)\n/mg)) {
    const subgraphName = `cluster_${match[1].replaceAll(/[^a-zA-Z0-9]/g, '')}`;
    const indexEndOfSection = text.indexOf('\n#', match.index + 1);
    const section = text.substring(match.index, indexEndOfSection > -1 ? indexEndOfSection : undefined)
    const nodes = Array.from(section.matchAll(/^  ([^: ]+):\s*\n/mg)).map(a => a[1])
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
