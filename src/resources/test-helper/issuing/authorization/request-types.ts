import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$TestHelperIssuingAuthorizationCaptureBody,
  Schemas$TestHelperIssuingAuthorizationCaptureBody,
  TestHelperIssuingAuthorizationCaptureBody,
} from "@sideko-inc/stripe/types/test-helper-issuing-authorization-capture-body";
import {
  External$TestHelperIssuingAuthorizationCreateBodyAmountDetails,
  Schemas$TestHelperIssuingAuthorizationCreateBodyAmountDetails,
  TestHelperIssuingAuthorizationCreateBodyAmountDetails,
} from "@sideko-inc/stripe/types/test-helper-issuing-authorization-create-body-amount-details";
import {
  External$TestHelperIssuingAuthorizationCreateBodyFleet,
  Schemas$TestHelperIssuingAuthorizationCreateBodyFleet,
  TestHelperIssuingAuthorizationCreateBodyFleet,
} from "@sideko-inc/stripe/types/test-helper-issuing-authorization-create-body-fleet";
import {
  External$TestHelperIssuingAuthorizationCreateBodyFuel,
  Schemas$TestHelperIssuingAuthorizationCreateBodyFuel,
  TestHelperIssuingAuthorizationCreateBodyFuel,
} from "@sideko-inc/stripe/types/test-helper-issuing-authorization-create-body-fuel";
import {
  External$TestHelperIssuingAuthorizationCreateBodyMerchantData,
  Schemas$TestHelperIssuingAuthorizationCreateBodyMerchantData,
  TestHelperIssuingAuthorizationCreateBodyMerchantData,
} from "@sideko-inc/stripe/types/test-helper-issuing-authorization-create-body-merchant-data";
import {
  External$TestHelperIssuingAuthorizationCreateBodyNetworkData,
  Schemas$TestHelperIssuingAuthorizationCreateBodyNetworkData,
  TestHelperIssuingAuthorizationCreateBodyNetworkData,
} from "@sideko-inc/stripe/types/test-helper-issuing-authorization-create-body-network-data";
import {
  External$TestHelperIssuingAuthorizationCreateBodyVerificationData,
  Schemas$TestHelperIssuingAuthorizationCreateBodyVerificationData,
  TestHelperIssuingAuthorizationCreateBodyVerificationData,
} from "@sideko-inc/stripe/types/test-helper-issuing-authorization-create-body-verification-data";
import {
  External$TestHelperIssuingAuthorizationExpireBody,
  Schemas$TestHelperIssuingAuthorizationExpireBody,
  TestHelperIssuingAuthorizationExpireBody,
} from "@sideko-inc/stripe/types/test-helper-issuing-authorization-expire-body";
import {
  External$TestHelperIssuingAuthorizationFinalizeAmountBodyFleet,
  Schemas$TestHelperIssuingAuthorizationFinalizeAmountBodyFleet,
  TestHelperIssuingAuthorizationFinalizeAmountBodyFleet,
} from "@sideko-inc/stripe/types/test-helper-issuing-authorization-finalize-amount-body-fleet";
import {
  External$TestHelperIssuingAuthorizationFinalizeAmountBodyFuel,
  Schemas$TestHelperIssuingAuthorizationFinalizeAmountBodyFuel,
  TestHelperIssuingAuthorizationFinalizeAmountBodyFuel,
} from "@sideko-inc/stripe/types/test-helper-issuing-authorization-finalize-amount-body-fuel";
import {
  External$TestHelperIssuingAuthorizationReverseBody,
  Schemas$TestHelperIssuingAuthorizationReverseBody,
  TestHelperIssuingAuthorizationReverseBody,
} from "@sideko-inc/stripe/types/test-helper-issuing-authorization-reverse-body";
import * as z from "zod";

/**
 * CreateRequest
 */
export type CreateRequest = {
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
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
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
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
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

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};

/**
 * CaptureRequest
 */
export type CaptureRequest = {
  data?: TestHelperIssuingAuthorizationCaptureBody | undefined;
  authorization: string;
};

/**
 * @internal
 * CaptureRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CaptureRequest = {
  data?: External$TestHelperIssuingAuthorizationCaptureBody | undefined;
  authorization: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CaptureRequest
 */
const SchemaIn$CaptureRequest: z.ZodType<
  CaptureRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$TestHelperIssuingAuthorizationCaptureBody.in.optional(),
    authorization: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      authorization: "authorization",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CaptureRequest
 */
const SchemaOut$CaptureRequest: z.ZodType<
  External$CaptureRequest, // output type of this zod object
  z.ZodTypeDef,
  CaptureRequest // the object to be transformed
> = z
  .object({
    data: Schemas$TestHelperIssuingAuthorizationCaptureBody.out.optional(),
    authorization: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      authorization: "authorization",
    });
  });

export const Schemas$CaptureRequest = {
  in: SchemaIn$CaptureRequest,
  out: SchemaOut$CaptureRequest,
};

/**
 * ExpireRequest
 */
export type ExpireRequest = {
  data?: TestHelperIssuingAuthorizationExpireBody | undefined;
  authorization: string;
};

/**
 * @internal
 * ExpireRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ExpireRequest = {
  data?: External$TestHelperIssuingAuthorizationExpireBody | undefined;
  authorization: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ExpireRequest
 */
const SchemaIn$ExpireRequest: z.ZodType<
  ExpireRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$TestHelperIssuingAuthorizationExpireBody.in.optional(),
    authorization: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      authorization: "authorization",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ExpireRequest
 */
const SchemaOut$ExpireRequest: z.ZodType<
  External$ExpireRequest, // output type of this zod object
  z.ZodTypeDef,
  ExpireRequest // the object to be transformed
> = z
  .object({
    data: Schemas$TestHelperIssuingAuthorizationExpireBody.out.optional(),
    authorization: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      authorization: "authorization",
    });
  });

export const Schemas$ExpireRequest = {
  in: SchemaIn$ExpireRequest,
  out: SchemaOut$ExpireRequest,
};

/**
 * FinalizeAmountRequest
 */
export type FinalizeAmountRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The final authorization amount that will be captured by the merchant. This amount is in the authorization currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  finalAmount: number;
  /**
   * Fleet-specific information for authorizations using Fleet cards.
   */
  fleet?: TestHelperIssuingAuthorizationFinalizeAmountBodyFleet | undefined;
  /**
   * Information about fuel that was purchased with this transaction.
   */
  fuel?: TestHelperIssuingAuthorizationFinalizeAmountBodyFuel | undefined;
  authorization: string;
};

/**
 * @internal
 * FinalizeAmountRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FinalizeAmountRequest = {
  expand?: string[] | undefined;
  final_amount: number;
  fleet?:
    | External$TestHelperIssuingAuthorizationFinalizeAmountBodyFleet
    | undefined;
  fuel?:
    | External$TestHelperIssuingAuthorizationFinalizeAmountBodyFuel
    | undefined;
  authorization: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FinalizeAmountRequest
 */
const SchemaIn$FinalizeAmountRequest: z.ZodType<
  FinalizeAmountRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    final_amount: z.number().int(),
    fleet:
      Schemas$TestHelperIssuingAuthorizationFinalizeAmountBodyFleet.in.optional(),
    fuel: Schemas$TestHelperIssuingAuthorizationFinalizeAmountBodyFuel.in.optional(),
    authorization: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      final_amount: "finalAmount",
      fleet: "fleet",
      fuel: "fuel",
      authorization: "authorization",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FinalizeAmountRequest
 */
const SchemaOut$FinalizeAmountRequest: z.ZodType<
  External$FinalizeAmountRequest, // output type of this zod object
  z.ZodTypeDef,
  FinalizeAmountRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    finalAmount: z.number().int(),
    fleet:
      Schemas$TestHelperIssuingAuthorizationFinalizeAmountBodyFleet.out.optional(),
    fuel: Schemas$TestHelperIssuingAuthorizationFinalizeAmountBodyFuel.out.optional(),
    authorization: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      finalAmount: "final_amount",
      fleet: "fleet",
      fuel: "fuel",
      authorization: "authorization",
    });
  });

export const Schemas$FinalizeAmountRequest = {
  in: SchemaIn$FinalizeAmountRequest,
  out: SchemaOut$FinalizeAmountRequest,
};

/**
 * IncrementRequest
 */
export type IncrementRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The amount to increment the authorization by. This amount is in the authorization currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  incrementAmount: number;
  /**
   * If set `true`, you may provide [amount](https://stripe.com/docs/api/issuing/authorizations/approve#approve_issuing_authorization-amount) to control how much to hold for the authorization.
   */
  isAmountControllable?: boolean | undefined;
  authorization: string;
};

/**
 * @internal
 * IncrementRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IncrementRequest = {
  expand?: string[] | undefined;
  increment_amount: number;
  is_amount_controllable?: boolean | undefined;
  authorization: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IncrementRequest
 */
const SchemaIn$IncrementRequest: z.ZodType<
  IncrementRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    increment_amount: z.number().int(),
    is_amount_controllable: z.boolean().optional(),
    authorization: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      increment_amount: "incrementAmount",
      is_amount_controllable: "isAmountControllable",
      authorization: "authorization",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IncrementRequest
 */
const SchemaOut$IncrementRequest: z.ZodType<
  External$IncrementRequest, // output type of this zod object
  z.ZodTypeDef,
  IncrementRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    incrementAmount: z.number().int(),
    isAmountControllable: z.boolean().optional(),
    authorization: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      incrementAmount: "increment_amount",
      isAmountControllable: "is_amount_controllable",
      authorization: "authorization",
    });
  });

export const Schemas$IncrementRequest = {
  in: SchemaIn$IncrementRequest,
  out: SchemaOut$IncrementRequest,
};

/**
 * ReverseRequest
 */
export type ReverseRequest = {
  data?: TestHelperIssuingAuthorizationReverseBody | undefined;
  authorization: string;
};

/**
 * @internal
 * ReverseRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ReverseRequest = {
  data?: External$TestHelperIssuingAuthorizationReverseBody | undefined;
  authorization: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ReverseRequest
 */
const SchemaIn$ReverseRequest: z.ZodType<
  ReverseRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$TestHelperIssuingAuthorizationReverseBody.in.optional(),
    authorization: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      authorization: "authorization",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ReverseRequest
 */
const SchemaOut$ReverseRequest: z.ZodType<
  External$ReverseRequest, // output type of this zod object
  z.ZodTypeDef,
  ReverseRequest // the object to be transformed
> = z
  .object({
    data: Schemas$TestHelperIssuingAuthorizationReverseBody.out.optional(),
    authorization: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      authorization: "authorization",
    });
  });

export const Schemas$ReverseRequest = {
  in: SchemaIn$ReverseRequest,
  out: SchemaOut$ReverseRequest,
};
