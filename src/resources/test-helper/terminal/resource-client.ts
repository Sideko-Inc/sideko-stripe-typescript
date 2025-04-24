import {
  CoreClient,
  CoreResourceClient,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import { ReaderClient } from "@sideko-inc/stripe/resources/test-helper/terminal/reader";

export class TerminalClient extends CoreResourceClient {
  private _readerLazy?: ReaderClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.reader;
    }
  }
  get reader(): ReaderClient {
    return (
      this._readerLazy ??
      (this._readerLazy = new (require("./reader").ReaderClient)(
        this._client,
        this._opts,
      ))
    );
  }
}
