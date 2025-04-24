import {
  External$PaymentMethodDetailsCardInstallmentsPlan,
  PaymentMethodDetailsCardInstallmentsPlan,
  Schemas$PaymentMethodDetailsCardInstallmentsPlan,
} from "./payment-method-details-card-installments-plan";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentFlowsInstallmentOptions = {
  enabled: boolean;
  plan?: PaymentMethodDetailsCardInstallmentsPlan | undefined;
};

/**
 * @internal
 * PaymentFlowsInstallmentOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentFlowsInstallmentOptions = {
  enabled: boolean;
  plan?: External$PaymentMethodDetailsCardInstallmentsPlan | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentFlowsInstallmentOptions
 */
const SchemaIn$PaymentFlowsInstallmentOptions: z.ZodType<
  PaymentFlowsInstallmentOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    plan: Schemas$PaymentMethodDetailsCardInstallmentsPlan.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      plan: "plan",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentFlowsInstallmentOptions
 */
const SchemaOut$PaymentFlowsInstallmentOptions: z.ZodType<
  External$PaymentFlowsInstallmentOptions, // output type of this zod object
  z.ZodTypeDef,
  PaymentFlowsInstallmentOptions // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    plan: Schemas$PaymentMethodDetailsCardInstallmentsPlan.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      plan: "plan",
    });
  });

export const Schemas$PaymentFlowsInstallmentOptions = {
  in: SchemaIn$PaymentFlowsInstallmentOptions,
  out: SchemaOut$PaymentFlowsInstallmentOptions,
};
