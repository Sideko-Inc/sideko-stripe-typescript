import {
  CoreClient,
  CoreResourceClient,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import { CreditReversalClient } from "@sideko-inc/stripe/resources/treasury/credit-reversal";
import { DebitReversalClient } from "@sideko-inc/stripe/resources/treasury/debit-reversal";
import { FinancialAccountClient } from "@sideko-inc/stripe/resources/treasury/financial-account";
import { FinancialAccountsClient } from "@sideko-inc/stripe/resources/treasury/financial-accounts";
import { InboundTransferClient } from "@sideko-inc/stripe/resources/treasury/inbound-transfer";
import { OutboundPaymentClient } from "@sideko-inc/stripe/resources/treasury/outbound-payment";
import { OutboundTransferClient } from "@sideko-inc/stripe/resources/treasury/outbound-transfer";
import { ReceivedCreditClient } from "@sideko-inc/stripe/resources/treasury/received-credit";
import { ReceivedDebitClient } from "@sideko-inc/stripe/resources/treasury/received-debit";
import { TransactionClient } from "@sideko-inc/stripe/resources/treasury/transaction";
import { TransactionEntryClient } from "@sideko-inc/stripe/resources/treasury/transaction-entry";

export class TreasuryClient extends CoreResourceClient {
  private _creditReversalLazy?: CreditReversalClient; // lazy-loading cache
  private _debitReversalLazy?: DebitReversalClient; // lazy-loading cache
  private _financialAccountLazy?: FinancialAccountClient; // lazy-loading cache
  private _financialAccountsLazy?: FinancialAccountsClient; // lazy-loading cache
  private _inboundTransferLazy?: InboundTransferClient; // lazy-loading cache
  private _outboundPaymentLazy?: OutboundPaymentClient; // lazy-loading cache
  private _outboundTransferLazy?: OutboundTransferClient; // lazy-loading cache
  private _receivedCreditLazy?: ReceivedCreditClient; // lazy-loading cache
  private _receivedDebitLazy?: ReceivedDebitClient; // lazy-loading cache
  private _transactionEntryLazy?: TransactionEntryClient; // lazy-loading cache
  private _transactionLazy?: TransactionClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.creditReversal;
      this.debitReversal;
      this.financialAccount;
      this.financialAccounts;
      this.inboundTransfer;
      this.outboundPayment;
      this.outboundTransfer;
      this.receivedCredit;
      this.receivedDebit;
      this.transactionEntry;
      this.transaction;
    }
  }
  get creditReversal(): CreditReversalClient {
    return (
      this._creditReversalLazy ??
      (this._creditReversalLazy =
        new (require("./credit-reversal").CreditReversalClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get debitReversal(): DebitReversalClient {
    return (
      this._debitReversalLazy ??
      (this._debitReversalLazy =
        new (require("./debit-reversal").DebitReversalClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get financialAccount(): FinancialAccountClient {
    return (
      this._financialAccountLazy ??
      (this._financialAccountLazy =
        new (require("./financial-account").FinancialAccountClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get financialAccounts(): FinancialAccountsClient {
    return (
      this._financialAccountsLazy ??
      (this._financialAccountsLazy =
        new (require("./financial-accounts").FinancialAccountsClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get inboundTransfer(): InboundTransferClient {
    return (
      this._inboundTransferLazy ??
      (this._inboundTransferLazy =
        new (require("./inbound-transfer").InboundTransferClient)(
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
  get transactionEntry(): TransactionEntryClient {
    return (
      this._transactionEntryLazy ??
      (this._transactionEntryLazy =
        new (require("./transaction-entry").TransactionEntryClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get transaction(): TransactionClient {
    return (
      this._transactionLazy ??
      (this._transactionLazy = new (require("./transaction").TransactionClient)(
        this._client,
        this._opts,
      ))
    );
  }
}
