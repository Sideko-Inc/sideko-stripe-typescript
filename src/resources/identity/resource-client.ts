import {
  CoreClient,
  CoreResourceClient,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import { VerificationReportClient } from "@sideko-inc/stripe/resources/identity/verification-report";
import { VerificationSessionClient } from "@sideko-inc/stripe/resources/identity/verification-session";

export class IdentityClient extends CoreResourceClient {
  private _verificationReportLazy?: VerificationReportClient; // lazy-loading cache
  private _verificationSessionLazy?: VerificationSessionClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.verificationReport;
      this.verificationSession;
    }
  }
  get verificationReport(): VerificationReportClient {
    return (
      this._verificationReportLazy ??
      (this._verificationReportLazy =
        new (require("./verification-report").VerificationReportClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get verificationSession(): VerificationSessionClient {
    return (
      this._verificationSessionLazy ??
      (this._verificationSessionLazy =
        new (require("./verification-session").VerificationSessionClient)(
          this._client,
          this._opts,
        ))
    );
  }
}
