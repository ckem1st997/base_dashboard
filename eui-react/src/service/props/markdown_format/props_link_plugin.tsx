import React from 'react';
import { EuiLink } from '@elastic/eui';

export function PropsLinkMarkdownParser() {
  const Parser = this.Parser;
  const tokenizers = Parser.prototype.inlineTokenizers;
  const methods = Parser.prototype.inlineMethods;

  function tokenizePropsLink(eat: (arg0: string) => { (arg0: { type: string; propId: any; }): any; new(): any; }, value: string, silent: any) {
    const tokenMatch = value.match(/^#([a-zA-Z]+)/);

    if (!tokenMatch) return false;
    const [, propId] = tokenMatch;

    if (silent) return true;

    return eat(`#${propId}`)({ type: 'propsLinkPlugin', propId });
  }

  tokenizePropsLink.locator = (value: string | string[], fromIndex: any) => {
    return value.indexOf('#', fromIndex);
  };

  tokenizers.propsLink = tokenizePropsLink;
  methods.splice(methods.indexOf('text'), 0, 'propsLink');
}

export const PropsLinkRenderer = ({ propId }:{propId:string}) => {
  const onClick = () => {
    document.getElementById(propId)?.scrollIntoView();
    window.scrollBy(0, -48); // Account for sticky header height
  };

  return <EuiLink onClick={onClick}>{propId}</EuiLink>;
};

export const PropsBoldRenderer = ({ propId }:{propId:string}) => {
  return <strong>{propId}</strong>;
};
