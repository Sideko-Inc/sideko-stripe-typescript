import {
  External$PaymentIntentCreateBodyPaymentMethodDataKlarnaDob,
  PaymentIntentCreateBodyPaymentMethodDataKlarnaDob,
  Schemas$PaymentIntentCreateBodyPaymentMethodDataKlarnaDob,
} from "./payment-intent-create-body-payment-method-data-klarna-dob";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodDataKlarna
 */
export type PaymentIntentCreateBodyPaymentMethodDataKlarna = {
  dob?: PaymentIntentCreateBodyPaymentMethodDataKlarnaDob | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodDataKlarna without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodDataKlarna = {
  dob?: External$PaymentIntentCreateBodyPaymentMethodDataKlarnaDob | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodDataKlarna
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodDataKlarna: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodDataKlarna, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    dob: Schemas$PaymentIntentCreateBodyPaymentMethodDataKlarnaDob.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      dob: "dob",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodDataKlarna
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodDataKlarna: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodDataKlarna, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodDataKlarna // the object to be transformed
> = z
  .object({
    dob: Schemas$PaymentIntentCreateBodyPaymentMethodDataKlarnaDob.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      dob: "dob",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodDataKlarna = {
  in: SchemaIn$PaymentIntentCreateBodyPaymentMethodDataKlarna,
  out: SchemaOut$PaymentIntentCreateBodyPaymentMethodDataKlarna,
};
