import {
  External$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0InstallmentsPlanObj0,
  PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0InstallmentsPlanObj0,
  Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0InstallmentsPlanObj0,
} from "./payment-intent-update-body-payment-method-options-card-obj0-installments-plan-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0Installments
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0Installments = {
  enabled?: boolean | undefined;
  plan?:
    | (
        | PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0InstallmentsPlanObj0
        | string
      )
    | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0Installments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0Installments =
  {
    enabled?: boolean | undefined;
    plan?:
      | (
          | External$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0InstallmentsPlanObj0
          | string
        )
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0Installments
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0Installments: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0Installments, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean().optional(),
    plan: z
      .union([
        Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0InstallmentsPlanObj0.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0Installments
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0Installments: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0Installments, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0Installments // the object to be transformed
> = z
  .object({
    enabled: z.boolean().optional(),
    plan: z
      .union([
        Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0InstallmentsPlanObj0.out,
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

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0Installments =
  {
    in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0Installments,
    out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0Installments,
  };
