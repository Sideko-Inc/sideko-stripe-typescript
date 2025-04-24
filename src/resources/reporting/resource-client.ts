import {
  CoreClient,
  CoreResourceClient,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import { ReportRunClient } from "@sideko-inc/stripe/resources/reporting/report-run";
import { ReportTypeClient } from "@sideko-inc/stripe/resources/reporting/report-type";

export class ReportingClient extends CoreResourceClient {
  private _reportRunLazy?: ReportRunClient; // lazy-loading cache
  private _reportTypeLazy?: ReportTypeClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.reportRun;
      this.reportType;
    }
  }
  get reportRun(): ReportRunClient {
    return (
      this._reportRunLazy ??
      (this._reportRunLazy = new (require("./report-run").ReportRunClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get reportType(): ReportTypeClient {
    return (
      this._reportTypeLazy ??
      (this._reportTypeLazy = new (require("./report-type").ReportTypeClient)(
        this._client,
        this._opts,
      ))
    );
  }
}
