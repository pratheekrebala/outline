// @flow
import * as React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Flex from "components/Flex";
import Input from "components/InputSearch";
import Key from "components/Key";
import { metaDisplay } from "utils/keyboard";

function KeyboardShortcuts() {
  const { t } = useTranslation();

  const categories = React.useMemo(
    () => [
      {
        title: t("Navigation"),
        items: [
          {
            shortcut: <Key>n</Key>,
            label: t("New document in current collection"),
          },
          { shortcut: <Key>e</Key>, label: t("Edit current document") },
          { shortcut: <Key>m</Key>, label: t("Move current document") },
          {
            shortcut: (
              <>
                <Key>/</Key> or <Key>t</Key>
              </>
            ),
            label: t("Jump to search"),
          },
          { shortcut: <Key>d</Key>, label: t("Jump to home") },
          {
            shortcut: (
              <>
                <Key>{metaDisplay}</Key> + <Key>Ctrl</Key> + <Key>h</Key>
              </>
            ),
            label: t("Table of contents"),
          },
          {
            shortcut: (
              <>
                <Key>{metaDisplay}</Key> + <Key>.</Key>
              </>
            ),
            label: t("Toggle navigation"),
          },
          {
            shortcut: (
              <>
                <Key>{metaDisplay}</Key> + <Key>f</Key>
              </>
            ),
            label: t("Focus search input"),
          },
          { shortcut: <Key>?</Key>, label: t("Open this guide") },
          {
            shortcut: (
              <>
                <Key>{metaDisplay}</Key> + <Key>Enter</Key>
              </>
            ),
            label: t("Save and exit document edit mode"),
          },
          {
            shortcut: (
              <>
                <Key>{metaDisplay}</Key> + <Key>Shift</Key> + <Key>p</Key>
              </>
            ),
            label: t("Publish and exit document edit mode"),
          },
          {
            shortcut: (
              <>
                <Key>{metaDisplay}</Key> + <Key>s</Key>
              </>
            ),
            label: t("Save document and continue editing"),
          },
          {
            shortcut: (
              <>
                <Key>{metaDisplay}</Key> + <Key>Esc</Key>
              </>
            ),
            label: t("Cancel editing"),
          },
        ],
      },
      {
        title: t("Formatting"),
        items: [
          {
            shortcut: (
              <>
                <Key>Shift</Key> + <Key>Ctrl</Key> + <Key>0</Key>
              </>
            ),
            label: t("Paragraph"),
          },
          {
            shortcut: (
              <>
                <Key>Shift</Key> + <Key>Ctrl</Key> + <Key>1</Key>
              </>
            ),
            label: t("Large header"),
          },
          {
            shortcut: (
              <>
                <Key>Shift</Key> + <Key>Ctrl</Key> + <Key>2</Key>
              </>
            ),
            label: t("Medium header"),
          },
          {
            shortcut: (
              <>
                <Key>Shift</Key> + <Key>Ctrl</Key> + <Key>3</Key>
              </>
            ),
            label: t("Small header"),
          },
          {
            shortcut: (
              <>
                <Key>Shift</Key> + <Key>Ctrl</Key> + <Key>\</Key>
              </>
            ),
            label: t("Code block"),
          },
          {
            shortcut: (
              <>
                <Key>{metaDisplay}</Key> + <Key>b</Key>
              </>
            ),
            label: t("Bold"),
          },
          {
            shortcut: (
              <>
                <Key>{metaDisplay}</Key> + <Key>i</Key>
              </>
            ),
            label: t("Italic"),
          },
          {
            shortcut: (
              <>
                <Key>{metaDisplay}</Key> + <Key>u</Key>
              </>
            ),
            label: t("Underline"),
          },
          {
            shortcut: (
              <>
                <Key>{metaDisplay}</Key> + <Key>d</Key>
              </>
            ),
            label: t("Strikethrough"),
          },
          {
            shortcut: (
              <>
                <Key>{metaDisplay}</Key> + <Key>k</Key>
              </>
            ),
            label: t("Link"),
          },
          {
            shortcut: (
              <>
                <Key>{metaDisplay}</Key> + <Key>z</Key>
              </>
            ),
            label: t("Undo"),
          },
          {
            shortcut: (
              <>
                <Key>{metaDisplay}</Key> + <Key>Shift</Key> + <Key>z</Key>
              </>
            ),
            label: t("Redo"),
          },
        ],
      },
      {
        title: t("Lists"),
        items: [
          {
            shortcut: (
              <>
                <Key>Shift</Key> + <Key>Ctrl</Key> + <Key>7</Key>
              </>
            ),
            label: t("Todo list"),
          },
          {
            shortcut: (
              <>
                <Key>Shift</Key> + <Key>Ctrl</Key> + <Key>8</Key>
              </>
            ),
            label: t("Bulleted list"),
          },
          {
            shortcut: (
              <>
                <Key>Shift</Key> + <Key>Ctrl</Key> + <Key>9</Key>
              </>
            ),
            label: t("Ordered list"),
          },
          {
            shortcut: <Key>Tab</Key>,
            label: t("Sink list item"),
          },
          {
            shortcut: (
              <>
                <Key>Shift</Key> + <Key>Tab</Key>
              </>
            ),
            label: t("Lift list item"),
          },
          {
            shortcut: (
              <>
                <Key>Alt</Key> + <Key>⬆</Key>
              </>
            ),
            label: t("Move list item up"),
          },
          {
            shortcut: (
              <>
                <Key>Alt</Key> + <Key>⬇</Key>
              </>
            ),
            label: t("Move list item down"),
          },
        ],
      },
      {
        title: "Markdown",
        items: [
          {
            shortcut: (
              <>
                <Key>#</Key> <Key>Space</Key>
              </>
            ),
            label: t("Large header"),
          },
          {
            shortcut: (
              <>
                <Key>##</Key> <Key>Space</Key>
              </>
            ),
            label: t("Medium header"),
          },
          {
            shortcut: (
              <>
                <Key>###</Key> <Key>Space</Key>
              </>
            ),
            label: t("Small header"),
          },
          {
            shortcut: (
              <>
                <Key>1.</Key> <Key>Space</Key>
              </>
            ),
            label: t("Numbered list"),
          },
          {
            shortcut: (
              <>
                <Key>-</Key> <Key>Space</Key>
              </>
            ),
            label: t("Bulleted list"),
          },
          {
            shortcut: (
              <>
                <Key>[ ]</Key> <Key>Space</Key>
              </>
            ),
            label: t("Todo list"),
          },
          {
            shortcut: (
              <>
                <Key>&gt;</Key> <Key>Space</Key>
              </>
            ),
            label: t("Blockquote"),
          },
          {
            shortcut: <Key>---</Key>,
            label: t("Horizontal divider"),
          },
          {
            shortcut: <Key>{"```"}</Key>,
            label: t("Code block"),
          },
          {
            shortcut: <Key>{":::"}</Key>,
            label: t("Info notice"),
          },
          {
            shortcut: "_italic_",
            label: t("Italic"),
          },
          {
            shortcut: "**bold**",
            label: t("Bold"),
          },
          {
            shortcut: "~~strikethrough~~",
            label: t("Strikethrough"),
          },
          {
            shortcut: "`code`",
            label: t("Inline code"),
          },
          {
            shortcut: "==highlight==",
            label: t("Highlight"),
          },
        ],
      },
    ],
    [t]
  );

  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = React.useCallback((event) => {
    setSearchTerm(event.target.value.toLowerCase());
  }, []);

  return (
    <Flex column>
      <Input type="search" onChange={handleChange} redirectDisabled />
      {categories.map((category, x) => {
        const filtered = searchTerm
          ? category.items.filter((item) =>
              item.label.toLowerCase().includes(searchTerm)
            )
          : category.items;

        if (!filtered.length) {
          return null;
        }

        return (
          <React.Fragment key={x}>
            <h2>{category.title}</h2>
            <List>
              {filtered.map((item) => (
                <React.Fragment key={item.label}>
                  <Keys>{item.shortcut}</Keys>
                  <Label>{item.label}</Label>
                </React.Fragment>
              ))}
            </List>
          </React.Fragment>
        );
      })}
    </Flex>
  );
}

const List = styled.dl`
  width: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

const Keys = styled.dt`
  float: left;
  width: 25%;
  height: 30px;
  margin: 0;
`;

const Label = styled.dd`
  float: left;
  width: 75%;
  height: 30px;
  margin: 0;
  display: flex;
  align-items: center;
`;

export default KeyboardShortcuts;
