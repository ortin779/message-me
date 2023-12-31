/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
export namespace Components {
  interface MessageMe {
    /**
     * Public Key of the Email JS
     */
    publicKey: string;
    /**
     * Email Service Id to send the email
     */
    serviceId: string;
    /**
     * Template id of the Email JS Template
     */
    templateId: string;
  }
}
declare global {
  interface HTMLMessageMeElement extends Components.MessageMe, HTMLStencilElement {}
  var HTMLMessageMeElement: {
    prototype: HTMLMessageMeElement;
    new (): HTMLMessageMeElement;
  };
  interface HTMLElementTagNameMap {
    'message-me': HTMLMessageMeElement;
  }
}
declare namespace LocalJSX {
  interface MessageMe {
    /**
     * Public Key of the Email JS
     */
    publicKey: string;
    /**
     * Email Service Id to send the email
     */
    serviceId: string;
    /**
     * Template id of the Email JS Template
     */
    templateId: string;
  }
  interface IntrinsicElements {
    'message-me': MessageMe;
  }
}
export { LocalJSX as JSX };
declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements {
      'message-me': LocalJSX.MessageMe & JSXBase.HTMLAttributes<HTMLMessageMeElement>;
    }
  }
}
