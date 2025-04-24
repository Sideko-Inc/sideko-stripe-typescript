import {
  External$PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptance,
  PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptance,
  Schemas$PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptance,
} from "./payment-intent-confirm-body-mandate-data-obj2-customer-acceptance";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * This hash contains details about the Mandate to create
 */
export type PaymentIntentConfirmBodyMandateDataObj2 = {
  customerAcceptance: PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptance;
};

/**
 * @internal
 * PaymentIntentConfirmBodyMandateDataObj2 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyMandateDataObj2 = {
  customer_acceptance: External$PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptance;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyMandateDataObj2
 */
const SchemaIn$PaymentIntentConfirmBodyMandateDataObj2: z.ZodType<
  PaymentIntentConfirmBodyMandateDataObj2, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    customer_acceptance:
      Schemas$PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptance.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer_acceptance: "customerAcceptance",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyMandateDataObj2
 */
const SchemaOut$PaymentIntentConfirmBodyMandateDataObj2: z.ZodType<
  External$PaymentIntentConfirmBodyMandateDataObj2, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyMandateDataObj2 // the object to be transformed
> = z
  .object({
    customerAcceptance:
      Schemas$PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptance.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customerAcceptance: "customer_acceptance",
    });
  });

export const Schemas$PaymentIntentConfirmBodyMandateDataObj2 = {
  in: SchemaIn$PaymentIntentConfirmBodyMandateDataObj2,
  out: SchemaOut$PaymentIntentConfirmBodyMandateDataObj2,
};
