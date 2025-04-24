import {
  External$PaymentFlowsAmountDetailsClientResourceTip,
  PaymentFlowsAmountDetailsClientResourceTip,
  Schemas$PaymentFlowsAmountDetailsClientResourceTip,
} from "./payment-flows-amount-details-client-resource-tip";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentFlowsAmountDetails = {
  tip?: PaymentFlowsAmountDetailsClientResourceTip | undefined;
};

/**
 * @internal
 * PaymentFlowsAmountDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentFlowsAmountDetails = {
  tip?: External$PaymentFlowsAmountDetailsClientResourceTip | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentFlowsAmountDetails
 */
const SchemaIn$PaymentFlowsAmountDetails: z.ZodType<
  PaymentFlowsAmountDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    tip: Schemas$PaymentFlowsAmountDetailsClientResourceTip.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      tip: "tip",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentFlowsAmountDetails
 */
const SchemaOut$PaymentFlowsAmountDetails: z.ZodType<
  External$PaymentFlowsAmountDetails, // output type of this zod object
  z.ZodTypeDef,
  PaymentFlowsAmountDetails // the object to be transformed
> = z
  .object({
    tip: Schemas$PaymentFlowsAmountDetailsClientResourceTip.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      tip: "tip",
    });
  });

export const Schemas$PaymentFlowsAmountDetails = {
  in: SchemaIn$PaymentFlowsAmountDetails,
  out: SchemaOut$PaymentFlowsAmountDetails,
};
