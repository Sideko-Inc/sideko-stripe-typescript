import {
  External$SourceCodeVerificationFlow,
  Schemas$SourceCodeVerificationFlow,
  SourceCodeVerificationFlow,
} from "./source-code-verification-flow";
import {
  External$SourceMetadata,
  Schemas$SourceMetadata,
  SourceMetadata,
} from "./source-metadata";
import {
  External$SourceOrder,
  Schemas$SourceOrder,
  SourceOrder,
} from "./source-order";
import {
  External$SourceOwner,
  Schemas$SourceOwner,
  SourceOwner,
} from "./source-owner";
import {
  External$SourceReceiverFlow,
  Schemas$SourceReceiverFlow,
  SourceReceiverFlow,
} from "./source-receiver-flow";
import {
  External$SourceRedirectFlow,
  Schemas$SourceRedirectFlow,
  SourceRedirectFlow,
} from "./source-redirect-flow";
import {
  External$SourceTypeAchCreditTransfer,
  Schemas$SourceTypeAchCreditTransfer,
  SourceTypeAchCreditTransfer,
} from "./source-type-ach-credit-transfer";
import {
  External$SourceTypeAchDebit,
  Schemas$SourceTypeAchDebit,
  SourceTypeAchDebit,
} from "./source-type-ach-debit";
import {
  External$SourceTypeAcssDebit,
  Schemas$SourceTypeAcssDebit,
  SourceTypeAcssDebit,
} from "./source-type-acss-debit";
import {
  External$SourceTypeAlipay,
  Schemas$SourceTypeAlipay,
  SourceTypeAlipay,
} from "./source-type-alipay";
import {
  External$SourceTypeAuBecsDebit,
  Schemas$SourceTypeAuBecsDebit,
  SourceTypeAuBecsDebit,
} from "./source-type-au-becs-debit";
import {
  External$SourceTypeBancontact,
  Schemas$SourceTypeBancontact,
  SourceTypeBancontact,
} from "./source-type-bancontact";
import {
  External$SourceTypeCard,
  Schemas$SourceTypeCard,
  SourceTypeCard,
} from "./source-type-card";
import {
  External$SourceTypeCardPresent,
  Schemas$SourceTypeCardPresent,
  SourceTypeCardPresent,
} from "./source-type-card-present";
import {
  External$SourceTypeEps,
  Schemas$SourceTypeEps,
  SourceTypeEps,
} from "./source-type-eps";
import {
  External$SourceTypeGiropay,
  Schemas$SourceTypeGiropay,
  SourceTypeGiropay,
} from "./source-type-giropay";
import {
  External$SourceTypeIdeal,
  Schemas$SourceTypeIdeal,
  SourceTypeIdeal,
} from "./source-type-ideal";
import {
  External$SourceTypeKlarna,
  Schemas$SourceTypeKlarna,
  SourceTypeKlarna,
} from "./source-type-klarna";
import {
  External$SourceTypeMultibanco,
  Schemas$SourceTypeMultibanco,
  SourceTypeMultibanco,
} from "./source-type-multibanco";
import {
  External$SourceTypeP24,
  Schemas$SourceTypeP24,
  SourceTypeP24,
} from "./source-type-p24";
import {
  External$SourceTypeSepaDebit,
  Schemas$SourceTypeSepaDebit,
  SourceTypeSepaDebit,
} from "./source-type-sepa-debit";
import {
  External$SourceTypeSofort,
  Schemas$SourceTypeSofort,
  SourceTypeSofort,
} from "./source-type-sofort";
import {
  External$SourceTypeThreeDSecure,
  Schemas$SourceTypeThreeDSecure,
  SourceTypeThreeDSecure,
} from "./source-type-three-d-secure";
import {
  External$SourceTypeWechat,
  Schemas$SourceTypeWechat,
  SourceTypeWechat,
} from "./source-type-wechat";
import { types } from "@sideko-inc/stripe";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * `Source` objects allow you to accept a variety of payment methods. They
 * represent a customer's payment instrument, and can be used with the Stripe API
 * just like a `Card` object: once chargeable, they can be charged, or can be
 * attached to customers.
 *
 * Stripe doesn't recommend using the deprecated [Sources API](https://stripe.com/docs/api/sources).
 * We recommend that you adopt the [PaymentMethods API](https://stripe.com/docs/api/payment_methods).
 * This newer API provides access to our latest features and payment method types.
 *
 * Related guides: [Sources API](https://stripe.com/docs/sources) and [Sources & Customers](https://stripe.com/docs/sources/customers).
 */
export type Source = {
  achCreditTransfer?: SourceTypeAchCreditTransfer | undefined;
  achDebit?: SourceTypeAchDebit | undefined;
  acssDebit?: SourceTypeAcssDebit | undefined;
  alipay?: SourceTypeAlipay | undefined;
  /**
   * This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow. The field defaults to “unspecified”.
   */
  allowRedisplay?: ("always" | "limited" | "unspecified") | null | undefined;
  /**
   * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount associated with the source. This is the amount for which the source will be chargeable once ready. Required for `single_use` sources.
   */
  amount?: number | null | undefined;
  auBecsDebit?: SourceTypeAuBecsDebit | undefined;
  bancontact?: SourceTypeBancontact | undefined;
  card?: SourceTypeCard | undefined;
  cardPresent?: SourceTypeCardPresent | undefined;
  /**
   * The client secret of the source. Used for client-side retrieval using a publishable key.
   */
  clientSecret: string;
  codeVerification?: SourceCodeVerificationFlow | undefined;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) associated with the source. This is the currency for which the source will be chargeable once ready. Required for `single_use` sources.
   */
  currency?: string | null | undefined;
  /**
   * The ID of the customer to which this source is attached. This will not be present when the source has not been attached to a customer.
   */
  customer?: string | undefined;
  eps?: SourceTypeEps | undefined;
  /**
   * The authentication `flow` of the source. `flow` is one of `redirect`, `receiver`, `code_verification`, `none`.
   */
  flow: string;
  giropay?: SourceTypeGiropay | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  ideal?: SourceTypeIdeal | undefined;
  klarna?: SourceTypeKlarna | undefined;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: SourceMetadata | null | undefined;
  multibanco?: SourceTypeMultibanco | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "source";
  owner?: SourceOwner | undefined;
  p24?: SourceTypeP24 | undefined;
  receiver?: SourceReceiverFlow | undefined;
  redirect?: SourceRedirectFlow | undefined;
  sepaDebit?: SourceTypeSepaDebit | undefined;
  sofort?: SourceTypeSofort | undefined;
  sourceOrder?: SourceOrder | undefined;
  /**
   * Extra information about a source. This will appear on your customer's statement every time you charge the source.
   */
  statementDescriptor?: string | null | undefined;
  /**
   * The status of the source, one of `canceled`, `chargeable`, `consumed`, `failed`, or `pending`. Only `chargeable` sources can be used to create a charge.
   */
  status: string;
  threeDSecure?: SourceTypeThreeDSecure | undefined;
  /**
   * The `type` of the source. The `type` is a payment method, one of `ach_credit_transfer`, `ach_debit`, `alipay`, `bancontact`, `card`, `card_present`, `eps`, `giropay`, `ideal`, `multibanco`, `klarna`, `p24`, `sepa_debit`, `sofort`, `three_d_secure`, or `wechat`. An additional hash is included on the source with a name matching this value. It contains additional information specific to the [payment method](https://stripe.com/docs/sources) used.
   */
  type:
    | "ach_credit_transfer"
    | "ach_debit"
    | "acss_debit"
    | "alipay"
    | "au_becs_debit"
    | "bancontact"
    | "card"
    | "card_present"
    | "eps"
    | "giropay"
    | "ideal"
    | "klarna"
    | "multibanco"
    | "p24"
    | "sepa_debit"
    | "sofort"
    | "three_d_secure"
    | "wechat";
  /**
   * Either `reusable` or `single_use`. Whether this source should be reusable or not. Some source types may or may not be reusable by construction, while others may leave the option at creation. If an incompatible value is passed, an error will be returned.
   */
  usage?: string | null | undefined;
  wechat?: SourceTypeWechat | undefined;
};

/**
 * @internal
 * Source without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Source = {
  ach_credit_transfer?: External$SourceTypeAchCreditTransfer | undefined;
  ach_debit?: External$SourceTypeAchDebit | undefined;
  acss_debit?: External$SourceTypeAcssDebit | undefined;
  alipay?: External$SourceTypeAlipay | undefined;
  allow_redisplay?: ("always" | "limited" | "unspecified") | null | undefined;
  amount?: number | null | undefined;
  au_becs_debit?: External$SourceTypeAuBecsDebit | undefined;
  bancontact?: External$SourceTypeBancontact | undefined;
  card?: External$SourceTypeCard | undefined;
  card_present?: External$SourceTypeCardPresent | undefined;
  client_secret: string;
  code_verification?: External$SourceCodeVerificationFlow | undefined;
  created: number;
  currency?: string | null | undefined;
  customer?: string | undefined;
  eps?: External$SourceTypeEps | undefined;
  flow: string;
  giropay?: External$SourceTypeGiropay | undefined;
  id: string;
  ideal?: External$SourceTypeIdeal | undefined;
  klarna?: External$SourceTypeKlarna | undefined;
  livemode: boolean;
  metadata?: External$SourceMetadata | null | undefined;
  multibanco?: External$SourceTypeMultibanco | undefined;
  object: "source";
  owner?: External$SourceOwner | undefined;
  p24?: External$SourceTypeP24 | undefined;
  receiver?: External$SourceReceiverFlow | undefined;
  redirect?: External$SourceRedirectFlow | undefined;
  sepa_debit?: External$SourceTypeSepaDebit | undefined;
  sofort?: External$SourceTypeSofort | undefined;
  source_order?: External$SourceOrder | undefined;
  statement_descriptor?: string | null | undefined;
  status: string;
  three_d_secure?: External$SourceTypeThreeDSecure | undefined;
  type:
    | "ach_credit_transfer"
    | "ach_debit"
    | "acss_debit"
    | "alipay"
    | "au_becs_debit"
    | "bancontact"
    | "card"
    | "card_present"
    | "eps"
    | "giropay"
    | "ideal"
    | "klarna"
    | "multibanco"
    | "p24"
    | "sepa_debit"
    | "sofort"
    | "three_d_secure"
    | "wechat";
  usage?: string | null | undefined;
  wechat?: External$SourceTypeWechat | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Source
 */
const SchemaIn$Source: z.ZodType<
  Source, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ach_credit_transfer: Schemas$SourceTypeAchCreditTransfer.in.optional(),
    ach_debit: Schemas$SourceTypeAchDebit.in.optional(),
    acss_debit: Schemas$SourceTypeAcssDebit.in.optional(),
    alipay: Schemas$SourceTypeAlipay.in.optional(),
    allow_redisplay: z
      .enum(["always", "limited", "unspecified"])
      .nullable()
      .optional(),
    amount: z.number().int().nullable().optional(),
    au_becs_debit: Schemas$SourceTypeAuBecsDebit.in.optional(),
    bancontact: Schemas$SourceTypeBancontact.in.optional(),
    card: Schemas$SourceTypeCard.in.optional(),
    card_present: Schemas$SourceTypeCardPresent.in.optional(),
    client_secret: z.string(),
    code_verification: Schemas$SourceCodeVerificationFlow.in.optional(),
    created: z.number().int(),
    currency: z.string().nullable().optional(),
    customer: z.string().optional(),
    eps: Schemas$SourceTypeEps.in.optional(),
    flow: z.string(),
    giropay: Schemas$SourceTypeGiropay.in.optional(),
    id: z.string(),
    ideal: Schemas$SourceTypeIdeal.in.optional(),
    klarna: Schemas$SourceTypeKlarna.in.optional(),
    livemode: z.boolean(),
    metadata: Schemas$SourceMetadata.in.nullable().optional(),
    multibanco: Schemas$SourceTypeMultibanco.in.optional(),
    object: z.enum(["source"]),
    owner: Schemas$SourceOwner.in.optional(),
    p24: Schemas$SourceTypeP24.in.optional(),
    receiver: Schemas$SourceReceiverFlow.in.optional(),
    redirect: Schemas$SourceRedirectFlow.in.optional(),
    sepa_debit: Schemas$SourceTypeSepaDebit.in.optional(),
    sofort: Schemas$SourceTypeSofort.in.optional(),
    source_order: Schemas$SourceOrder.in.optional(),
    statement_descriptor: z.string().nullable().optional(),
    status: z.string(),
    three_d_secure: Schemas$SourceTypeThreeDSecure.in.optional(),
    type: z.enum([
      "ach_credit_transfer",
      "ach_debit",
      "acss_debit",
      "alipay",
      "au_becs_debit",
      "bancontact",
      "card",
      "card_present",
      "eps",
      "giropay",
      "ideal",
      "klarna",
      "multibanco",
      "p24",
      "sepa_debit",
      "sofort",
      "three_d_secure",
      "wechat",
    ]),
    usage: z.string().nullable().optional(),
    wechat: Schemas$SourceTypeWechat.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ach_credit_transfer: "achCreditTransfer",
      ach_debit: "achDebit",
      acss_debit: "acssDebit",
      alipay: "alipay",
      allow_redisplay: "allowRedisplay",
      amount: "amount",
      au_becs_debit: "auBecsDebit",
      bancontact: "bancontact",
      card: "card",
      card_present: "cardPresent",
      client_secret: "clientSecret",
      code_verification: "codeVerification",
      created: "created",
      currency: "currency",
      customer: "customer",
      eps: "eps",
      flow: "flow",
      giropay: "giropay",
      id: "id",
      ideal: "ideal",
      klarna: "klarna",
      livemode: "livemode",
      metadata: "metadata",
      multibanco: "multibanco",
      object: "object",
      owner: "owner",
      p24: "p24",
      receiver: "receiver",
      redirect: "redirect",
      sepa_debit: "sepaDebit",
      sofort: "sofort",
      source_order: "sourceOrder",
      statement_descriptor: "statementDescriptor",
      status: "status",
      three_d_secure: "threeDSecure",
      type: "type",
      usage: "usage",
      wechat: "wechat",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Source
 */
const SchemaOut$Source: z.ZodType<
  External$Source, // output type of this zod object
  z.ZodTypeDef,
  Source // the object to be transformed
> = z
  .object({
    achCreditTransfer: Schemas$SourceTypeAchCreditTransfer.out.optional(),
    achDebit: Schemas$SourceTypeAchDebit.out.optional(),
    acssDebit: Schemas$SourceTypeAcssDebit.out.optional(),
    alipay: Schemas$SourceTypeAlipay.out.optional(),
    allowRedisplay: z
      .enum(["always", "limited", "unspecified"])
      .nullable()
      .optional(),
    amount: z.number().int().nullable().optional(),
    auBecsDebit: Schemas$SourceTypeAuBecsDebit.out.optional(),
    bancontact: Schemas$SourceTypeBancontact.out.optional(),
    card: Schemas$SourceTypeCard.out.optional(),
    cardPresent: Schemas$SourceTypeCardPresent.out.optional(),
    clientSecret: z.string(),
    codeVerification: Schemas$SourceCodeVerificationFlow.out.optional(),
    created: z.number().int(),
    currency: z.string().nullable().optional(),
    customer: z.string().optional(),
    eps: Schemas$SourceTypeEps.out.optional(),
    flow: z.string(),
    giropay: Schemas$SourceTypeGiropay.out.optional(),
    id: z.string(),
    ideal: Schemas$SourceTypeIdeal.out.optional(),
    klarna: Schemas$SourceTypeKlarna.out.optional(),
    livemode: z.boolean(),
    metadata: Schemas$SourceMetadata.out.nullable().optional(),
    multibanco: Schemas$SourceTypeMultibanco.out.optional(),
    object: z.enum(["source"]),
    owner: Schemas$SourceOwner.out.optional(),
    p24: Schemas$SourceTypeP24.out.optional(),
    receiver: Schemas$SourceReceiverFlow.out.optional(),
    redirect: Schemas$SourceRedirectFlow.out.optional(),
    sepaDebit: Schemas$SourceTypeSepaDebit.out.optional(),
    sofort: Schemas$SourceTypeSofort.out.optional(),
    sourceOrder: Schemas$SourceOrder.out.optional(),
    statementDescriptor: z.string().nullable().optional(),
    status: z.string(),
    threeDSecure: Schemas$SourceTypeThreeDSecure.out.optional(),
    type: z.enum([
      "ach_credit_transfer",
      "ach_debit",
      "acss_debit",
      "alipay",
      "au_becs_debit",
      "bancontact",
      "card",
      "card_present",
      "eps",
      "giropay",
      "ideal",
      "klarna",
      "multibanco",
      "p24",
      "sepa_debit",
      "sofort",
      "three_d_secure",
      "wechat",
    ]),
    usage: z.string().nullable().optional(),
    wechat: Schemas$SourceTypeWechat.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      achCreditTransfer: "ach_credit_transfer",
      achDebit: "ach_debit",
      acssDebit: "acss_debit",
      alipay: "alipay",
      allowRedisplay: "allow_redisplay",
      amount: "amount",
      auBecsDebit: "au_becs_debit",
      bancontact: "bancontact",
      card: "card",
      cardPresent: "card_present",
      clientSecret: "client_secret",
      codeVerification: "code_verification",
      created: "created",
      currency: "currency",
      customer: "customer",
      eps: "eps",
      flow: "flow",
      giropay: "giropay",
      id: "id",
      ideal: "ideal",
      klarna: "klarna",
      livemode: "livemode",
      metadata: "metadata",
      multibanco: "multibanco",
      object: "object",
      owner: "owner",
      p24: "p24",
      receiver: "receiver",
      redirect: "redirect",
      sepaDebit: "sepa_debit",
      sofort: "sofort",
      sourceOrder: "source_order",
      statementDescriptor: "statement_descriptor",
      status: "status",
      threeDSecure: "three_d_secure",
      type: "type",
      usage: "usage",
      wechat: "wechat",
    });
  });

export const Schemas$Source = {
  in: SchemaIn$Source,
  out: SchemaOut$Source,
};
