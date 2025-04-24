import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentFlowsAmountDetailsClientResourceTip = {
  /**
   * Portion of the amount that corresponds to a tip.
   */
  amount?: number | undefined;
};

/**
 * @internal
 * PaymentFlowsAmountDetailsClientResourceTip without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentFlowsAmountDetailsClientResourceTip = {
  amount?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentFlowsAmountDetailsClientResourceTip
 */
const SchemaIn$PaymentFlowsAmountDetailsClientResourceTip: z.ZodType<
  PaymentFlowsAmountDetailsClientResourceTip, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentFlowsAmountDetailsClientResourceTip
 */
const SchemaOut$PaymentFlowsAmountDetailsClientResourceTip: z.ZodType<
  External$PaymentFlowsAmountDetailsClientResourceTip, // output type of this zod object
  z.ZodTypeDef,
  PaymentFlowsAmountDetailsClientResourceTip // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
    });
  });

export const Schemas$PaymentFlowsAmountDetailsClientResourceTip = {
  in: SchemaIn$PaymentFlowsAmountDetailsClientResourceTip,
  out: SchemaOut$PaymentFlowsAmountDetailsClientResourceTip,
};
