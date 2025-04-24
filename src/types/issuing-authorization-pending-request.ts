import {
  External$IssuingAuthorizationAmountDetails,
  IssuingAuthorizationAmountDetails,
  Schemas$IssuingAuthorizationAmountDetails,
} from "./issuing-authorization-amount-details";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingAuthorizationPendingRequest = {
  /**
   * The additional amount Stripe will hold if the authorization is approved, in the card's [currency](https://stripe.com/docs/api#issuing_authorization_object-pending-request-currency) and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  amount: number;
  amountDetails?: IssuingAuthorizationAmountDetails | undefined;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * If set `true`, you may provide [amount](https://stripe.com/docs/api/issuing/authorizations/approve#approve_issuing_authorization-amount) to control how much to hold for the authorization.
   */
  isAmountControllable: boolean;
  /**
   * The amount the merchant is requesting to be authorized in the `merchant_currency`. The amount is in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  merchantAmount: number;
  /**
   * The local currency the merchant is requesting to authorize.
   */
  merchantCurrency: string;
  /**
   * The card network's estimate of the likelihood that an authorization is fraudulent. Takes on values between 1 and 99.
   */
  networkRiskScore?: number | null | undefined;
};

/**
 * @internal
 * IssuingAuthorizationPendingRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingAuthorizationPendingRequest = {
  amount: number;
  amount_details?: External$IssuingAuthorizationAmountDetails | undefined;
  currency: string;
  is_amount_controllable: boolean;
  merchant_amount: number;
  merchant_currency: string;
  network_risk_score?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingAuthorizationPendingRequest
 */
const SchemaIn$IssuingAuthorizationPendingRequest: z.ZodType<
  IssuingAuthorizationPendingRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    amount_details: Schemas$IssuingAuthorizationAmountDetails.in.optional(),
    currency: z.string(),
    is_amount_controllable: z.boolean(),
    merchant_amount: z.number().int(),
    merchant_currency: z.string(),
    network_risk_score: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amount_details: "amountDetails",
      currency: "currency",
      is_amount_controllable: "isAmountControllable",
      merchant_amount: "merchantAmount",
      merchant_currency: "merchantCurrency",
      network_risk_score: "networkRiskScore",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingAuthorizationPendingRequest
 */
const SchemaOut$IssuingAuthorizationPendingRequest: z.ZodType<
  External$IssuingAuthorizationPendingRequest, // output type of this zod object
  z.ZodTypeDef,
  IssuingAuthorizationPendingRequest // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    amountDetails: Schemas$IssuingAuthorizationAmountDetails.out.optional(),
    currency: z.string(),
    isAmountControllable: z.boolean(),
    merchantAmount: z.number().int(),
    merchantCurrency: z.string(),
    networkRiskScore: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amountDetails: "amount_details",
      currency: "currency",
      isAmountControllable: "is_amount_controllable",
      merchantAmount: "merchant_amount",
      merchantCurrency: "merchant_currency",
      networkRiskScore: "network_risk_score",
    });
  });

export const Schemas$IssuingAuthorizationPendingRequest = {
  in: SchemaIn$IssuingAuthorizationPendingRequest,
  out: SchemaOut$IssuingAuthorizationPendingRequest,
};
