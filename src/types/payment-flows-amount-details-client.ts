import {
  External$PaymentFlowsAmountDetailsClientResourceTip,
  PaymentFlowsAmountDetailsClientResourceTip,
  Schemas$PaymentFlowsAmountDetailsClientResourceTip,
} from "./payment-flows-amount-details-client-resource-tip";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentFlowsAmountDetailsClient = {
  tip?: PaymentFlowsAmountDetailsClientResourceTip | undefined;
};

/**
 * @internal
 * PaymentFlowsAmountDetailsClient without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentFlowsAmountDetailsClient = {
  tip?: External$PaymentFlowsAmountDetailsClientResourceTip | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentFlowsAmountDetailsClient
 */
const SchemaIn$PaymentFlowsAmountDetailsClient: z.ZodType<
  PaymentFlowsAmountDetailsClient, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentFlowsAmountDetailsClient
 */
const SchemaOut$PaymentFlowsAmountDetailsClient: z.ZodType<
  External$PaymentFlowsAmountDetailsClient, // output type of this zod object
  z.ZodTypeDef,
  PaymentFlowsAmountDetailsClient // the object to be transformed
> = z
  .object({
    tip: Schemas$PaymentFlowsAmountDetailsClientResourceTip.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      tip: "tip",
    });
  });

export const Schemas$PaymentFlowsAmountDetailsClient = {
  in: SchemaIn$PaymentFlowsAmountDetailsClient,
  out: SchemaOut$PaymentFlowsAmountDetailsClient,
};
