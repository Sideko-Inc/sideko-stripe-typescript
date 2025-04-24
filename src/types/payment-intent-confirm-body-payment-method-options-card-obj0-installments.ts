import {
  External$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0InstallmentsPlanObj0,
  PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0InstallmentsPlanObj0,
  Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0InstallmentsPlanObj0,
} from "./payment-intent-confirm-body-payment-method-options-card-obj0-installments-plan-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0Installments
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0Installments = {
  enabled?: boolean | undefined;
  plan?:
    | (
        | PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0InstallmentsPlanObj0
        | string
      )
    | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0Installments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0Installments =
  {
    enabled?: boolean | undefined;
    plan?:
      | (
          | External$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0InstallmentsPlanObj0
          | string
        )
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0Installments
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0Installments: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0Installments, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean().optional(),
    plan: z
      .union([
        Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0InstallmentsPlanObj0.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0Installments
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0Installments: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0Installments, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0Installments // the object to be transformed
> = z
  .object({
    enabled: z.boolean().optional(),
    plan: z
      .union([
        Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0InstallmentsPlanObj0.out,
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

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0Installments =
  {
    in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0Installments,
    out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0Installments,
  };
