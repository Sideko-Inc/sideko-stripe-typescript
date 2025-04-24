import {
  External$PaymentIntentCreateBodyMandateDataObj0CustomerAcceptance,
  PaymentIntentCreateBodyMandateDataObj0CustomerAcceptance,
  Schemas$PaymentIntentCreateBodyMandateDataObj0CustomerAcceptance,
} from "./payment-intent-create-body-mandate-data-obj0-customer-acceptance";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyMandateDataObj0
 */
export type PaymentIntentCreateBodyMandateDataObj0 = {
  customerAcceptance: PaymentIntentCreateBodyMandateDataObj0CustomerAcceptance;
};

/**
 * @internal
 * PaymentIntentCreateBodyMandateDataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyMandateDataObj0 = {
  customer_acceptance: External$PaymentIntentCreateBodyMandateDataObj0CustomerAcceptance;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyMandateDataObj0
 */
const SchemaIn$PaymentIntentCreateBodyMandateDataObj0: z.ZodType<
  PaymentIntentCreateBodyMandateDataObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    customer_acceptance:
      Schemas$PaymentIntentCreateBodyMandateDataObj0CustomerAcceptance.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer_acceptance: "customerAcceptance",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyMandateDataObj0
 */
const SchemaOut$PaymentIntentCreateBodyMandateDataObj0: z.ZodType<
  External$PaymentIntentCreateBodyMandateDataObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyMandateDataObj0 // the object to be transformed
> = z
  .object({
    customerAcceptance:
      Schemas$PaymentIntentCreateBodyMandateDataObj0CustomerAcceptance.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customerAcceptance: "customer_acceptance",
    });
  });

export const Schemas$PaymentIntentCreateBodyMandateDataObj0 = {
  in: SchemaIn$PaymentIntentCreateBodyMandateDataObj0,
  out: SchemaOut$PaymentIntentCreateBodyMandateDataObj0,
};
