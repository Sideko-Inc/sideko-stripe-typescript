import { Charge, External$Charge, Schemas$Charge } from "./charge";
import {
  External$PaymentIntent,
  PaymentIntent,
  Schemas$PaymentIntent,
} from "./payment-intent";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * An early fraud warning indicates that the card issuer has notified us that a
 * charge may be fraudulent.
 *
 * Related guide: [Early fraud warnings](https://stripe.com/docs/disputes/measuring#early-fraud-warnings)
 */
export type RadarEarlyFraudWarning = {
  /**
   * An EFW is actionable if it has not received a dispute and has not been fully refunded. You may wish to proactively refund a charge that receives an EFW, in order to avoid receiving a dispute later.
   */
  actionable: boolean;
  /**
   * ID of the charge this early fraud warning is for, optionally expanded.
   */
  charge: string | Charge;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The type of fraud labelled by the issuer. One of `card_never_received`, `fraudulent_card_application`, `made_with_counterfeit_card`, `made_with_lost_card`, `made_with_stolen_card`, `misc`, `unauthorized_use_of_card`.
   */
  fraudType: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "radar.early_fraud_warning";
  /**
   * ID of the Payment Intent this early fraud warning is for, optionally expanded.
   */
  paymentIntent?: (string | PaymentIntent) | undefined;
};

/**
 * @internal
 * RadarEarlyFraudWarning without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RadarEarlyFraudWarning = {
  actionable: boolean;
  charge: string | External$Charge;
  created: number;
  fraud_type: string;
  id: string;
  livemode: boolean;
  object: "radar.early_fraud_warning";
  payment_intent?: (string | External$PaymentIntent) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RadarEarlyFraudWarning
 */
const SchemaIn$RadarEarlyFraudWarning: z.ZodType<
  RadarEarlyFraudWarning, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    actionable: z.boolean(),
    charge: z.union([z.string(), z.lazy(() => Schemas$Charge.in)]),
    created: z.number().int(),
    fraud_type: z.string(),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["radar.early_fraud_warning"]),
    payment_intent: z
      .union([z.string(), z.lazy(() => Schemas$PaymentIntent.in)])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      actionable: "actionable",
      charge: "charge",
      created: "created",
      fraud_type: "fraudType",
      id: "id",
      livemode: "livemode",
      object: "object",
      payment_intent: "paymentIntent",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RadarEarlyFraudWarning
 */
const SchemaOut$RadarEarlyFraudWarning: z.ZodType<
  External$RadarEarlyFraudWarning, // output type of this zod object
  z.ZodTypeDef,
  RadarEarlyFraudWarning // the object to be transformed
> = z
  .object({
    actionable: z.boolean(),
    charge: z.union([z.string(), z.lazy(() => Schemas$Charge.out)]),
    created: z.number().int(),
    fraudType: z.string(),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["radar.early_fraud_warning"]),
    paymentIntent: z
      .union([z.string(), z.lazy(() => Schemas$PaymentIntent.out)])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      actionable: "actionable",
      charge: "charge",
      created: "created",
      fraudType: "fraud_type",
      id: "id",
      livemode: "livemode",
      object: "object",
      paymentIntent: "payment_intent",
    });
  });

export const Schemas$RadarEarlyFraudWarning = {
  in: SchemaIn$RadarEarlyFraudWarning,
  out: SchemaOut$RadarEarlyFraudWarning,
};
