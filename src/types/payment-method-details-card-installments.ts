import {
  External$PaymentMethodDetailsCardInstallmentsPlan,
  PaymentMethodDetailsCardInstallmentsPlan,
  Schemas$PaymentMethodDetailsCardInstallmentsPlan,
} from "./payment-method-details-card-installments-plan";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsCardInstallments = {
  plan?: PaymentMethodDetailsCardInstallmentsPlan | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsCardInstallments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsCardInstallments = {
  plan?: External$PaymentMethodDetailsCardInstallmentsPlan | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsCardInstallments
 */
const SchemaIn$PaymentMethodDetailsCardInstallments: z.ZodType<
  PaymentMethodDetailsCardInstallments, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    plan: Schemas$PaymentMethodDetailsCardInstallmentsPlan.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      plan: "plan",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsCardInstallments
 */
const SchemaOut$PaymentMethodDetailsCardInstallments: z.ZodType<
  External$PaymentMethodDetailsCardInstallments, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsCardInstallments // the object to be transformed
> = z
  .object({
    plan: Schemas$PaymentMethodDetailsCardInstallmentsPlan.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      plan: "plan",
    });
  });

export const Schemas$PaymentMethodDetailsCardInstallments = {
  in: SchemaIn$PaymentMethodDetailsCardInstallments,
  out: SchemaOut$PaymentMethodDetailsCardInstallments,
};
