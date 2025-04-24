import {
  AuthBearer,
  CoreClient,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import { Environment } from "@sideko-inc/stripe/environment";
import { AccountClient } from "@sideko-inc/stripe/resources/account";
import { AccountLinkClient } from "@sideko-inc/stripe/resources/account-link";
import { AccountSessionsClient } from "@sideko-inc/stripe/resources/account-sessions";
import { ApplePayClient } from "@sideko-inc/stripe/resources/apple-pay";
import { ApplicationFeeClient } from "@sideko-inc/stripe/resources/application-fee";
import { AppsClient } from "@sideko-inc/stripe/resources/apps";
import { BalanceClient } from "@sideko-inc/stripe/resources/balance";
import { BalanceTransactionClient } from "@sideko-inc/stripe/resources/balance-transaction";
import { BillingClient } from "@sideko-inc/stripe/resources/billing";
import { BillingPortalClient } from "@sideko-inc/stripe/resources/billing-portal";
import { ChargeClient } from "@sideko-inc/stripe/resources/charge";
import { CheckoutClient } from "@sideko-inc/stripe/resources/checkout";
import { ClimateClient } from "@sideko-inc/stripe/resources/climate";
import { ConfirmationTokenClient } from "@sideko-inc/stripe/resources/confirmation-token";
import { CountrySpecClient } from "@sideko-inc/stripe/resources/country-spec";
import { CouponClient } from "@sideko-inc/stripe/resources/coupon";
import { CreditNoteClient } from "@sideko-inc/stripe/resources/credit-note";
import { CustomerClient } from "@sideko-inc/stripe/resources/customer";
import { CustomerSessionClient } from "@sideko-inc/stripe/resources/customer-session";
import { DisputeClient } from "@sideko-inc/stripe/resources/dispute";
import { EntitlementClient } from "@sideko-inc/stripe/resources/entitlement";
import { EphemeralKeyClient } from "@sideko-inc/stripe/resources/ephemeral-key";
import { EventClient } from "@sideko-inc/stripe/resources/event";
import { ExchangeRateClient } from "@sideko-inc/stripe/resources/exchange-rate";
import { ExternalAccountClient } from "@sideko-inc/stripe/resources/external-account";
import { FileClient } from "@sideko-inc/stripe/resources/file";
import { FileLinkClient } from "@sideko-inc/stripe/resources/file-link";
import { FinancialConnectionsClient } from "@sideko-inc/stripe/resources/financial-connections";
import { ForwardingClient } from "@sideko-inc/stripe/resources/forwarding";
import { IdentityClient } from "@sideko-inc/stripe/resources/identity";
import { InvoiceClient } from "@sideko-inc/stripe/resources/invoice";
import { InvoiceItemClient } from "@sideko-inc/stripe/resources/invoice-item";
import { InvoicePaymentClient } from "@sideko-inc/stripe/resources/invoice-payment";
import { InvoiceRenderingTemplateClient } from "@sideko-inc/stripe/resources/invoice-rendering-template";
import { IssuingClient } from "@sideko-inc/stripe/resources/issuing";
import { LinkAccountSessionClient } from "@sideko-inc/stripe/resources/link-account-session";
import { LinkedAccountClient } from "@sideko-inc/stripe/resources/linked-account";
import { MandatesClient } from "@sideko-inc/stripe/resources/mandates";
import { PaymentIntentClient } from "@sideko-inc/stripe/resources/payment-intent";
import { PaymentLinkClient } from "@sideko-inc/stripe/resources/payment-link";
import { PaymentLinksClient } from "@sideko-inc/stripe/resources/payment-links";
import { PaymentMethodClient } from "@sideko-inc/stripe/resources/payment-method";
import { PaymentMethodConfigurationClient } from "@sideko-inc/stripe/resources/payment-method-configuration";
import { PaymentMethodDomainClient } from "@sideko-inc/stripe/resources/payment-method-domain";
import { PayoutClient } from "@sideko-inc/stripe/resources/payout";
import { PlanClient } from "@sideko-inc/stripe/resources/plan";
import { PriceClient } from "@sideko-inc/stripe/resources/price";
import { ProductClient } from "@sideko-inc/stripe/resources/product";
import { PromotionCodeClient } from "@sideko-inc/stripe/resources/promotion-code";
import { QuoteClient } from "@sideko-inc/stripe/resources/quote";
import { QuotesClient } from "@sideko-inc/stripe/resources/quotes";
import { RadarClient } from "@sideko-inc/stripe/resources/radar";
import { RefundClient } from "@sideko-inc/stripe/resources/refund";
import { ReportingClient } from "@sideko-inc/stripe/resources/reporting";
import { ReviewClient } from "@sideko-inc/stripe/resources/review";
import { SetupAttemptClient } from "@sideko-inc/stripe/resources/setup-attempt";
import { SetupIntentClient } from "@sideko-inc/stripe/resources/setup-intent";
import { ShippingRateClient } from "@sideko-inc/stripe/resources/shipping-rate";
import { SigmaClient } from "@sideko-inc/stripe/resources/sigma";
import { SourceClient } from "@sideko-inc/stripe/resources/source";
import { SubscriptionClient } from "@sideko-inc/stripe/resources/subscription";
import { SubscriptionItemClient } from "@sideko-inc/stripe/resources/subscription-item";
import { SubscriptionScheduleClient } from "@sideko-inc/stripe/resources/subscription-schedule";
import { SubscriptionsClient } from "@sideko-inc/stripe/resources/subscriptions";
import { TaxClient } from "@sideko-inc/stripe/resources/tax";
import { TaxCodeClient } from "@sideko-inc/stripe/resources/tax-code";
import { TaxIdClient } from "@sideko-inc/stripe/resources/tax-id";
import { TaxRateClient } from "@sideko-inc/stripe/resources/tax-rate";
import { TerminalClient } from "@sideko-inc/stripe/resources/terminal";
import { TestHelperClient } from "@sideko-inc/stripe/resources/test-helper";
import { TokenClient } from "@sideko-inc/stripe/resources/token";
import { TopupsClient } from "@sideko-inc/stripe/resources/topups";
import { TransferClient } from "@sideko-inc/stripe/resources/transfer";
import { TransfersClient } from "@sideko-inc/stripe/resources/transfers";
import { TreasuryClient } from "@sideko-inc/stripe/resources/treasury";
import { V1Client } from "@sideko-inc/stripe/resources/v1";
import { WebhookEndpointsClient } from "@sideko-inc/stripe/resources/webhook-endpoints";

export interface StripeOptions extends ResourceClientOptions {
  baseUrl?: string;
  environment?: Environment;
  timeout?: number;
  lazyLoad?: boolean;
  token?: string;
}

export class Stripe {
  private _accountLazy?: AccountClient; // lazy-loading cache
  private _applePayLazy?: ApplePayClient; // lazy-loading cache
  private _couponLazy?: CouponClient; // lazy-loading cache
  private _customerLazy?: CustomerClient; // lazy-loading cache
  private _ephemeralKeyLazy?: EphemeralKeyClient; // lazy-loading cache
  private _invoiceItemLazy?: InvoiceItemClient; // lazy-loading cache
  private _invoiceLazy?: InvoiceClient; // lazy-loading cache
  private _planLazy?: PlanClient; // lazy-loading cache
  private _productLazy?: ProductClient; // lazy-loading cache
  private _radarLazy?: RadarClient; // lazy-loading cache
  private _subscriptionItemLazy?: SubscriptionItemClient; // lazy-loading cache
  private _subscriptionLazy?: SubscriptionClient; // lazy-loading cache
  private _subscriptionsLazy?: SubscriptionsClient; // lazy-loading cache
  private _taxIdLazy?: TaxIdClient; // lazy-loading cache
  private _terminalLazy?: TerminalClient; // lazy-loading cache
  private _testHelperLazy?: TestHelperClient; // lazy-loading cache
  private _webhookEndpointsLazy?: WebhookEndpointsClient; // lazy-loading cache
  private _applicationFeeLazy?: ApplicationFeeClient; // lazy-loading cache
  private _appsLazy?: AppsClient; // lazy-loading cache
  private _balanceLazy?: BalanceClient; // lazy-loading cache
  private _balanceTransactionLazy?: BalanceTransactionClient; // lazy-loading cache
  private _billingLazy?: BillingClient; // lazy-loading cache
  private _billingPortalLazy?: BillingPortalClient; // lazy-loading cache
  private _chargeLazy?: ChargeClient; // lazy-loading cache
  private _checkoutLazy?: CheckoutClient; // lazy-loading cache
  private _climateLazy?: ClimateClient; // lazy-loading cache
  private _v1Lazy?: V1Client; // lazy-loading cache
  private _confirmationTokenLazy?: ConfirmationTokenClient; // lazy-loading cache
  private _countrySpecLazy?: CountrySpecClient; // lazy-loading cache
  private _creditNoteLazy?: CreditNoteClient; // lazy-loading cache
  private _disputeLazy?: DisputeClient; // lazy-loading cache
  private _entitlementLazy?: EntitlementClient; // lazy-loading cache
  private _eventLazy?: EventClient; // lazy-loading cache
  private _exchangeRateLazy?: ExchangeRateClient; // lazy-loading cache
  private _fileLinkLazy?: FileLinkClient; // lazy-loading cache
  private _fileLazy?: FileClient; // lazy-loading cache
  private _financialConnectionsLazy?: FinancialConnectionsClient; // lazy-loading cache
  private _forwardingLazy?: ForwardingClient; // lazy-loading cache
  private _identityLazy?: IdentityClient; // lazy-loading cache
  private _invoicePaymentLazy?: InvoicePaymentClient; // lazy-loading cache
  private _invoiceRenderingTemplateLazy?: InvoiceRenderingTemplateClient; // lazy-loading cache
  private _issuingLazy?: IssuingClient; // lazy-loading cache
  private _linkAccountSessionLazy?: LinkAccountSessionClient; // lazy-loading cache
  private _linkedAccountLazy?: LinkedAccountClient; // lazy-loading cache
  private _mandatesLazy?: MandatesClient; // lazy-loading cache
  private _paymentIntentLazy?: PaymentIntentClient; // lazy-loading cache
  private _paymentLinkLazy?: PaymentLinkClient; // lazy-loading cache
  private _paymentLinksLazy?: PaymentLinksClient; // lazy-loading cache
  private _paymentMethodConfigurationLazy?: PaymentMethodConfigurationClient; // lazy-loading cache
  private _paymentMethodDomainLazy?: PaymentMethodDomainClient; // lazy-loading cache
  private _paymentMethodLazy?: PaymentMethodClient; // lazy-loading cache
  private _payoutLazy?: PayoutClient; // lazy-loading cache
  private _priceLazy?: PriceClient; // lazy-loading cache
  private _promotionCodeLazy?: PromotionCodeClient; // lazy-loading cache
  private _quoteLazy?: QuoteClient; // lazy-loading cache
  private _quotesLazy?: QuotesClient; // lazy-loading cache
  private _refundLazy?: RefundClient; // lazy-loading cache
  private _reportingLazy?: ReportingClient; // lazy-loading cache
  private _reviewLazy?: ReviewClient; // lazy-loading cache
  private _setupAttemptLazy?: SetupAttemptClient; // lazy-loading cache
  private _setupIntentLazy?: SetupIntentClient; // lazy-loading cache
  private _shippingRateLazy?: ShippingRateClient; // lazy-loading cache
  private _sigmaLazy?: SigmaClient; // lazy-loading cache
  private _sourceLazy?: SourceClient; // lazy-loading cache
  private _subscriptionScheduleLazy?: SubscriptionScheduleClient; // lazy-loading cache
  private _taxLazy?: TaxClient; // lazy-loading cache
  private _taxCodeLazy?: TaxCodeClient; // lazy-loading cache
  private _taxRateLazy?: TaxRateClient; // lazy-loading cache
  private _tokenLazy?: TokenClient; // lazy-loading cache
  private _topupsLazy?: TopupsClient; // lazy-loading cache
  private _transferLazy?: TransferClient; // lazy-loading cache
  private _transfersLazy?: TransfersClient; // lazy-loading cache
  private _treasuryLazy?: TreasuryClient; // lazy-loading cache
  private _accountLinkLazy?: AccountLinkClient; // lazy-loading cache
  private _accountSessionsLazy?: AccountSessionsClient; // lazy-loading cache
  private _customerSessionLazy?: CustomerSessionClient; // lazy-loading cache
  private _externalAccountLazy?: ExternalAccountClient; // lazy-loading cache

  protected _client: CoreClient;
  protected _opts: ResourceClientOptions;

  constructor(opts?: StripeOptions) {
    const baseUrl =
      opts?.baseUrl ?? opts?.environment ?? Environment.Production;
    this._client = new CoreClient({ baseUrl, timeout: opts?.timeout });
    this._opts = { lazyLoad: opts?.lazyLoad };
    this._client.registerAuth("bearerAuth", new AuthBearer(opts?.token));
    if (this._opts.lazyLoad === false) {
      this.account;
      this.applePay;
      this.coupon;
      this.customer;
      this.ephemeralKey;
      this.invoiceItem;
      this.invoice;
      this.plan;
      this.product;
      this.radar;
      this.subscriptionItem;
      this.subscription;
      this.subscriptions;
      this.taxId;
      this.terminal;
      this.testHelper;
      this.webhookEndpoints;
      this.applicationFee;
      this.apps;
      this.balance;
      this.balanceTransaction;
      this.billing;
      this.billingPortal;
      this.charge;
      this.checkout;
      this.climate;
      this.v1;
      this.confirmationToken;
      this.countrySpec;
      this.creditNote;
      this.dispute;
      this.entitlement;
      this.event;
      this.exchangeRate;
      this.fileLink;
      this.file;
      this.financialConnections;
      this.forwarding;
      this.identity;
      this.invoicePayment;
      this.invoiceRenderingTemplate;
      this.issuing;
      this.linkAccountSession;
      this.linkedAccount;
      this.mandates;
      this.paymentIntent;
      this.paymentLink;
      this.paymentLinks;
      this.paymentMethodConfiguration;
      this.paymentMethodDomain;
      this.paymentMethod;
      this.payout;
      this.price;
      this.promotionCode;
      this.quote;
      this.quotes;
      this.refund;
      this.reporting;
      this.review;
      this.setupAttempt;
      this.setupIntent;
      this.shippingRate;
      this.sigma;
      this.source;
      this.subscriptionSchedule;
      this.tax;
      this.taxCode;
      this.taxRate;
      this.token;
      this.topups;
      this.transfer;
      this.transfers;
      this.treasury;
      this.accountLink;
      this.accountSessions;
      this.customerSession;
      this.externalAccount;
    }
  }
  get account(): AccountClient {
    return (
      this._accountLazy ??
      (this._accountLazy = new (require("./resources/account").AccountClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get applePay(): ApplePayClient {
    return (
      this._applePayLazy ??
      (this._applePayLazy =
        new (require("./resources/apple-pay").ApplePayClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get coupon(): CouponClient {
    return (
      this._couponLazy ??
      (this._couponLazy = new (require("./resources/coupon").CouponClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get customer(): CustomerClient {
    return (
      this._customerLazy ??
      (this._customerLazy =
        new (require("./resources/customer").CustomerClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get ephemeralKey(): EphemeralKeyClient {
    return (
      this._ephemeralKeyLazy ??
      (this._ephemeralKeyLazy =
        new (require("./resources/ephemeral-key").EphemeralKeyClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get invoiceItem(): InvoiceItemClient {
    return (
      this._invoiceItemLazy ??
      (this._invoiceItemLazy =
        new (require("./resources/invoice-item").InvoiceItemClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get invoice(): InvoiceClient {
    return (
      this._invoiceLazy ??
      (this._invoiceLazy = new (require("./resources/invoice").InvoiceClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get plan(): PlanClient {
    return (
      this._planLazy ??
      (this._planLazy = new (require("./resources/plan").PlanClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get product(): ProductClient {
    return (
      this._productLazy ??
      (this._productLazy = new (require("./resources/product").ProductClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get radar(): RadarClient {
    return (
      this._radarLazy ??
      (this._radarLazy = new (require("./resources/radar").RadarClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get subscriptionItem(): SubscriptionItemClient {
    return (
      this._subscriptionItemLazy ??
      (this._subscriptionItemLazy =
        new (require("./resources/subscription-item").SubscriptionItemClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get subscription(): SubscriptionClient {
    return (
      this._subscriptionLazy ??
      (this._subscriptionLazy =
        new (require("./resources/subscription").SubscriptionClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get subscriptions(): SubscriptionsClient {
    return (
      this._subscriptionsLazy ??
      (this._subscriptionsLazy =
        new (require("./resources/subscriptions").SubscriptionsClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get taxId(): TaxIdClient {
    return (
      this._taxIdLazy ??
      (this._taxIdLazy = new (require("./resources/tax-id").TaxIdClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get terminal(): TerminalClient {
    return (
      this._terminalLazy ??
      (this._terminalLazy =
        new (require("./resources/terminal").TerminalClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get testHelper(): TestHelperClient {
    return (
      this._testHelperLazy ??
      (this._testHelperLazy =
        new (require("./resources/test-helper").TestHelperClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get webhookEndpoints(): WebhookEndpointsClient {
    return (
      this._webhookEndpointsLazy ??
      (this._webhookEndpointsLazy =
        new (require("./resources/webhook-endpoints").WebhookEndpointsClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get applicationFee(): ApplicationFeeClient {
    return (
      this._applicationFeeLazy ??
      (this._applicationFeeLazy =
        new (require("./resources/application-fee").ApplicationFeeClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get apps(): AppsClient {
    return (
      this._appsLazy ??
      (this._appsLazy = new (require("./resources/apps").AppsClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get balance(): BalanceClient {
    return (
      this._balanceLazy ??
      (this._balanceLazy = new (require("./resources/balance").BalanceClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get balanceTransaction(): BalanceTransactionClient {
    return (
      this._balanceTransactionLazy ??
      (this._balanceTransactionLazy =
        new (require("./resources/balance-transaction").BalanceTransactionClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get billing(): BillingClient {
    return (
      this._billingLazy ??
      (this._billingLazy = new (require("./resources/billing").BillingClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get billingPortal(): BillingPortalClient {
    return (
      this._billingPortalLazy ??
      (this._billingPortalLazy =
        new (require("./resources/billing-portal").BillingPortalClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get charge(): ChargeClient {
    return (
      this._chargeLazy ??
      (this._chargeLazy = new (require("./resources/charge").ChargeClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get checkout(): CheckoutClient {
    return (
      this._checkoutLazy ??
      (this._checkoutLazy =
        new (require("./resources/checkout").CheckoutClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get climate(): ClimateClient {
    return (
      this._climateLazy ??
      (this._climateLazy = new (require("./resources/climate").ClimateClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get v1(): V1Client {
    return (
      this._v1Lazy ??
      (this._v1Lazy = new (require("./resources/v1").V1Client)(
        this._client,
        this._opts,
      ))
    );
  }
  get confirmationToken(): ConfirmationTokenClient {
    return (
      this._confirmationTokenLazy ??
      (this._confirmationTokenLazy =
        new (require("./resources/confirmation-token").ConfirmationTokenClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get countrySpec(): CountrySpecClient {
    return (
      this._countrySpecLazy ??
      (this._countrySpecLazy =
        new (require("./resources/country-spec").CountrySpecClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get creditNote(): CreditNoteClient {
    return (
      this._creditNoteLazy ??
      (this._creditNoteLazy =
        new (require("./resources/credit-note").CreditNoteClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get dispute(): DisputeClient {
    return (
      this._disputeLazy ??
      (this._disputeLazy = new (require("./resources/dispute").DisputeClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get entitlement(): EntitlementClient {
    return (
      this._entitlementLazy ??
      (this._entitlementLazy =
        new (require("./resources/entitlement").EntitlementClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get event(): EventClient {
    return (
      this._eventLazy ??
      (this._eventLazy = new (require("./resources/event").EventClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get exchangeRate(): ExchangeRateClient {
    return (
      this._exchangeRateLazy ??
      (this._exchangeRateLazy =
        new (require("./resources/exchange-rate").ExchangeRateClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get fileLink(): FileLinkClient {
    return (
      this._fileLinkLazy ??
      (this._fileLinkLazy =
        new (require("./resources/file-link").FileLinkClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get file(): FileClient {
    return (
      this._fileLazy ??
      (this._fileLazy = new (require("./resources/file").FileClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get financialConnections(): FinancialConnectionsClient {
    return (
      this._financialConnectionsLazy ??
      (this._financialConnectionsLazy =
        new (require("./resources/financial-connections").FinancialConnectionsClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get forwarding(): ForwardingClient {
    return (
      this._forwardingLazy ??
      (this._forwardingLazy =
        new (require("./resources/forwarding").ForwardingClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get identity(): IdentityClient {
    return (
      this._identityLazy ??
      (this._identityLazy =
        new (require("./resources/identity").IdentityClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get invoicePayment(): InvoicePaymentClient {
    return (
      this._invoicePaymentLazy ??
      (this._invoicePaymentLazy =
        new (require("./resources/invoice-payment").InvoicePaymentClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get invoiceRenderingTemplate(): InvoiceRenderingTemplateClient {
    return (
      this._invoiceRenderingTemplateLazy ??
      (this._invoiceRenderingTemplateLazy =
        new (require("./resources/invoice-rendering-template").InvoiceRenderingTemplateClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get issuing(): IssuingClient {
    return (
      this._issuingLazy ??
      (this._issuingLazy = new (require("./resources/issuing").IssuingClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get linkAccountSession(): LinkAccountSessionClient {
    return (
      this._linkAccountSessionLazy ??
      (this._linkAccountSessionLazy =
        new (require("./resources/link-account-session").LinkAccountSessionClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get linkedAccount(): LinkedAccountClient {
    return (
      this._linkedAccountLazy ??
      (this._linkedAccountLazy =
        new (require("./resources/linked-account").LinkedAccountClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get mandates(): MandatesClient {
    return (
      this._mandatesLazy ??
      (this._mandatesLazy =
        new (require("./resources/mandates").MandatesClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get paymentIntent(): PaymentIntentClient {
    return (
      this._paymentIntentLazy ??
      (this._paymentIntentLazy =
        new (require("./resources/payment-intent").PaymentIntentClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get paymentLink(): PaymentLinkClient {
    return (
      this._paymentLinkLazy ??
      (this._paymentLinkLazy =
        new (require("./resources/payment-link").PaymentLinkClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get paymentLinks(): PaymentLinksClient {
    return (
      this._paymentLinksLazy ??
      (this._paymentLinksLazy =
        new (require("./resources/payment-links").PaymentLinksClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get paymentMethodConfiguration(): PaymentMethodConfigurationClient {
    return (
      this._paymentMethodConfigurationLazy ??
      (this._paymentMethodConfigurationLazy =
        new (require("./resources/payment-method-configuration").PaymentMethodConfigurationClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get paymentMethodDomain(): PaymentMethodDomainClient {
    return (
      this._paymentMethodDomainLazy ??
      (this._paymentMethodDomainLazy =
        new (require("./resources/payment-method-domain").PaymentMethodDomainClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get paymentMethod(): PaymentMethodClient {
    return (
      this._paymentMethodLazy ??
      (this._paymentMethodLazy =
        new (require("./resources/payment-method").PaymentMethodClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get payout(): PayoutClient {
    return (
      this._payoutLazy ??
      (this._payoutLazy = new (require("./resources/payout").PayoutClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get price(): PriceClient {
    return (
      this._priceLazy ??
      (this._priceLazy = new (require("./resources/price").PriceClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get promotionCode(): PromotionCodeClient {
    return (
      this._promotionCodeLazy ??
      (this._promotionCodeLazy =
        new (require("./resources/promotion-code").PromotionCodeClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get quote(): QuoteClient {
    return (
      this._quoteLazy ??
      (this._quoteLazy = new (require("./resources/quote").QuoteClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get quotes(): QuotesClient {
    return (
      this._quotesLazy ??
      (this._quotesLazy = new (require("./resources/quotes").QuotesClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get refund(): RefundClient {
    return (
      this._refundLazy ??
      (this._refundLazy = new (require("./resources/refund").RefundClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get reporting(): ReportingClient {
    return (
      this._reportingLazy ??
      (this._reportingLazy =
        new (require("./resources/reporting").ReportingClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get review(): ReviewClient {
    return (
      this._reviewLazy ??
      (this._reviewLazy = new (require("./resources/review").ReviewClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get setupAttempt(): SetupAttemptClient {
    return (
      this._setupAttemptLazy ??
      (this._setupAttemptLazy =
        new (require("./resources/setup-attempt").SetupAttemptClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get setupIntent(): SetupIntentClient {
    return (
      this._setupIntentLazy ??
      (this._setupIntentLazy =
        new (require("./resources/setup-intent").SetupIntentClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get shippingRate(): ShippingRateClient {
    return (
      this._shippingRateLazy ??
      (this._shippingRateLazy =
        new (require("./resources/shipping-rate").ShippingRateClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get sigma(): SigmaClient {
    return (
      this._sigmaLazy ??
      (this._sigmaLazy = new (require("./resources/sigma").SigmaClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get source(): SourceClient {
    return (
      this._sourceLazy ??
      (this._sourceLazy = new (require("./resources/source").SourceClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get subscriptionSchedule(): SubscriptionScheduleClient {
    return (
      this._subscriptionScheduleLazy ??
      (this._subscriptionScheduleLazy =
        new (require("./resources/subscription-schedule").SubscriptionScheduleClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get tax(): TaxClient {
    return (
      this._taxLazy ??
      (this._taxLazy = new (require("./resources/tax").TaxClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get taxCode(): TaxCodeClient {
    return (
      this._taxCodeLazy ??
      (this._taxCodeLazy = new (require("./resources/tax-code").TaxCodeClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get taxRate(): TaxRateClient {
    return (
      this._taxRateLazy ??
      (this._taxRateLazy = new (require("./resources/tax-rate").TaxRateClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get token(): TokenClient {
    return (
      this._tokenLazy ??
      (this._tokenLazy = new (require("./resources/token").TokenClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get topups(): TopupsClient {
    return (
      this._topupsLazy ??
      (this._topupsLazy = new (require("./resources/topups").TopupsClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get transfer(): TransferClient {
    return (
      this._transferLazy ??
      (this._transferLazy =
        new (require("./resources/transfer").TransferClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get transfers(): TransfersClient {
    return (
      this._transfersLazy ??
      (this._transfersLazy =
        new (require("./resources/transfers").TransfersClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get treasury(): TreasuryClient {
    return (
      this._treasuryLazy ??
      (this._treasuryLazy =
        new (require("./resources/treasury").TreasuryClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get accountLink(): AccountLinkClient {
    return (
      this._accountLinkLazy ??
      (this._accountLinkLazy =
        new (require("./resources/account-link").AccountLinkClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get accountSessions(): AccountSessionsClient {
    return (
      this._accountSessionsLazy ??
      (this._accountSessionsLazy =
        new (require("./resources/account-sessions").AccountSessionsClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get customerSession(): CustomerSessionClient {
    return (
      this._customerSessionLazy ??
      (this._customerSessionLazy =
        new (require("./resources/customer-session").CustomerSessionClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get externalAccount(): ExternalAccountClient {
    return (
      this._externalAccountLazy ??
      (this._externalAccountLazy =
        new (require("./resources/external-account").ExternalAccountClient)(
          this._client,
          this._opts,
        ))
    );
  }
}
