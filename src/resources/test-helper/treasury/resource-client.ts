import {
  CoreClient,
  CoreResourceClient,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import { InboundTransfersClient } from "@sideko-inc/stripe/resources/test-helper/treasury/inbound-transfers";
import { OutboundPaymentClient } from "@sideko-inc/stripe/resources/test-helper/treasury/outbound-payment";
import { OutboundTransferClient } from "@sideko-inc/stripe/resources/test-helper/treasury/outbound-transfer";
import { ReceivedCreditClient } from "@sideko-inc/stripe/resources/test-helper/treasury/received-credit";
import { ReceivedDebitClient } from "@sideko-inc/stripe/resources/test-helper/treasury/received-debit";

export class TreasuryClient extends CoreResourceClient {
  private _inboundTransfersLazy?: InboundTransfersClient; // lazy-loading cache
  private _outboundPaymentLazy?: OutboundPaymentClient; // lazy-loading cache
  private _outboundTransferLazy?: OutboundTransferClient; // lazy-loading cache
  private _receivedCreditLazy?: ReceivedCreditClient; // lazy-loading cache
  private _receivedDebitLazy?: ReceivedDebitClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.inboundTransfers;
      this.outboundPayment;
      this.outboundTransfer;
      this.receivedCredit;
      this.receivedDebit;
    }
  }
  get inboundTransfers(): InboundTransfersClient {
    return (
      this._inboundTransfersLazy ??
      (this._inboundTransfersLazy =
        new (require("./inbound-transfers").InboundTransfersClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get outboundPayment(): OutboundPaymentClient {
    return (
      this._outboundPaymentLazy ??
      (this._outboundPaymentLazy =
        new (require("./outbound-payment").OutboundPaymentClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get outboundTransfer(): OutboundTransferClient {
    return (
      this._outboundTransferLazy ??
      (this._outboundTransferLazy =
        new (require("./outbound-transfer").OutboundTransferClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get receivedCredit(): ReceivedCreditClient {
    return (
      this._receivedCreditLazy ??
      (this._receivedCreditLazy =
        new (require("./received-credit").ReceivedCreditClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get receivedDebit(): ReceivedDebitClient {
    return (
      this._receivedDebitLazy ??
      (this._receivedDebitLazy =
        new (require("./received-debit").ReceivedDebitClient)(
          this._client,
          this._opts,
        ))
    );
  }
}
