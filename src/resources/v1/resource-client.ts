import {
  CoreClient,
  CoreResourceClient,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import { ClimateClient } from "@sideko-inc/stripe/resources/v1/climate";

export class V1Client extends CoreResourceClient {
  private _climateLazy?: ClimateClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.climate;
    }
  }
  get climate(): ClimateClient {
    return (
      this._climateLazy ??
      (this._climateLazy = new (require("./climate").ClimateClient)(
        this._client,
        this._opts,
      ))
    );
  }
}
