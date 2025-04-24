import {
  External$PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptance,
  PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptance,
  Schemas$PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptance,
} from "./payment-intent-confirm-body-mandate-data-obj0-customer-acceptance";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyMandateDataObj0
 */
export type PaymentIntentConfirmBodyMandateDataObj0 = {
  customerAcceptance: PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptance;
};

/**
 * @internal
 * PaymentIntentConfirmBodyMandateDataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyMandateDataObj0 = {
  customer_acceptance: External$PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptance;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyMandateDataObj0
 */
const SchemaIn$PaymentIntentConfirmBodyMandateDataObj0: z.ZodType<
  PaymentIntentConfirmBodyMandateDataObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    customer_acceptance:
      Schemas$PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptance.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer_acceptance: "customerAcceptance",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyMandateDataObj0
 */
const SchemaOut$PaymentIntentConfirmBodyMandateDataObj0: z.ZodType<
  External$PaymentIntentConfirmBodyMandateDataObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyMandateDataObj0 // the object to be transformed
> = z
  .object({
    customerAcceptance:
      Schemas$PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptance.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customerAcceptance: "customer_acceptance",
    });
  });

export const Schemas$PaymentIntentConfirmBodyMandateDataObj0 = {
  in: SchemaIn$PaymentIntentConfirmBodyMandateDataObj0,
  out: SchemaOut$PaymentIntentConfirmBodyMandateDataObj0,
};
