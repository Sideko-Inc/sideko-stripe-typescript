import {
  External$PaymentMethodDetailsCardInstallmentsPlan,
  PaymentMethodDetailsCardInstallmentsPlan,
  Schemas$PaymentMethodDetailsCardInstallmentsPlan,
} from "./payment-method-details-card-installments-plan";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodOptionsCardInstallments = {
  /**
   * Installment plans that may be selected for this PaymentIntent.
   */
  availablePlans?:
    | PaymentMethodDetailsCardInstallmentsPlan[]
    | null
    | undefined;
  /**
   * Whether Installments are enabled for this PaymentIntent.
   */
  enabled: boolean;
  plan?: PaymentMethodDetailsCardInstallmentsPlan | undefined;
};

/**
 * @internal
 * PaymentMethodOptionsCardInstallments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodOptionsCardInstallments = {
  available_plans?:
    | External$PaymentMethodDetailsCardInstallmentsPlan[]
    | null
    | undefined;
  enabled: boolean;
  plan?: External$PaymentMethodDetailsCardInstallmentsPlan | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodOptionsCardInstallments
 */
const SchemaIn$PaymentMethodOptionsCardInstallments: z.ZodType<
  PaymentMethodOptionsCardInstallments, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    available_plans: z
      .array(Schemas$PaymentMethodDetailsCardInstallmentsPlan.in)
      .nullable()
      .optional(),
    enabled: z.boolean(),
    plan: Schemas$PaymentMethodDetailsCardInstallmentsPlan.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      available_plans: "availablePlans",
      enabled: "enabled",
      plan: "plan",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodOptionsCardInstallments
 */
const SchemaOut$PaymentMethodOptionsCardInstallments: z.ZodType<
  External$PaymentMethodOptionsCardInstallments, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodOptionsCardInstallments // the object to be transformed
> = z
  .object({
    availablePlans: z
      .array(Schemas$PaymentMethodDetailsCardInstallmentsPlan.out)
      .nullable()
      .optional(),
    enabled: z.boolean(),
    plan: Schemas$PaymentMethodDetailsCardInstallmentsPlan.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      availablePlans: "available_plans",
      enabled: "enabled",
      plan: "plan",
    });
  });

export const Schemas$PaymentMethodOptionsCardInstallments = {
  in: SchemaIn$PaymentMethodOptionsCardInstallments,
  out: SchemaOut$PaymentMethodOptionsCardInstallments,
};
