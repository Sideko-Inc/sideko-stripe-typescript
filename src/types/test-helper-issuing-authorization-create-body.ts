import {
  External$TestHelperIssuingAuthorizationCreateBodyAmountDetails,
  Schemas$TestHelperIssuingAuthorizationCreateBodyAmountDetails,
  TestHelperIssuingAuthorizationCreateBodyAmountDetails,
} from "./test-helper-issuing-authorization-create-body-amount-details";
import {
  External$TestHelperIssuingAuthorizationCreateBodyFleet,
  Schemas$TestHelperIssuingAuthorizationCreateBodyFleet,
  TestHelperIssuingAuthorizationCreateBodyFleet,
} from "./test-helper-issuing-authorization-create-body-fleet";
import {
  External$TestHelperIssuingAuthorizationCreateBodyFuel,
  Schemas$TestHelperIssuingAuthorizationCreateBodyFuel,
  TestHelperIssuingAuthorizationCreateBodyFuel,
} from "./test-helper-issuing-authorization-create-body-fuel";
import {
  External$TestHelperIssuingAuthorizationCreateBodyMerchantData,
  Schemas$TestHelperIssuingAuthorizationCreateBodyMerchantData,
  TestHelperIssuingAuthorizationCreateBodyMerchantData,
} from "./test-helper-issuing-authorization-create-body-merchant-data";
import {
  External$TestHelperIssuingAuthorizationCreateBodyNetworkData,
  Schemas$TestHelperIssuingAuthorizationCreateBodyNetworkData,
  TestHelperIssuingAuthorizationCreateBodyNetworkData,
} from "./test-helper-issuing-authorization-create-body-network-data";
import {
  External$TestHelperIssuingAuthorizationCreateBodyVerificationData,
  Schemas$TestHelperIssuingAuthorizationCreateBodyVerificationData,
  TestHelperIssuingAuthorizationCreateBodyVerificationData,
} from "./test-helper-issuing-authorization-create-body-verification-data";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingAuthorizationCreateBody
 */
export type TestHelperIssuingAuthorizationCreateBody = {
  /**
   * The total amount to attempt to authorize. This amount is in the provided currency, or defaults to the card's currency, and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  amount?: number | undefined;
  /**
   * Detailed breakdown of amount components. These amounts are denominated in `currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  amountDetails?:
    | TestHelperIssuingAuthorizationCreateBodyAmountDetails
    | undefined;
  /**
   * How the card details were provided. Defaults to online.
   */
  authorizationMethod?:
    | ("chip" | "contactless" | "keyed_in" | "online" | "swipe")
    | undefined;
  /**
   * Card associated with this authorization.
   */
  card: string;
  /**
   * The currency of the authorization. If not provided, defaults to the currency of the card. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Fleet-specific information for authorizations using Fleet cards.
   */
  fleet?: TestHelperIssuingAuthorizationCreateBodyFleet | undefined;
  /**
   * Information about fuel that was purchased with this transaction.
   */
  fuel?: TestHelperIssuingAuthorizationCreateBodyFuel | undefined;
  /**
   * If set `true`, you may provide [amount](https://stripe.com/docs/api/issuing/authorizations/approve#approve_issuing_authorization-amount) to control how much to hold for the authorization.
   */
  isAmountControllable?: boolean | undefined;
  /**
   * The total amount to attempt to authorize. This amount is in the provided merchant currency, and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  merchantAmount?: number | undefined;
  /**
   * The currency of the authorization. If not provided, defaults to the currency of the card. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  merchantCurrency?: string | undefined;
  /**
   * Details about the seller (grocery store, e-commerce website, etc.) where the card authorization happened.
   */
  merchantData?:
    | TestHelperIssuingAuthorizationCreateBodyMerchantData
    | undefined;
  /**
   * Details about the authorization, such as identifiers, set by the card network.
   */
  networkData?: TestHelperIssuingAuthorizationCreateBodyNetworkData | undefined;
  /**
   * Verifications that Stripe performed on information that the cardholder provided to the merchant.
   */
  verificationData?:
    | TestHelperIssuingAuthorizationCreateBodyVerificationData
    | undefined;
  /**
   * The digital wallet used for this transaction. One of `apple_pay`, `google_pay`, or `samsung_pay`. Will populate as `null` when no digital wallet was utilized.
   */
  wallet?: ("apple_pay" | "google_pay" | "samsung_pay") | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (number | undefined)
    | (TestHelperIssuingAuthorizationCreateBodyAmountDetails | undefined)
    | (("chip" | "contactless" | "keyed_in" | "online" | "swipe") | undefined)
    | string
    | (string | undefined)
    | (string[] | undefined)
    | (TestHelperIssuingAuthorizationCreateBodyFleet | undefined)
    | (TestHelperIssuingAuthorizationCreateBodyFuel | undefined)
    | (boolean | undefined)
    | (number | undefined)
    | (string | undefined)
    | (TestHelperIssuingAuthorizationCreateBodyMerchantData | undefined)
    | (TestHelperIssuingAuthorizationCreateBodyNetworkData | undefined)
    | (TestHelperIssuingAuthorizationCreateBodyVerificationData | undefined)
    | (("apple_pay" | "google_pay" | "samsung_pay") | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TestHelperIssuingAuthorizationCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingAuthorizationCreateBody = {
  amount?: number | undefined;
  amount_details?:
    | External$TestHelperIssuingAuthorizationCreateBodyAmountDetails
    | undefined;
  authorization_method?:
    | ("chip" | "contactless" | "keyed_in" | "online" | "swipe")
    | undefined;
  card: string;
  currency?: string | undefined;
  expand?: string[] | undefined;
  fleet?: External$TestHelperIssuingAuthorizationCreateBodyFleet | undefined;
  fuel?: External$TestHelperIssuingAuthorizationCreateBodyFuel | undefined;
  is_amount_controllable?: boolean | undefined;
  merchant_amount?: number | undefined;
  merchant_currency?: string | undefined;
  merchant_data?:
    | External$TestHelperIssuingAuthorizationCreateBodyMerchantData
    | undefined;
  network_data?:
    | External$TestHelperIssuingAuthorizationCreateBodyNetworkData
    | undefined;
  verification_data?:
    | External$TestHelperIssuingAuthorizationCreateBodyVerificationData
    | undefined;
  wallet?: ("apple_pay" | "google_pay" | "samsung_pay") | undefined;

  [additionalProperty: string]:
    | (number | undefined)
    | (
        | External$TestHelperIssuingAuthorizationCreateBodyAmountDetails
        | undefined
      )
    | (("chip" | "contactless" | "keyed_in" | "online" | "swipe") | undefined)
    | string
    | (string | undefined)
    | (string[] | undefined)
    | (External$TestHelperIssuingAuthorizationCreateBodyFleet | undefined)
    | (External$TestHelperIssuingAuthorizationCreateBodyFuel | undefined)
    | (boolean | undefined)
    | (number | undefined)
    | (string | undefined)
    | (
        | External$TestHelperIssuingAuthorizationCreateBodyMerchantData
        | undefined
      )
    | (External$TestHelperIssuingAuthorizationCreateBodyNetworkData | undefined)
    | (
        | External$TestHelperIssuingAuthorizationCreateBodyVerificationData
        | undefined
      )
    | (("apple_pay" | "google_pay" | "samsung_pay") | undefined)
    | External$TestHelperIssuingAuthorizationCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingAuthorizationCreateBody
 */
const SchemaIn$TestHelperIssuingAuthorizationCreateBody: z.ZodType<
  TestHelperIssuingAuthorizationCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    amount_details:
      Schemas$TestHelperIssuingAuthorizationCreateBodyAmountDetails.in.optional(),
    authorization_method: z
      .enum(["chip", "contactless", "keyed_in", "online", "swipe"])
      .optional(),
    card: z.string(),
    currency: z.string().optional(),
    expand: z.array(z.string()).optional(),
    fleet: Schemas$TestHelperIssuingAuthorizationCreateBodyFleet.in.optional(),
    fuel: Schemas$TestHelperIssuingAuthorizationCreateBodyFuel.in.optional(),
    is_amount_controllable: z.boolean().optional(),
    merchant_amount: z.number().int().optional(),
    merchant_currency: z.string().optional(),
    merchant_data:
      Schemas$TestHelperIssuingAuthorizationCreateBodyMerchantData.in.optional(),
    network_data:
      Schemas$TestHelperIssuingAuthorizationCreateBodyNetworkData.in.optional(),
    verification_data:
      Schemas$TestHelperIssuingAuthorizationCreateBodyVerificationData.in.optional(),
    wallet: z.enum(["apple_pay", "google_pay", "samsung_pay"]).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amount_details: "amountDetails",
      authorization_method: "authorizationMethod",
      card: "card",
      currency: "currency",
      expand: "expand",
      fleet: "fleet",
      fuel: "fuel",
      is_amount_controllable: "isAmountControllable",
      merchant_amount: "merchantAmount",
      merchant_currency: "merchantCurrency",
      merchant_data: "merchantData",
      network_data: "networkData",
      verification_data: "verificationData",
      wallet: "wallet",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingAuthorizationCreateBody
 */
const SchemaOut$TestHelperIssuingAuthorizationCreateBody: z.ZodType<
  External$TestHelperIssuingAuthorizationCreateBody, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingAuthorizationCreateBody // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    amountDetails:
      Schemas$TestHelperIssuingAuthorizationCreateBodyAmountDetails.out.optional(),
    authorizationMethod: z
      .enum(["chip", "contactless", "keyed_in", "online", "swipe"])
      .optional(),
    card: z.string(),
    currency: z.string().optional(),
    expand: z.array(z.string()).optional(),
    fleet: Schemas$TestHelperIssuingAuthorizationCreateBodyFleet.out.optional(),
    fuel: Schemas$TestHelperIssuingAuthorizationCreateBodyFuel.out.optional(),
    isAmountControllable: z.boolean().optional(),
    merchantAmount: z.number().int().optional(),
    merchantCurrency: z.string().optional(),
    merchantData:
      Schemas$TestHelperIssuingAuthorizationCreateBodyMerchantData.out.optional(),
    networkData:
      Schemas$TestHelperIssuingAuthorizationCreateBodyNetworkData.out.optional(),
    verificationData:
      Schemas$TestHelperIssuingAuthorizationCreateBodyVerificationData.out.optional(),
    wallet: z.enum(["apple_pay", "google_pay", "samsung_pay"]).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amountDetails: "amount_details",
      authorizationMethod: "authorization_method",
      card: "card",
      currency: "currency",
      expand: "expand",
      fleet: "fleet",
      fuel: "fuel",
      isAmountControllable: "is_amount_controllable",
      merchantAmount: "merchant_amount",
      merchantCurrency: "merchant_currency",
      merchantData: "merchant_data",
      networkData: "network_data",
      verificationData: "verification_data",
      wallet: "wallet",
    });
  });

export const Schemas$TestHelperIssuingAuthorizationCreateBody = {
  in: SchemaIn$TestHelperIssuingAuthorizationCreateBody,
  out: SchemaOut$TestHelperIssuingAuthorizationCreateBody,
};
