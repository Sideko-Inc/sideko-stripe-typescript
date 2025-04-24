import {
  CoreClient,
  CoreResourceClient,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import { RequestClient } from "@sideko-inc/stripe/resources/forwarding/request";

export class ForwardingClient extends CoreResourceClient {
  private _requestLazy?: RequestClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.request;
    }
  }
  get request(): RequestClient {
    return (
      this._requestLazy ??
      (this._requestLazy = new (require("./request").RequestClient)(
        this._client,
        this._opts,
      ))
    );
  }
}
