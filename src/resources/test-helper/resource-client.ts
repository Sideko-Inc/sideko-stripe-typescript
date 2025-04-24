import {
  CoreClient,
  CoreResourceClient,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import { ConfirmationTokenClient } from "@sideko-inc/stripe/resources/test-helper/confirmation-token";
import { CustomerClient } from "@sideko-inc/stripe/resources/test-helper/customer";
import { IssuingClient } from "@sideko-inc/stripe/resources/test-helper/issuing";
import { RefundClient } from "@sideko-inc/stripe/resources/test-helper/refund";
import { TerminalClient } from "@sideko-inc/stripe/resources/test-helper/terminal";
import { TestClockClient } from "@sideko-inc/stripe/resources/test-helper/test-clock";
import { TreasuryClient } from "@sideko-inc/stripe/resources/test-helper/treasury";

export class TestHelperClient extends CoreResourceClient {
  private _testClockLazy?: TestClockClient; // lazy-loading cache
  private _confirmationTokenLazy?: ConfirmationTokenClient; // lazy-loading cache
  private _customerLazy?: CustomerClient; // lazy-loading cache
  private _issuingLazy?: IssuingClient; // lazy-loading cache
  private _refundLazy?: RefundClient; // lazy-loading cache
  private _terminalLazy?: TerminalClient; // lazy-loading cache
  private _treasuryLazy?: TreasuryClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.testClock;
      this.confirmationToken;
      this.customer;
      this.issuing;
      this.refund;
      this.terminal;
      this.treasury;
    }
  }
  get testClock(): TestClockClient {
    return (
      this._testClockLazy ??
      (this._testClockLazy = new (require("./test-clock").TestClockClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get confirmationToken(): ConfirmationTokenClient {
    return (
      this._confirmationTokenLazy ??
      (this._confirmationTokenLazy =
        new (require("./confirmation-token").ConfirmationTokenClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get customer(): CustomerClient {
    return (
      this._customerLazy ??
      (this._customerLazy = new (require("./customer").CustomerClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get issuing(): IssuingClient {
    return (
      this._issuingLazy ??
      (this._issuingLazy = new (require("./issuing").IssuingClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get refund(): RefundClient {
    return (
      this._refundLazy ??
      (this._refundLazy = new (require("./refund").RefundClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get terminal(): TerminalClient {
    return (
      this._terminalLazy ??
      (this._terminalLazy = new (require("./terminal").TerminalClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get treasury(): TreasuryClient {
    return (
      this._treasuryLazy ??
      (this._treasuryLazy = new (require("./treasury").TreasuryClient)(
        this._client,
        this._opts,
      ))
    );
  }
}
