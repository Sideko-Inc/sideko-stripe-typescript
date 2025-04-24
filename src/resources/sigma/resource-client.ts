import {
  CoreClient,
  CoreResourceClient,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import { ScheduledQueryRunClient } from "@sideko-inc/stripe/resources/sigma/scheduled-query-run";

export class SigmaClient extends CoreResourceClient {
  private _scheduledQueryRunLazy?: ScheduledQueryRunClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.scheduledQueryRun;
    }
  }
  get scheduledQueryRun(): ScheduledQueryRunClient {
    return (
      this._scheduledQueryRunLazy ??
      (this._scheduledQueryRunLazy =
        new (require("./scheduled-query-run").ScheduledQueryRunClient)(
          this._client,
          this._opts,
        ))
    );
  }
}
