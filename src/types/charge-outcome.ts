import { External$Rule, Rule, Schemas$Rule } from "./rule";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ChargeOutcome = {
  /**
   * An enumerated value providing a more detailed explanation on [how to proceed with an error](https://stripe.com/docs/declines#retrying-issuer-declines).
   */
  adviceCode?:
    | ("confirm_card_data" | "do_not_try_again" | "try_again_later")
    | null
    | undefined;
  /**
   * For charges declined by the network, a 2 digit code which indicates the advice returned by the network on how to proceed with an error.
   */
  networkAdviceCode?: string | null | undefined;
  /**
   * For charges declined by the network, a brand specific 2, 3, or 4 digit code which indicates the reason the authorization failed.
   */
  networkDeclineCode?: string | null | undefined;
  /**
   * Possible values are `approved_by_network`, `declined_by_network`, `not_sent_to_network`, and `reversed_after_approval`. The value `reversed_after_approval` indicates the payment was [blocked by Stripe](https://stripe.com/docs/declines#blocked-payments) after bank authorization, and may temporarily appear as "pending" on a cardholder's statement.
   */
  networkStatus?: string | null | undefined;
  /**
   * An enumerated value providing a more detailed explanation of the outcome's `type`. Charges blocked by Radar's default block rule have the value `highest_risk_level`. Charges placed in review by Radar's default review rule have the value `elevated_risk_level`. Charges authorized, blocked, or placed in review by custom rules have the value `rule`. See [understanding declines](https://stripe.com/docs/declines) for more details.
   */
  reason?: string | null | undefined;
  /**
   * Stripe Radar's evaluation of the riskiness of the payment. Possible values for evaluated payments are `normal`, `elevated`, `highest`. For non-card payments, and card-based payments predating the public assignment of risk levels, this field will have the value `not_assessed`. In the event of an error in the evaluation, this field will have the value `unknown`. This field is only available with Radar.
   */
  riskLevel?: string | undefined;
  /**
   * Stripe Radar's evaluation of the riskiness of the payment. Possible values for evaluated payments are between 0 and 100. For non-card payments, card-based payments predating the public assignment of risk scores, or in the event of an error during evaluation, this field will not be present. This field is only available with Radar for Fraud Teams.
   */
  riskScore?: number | undefined;
  /**
   * The ID of the Radar rule that matched the payment, if applicable.
   */
  rule?: (string | Rule) | undefined;
  /**
   * A human-readable description of the outcome type and reason, designed for you (the recipient of the payment), not your customer.
   */
  sellerMessage?: string | null | undefined;
  /**
   * Possible values are `authorized`, `manual_review`, `issuer_declined`, `blocked`, and `invalid`. See [understanding declines](https://stripe.com/docs/declines) and [Radar reviews](https://stripe.com/docs/radar/reviews) for details.
   */
  type: string;
};

/**
 * @internal
 * ChargeOutcome without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ChargeOutcome = {
  advice_code?:
    | ("confirm_card_data" | "do_not_try_again" | "try_again_later")
    | null
    | undefined;
  network_advice_code?: string | null | undefined;
  network_decline_code?: string | null | undefined;
  network_status?: string | null | undefined;
  reason?: string | null | undefined;
  risk_level?: string | undefined;
  risk_score?: number | undefined;
  rule?: (string | External$Rule) | undefined;
  seller_message?: string | null | undefined;
  type: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ChargeOutcome
 */
const SchemaIn$ChargeOutcome: z.ZodType<
  ChargeOutcome, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    advice_code: z
      .enum(["confirm_card_data", "do_not_try_again", "try_again_later"])
      .nullable()
      .optional(),
    network_advice_code: z.string().nullable().optional(),
    network_decline_code: z.string().nullable().optional(),
    network_status: z.string().nullable().optional(),
    reason: z.string().nullable().optional(),
    risk_level: z.string().optional(),
    risk_score: z.number().int().optional(),
    rule: z.union([z.string(), Schemas$Rule.in]).optional(),
    seller_message: z.string().nullable().optional(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      advice_code: "adviceCode",
      network_advice_code: "networkAdviceCode",
      network_decline_code: "networkDeclineCode",
      network_status: "networkStatus",
      reason: "reason",
      risk_level: "riskLevel",
      risk_score: "riskScore",
      rule: "rule",
      seller_message: "sellerMessage",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ChargeOutcome
 */
const SchemaOut$ChargeOutcome: z.ZodType<
  External$ChargeOutcome, // output type of this zod object
  z.ZodTypeDef,
  ChargeOutcome // the object to be transformed
> = z
  .object({
    adviceCode: z
      .enum(["confirm_card_data", "do_not_try_again", "try_again_later"])
      .nullable()
      .optional(),
    networkAdviceCode: z.string().nullable().optional(),
    networkDeclineCode: z.string().nullable().optional(),
    networkStatus: z.string().nullable().optional(),
    reason: z.string().nullable().optional(),
    riskLevel: z.string().optional(),
    riskScore: z.number().int().optional(),
    rule: z.union([z.string(), Schemas$Rule.out]).optional(),
    sellerMessage: z.string().nullable().optional(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      adviceCode: "advice_code",
      networkAdviceCode: "network_advice_code",
      networkDeclineCode: "network_decline_code",
      networkStatus: "network_status",
      reason: "reason",
      riskLevel: "risk_level",
      riskScore: "risk_score",
      rule: "rule",
      sellerMessage: "seller_message",
      type: "type",
    });
  });

export const Schemas$ChargeOutcome = {
  in: SchemaIn$ChargeOutcome,
  out: SchemaOut$ChargeOutcome,
};
