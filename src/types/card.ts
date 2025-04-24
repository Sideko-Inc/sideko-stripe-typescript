import { Account, External$Account, Schemas$Account } from "./account";
import {
  CardMetadata,
  External$CardMetadata,
  Schemas$CardMetadata,
} from "./card-metadata";
import { Customer, External$Customer, Schemas$Customer } from "./customer";
import {
  DeletedCustomer,
  External$DeletedCustomer,
  Schemas$DeletedCustomer,
} from "./deleted-customer";
import {
  External$TokenCardNetworks,
  Schemas$TokenCardNetworks,
  TokenCardNetworks,
} from "./token-card-networks";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * You can store multiple cards on a customer in order to charge the customer
 * later. You can also store multiple debit cards on a recipient in order to
 * transfer to those cards later.
 *
 * Related guide: [Card payments with Sources](https://stripe.com/docs/sources/cards)
 */
export type Card = {
  account?: (string | Account) | undefined;
  /**
   * City/District/Suburb/Town/Village.
   */
  addressCity?: string | null | undefined;
  /**
   * Billing address country, if provided when creating card.
   */
  addressCountry?: string | null | undefined;
  /**
   * Address line 1 (Street address/PO Box/Company name).
   */
  addressLine1?: string | null | undefined;
  /**
   * If `address_line1` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`.
   */
  addressLine1Check?: string | null | undefined;
  /**
   * Address line 2 (Apartment/Suite/Unit/Building).
   */
  addressLine2?: string | null | undefined;
  /**
   * State/County/Province/Region.
   */
  addressState?: string | null | undefined;
  /**
   * ZIP or postal code.
   */
  addressZip?: string | null | undefined;
  /**
   * If `address_zip` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`.
   */
  addressZipCheck?: string | null | undefined;
  /**
   * This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow. The field defaults to “unspecified”.
   */
  allowRedisplay?: ("always" | "limited" | "unspecified") | null | undefined;
  /**
   * A set of available payout methods for this card. Only values from this set should be passed as the `method` when creating a payout.
   */
  availablePayoutMethods?: ("instant" | "standard")[] | null | undefined;
  /**
   * Card brand. Can be `American Express`, `Diners Club`, `Discover`, `Eftpos Australia`, `Girocard`, `JCB`, `MasterCard`, `UnionPay`, `Visa`, or `Unknown`.
   */
  brand: string;
  /**
   * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
   */
  country?: string | null | undefined;
  /**
   * Three-letter [ISO code for currency](https://www.iso.org/iso-4217-currency-codes.html) in lowercase. Must be a [supported currency](https://docs.stripe.com/currencies). Only applicable on accounts (not customers or recipients). The card can be used as a transfer destination for funds in this currency. This property is only available when returned as an [External Account](/api/external_account_cards/object) where [controller.is_controller](/api/accounts/object#account_object-controller-is_controller) is `true`.
   */
  currency?: string | null | undefined;
  /**
   * The customer that this card belongs to. This attribute will not be in the card object if the card belongs to an account or recipient instead.
   */
  customer?: (string | Customer | DeletedCustomer) | undefined;
  /**
   * If a CVC was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`. A result of unchecked indicates that CVC was provided but hasn't been checked yet. Checks are typically performed when attaching a card to a Customer object, or when creating a charge. For more details, see [Check if a card is valid without a charge](https://support.stripe.com/questions/check-if-a-card-is-valid-without-a-charge).
   */
  cvcCheck?: string | null | undefined;
  /**
   * Whether this card is the default external account for its currency. This property is only available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
   */
  defaultForCurrency?: boolean | null | undefined;
  /**
   * (For tokenized numbers only.) The last four digits of the device account number.
   */
  dynamicLast4?: string | null | undefined;
  /**
   * Two-digit number representing the card's expiration month.
   */
  expMonth: number;
  /**
   * Four-digit number representing the card's expiration year.
   */
  expYear: number;
  /**
   * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who’ve signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
   *
   * *As of May 1, 2021, card fingerprint in India for Connect changed to allow two fingerprints for the same card---one for India and one for the rest of the world.*
   */
  fingerprint?: string | null | undefined;
  /**
   * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
   */
  funding: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Issuer identification number of the card.
   */
  iin?: string | undefined;
  /**
   * The last four digits of the card.
   */
  last4: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: CardMetadata | null | undefined;
  /**
   * Cardholder name.
   */
  name?: string | null | undefined;
  networks?: TokenCardNetworks | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "card";
  /**
   * Status of a card based on the card issuer.
   */
  regulatedStatus?: ("regulated" | "unregulated") | null | undefined;
  /**
   * For external accounts that are cards, possible values are `new` and `errored`. If a payout fails, the status is set to `errored` and [scheduled payouts](https://stripe.com/docs/payouts#payout-schedule) are stopped until account details are updated.
   */
  status?: string | null | undefined;
  /**
   * If the card number is tokenized, this is the method that was used. Can be `android_pay` (includes Google Pay), `apple_pay`, `masterpass`, `visa_checkout`, or null.
   */
  tokenizationMethod?: string | null | undefined;
};

/**
 * @internal
 * Card without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Card = {
  account?: (string | External$Account) | undefined;
  address_city?: string | null | undefined;
  address_country?: string | null | undefined;
  address_line1?: string | null | undefined;
  address_line1_check?: string | null | undefined;
  address_line2?: string | null | undefined;
  address_state?: string | null | undefined;
  address_zip?: string | null | undefined;
  address_zip_check?: string | null | undefined;
  allow_redisplay?: ("always" | "limited" | "unspecified") | null | undefined;
  available_payout_methods?: ("instant" | "standard")[] | null | undefined;
  brand: string;
  country?: string | null | undefined;
  currency?: string | null | undefined;
  customer?:
    | (string | External$Customer | External$DeletedCustomer)
    | undefined;
  cvc_check?: string | null | undefined;
  default_for_currency?: boolean | null | undefined;
  dynamic_last4?: string | null | undefined;
  exp_month: number;
  exp_year: number;
  fingerprint?: string | null | undefined;
  funding: string;
  id: string;
  iin?: string | undefined;
  last4: string;
  metadata?: External$CardMetadata | null | undefined;
  name?: string | null | undefined;
  networks?: External$TokenCardNetworks | undefined;
  object: "card";
  regulated_status?: ("regulated" | "unregulated") | null | undefined;
  status?: string | null | undefined;
  tokenization_method?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Card
 */
const SchemaIn$Card: z.ZodType<
  Card, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account: z.union([z.string(), z.lazy(() => Schemas$Account.in)]).optional(),
    address_city: z.string().nullable().optional(),
    address_country: z.string().nullable().optional(),
    address_line1: z.string().nullable().optional(),
    address_line1_check: z.string().nullable().optional(),
    address_line2: z.string().nullable().optional(),
    address_state: z.string().nullable().optional(),
    address_zip: z.string().nullable().optional(),
    address_zip_check: z.string().nullable().optional(),
    allow_redisplay: z
      .enum(["always", "limited", "unspecified"])
      .nullable()
      .optional(),
    available_payout_methods: z
      .array(z.enum(["instant", "standard"]))
      .nullable()
      .optional(),
    brand: z.string(),
    country: z.string().nullable().optional(),
    currency: z.string().nullable().optional(),
    customer: z
      .union([
        z.string(),
        z.lazy(() => Schemas$Customer.in),
        Schemas$DeletedCustomer.in,
      ])
      .optional(),
    cvc_check: z.string().nullable().optional(),
    default_for_currency: z.boolean().nullable().optional(),
    dynamic_last4: z.string().nullable().optional(),
    exp_month: z.number().int(),
    exp_year: z.number().int(),
    fingerprint: z.string().nullable().optional(),
    funding: z.string(),
    id: z.string(),
    iin: z.string().optional(),
    last4: z.string(),
    metadata: Schemas$CardMetadata.in.nullable().optional(),
    name: z.string().nullable().optional(),
    networks: Schemas$TokenCardNetworks.in.optional(),
    object: z.enum(["card"]),
    regulated_status: z
      .enum(["regulated", "unregulated"])
      .nullable()
      .optional(),
    status: z.string().nullable().optional(),
    tokenization_method: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      address_city: "addressCity",
      address_country: "addressCountry",
      address_line1: "addressLine1",
      address_line1_check: "addressLine1Check",
      address_line2: "addressLine2",
      address_state: "addressState",
      address_zip: "addressZip",
      address_zip_check: "addressZipCheck",
      allow_redisplay: "allowRedisplay",
      available_payout_methods: "availablePayoutMethods",
      brand: "brand",
      country: "country",
      currency: "currency",
      customer: "customer",
      cvc_check: "cvcCheck",
      default_for_currency: "defaultForCurrency",
      dynamic_last4: "dynamicLast4",
      exp_month: "expMonth",
      exp_year: "expYear",
      fingerprint: "fingerprint",
      funding: "funding",
      id: "id",
      iin: "iin",
      last4: "last4",
      metadata: "metadata",
      name: "name",
      networks: "networks",
      object: "object",
      regulated_status: "regulatedStatus",
      status: "status",
      tokenization_method: "tokenizationMethod",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Card
 */
const SchemaOut$Card: z.ZodType<
  External$Card, // output type of this zod object
  z.ZodTypeDef,
  Card // the object to be transformed
> = z
  .object({
    account: z
      .union([z.string(), z.lazy(() => Schemas$Account.out)])
      .optional(),
    addressCity: z.string().nullable().optional(),
    addressCountry: z.string().nullable().optional(),
    addressLine1: z.string().nullable().optional(),
    addressLine1Check: z.string().nullable().optional(),
    addressLine2: z.string().nullable().optional(),
    addressState: z.string().nullable().optional(),
    addressZip: z.string().nullable().optional(),
    addressZipCheck: z.string().nullable().optional(),
    allowRedisplay: z
      .enum(["always", "limited", "unspecified"])
      .nullable()
      .optional(),
    availablePayoutMethods: z
      .array(z.enum(["instant", "standard"]))
      .nullable()
      .optional(),
    brand: z.string(),
    country: z.string().nullable().optional(),
    currency: z.string().nullable().optional(),
    customer: z
      .union([
        z.string(),
        z.lazy(() => Schemas$Customer.out),
        Schemas$DeletedCustomer.out,
      ])
      .optional(),
    cvcCheck: z.string().nullable().optional(),
    defaultForCurrency: z.boolean().nullable().optional(),
    dynamicLast4: z.string().nullable().optional(),
    expMonth: z.number().int(),
    expYear: z.number().int(),
    fingerprint: z.string().nullable().optional(),
    funding: z.string(),
    id: z.string(),
    iin: z.string().optional(),
    last4: z.string(),
    metadata: Schemas$CardMetadata.out.nullable().optional(),
    name: z.string().nullable().optional(),
    networks: Schemas$TokenCardNetworks.out.optional(),
    object: z.enum(["card"]),
    regulatedStatus: z.enum(["regulated", "unregulated"]).nullable().optional(),
    status: z.string().nullable().optional(),
    tokenizationMethod: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      addressCity: "address_city",
      addressCountry: "address_country",
      addressLine1: "address_line1",
      addressLine1Check: "address_line1_check",
      addressLine2: "address_line2",
      addressState: "address_state",
      addressZip: "address_zip",
      addressZipCheck: "address_zip_check",
      allowRedisplay: "allow_redisplay",
      availablePayoutMethods: "available_payout_methods",
      brand: "brand",
      country: "country",
      currency: "currency",
      customer: "customer",
      cvcCheck: "cvc_check",
      defaultForCurrency: "default_for_currency",
      dynamicLast4: "dynamic_last4",
      expMonth: "exp_month",
      expYear: "exp_year",
      fingerprint: "fingerprint",
      funding: "funding",
      id: "id",
      iin: "iin",
      last4: "last4",
      metadata: "metadata",
      name: "name",
      networks: "networks",
      object: "object",
      regulatedStatus: "regulated_status",
      status: "status",
      tokenizationMethod: "tokenization_method",
    });
  });

export const Schemas$Card = {
  in: SchemaIn$Card,
  out: SchemaOut$Card,
};
