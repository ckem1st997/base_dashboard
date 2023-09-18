import markdown from 'remark-parse-no-trim';
import highlight from '@elastic/eui';
import { getDefaultEuiMarkdownProcessingPlugins } from '@elastic/eui';

import {
  PropsLinkMarkdownParser,
  PropsLinkRenderer,
  PropsBoldRenderer,
} from './props_link_plugin';

export const parsingPluginList = [
  [markdown, {}],
  [highlight, {}],
  // Excludes the emoji, checkbox, & tooltip plugins that come with the
  // EUI default - we almost certainly don't need those for props tables
  [PropsLinkMarkdownParser, {}],
];

export const processingPluginListWithLinkedProps =
  getDefaultEuiMarkdownProcessingPlugins();
processingPluginListWithLinkedProps[1][1].components.propsLinkPlugin =
  PropsLinkRenderer;

export const processingPluginListWithBoldProps =
  getDefaultEuiMarkdownProcessingPlugins();
processingPluginListWithBoldProps[1][1].components.propsLinkPlugin =
  PropsBoldRenderer;
