# Editing Sturry scenarios

Each scenario is described in a file ending with `.scenario.yml`.

## Editing on GitHub

From the repository page <https://github.com/mihaibirsan/alvin-inc-sturrybook> press <kbd>.</kbd> to launch Visual Studio Code, then find the scenario file you're looking to edit.

## Previewing text fit

Use <https://mihaibirsan.github.io/alvin-inc-sturrybook/sturry/preview/> to preview description text length for the state and actions.

## Brief introduction to scenario files

A **scenario** has a sequence of states under the key data. The first state listed is the one that will be displayed in the beginning.

Each **state** has the following properties:
* `name` _(inferred)_ — an identifier for the scene, inferred from the key used under `data`
* `description` — the text appearing in a scene; this could be actual description, or a character's speech
* `background` — the URL for an image that fills the whole screen
* `characterImage` _(optional)_ — the URL for an image representing a character, that will be displayed above the background image
* `characterName` _(optional)_ — the name of a character; when present it is displayed above and to the left of the description text
* `actions` _(optional)_ — a list of options to be used a continuation from this state to a new state

Each **action** has the following properties:
* `description` _(optional)_ — the text appearing in the list of actions; this may be missing when there is a single implicit action
* `targetStateName` — the name of the state with which to continue

Note: The exact properties of the state may change as implementation evolves.

## Brief introduction to `.yml` files

```yml
YAML: YAML Ain't Markup Language™

What It Is:
  YAML is a human-friendly data serialization
  language for all programming languages.

name-or-key:
  property-one-is-a-number: 42
  property-two-is-a-string: The answer to ultimate question of life, the universe, and everything.
  property-three-is-an-object:
    source: The Hitchhiker's Guide to the Galaxy
    author: Douglas Adams
another-name-or-key:
    There's a lot more to learn about YML.
    This should be a sufficient introduction
    for writing sturries.
```

Note: Indentation is important! Each "section" (called an object) has its properties further indented than its "name" (called a key)

Further reading (optional):
* [The Official YAML Web Site](https://yaml.org/)
* [YAML - Wikipedia](https://en.wikipedia.org/wiki/YAML)