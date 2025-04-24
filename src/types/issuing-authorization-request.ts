import {
  External$IssuingAuthorizationAmountDetails,
  IssuingAuthorizationAmountDetails,
  Schemas$IssuingAuthorizationAmountDetails,
} from "./issuing-authorization-amount-details";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingAuthorizationRequest = {
  /**
   * The `pending_request.amount` at the time of the request, presented in your card's currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Stripe held this amount from your account to fund the authorization if the request was approved.
   */
  amount: number;
  amountDetails?: IssuingAuthorizationAmountDetails | undefined;
  /**
   * Whether this request was approved.
   */
  approved: boolean;
  /**
   * A code created by Stripe which is shared with the merchant to validate the authorization. This field will be populated if the authorization message was approved. The code typically starts with the letter "S", followed by a six-digit number. For example, "S498162". Please note that the code is not guaranteed to be unique across authorizations.
   */
  authorizationCode?: string | null | undefined;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * The `pending_request.merchant_amount` at the time of the request, presented in the `merchant_currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  merchantAmount: number;
  /**
   * The currency that was collected by the merchant and presented to the cardholder for the authorization. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  merchantCurrency: string;
  /**
   * The card network's estimate of the likelihood that an authorization is fraudulent. Takes on values between 1 and 99.
   */
  networkRiskScore?: number | null | undefined;
  /**
   * When an authorization is approved or declined by you or by Stripe, this field provides additional detail on the reason for the outcome.
   */
  reason:
    | "account_disabled"
    | "card_active"
    | "card_canceled"
    | "card_expired"
    | "card_inactive"
    | "cardholder_blocked"
    | "cardholder_inactive"
    | "cardholder_verification_required"
    | "insecure_authorization_method"
    | "insufficient_funds"
    | "network_fallback"
    | "not_allowed"
    | "pin_blocked"
    | "spending_controls"
    | "suspected_fraud"
    | "verification_failed"
    | "webhook_approved"
    | "webhook_declined"
    | "webhook_error"
    | "webhook_timeout";
  /**
   * If the `request_history.reason` is `webhook_error` because the direct webhook response is invalid (for example, parsing errors or missing parameters), we surface a more detailed error message via this field.
   */
  reasonMessage?: string | null | undefined;
  /**
   * Time when the card network received an authorization request from the acquirer in UTC. Referred to by networks as transmission time.
   */
  requestedAt?: number | null | undefined;
};

/**
 * @internal
 * IssuingAuthorizationRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingAuthorizationRequest = {
  amount: number;
  amount_details?: External$IssuingAuthorizationAmountDetails | undefined;
  approved: boolean;
  authorization_code?: string | null | undefined;
  created: number;
  currency: string;
  merchant_amount: number;
  merchant_currency: string;
  network_risk_score?: number | null | undefined;
  reason:
    | "account_disabled"
    | "card_active"
    | "card_canceled"
    | "card_expired"
    | "card_inactive"
    | "cardholder_blocked"
    | "cardholder_inactive"
    | "cardholder_verification_required"
    | "insecure_authorization_method"
    | "insufficient_funds"
    | "network_fallback"
    | "not_allowed"
    | "pin_blocked"
    | "spending_controls"
    | "suspected_fraud"
    | "verification_failed"
    | "webhook_approved"
    | "webhook_declined"
    | "webhook_error"
    | "webhook_timeout";
  reason_message?: string | null | undefined;
  requested_at?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingAuthorizationRequest
 */
const SchemaIn$IssuingAuthorizationRequest: z.ZodType<
  IssuingAuthorizationRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    amount_details: Schemas$IssuingAuthorizationAmountDetails.in.optional(),
    approved: z.boolean(),
    authorization_code: z.string().nullable().optional(),
    created: z.number().int(),
    currency: z.string(),
    merchant_amount: z.number().int(),
    merchant_currency: z.string(),
    network_risk_score: z.number().int().nullable().optional(),
    reason: z.enum([
      "account_disabled",
      "card_active",
      "card_canceled",
      "card_expired",
      "card_inactive",
      "cardholder_blocked",
      "cardholder_inactive",
      "cardholder_verification_required",
      "insecure_authorization_method",
      "insufficient_funds",
      "network_fallback",
      "not_allowed",
      "pin_blocked",
      "spending_controls",
      "suspected_fraud",
      "verification_failed",
      "webhook_approved",
      "webhook_declined",
      "webhook_error",
      "webhook_timeout",
    ]),
    reason_message: z.string().nullable().optional(),
    requested_at: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amount_details: "amountDetails",
      approved: "approved",
      authorization_code: "authorizationCode",
      created: "created",
      currency: "currency",
      merchant_amount: "merchantAmount",
      merchant_currency: "merchantCurrency",
      network_risk_score: "networkRiskScore",
      reason: "reason",
      reason_message: "reasonMessage",
      requested_at: "requestedAt",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingAuthorizationRequest
 */
const SchemaOut$IssuingAuthorizationRequest: z.ZodType<
  External$IssuingAuthorizationRequest, // output type of this zod object
  z.ZodTypeDef,
  IssuingAuthorizationRequest // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    amountDetails: Schemas$IssuingAuthorizationAmountDetails.out.optional(),
    approved: z.boolean(),
    authorizationCode: z.string().nullable().optional(),
    created: z.number().int(),
    currency: z.string(),
    merchantAmount: z.number().int(),
    merchantCurrency: z.string(),
    networkRiskScore: z.number().int().nullable().optional(),
    reason: z.enum([
      "account_disabled",
      "card_active",
      "card_canceled",
      "card_expired",
      "card_inactive",
      "cardholder_blocked",
      "cardholder_inactive",
      "cardholder_verification_required",
      "insecure_authorization_method",
      "insufficient_funds",
      "network_fallback",
      "not_allowed",
      "pin_blocked",
      "spending_controls",
      "suspected_fraud",
      "verification_failed",
      "webhook_approved",
      "webhook_declined",
      "webhook_error",
      "webhook_timeout",
    ]),
    reasonMessage: z.string().nullable().optional(),
    requestedAt: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amountDetails: "amount_details",
      approved: "approved",
      authorizationCode: "authorization_code",
      created: "created",
      currency: "currency",
      merchantAmount: "merchant_amount",
      merchantCurrency: "merchant_currency",
      networkRiskScore: "network_risk_score",
      reason: "reason",
      reasonMessage: "reason_message",
      requestedAt: "requested_at",
    });
  });

export const Schemas$IssuingAuthorizationRequest = {
  in: SchemaIn$IssuingAuthorizationRequest,
  out: SchemaOut$IssuingAuthorizationRequest,
};
