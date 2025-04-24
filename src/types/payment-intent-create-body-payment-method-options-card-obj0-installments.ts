import {
  External$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0InstallmentsPlanObj0,
  PaymentIntentCreateBodyPaymentMethodOptionsCardObj0InstallmentsPlanObj0,
  Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0InstallmentsPlanObj0,
} from "./payment-intent-create-body-payment-method-options-card-obj0-installments-plan-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsCardObj0Installments
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsCardObj0Installments = {
  enabled?: boolean | undefined;
  plan?:
    | (
        | PaymentIntentCreateBodyPaymentMethodOptionsCardObj0InstallmentsPlanObj0
        | string
      )
    | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsCardObj0Installments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0Installments =
  {
    enabled?: boolean | undefined;
    plan?:
      | (
          | External$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0InstallmentsPlanObj0
          | string
        )
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsCardObj0Installments
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0Installments: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsCardObj0Installments, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean().optional(),
    plan: z
      .union([
        Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0InstallmentsPlanObj0.in,
        z.string(),
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      plan: "plan",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0Installments
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0Installments: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0Installments, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsCardObj0Installments // the object to be transformed
> = z
  .object({
    enabled: z.boolean().optional(),
    plan: z
      .union([
        Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0InstallmentsPlanObj0.out,
        z.string(),
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      plan: "plan",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0Installments =
  {
    in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0Installments,
    out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0Installments,
  };
